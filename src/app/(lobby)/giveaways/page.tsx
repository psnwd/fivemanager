import type { Metadata } from "next"
import { db } from "@/db"
import { asc } from "drizzle-orm"
import { giveaway } from "drizzle/schema"

import GiveawayCard from "@/components/cards/giveaway-card"

export const metadata: Metadata = {
  title: "FiveManager | Giveaways",
  description:
    "FiveM server management web application for managing fiveM server and players.",
}

async function page() {
  const giveawayData: any = await db.query.giveaway.findMany({
    orderBy: [asc(giveaway.id)],
    limit: 6,
  })
  console.log(giveawayData)

  return (
    <>
      <div className="text-2xl font-bold uppercase">GIVEAWAY</div>
      <div className="grid grid-flow-col grid-cols-1 grid-rows-3 gap-3 md:grid-cols-3 md:grid-rows-1">
        {giveawayData.map((giveaway: any) => (
          <GiveawayCard
            key={giveaway.id}
            id={giveaway.id}
            title={giveaway.title}
            content={giveaway.details}
            image="/images/home/news/gang_war_image2.jpg"
            totalKeys={100}
            remainingKey={50}
            endTime={1633058400000}
          />
        ))}
      </div>
      <div>
        <div className="my-3 text-2xl font-bold uppercase">
          Giveaway Conditions
        </div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </>
  )
}

export default page
