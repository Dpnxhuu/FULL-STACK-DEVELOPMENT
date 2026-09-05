import { NextRequest, NextResponse } from "next/server";

const authPages = new Set(['/home'])

export function proxy(req: NextRequest){
    const token = req.cookies.get("token")?.value
    const {pathname} = req.nextUrl;
    // console.log("token:",token)
    const authPageIs = authPages.has(pathname)
    const guestPage = pathname === "/" || pathname === "/signup";

    if(authPageIs && !token){
        return NextResponse.redirect(new URL("/", req.url))
    }

    if(guestPage && token){
        return NextResponse.redirect(new URL("/home", req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/',"/signup","/home"]
}   

