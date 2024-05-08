import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET!,
      });
      //   const except = ["/sign-in"];
      if (!token) {
        if (pathname != "/sign-in") {
          const url = new URL("/sign-in", req.url);
          return NextResponse.redirect(url);
        }
      }

      if (token && pathname == "/sign-in") {
        const url = new URL("/profile", req.url);
        return NextResponse.redirect(url);
      }
      return middleware(req, next);
    }
  };
}
