import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/layouts/sidebar-nav"
import { ThemeToggle } from "@/components/layouts/theme-toggle"
import { UserNav } from "@/components/layouts/user-nav"

export const metadata: Metadata = {
  title: "Forms",
  description: "FiveM server management web application",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/user",
  },
  {
    title: "Account",
    href: "/user/account",
  },
  {
    title: "Notifications",
    href: "/user/notifications",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                width={50}
                height={50}
                alt="Site logo"
                className="mx-5"
              />
            </Link>
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="hidden space-y-6 p-10 pb-16 md:block">
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
    </>
  )
}
