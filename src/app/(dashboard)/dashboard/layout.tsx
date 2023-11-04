import Image from "next/image"
import Link from "next/link"

import TeamSwitcher from "@/components/dashboard/team-switcher"
import { DashboardNav } from "@/components/layouts/dashboard-nav"
import SiteHeader from "@/components/layouts/site-header"
import { ThemeToggle } from "@/components/layouts/theme-toggle"
import { UserNav } from "@/components/layouts/user-nav"

export default function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <SiteHeader />
      {children}
    </div>
  )
}
