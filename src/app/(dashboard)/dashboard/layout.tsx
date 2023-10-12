import Link from "next/link"

import TeamSwitcher from "@/components/dashboard/team-switcher"
import { MainNav } from "@/components/layouts/main-nav"
import { ThemeToggle } from "@/components/layouts/theme-toggle"
import { UserNav } from "@/components/layouts/user-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Link href="/" className="mr-2">
              <div className="font-semibold">FiveManager</div>
            </Link>
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle />
              <UserNav />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}
