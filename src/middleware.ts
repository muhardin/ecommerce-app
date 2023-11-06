import { getToken } from "next-auth/jwt";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hostname = request.nextUrl.hostname;
  const origin = request.nextUrl.origin;
  const host = request.nextUrl.host;
  const locale = request.nextUrl.locale;

  const headersList = headers();
  const domain = headersList.get("host") || "";

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

  const includes = ["/web", "/web/sign-up", "/web/sign-in", "/sign-in"];

  if (!token && !includes.includes(pathname)) {
    if (domain == process.env.LANDING_PAGE) {
      return NextResponse.redirect(new URL("/web/sign-in", request.url));
    } else {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  if (token && pathname.startsWith("/web/myshop")) {
    if (data?.data.is_seller == 2) {
      const response = await fetch(
        `${process.env.SERVER_ENDPOINT}/api/register-payment`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token?.user.bearer}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.status == 200) {
        return NextResponse.redirect(
          new URL(`/web/payment/${data.id}`, request.url)
        );
      } else {
        return NextResponse.redirect(new URL(`/web/sign-up`, request.url));
      }
    }
  }

  if (token && pathname == "/sign-in") {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/myshop")) {
    if (data?.data.is_seller < 1) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    if (data?.data.is_seller == 2) {
      const response = await fetch(
        `${process.env.SERVER_ENDPOINT}/api/register-payment`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token?.user.bearer}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return NextResponse.redirect(
        new URL(`/web/payment/${data.id}`, request.url)
      );
      // return NextResponse.redirect(
      //   `${process.env.LANDING_PAGE}/web/payment/${data.id}`,
      //   { status: 301 }
      // );
    }
    const dataShop = await (
      await fetch(process.env.SERVER_ENDPOINT + "/api/shop/" + domain, {
        headers: {
          Authorization: `Bearer ${token?.user.bearer}`,
        },
      })
    ).json();
    if (dataShop.user_id != token?.user.id) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith("/supplier")) {
    if (data?.data.is_supplier < 1) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/web")) {
    if (domain != process.env.LANDING_PAGE) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    // console.log(domain);
    // console.log(process.env.LANDING_PAGE);
    // console.log(origin);
    // console.log(hostname);
    // console.log(pathname);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/profile/:path*",
    "/supplier/:path*",
    "/myshop/:path*",
    "/order",
    "/buyer/:path*",
    "/checkout",
    "/sign-in",
    "/web/:path*",
  ],
};
