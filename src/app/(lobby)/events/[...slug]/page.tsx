import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { db } from "@/db"
import { env } from "@/env.mjs"
import { eq } from "drizzle-orm"
import { events } from "drizzle/schema"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Event title",
  description: "Event description",
}

interface EventPageProps {
  params: { slug: string[] }
}

async function page({ params }: EventPageProps) {
  const eventId = Number(params.slug[1])

  if (isNaN(eventId)) {
    return notFound()
  }

  const event: any = await db.query.events.findFirst({
    where: eq(events.id, eventId),
  })

  if (!event) {
    return notFound()
  }

  return (
    <>
      <div className="my-2 text-2xl font-semibold">{event.title}</div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={event.images}
          width={640}
          height={360}
          className="rounded-lg"
          alt="event image"
        />
        <div className="container my-4 space-y-4 text-justify">
          {event.description}
        </div>
      </div>
    </>
  )
}

export default page
