import type { Metadata } from "next"
import { db } from "@/db"
import { asc } from "drizzle-orm"
import { events } from "drizzle/schema"

import EventCard from "@/components/cards/event-card"

export const metadata: Metadata = {
  title: "FiveManager | Events",
  description:
    "FiveM server management web application for managing fiveM server and players.",
  keywords: ["news", "fivem", "gta5", "fivem", "server", "manager", "panel"],
}

async function page() {
  const eventsData: any = await db.query.events.findMany({
    orderBy: [asc(events.id)],
    limit: 6,
  })

  return (
    <>
      <div className="text-2xl font-bold uppercase">Events & Activities</div>
      <div className="grid grid-flow-row grid-cols-1 grid-rows-6 gap-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
        {eventsData.map((event: any) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            content={event.description}
            image={event.images}
          />
        ))}
      </div>
    </>
  )
}

export default page
