"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { Session } from "@auth/core/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Button } from "../ui/button"
import { ThemeToggle } from "./theme-toggle"
import { UserNav } from "./user-nav"

interface MainNavProps {
  readonly session: Session | null
}

export async function MainNav({
  session,
  className,
  ...props
}: MainNavProps & React.HTMLProps<HTMLElement>) {
  const pathname = usePathname()
  console.log(session)
  return (
    <nav
      className={cn(
        "hidden w-full items-center justify-between md:flex",
        className
      )}
      {...props}
    >
      <div className="flex items-center space-x-4">
        <div className="font-semibold">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={50}
              height={50}
              alt="Site logo"
              className="mx-5"
            />
          </Link>
        </div>

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
      </div>

      {session ? (
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant={"outline"}>Dashboard</Button>
          </Link>
          <UserNav session={session} />
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Link href={"/login"}>
            <Button variant="secondary" size="sm">
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  )
}
