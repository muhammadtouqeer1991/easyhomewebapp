import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  const isAffiliateRoute = request.nextUrl.pathname.startsWith("/affiliate");

  // allow public affiliate login page
  const isLoginPage = request.nextUrl.pathname === "/affiliate";

  if (isAffiliateRoute && !isLoginPage) {
    if (!token) {
      return NextResponse.redirect(new URL("/affiliate", request.url));
    }
  }

  return NextResponse.next();
}

// routes jahan middleware chalega
export const config = {
  matcher: ["/affiliate/:path*"],
};
