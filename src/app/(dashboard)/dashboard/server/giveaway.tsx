import React from "react"

import { TabsContent } from "@/components/ui/tabs"
import AddGiveaway from "@/components/forms/add-giveaway"
import { GiveawayListTable } from "@/components/tables/giveaway-list-table"
import { getGiveaways } from "@/app/_actions/server"

async function Giveaway() {
  const data = await getGiveaways()

  return (
    <TabsContent value="giveaways">
      <AddGiveaway />
      <GiveawayListTable data={data} />
    </TabsContent>
  )
}

export default Giveaway
