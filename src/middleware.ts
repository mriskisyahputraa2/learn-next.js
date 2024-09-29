import { NextRequest, NextResponse } from "next/server";

export default function Middleware(request: NextRequest) {
  const isLogin = true;

  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/contact"],
};
