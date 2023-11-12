import type { Metadata } from "next"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Events from "./events"
import Giveaway from "./giveaway"
import News from "./news"

export const metadata: Metadata = {
  title: "Dashboard | Server",
  description: "Admin dashbord for managing fiveM server and players.",
}

function page() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Tabs defaultValue="news" className="space-y-4">
        <TabsList>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="giveaways">Giveaways</TabsTrigger>
        </TabsList>

        <News />
        <Events />
        <Giveaway />
      </Tabs>
    </div>
  )
}

export default page
