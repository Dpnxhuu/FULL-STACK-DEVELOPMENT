import { NextResponse } from "next/server";

export async function POST() {
    
    const response = NextResponse.json({message: "logout successfully"},{status: 201})
    response.cookies.delete("token");
    return response;
}