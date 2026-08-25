import { NextRequest, NextResponse } from 'next/server'
import { auth } from "@/auth" // ✅ NEW import

const AUTH_PAGES = new Set([
  "/",
  "/signup",
  "/signup/email",
  "/forgot-password",
])

export default auth(async function proxy(request: NextRequest) {
  const session = (request as any).auth;
  const nextAuthLoggedIn = !!session?.user;              // ✅ NextAuth se login
  const manualToken = request.cookies.get("token")?.value; // ✅ Manual JWT se login
  const isLoggedIn = nextAuthLoggedIn || !!manualToken;    // ✅ dono mein se koi ek ho toh logged in maano

  const { pathname, searchParams } = request.nextUrl;

  const isAuthPage = AUTH_PAGES.has(pathname);
  const isProtected = pathname === '/home' || pathname.startsWith("/home/");
  const isResetPage = pathname === "/forgot-password/reset";

  if (isResetPage) {
    const resetToken = searchParams.get("token");
    if (!resetToken) {
      return NextResponse.redirect(new URL("/forgot-password", request.url));
    }
  }

  if (isAuthPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  if (isProtected) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
});