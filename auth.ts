import NextAuth, { NextAuthOptions, DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import connectToDatabase from "./utils/db";
import User from "./models/User";
import { compareEncryption, encryption } from "./lib/encryptDecrypt";

// Extend the built-in session types
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // accessToken: string;
      name?: string;
      email?: string;
      image?: string;
      avatar?: string;
      avatarId?: string;
      jti?: string;
      role?: string;
      token?: string;
      verified?: false;
    } & DefaultSession["user"];
  }
}

// Extend the built-in token types
declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

// console.log(process.env.GOOGLE_ID);
// console.log(process.env.GOOGLE_SECRET);

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) {
          throw new Error("Please enter credentials!");
        }
        try {
          await connectToDatabase();
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("User not found!");
          }
          const isPasswordCorrect = compareEncryption(password, user.password);
          if (!isPasswordCorrect) {
            console.log("Password is incorrect!");
            throw new Error("Password is incorrect!");
          }
          const newUser = {
            id: user._id,
            name: user.name,
            email: user.email,
            // image: user.image,
            // avatar: user.avatar,
            // avatarId: user.avatarId,
            // jti: user.jti,
            // role: user.role,
            // token: user.token,
            // verified: user.verified,
          };
          // return { token: data.token, user: newUser } as any;
          return { user: newUser } as any;
        } catch (error: any) {
          const err = error?.response?.data?.message || error.message;
          throw new Error(err);
          // throw new Error(error.response.data.message);
        }
      },
    }),
    GoogleProvider({
      name: "Google",
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user, session, profile }) {
      if (account) {
        token.token = account.access_token;
      }
      // console.log("jwt_token", {
      //   ...token,
      // });
      if (account?.provider === "google") {
        // console.log({ profile });
        // console.log({ account });
        await connectToDatabase();
        let newUser = await User.findOne({ email: profile?.email });

        if (!newUser) {
          newUser = new User({
            name: profile?.name,
            email: profile?.email,
            password: encryption(
              (profile?.sub || account?.providerAccountId + name) +
                process.env.NEXTAUTH_SECRET
            ),
            role: "creator",
          });

          await newUser.save();
        }
        // console.log({ newUser });
        user.id = newUser._id as any;
        user.email = newUser.email as any;
        user.name = newUser.name as any;
        return {
          ...token,
          ...user,
          role: newUser.role,
        };
      }
      if (user) {
        return {
          ...user,
          ...token,
        };
      }

      return token;
    },
    async session({ session, token, user }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.token = token.accessToken as string;
      }
      // console.log(session);
      return { ...session, user: { ...token } };
    },

    async signIn({ account, profile, user }) {
      //   console.log("signIn", { account, profile, user });
      // console.log(account);
      // console.log({ profile });
      if (account?.provider === "google") {
        if (!profile?.email) {
          return false;
        }

        return true;
      }

      if (account?.provider === "credentials") {
        if (user.id) {
          return true;
        }
        return false;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      else if (url.startsWith("/")) return `${baseUrl}${url}`;
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/create",
    signOut: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// const handler = NextAuth(authOptions);
const handler = NextAuth(authOptions);
// export {}=NextAuth(authOptions);

export { handler as GET, handler as POST, handler as Auth };
// export { handler as GET, handler as POST };
