"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Session } from "@auth/core/types"

import { cn } from "@/lib/utils"

import { UserNav } from "./user-nav"

const navItems = [
  {
    label: "Overview",
    href: "/dashboard",
  },
  {
    label: "Server",
    href: "/dashboard/server",
  },
  {
    label: "Players",
    href: "/dashboard/players",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
  },
]

interface DashboardNavProps {
  readonly session: Session | null
}

export function DashboardNav({
  session,
  className,
  ...props
}: DashboardNavProps & React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
        >
          <div className="font-semibold">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                width={50}
                height={50}
                alt="Site logo"
              />
            </Link>
          </div>

          <div
            className={cn("hidden items-center space-x-4 md:flex", className)}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn({
                  "text-muted-foreground": pathname !== item.href,
                  "text-sm font-medium transition-colors hover:text-primary":
                    true,
                })}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <UserNav session={session} />
      </div>
    </div>
  )
}
