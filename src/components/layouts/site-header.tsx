import { getUserAuth } from "@/lib/auth/utils"

import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

async function SiteHeader() {
  const { session } = await getUserAuth()

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav session={session} />
        <MobileNav session={session} />
      </div>
    </div>
  )
}
// /session?.user?.image
export default SiteHeader
