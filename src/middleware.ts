import { getToken } from "next-auth/jwt";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { options } from "./app/api/auth/[...nextauth]/options";

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

  const includes = ["/web", "/web/sign-up", "/web/sign-in", "/sign-in"];

  if (!token && !includes.includes(pathname)) {
    if (process.env.LANDING_PAGE?.includes(domain)) {
      return NextResponse.redirect(new URL("/web/sign-in", request.url));
    } else {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  if (token && pathname.startsWith("/myshop")) {
    const data = await (
      await fetch(process.env.SERVER_ENDPOINT + "/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token?.user?.bearer}`,
        },
      })
    ).json();
    if (data?.data?.is_seller == 2) {
      const response = await fetch(
        `${process.env.SERVER_ENDPOINT}/api/register-payment/2`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token?.user?.bearer}`,
            "Content-Type": "application/json",
          },
        }
      );
      const dataSeller = await response.json();
      if (response.status == 200) {
        return NextResponse.redirect(
          new URL(`/web/payment/${dataSeller.id}`, request.url)
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
    const data = await (
      await fetch(process.env.SERVER_ENDPOINT + "/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token?.user?.bearer}`,
        },
      })
    ).json();

    if (data?.data?.is_seller < 1) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    if (data?.data?.is_seller == 2) {
      const response = await fetch(
        `${process.env.SERVER_ENDPOINT}/api/register-payment/1`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token?.user?.bearer}`,
            "Content-Type": "application/json",
          },
        }
      );
      const dataSeller = await response.json();
      return NextResponse.redirect(
        new URL(
          `${process.env.REFERRAL_PAGE}/web/payment/${dataSeller.id}`,
          request.url
        )
      );

      // return NextResponse.redirect(
      //   `${process.env.LANDING_PAGE}/web/payment/${data.id}`,
      //   { status: 301 }
      // );
    }

    /** Check is Domain Active or Not */
    const dataDomain = await (
      await fetch(process.env.SERVER_ENDPOINT + "/api/shop/" + domain, {
        headers: {
          Authorization: `Bearer ${token?.user?.bearer}`,
        },
      })
    ).json();

    if (!process.env.LANDING_PAGE?.includes(domain)) {
      if (!dataDomain.status) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
    /** End Of Check is Domain Active or Not */

    const dataShop = await (
      await fetch(
        process.env.SERVER_ENDPOINT + "/api/myshop-board/domain/" + domain,
        {
          headers: {
            Authorization: `Bearer ${token?.user?.bearer}`,
          },
        }
      )
    ).json();

    if (!dataShop.id) {
      if (!process.env.LANDING_PAGE?.includes(domain)) {
        // return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }
  if (request.nextUrl.pathname.startsWith("/supplier")) {
    const data = await (
      await fetch(process.env.SERVER_ENDPOINT + "/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token?.user?.bearer}`,
        },
      })
    ).json();
    if (data?.data?.is_supplier < 1) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/web")) {
    if (!process.env.LANDING_PAGE?.includes(domain)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/admin")) {
    const data = await (
      await fetch(process.env.SERVER_ENDPOINT + "/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token?.user?.bearer}`,
        },
      })
    ).json();

    if (data?.data.is_company < 1) {
      return NextResponse.redirect(new URL("/", request.url));
    }
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
    "/admin/:path*",
  ],
};
