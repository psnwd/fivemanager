import Image from "next/image"
import Link from "next/link"

import TeamSwitcher from "@/components/dashboard/team-switcher"
import { DashboardNav } from "@/components/layouts/dashboard-nav"
import { ThemeToggle } from "@/components/layouts/theme-toggle"
import { UserNav } from "@/components/layouts/user-nav"

export default function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Link href="/" className="mr-2">
            <div className="font-semibold">
              <Image src="/images/logo.svg" width={32} height={32} alt="" />
            </div>
          </Link>
          <TeamSwitcher />
          <DashboardNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
