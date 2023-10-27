import Image from "next/image"
import Link from "next/link"
import { getServerSession } from "next-auth"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/layouts/main-nav"
import { SiteFooter } from "@/components/layouts/site-footer"
import { ThemeToggle } from "@/components/layouts/theme-toggle"
import { UserNav } from "@/components/layouts/user-nav"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <>
      <div className="flex flex-col">
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
            <MainNav />
            <div className="ml-auto hidden items-center space-x-4 md:flex">
              {session ? (
                <Link href="/dashboard">
                  <Button variant={"outline"}>Dashboard</Button>
                </Link>
              ) : null}
              <ThemeToggle />
              <UserNav />
            </div>
          </div>
        </div>
        <section className="container flex flex-col gap-4 py-4 text-center lg:items-center lg:gap-8 lg:py-8 lg:pb-5">
          {children}
        </section>
        <SiteFooter />
      </div>
    </>
  )
}
