"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "hidden items-center space-x-4 md:flex lg:space-x-6",
        className
      )}
      {...props}
    >
      {siteConfig.navItems.map((item) => (
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
