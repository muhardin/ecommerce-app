import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = (await getToken({
    req: request as any,
    secret: process.env.NEXTAUTH_SECRET!,
  })) as { user: { email: string; role: string } } | null;
  // console.log(token);
  if (!token && pathname != "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  if (token && pathname == "/sign-in") {
    // console.log(pathname);
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/myshop")) {
    if (token?.user.role == "Guest") {
      return NextResponse.redirect(new URL("/dashboard/user", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/profile/:path*",
    "/order",
    "/buyer/:path*",
    "/checkout",
    "/sign-in",
    "/myshop/:path*",
  ],
};
