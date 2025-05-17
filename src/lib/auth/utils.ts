import { redirect } from "next/navigation"
import { auth } from "@/auth"
import type { Session } from "@auth/core/types"
import { getServerSession } from "next-auth"

export const getUserAuth = async (): Promise<{
  session: Session | null | undefined
}> => {
  const session = (await getServerSession(auth)) as Session | null
  return { session }
}

export const checkAuth = async () => {
  const { session } = await getUserAuth()
  if (!session) redirect("/api/auth/signin")
}

export const checkAuthStatus = async () => {
  const { session } = await getUserAuth()
  if (session) redirect("/")
}

export const getAuthStatus = async () => {
  const { session } = await getUserAuth()
  if (session?.user) return true
  return false
}
