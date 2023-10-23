import type { Metadata } from "next"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayerBannedListTable } from "@/components/tables/banned-list-table"
import { PlayerListTable } from "@/components/tables/player-list-table"
import { PlayerWaitingListTable } from "@/components/tables/whitelist-list-table"

export const metadata: Metadata = {
  title: "Dashboard | Players",
  description: "Admin dashbord for managing fiveM server and players.",
}

function page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Player List</h2>
        </div>
        <div>
          <Tabs defaultValue="players" className="space-y-4">
            <TabsList>
              <TabsTrigger value="players">Players</TabsTrigger>
              <TabsTrigger value="whitelist">Whitelist</TabsTrigger>
              <TabsTrigger value="timeout">Timeout</TabsTrigger>
              <TabsTrigger value="banned">Banned</TabsTrigger>
            </TabsList>
            <TabsContent value="players" className="space-y-4">
              <PlayerListTable />
            </TabsContent>
            <TabsContent value="whitelist" className="space-y-4">
              <PlayerWaitingListTable />
            </TabsContent>
            <TabsContent value="timeout" className="space-y-4">
              <PlayerListTable />
            </TabsContent>
            <TabsContent value="banned" className="space-y-4">
              <PlayerBannedListTable />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default page
