import { auth } from "./auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/home")

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.nextUrl))
  }
})

export const config = {
  matcher: ["/home"],
}