import type { Metadata } from "next"
import { db } from "@/db"
import { asc } from "drizzle-orm"
import { news } from "drizzle/schema"

import NewsCard from "@/components/cards/news-card"

export const metadata: Metadata = {
  title: "FiveManager | News",
  description:
    "FiveM server management web application for managing fiveM server and players.",
}

async function page() {
  const newsData: any = await db.query.news.findMany({
    orderBy: [asc(news.id)],
    limit: 6,
  })

  return (
    <>
      <div className="text-2xl font-bold uppercase">Latest News</div>
      <div className="grid grid-flow-row grid-cols-1 grid-rows-6 gap-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
        {newsData.map((news: any) => (
          <NewsCard
            key={news.id}
            id={news.id}
            title={news.title}
            details={news.description}
            image={news.images}
          />
        ))}
      </div>
    </>
  )
}

export default page
