import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/app/api/auth/[...nextauth]/options"

export const getUserAuth = async () => {
  const session = await getServerSession(authOptions)
  return { session }
}

export const checkAuth = async () => {
  const { session } = await getUserAuth()
  if (!session) redirect("/api/auth/signin")
}
