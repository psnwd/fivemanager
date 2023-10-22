"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Giveaways",
    href: "/giveaways",
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "About",
    href: "/about",
  },
]

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn({
            "text-muted-foreground": pathname !== item.href,
            "text-sm font-medium transition-colors hover:text-primary": true,
          })}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
