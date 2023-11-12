import { getUserAuth } from "@/lib/auth/utils"
import { MainNav } from "@/components/layouts/main-nav"
import { MobileNav } from "@/components/layouts/mobile-nav"
import { SiteFooter } from "@/components/layouts/site-footer"

export default async function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const { session } = await getUserAuth()

  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav session={session} />
          <MobileNav session={session} />
        </div>
      </div>
      <section className="container flex flex-col gap-4 py-4 lg:gap-8 lg:py-8 lg:pb-5">
        {children}
      </section>
      <SiteFooter />
    </div>
  )
}
