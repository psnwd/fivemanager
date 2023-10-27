import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { db } from "@/db"
import { eq } from "drizzle-orm"
import { giveaway } from "drizzle/schema"

import GiveawayPageCard from "@/components/cards/giveaway-page-card"

export const metadata: Metadata = {
  title: "Giveaway title",
  description: "Giveaway description",
}

interface GiveawayPageProps {
  params: { slug: string[] }
}

async function page({ params }: GiveawayPageProps) {
  const giveawayId = Number(params.slug[1])

  if (Number.isNaN(giveawayId)) {
    return notFound()
  }

  const giveawayData = await db.query.giveaway.findFirst({
    where: eq(giveaway.id, giveawayId),
  })

  if (!giveawayData) {
    return notFound()
  }

  return (
    <>
      <Image
        priority
        src="/images/home/news/gang_war_image2.jpg"
        width={700}
        height={700}
        alt="giveaway image"
        className="rounded-xl"
      />

      <GiveawayPageCard
        title={giveawayData.name}
        details={giveawayData.description}
        endTime={giveawayData.endTime}
        totalKeys={giveawayData.totalKeys}
        remainingKey={giveawayData.remainingKeys}
      />

      <div className="text-xl font-bold">Giveaway Details</div>
      <div className="container space-y-4 text-justify">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          corporis alias? Alias nobis iure quisquam animi, consectetur
          consequuntur voluptate deleniti perferendis rem adipisci, deserunt
          quaerat laboriosam doloribus nulla. Praesentium, dolor. Facere maiores
          qui vero minima officiis excepturi necessitatibus. Est tempora eum,
          illo autem sit rem. Totam ea voluptas aliquam natus libero neque
          pariatur beatae nostrum perspiciatis illo? Iste, odio dolorem.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error a cum
          ad culpa dolore illo tempore odio perspiciatis! Dolores deserunt
          aliquid voluptas voluptatum reiciendis numquam quas quidem culpa
          excepturi ipsa. Eligendi nostrum itaque dolore esse assumenda,
          incidunt nulla animi aut ipsam quaerat! Recusandae sunt nulla rem
          repellat, unde saepe laudantium doloribus ullam est voluptatum? Id
          numquam nesciunt provident vitae minima?
        </div>
      </div>
    </>
  )
}

export default page
