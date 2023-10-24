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
  params: { slug: string[] }
}

async function page({ params }: NewsPageProps) {
  const newsId = Number(params.slug[1])

  if (isNaN(newsId)) {
    return notFound()
  }

  // TODO: uncomment when db is ready
  // const news = await db.query.news.findFirst({
  //   where: eq(news.id, eventId),
  // })
  // if (!news) {
  //   return notFound()
  // }

  return (
    <>
      <div>page</div>
    </>
  )
}

export default page
