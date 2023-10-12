import type { Metadata } from "next"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Giveaway from "./giveaway"

export const metadata: Metadata = {
  title: "Dashboard | Server",
  description: "Admin dashbord for managing fiveM server and players.",
}

function page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Tabs defaultValue="giveaways" className="space-y-4">
          <TabsList>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="giveaways">Giveaways</TabsTrigger>
          </TabsList>
          <Giveaway />
        </Tabs>
      </div>
    </>
  )
}

export default page
