export { auth as middleware } from "@/auth"

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

// import type { NextRequest } from "next/server"
// import { auth } from "@/auth"
// import NextAuth from "next-auth"

// const { authjs } = NextAuth(auth)

// export default authjs(async function middleware(req: NextRequest) {
//   // Your custom middleware logic goes here
// })
