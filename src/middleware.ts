import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  if (path === "/") {
    return NextResponse.next()
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // NOTE: Still in test stage
  // if (!session && path === "/dashboard") {
  //   return NextResponse.redirect(new URL("/signin", req.url))
  // } else if (session && path === "/signin") {
  //   return NextResponse.redirect(new URL("/dashboard", req.url))
  // }

  return NextResponse.next()
}
