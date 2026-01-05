import { NextResponse } from "next/server";

export function proxy(request) {
  const pathname = request.nextUrl.pathname;

  const token = request.cookies.get("token")?.value;
  const mantis_admin = request.cookies.get("mantis_admin")?.value;

  // Admin already logged in → block login page
  if (
    pathname === "/mantis-login" &&
    token &&
    mantis_admin === "true"
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/mc-admin";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/mantis-login"],
};
