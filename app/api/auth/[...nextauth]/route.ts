import { GET, POST } from "../../../../auth";

// export const { handler as GET, POST };
export { GET, POST };
// import NextAuth, { NextAuthOptions, DefaultSession } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";

// // Extend the built-in session types
// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     user: {
//       id: string;
//       accessToken: string;
//     } & DefaultSession["user"];
//   }
// }

// // Extend the built-in token types
// declare module "next-auth/jwt" {
//   interface JWT {
//     accessToken?: string;
//   }
// }

// console.log(process.env.GOOGLE_ID);
// console.log(process.env.GOOGLE_SECRET);

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       id: "credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {},
//       async authorize(credentials) {
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };

//         if (!email || !password) {
//           throw new Error("Please enter credentials!");
//         }
//         try {
//           const response = await axios.post(
//             "http://127.0.0.1:8080/api/v1/auth/login",
//             {
//               email: email,
//               password: password,
//             }
//           );
//           const data = await response.data;
//           return { token: data.token, ...data.user } as any;
//         } catch (error: any) {
//           throw new Error(error.response.data.message);
//         }
//       },
//     }),
//     GoogleProvider({
//       name: "Google",
//       clientId: process.env.GOOGLE_ID!,
//       clientSecret: process.env.GOOGLE_SECRET!,
//       // async profile(profile, tokens) {
//       //   const { accessToken } = tokens;
//       //   // const response = await axios.post(
//       //   //   "http://127.0.0.1:8080/api/v1/auth/google",
//       //   //   {
//       //   //     googleToken: accessToken,
//       //   //   }
//       //   // );
//       //   // const data = await response.data;
//       //   // console.log(data);
//       //   console.log({ accessToken });
//       //   return {
//       //     id: profile.sub,
//       //     name: profile.name,
//       //     email: profile.email,
//       //     image: profile.picture,
//       //     // accessToken: data.token,
//       //   };
//       // },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, user, session, profile }) {
//       if (account) {
//         token.token = account.access_token;
//       }
//       // console.log("jwt_token", {
//       //   ...token,
//       // });
//       if (account?.provider === "google") {
//         const googleToken = account.id_token;
//         const response = await axios.post(
//           "http://127.0.0.1:8080/api/v1/auth/google",
//           {
//             googleToken: googleToken,
//           }
//         );
//         const data = await response.data;
//         console.log(data);
//         const user1 = { token: data.token, ...data.user };
//         return {
//           ...token,
//           ...user1,
//         };
//       }
//       if (user) {
//         return {
//           ...token,
//           ...user,
//         };
//       }

//       return token;
//     },
//     async session({ session, token, user }) {
//       if (session.user) {
//         session.user.id = token.sub!;
//         session.user.accessToken = token.accessToken as string;
//       }
//       // console.log("session=>>>>>>>>>>>>>>");
//       // console.log("token", token);
//       // console.log({ session });
//       // console.log({ user });

//       // console.log("=>>>>>>>session");

//       // return { ...session, ...token, ...user };
//       return { ...session, user: { ...token } };
//     },

//     async signIn({ account, profile, user }) {
//       // console.log("=>>>>>>>>");
//       // console.log({ profile });
//       // console.log({ account });
//       // console.log({ user });
//       // console.log("=>>>>>>>>>>>");
//       if (account?.provider === "google") {
//         if (!profile?.email) {
//           return false;
//         }

//         return true;
//       }

//       if (account?.provider === "credentials") {
//         if (user.id) {
//           return true;
//         }
//         return false;
//       }
//       return false;
//     },
//   },
//   pages: {
//     signIn: "/auth/login",
//     newUser: "/pages/protected/dashboard",
//     // signOut: "/",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
