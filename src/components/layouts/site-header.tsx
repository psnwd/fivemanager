import Image from "next/image"
import Link from "next/link"

import { getUserAuth } from "@/lib/auth/utils"

import { Button } from "../ui/button"
import { MainNav } from "./main-nav"
import { ThemeToggle } from "./theme-toggle"
import { UserNav } from "./user-nav"

async function SiteHeader() {
  const { session } = await getUserAuth()

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/">
          <div className="font-semibold">
            <Image
              src="/images/logo.svg"
              width={50}
              height={50}
              alt="Site logo"
              className="mx-5"
            />
          </div>
        </Link>
        <MainNav />
        <div className="ml-auto hidden items-center space-x-4 md:flex">
          {session ? (
            <Link href="/dashboard">
              <Button variant={"outline"}>Dashboard</Button>
            </Link>
          ) : null}
          <ThemeToggle />
          <UserNav session={session} />
        </div>
      </div>
    </div>
  )
}
// /session?.user?.image
export default SiteHeader
