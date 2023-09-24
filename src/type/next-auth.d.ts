import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string | null;
    bearer: string | null;
  }
  interface Session {
    username: string | null;
    bearer: string | null;
  }
}
