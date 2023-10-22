import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { db } from "@/db"
import { news } from "@/db/schema/news"
import { env } from "@/env.mjs"
import { eq } from "drizzle-orm"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "News title",
  description: "News description",
}

interface NewsPageProps {
  params: {
    eventId: string
  }
}

async function page({ params }: NewsPageProps) {
  const eventId = Number(params.eventId)

  // const event = await db.query.events.findFirst({
  //   where: eq(news.id, eventId),
  // })

  // if (!event) {
  //   return notFound()
  // }

  return (
    <>
      <div>page</div>
    </>
  )
}

export default page
