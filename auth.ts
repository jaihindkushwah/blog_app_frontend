import NextAuth, { NextAuthOptions, DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

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
          const response = await axios.post(
            "http://127.0.0.1:8080/api/v1/auth/login",
            {
              email: email,
              password: password,
            }
          );
          const data = await response.data;
          console.log(data);
          return { token: data.token, ...data.user } as any;
        } catch (error: any) {
          throw new Error(error.response.data.message);
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
        const googleToken = account.id_token;
        const response = await axios.post(
          "http://127.0.0.1:8080/api/v1/auth/google",
          {
            googleToken: googleToken,
          }
        );
        const data = await response.data;
        console.log(data);
        const user1 = { token: data.token, ...data.user };
        return {
          ...token,
          ...user1,
        };
      }
      if (user) {
        return {
          ...token,
          ...user,
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
      console.log(account);
      console.log({ profile });
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
    signIn: "/auth/login",
    newUser: "/pages/protected/dashboard",
    signOut: "/auth/login/",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// const handler = NextAuth(authOptions);
const handler = NextAuth(authOptions);
// export {}=NextAuth(authOptions);

export { handler as GET, handler as POST, handler as Auth };
// export { handler as GET, handler as POST };
