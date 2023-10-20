import React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { db } from "@/db"
import { env } from "@/env.mjs"
import { eq } from "drizzle-orm"
import { events } from "drizzle/schema"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Store",
  description: "Store description",
}

interface EventPageProps {
  params: {
    eventId: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

async function page({ params, searchParams }: EventPageProps) {
  const eventId = Number(params.eventId)

  const event = await db.query.events.findFirst({
    where: eq(events.id, eventId),
  })

  return (
    <>
      <div>page</div>
    </>
  )
}

export default page
