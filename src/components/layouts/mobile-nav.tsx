"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Session } from "@auth/core/types"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ThemeToggle } from "./theme-toggle"
import { UserNav } from "./user-nav"

interface MobileNavProps {
  readonly session: Session | null
}

export function MobileNav({
  session,
  className,
  ...props
}: MobileNavProps & React.HTMLProps<HTMLElement>) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between space-x-4 md:hidden lg:space-x-6",
        className
      )}
      {...props}
    >
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          >
            <Image
              src="/images/logo.svg"
              width={50}
              height={50}
              alt="Site logo"
              className=""
            />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {session ? (
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant={"outline"}>Dashboard</Button>
          </Link>
          <ThemeToggle />
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
