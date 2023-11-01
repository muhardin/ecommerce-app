import { getToken } from "next-auth/jwt";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = (await getToken({
    req: request as any,
    secret: process.env.NEXTAUTH_SECRET!,
  })) as {
    user: { email: string; role: string; bearer: string; id: number };
  } | null;
  const data = await (
    await fetch(process.env.SERVER_ENDPOINT + "/api/user/profile", {
      headers: {
        Authorization: `Bearer ${token?.user.bearer}`,
      },
    })
  ).json();

  if (!token && pathname != "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (token && pathname == "/sign-in") {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/myshop")) {
    if (data?.data.is_seller < 1) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    const headersList = headers();
    const domain = headersList.get("host") || "";
    const dataShop = await (
      await fetch(process.env.SERVER_ENDPOINT + "/api/shop/" + domain, {
        headers: {
          Authorization: `Bearer ${token?.user.bearer}`,
        },
      })
    ).json();
    // console.log(dataShop.user_id);
    // console.log(dataShop);
    // console.log(token?.user.id);
    if (dataShop.user_id != token?.user.id) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith("/supplier")) {
    if (data?.data.is_supplier < 1) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/profile/:path*",
    "/supplier/:path*",
    "/order",
    "/buyer/:path*",
    "/checkout",
    "/sign-in",
    "/myshop/:path*",
  ],
};
