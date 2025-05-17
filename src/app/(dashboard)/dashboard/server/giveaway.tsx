import React from "react"

import { getGiveaways } from "@/lib/actions/server"
import { TabsContent } from "@/components/ui/tabs"
import AddGiveaway from "@/components/forms/add-giveaway"
import { GiveawayListTable } from "@/components/tables/giveaway-list-table"

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
