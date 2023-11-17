import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
          email: credentials?.email,
          password: credentials?.password,
        });
        const res = await fetch(`${process.env.SERVER_ENDPOINT}/api/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: raw,
        });
        // console.log(raw);
        // console.log(process.env.SERVER_ENDPOINT);
        const userD = await res.json();
        // console.log(userD);

        if (res.ok) {
          const user = userD.user;
          const auth = userD.authorization;
          // console.log(user);
          return {
            id: `${user.id}`,
            name: user?.firstname,
            username: `${user?.username}`,
            email: user?.email,
            bearer: auth?.token,
            image: user?.photo_url,
            role: user?.role,
            is_seller: user?.is_seller,
            is_company: user?.is_company,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(user);
      if (user) {
        return { ...token, user: user };
      }
      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user);
      return true;
    },

    async redirect({ url, baseUrl }) {
      // console.log(url);
      // console.log(baseUrl);
      return baseUrl;
    },
    async session({ session, token, user, bearer }: any) {
      // console.log(user);
      // console.log(token);
      // console.log(session);
      // console.log(token.user?.bearer);
      // console.log(token.user?.role);
      session.bearer = token?.user?.bearer;
      session.role = token?.user?.role;
      session.user_id = token?.user?.id;
      session.is_seller = token?.user?.is_seller;
      session.is_company = token?.user?.is_company;
      return session;
      // return {
      //   ...session,
      //   user: {
      //     ...session.user,
      //   },
      // };
    },
  },
  session: {
    // Use a custom session expiration callback
    maxAge: 1 * 60 * 60, // 1 hour in seconds
  },
};
