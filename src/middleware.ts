import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

// This function can be marked `async` if using `await` inside
export function MainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

// See "Matching Paths" below to learn more
export default withAuth(MainMiddleware, ["/profile", "/order", "/sign-in"]);
