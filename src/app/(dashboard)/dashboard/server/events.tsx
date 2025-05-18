import { getEvents } from "@/lib/actions/server"
import { TabsContent } from "@/components/ui/tabs"
import AddEvent from "@/components/forms/add-event"
import { EventListTable } from "@/components/tables/event-list-table"

async function Events() {
  const data = await getEvents()

  return (
    <TabsContent value="events">
      <AddEvent />
      <EventListTable data={data} />
    </TabsContent>
  )
}

export default Events
