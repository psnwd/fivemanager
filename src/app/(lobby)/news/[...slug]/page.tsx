import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { db } from "@/db"
import { eq } from "drizzle-orm"
import { news } from "drizzle/schema"

export const metadata: Metadata = {
  title: "News title",
  description: "News description",
}

interface NewsPageProps {
  params: { slug: string[] }
}

async function page({ params }: NewsPageProps) {
  const newsId = Number(params.slug[1])

  if (Number.isNaN(newsId)) {
    return notFound()
  }

  const newsData = await db.query.news.findFirst({
    where: eq(news.id, newsId),
  })

  if (!newsData) {
    return notFound()
  }

  return (
    <>
      <div>page</div>
    </>
  )
}

export default page
