import { SiteFooter } from "@/components/layouts/site-footer"
import SiteHeader from "@/components/layouts/site-header"

export default function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <SiteHeader />
      <section className="container flex flex-col gap-4 py-4 text-center lg:items-center lg:gap-8 lg:py-8 lg:pb-5">
        {children}
      </section>
      <SiteFooter />
    </div>
  )
}
