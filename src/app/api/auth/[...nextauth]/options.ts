import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import toast from "react-hot-toast";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        // console.log(credentials?.email, credentials?.password);
        // const { email, password } = credentials as any;
        const raw = JSON.stringify({
          username: credentials?.email,
          password: credentials?.password,
        });

        const res = await fetch("https://nimda.blazingwa.com/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: raw,
        });
        const userD = await res.json();

        if (res.ok) {
          const user = userD.data.user;
          // console.log(user);
          return {
            id: `${user.id}`,
            name: user?.firstname,
            username: `${user?.username}`,
            email: user?.email,
            bearer: user?.access_token,
            image: user?.photo_url,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // console.log(session);
      // console.log(token);
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
    },
  },
};
