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
  params: {
    eventId: string
  }
}

async function page({ params }: EventPageProps) {
  const eventId = Number(params.eventId)

  // const event = await db.query.events.findFirst({
  //   where: eq(events.id, eventId),
  // })

  // if (!event) {
  //   return notFound()
  // }

  return (
    <>
      <div className="my-2 text-2xl font-semibold">Illegal Street Race</div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src="/images/events/1.webp"
          width={640}
          height={360}
          className="rounded-lg"
          alt="event image"
        />
        <div className="my-4 space-y-4">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada, purus sed posuere iaculis, justo odio blandit turpis, vel
            fringilla mauris sapien et purus. Vivamus bibendum ligula ut quam
            malesuada, ac laoreet tellus volutpat. Sed elementum at purus vel
            varius. Quisque in quam id ex euismod iaculis. Sed vel ornare
            lectus. Aenean eget dolor sem. Nulla ultricies, neque et lacinia
            euismod, sapien arcu venenatis purus, in tincidunt tortor mi eget
            justo. Fusce viverra, libero nec sodales fermentum, purus nisi
            ullamcorper lectus, nec sollicitudin nisl justo eget turpis. Donec
            vehicula volutpat urna id posuere. Sed posuere, turpis non posuere
            malesuada, libero orci condimentum justo, at faucibus libero libero
            non nulla. Nulla interdum, ligula nec cursus finibus, turpis sapien
            dignissim dolor, id auctor urna odio vel dui. Cras dictum justo eu
            mi tincidunt, vel auctor massa bibendum.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada, purus sed posuere iaculis, justo odio blandit turpis, vel
            fringilla mauris sapien et purus. Vivamus bibendum ligula ut quam
            malesuada, ac laoreet tellus volutpat. Sed elementum at purus vel
            varius. Quisque in quam id ex euismod iaculis. Sed vel ornare
            lectus. Aenean eget dolor sem. Nulla ultricies, neque et lacinia
            euismod, sapien arcu venenatis purus, in tincidunt tortor mi eget
            justo. Fusce viverra, libero nec sodales fermentum, purus nisi
            ullamcorper lectus, nec sollicitudin nisl justo eget turpis. Donec
            vehicula volutpat urna id posuere. Sed posuere, turpis non posuere
            malesuada, libero orci condimentum justo, at faucibus libero libero
            non nulla. Nulla interdum, ligula nec cursus finibus, turpis sapien
            dignissim dolor, id auctor urna odio vel dui. Cras dictum justo eu
            mi tincidunt, vel auctor massa bibendum.
          </div>
        </div>
      </div>
    </>
  )
}

export default page
