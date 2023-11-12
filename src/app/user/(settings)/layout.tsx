import type { Metadata } from "next"

import { getUserAuth } from "@/lib/auth/utils"
import { Separator } from "@/components/ui/separator"
import { MainNav } from "@/components/layouts/main-nav"
import { MobileNav } from "@/components/layouts/mobile-nav"
import { SidebarNav } from "@/components/layouts/sidebar-nav"

export const metadata: Metadata = {
  title: "FiveManager | User",
  description: "FiveM server management web application",
}

const sidebarNavItems = [
  {
    title: "Account",
    href: "/user/account",
  },
  {
    title: "Notifications",
    href: "/user/notifications",
  },
  {
    title: "Metamask",
    href: "/user/metamask",
  },
]

interface SettingsLayoutProps {
  readonly children: React.ReactNode
}

export default async function SettingsLayout({
  children,
}: SettingsLayoutProps) {
  const { session } = await getUserAuth()

  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav session={session} />
          <MobileNav session={session} />
        </div>
      </div>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </div>
  )
}
