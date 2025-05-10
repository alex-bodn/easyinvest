import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url)); 
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    
    await jwtVerify(token, secret); 
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/", request.url)); 
  }
}

export const config = {
  matcher: ["/dashboard", "/profile", "/admin/:path*"], 
};
