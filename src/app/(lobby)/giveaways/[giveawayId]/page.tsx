import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { db } from "@/db"
import { env } from "@/env.mjs"
import { eq } from "drizzle-orm"
import { giveaway } from "drizzle/schema"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Giveaway title",
  description: "Giveaway description",
}

interface GiveawayPageProps {
  params: {
    giveawayId: string
  }
}

async function page({ params }: GiveawayPageProps) {
  const eventId = Number(params.giveawayId)

  const event = await db.query.events.findFirst({
    where: eq(giveaway.id, eventId),
  })

  if (!event) {
    return notFound()
  }

  return (
    <>
      <div>page</div>
    </>
  )
}

export default page
