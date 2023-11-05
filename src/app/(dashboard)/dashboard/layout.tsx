import { getUserAuth } from "@/lib/auth/utils"
import { DashboardNav } from "@/components/layouts/dashboard-nav"
import { SiteFooter } from "@/components/layouts/site-footer"

export default async function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const { session } = await getUserAuth()

  return (
    <>
      <DashboardNav session={session} />
      {children}
      <SiteFooter />
    </>
  )
}
