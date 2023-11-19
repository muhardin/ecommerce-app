import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string | null;
    bearer: string | null;
  }
  interface Session {
    username: string | null;
    bearer: string | null;
    is_seller: string | null;
    is_company: string | null;
    is_supplier: number | null;
  }
}
