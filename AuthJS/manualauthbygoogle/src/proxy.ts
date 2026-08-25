import { NextRequest, NextResponse } from 'next/server'

export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value
  const { pathname } = req.nextUrl //nextUrl mean current url

  // no token, trying to access protected /home -> kick to login
  if (!token && pathname === "/home") {
    return NextResponse.redirect(new URL("/", req.url))
  }

  // has token, sitting on login page -> send to home
  if (token && pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/home"],
}