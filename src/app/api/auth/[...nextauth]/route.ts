import { type DefaultSession } from "next-auth"
import NextAuth from "next-auth/next"

import { authOptions } from "./options"

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string
      role: "user" | "admin" | "super" | "owner"
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
