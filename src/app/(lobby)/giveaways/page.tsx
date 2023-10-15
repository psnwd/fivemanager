import type { Metadata } from "next"

import GiveawayCard from "@/components/cards/giveaway-card"

export const metadata: Metadata = {
  title: "FiveManager | Giveaways",
  description:
    "FiveM server management web application for managing fiveM server and players.",
}

const giveaways = [
  {
    id: 1,
    title: "GTA RP Starter Pack Giveaway",
    images: [
      "gta_rp_starter_pack_image1.jpg",
      "gta_rp_starter_pack_image2.jpg",
    ],
    details:
      "Enter to win a GTA RP Starter Pack, including in-game cash, a custom vehicle, and exclusive RP items! Get ready to immerse yourself in the world of Los Santos and start your roleplaying adventure.",
  },
  {
    id: 2,
    title: "GTA RP Character Makeover Giveaway",
    images: [
      "gta_rp_character_makeover_image1.jpg",
      "gta_rp_character_makeover_image2.jpg",
    ],
    details:
      "Is your character in need of a makeover? Enter our giveaway for a chance to win a GTA RP Character Makeover, complete with a new look, outfits, and accessories to stand out in the city.",
  },
  {
    id: 3,
    title: "GTA RP Property Ownership Giveaway",
    images: [
      "gta_rp_property_ownership_image1.jpg",
      "gta_rp_property_ownership_image2.jpg",
    ],
    details:
      "Dream of owning property in Los Santos? Participate in our giveaway for a chance to win property ownership in the city, including a luxurious apartment or a high-end business location.",
  },
]

function page() {
  return (
    <>
      <div className="text-2xl font-bold uppercase">GIVEAWAY</div>
      <div className="grid grid-flow-col grid-cols-1 grid-rows-3 gap-3 md:grid-cols-3 md:grid-rows-1">
        {giveaways.map((giveaway) => (
          <GiveawayCard
            key={giveaway.id}
            title={giveaway.title}
            content={giveaway.details}
            image="/images/home/news/gang_war_image2.jpg"
          />
        ))}
      </div>
      <div>
        <div className="my-3 text-2xl font-bold uppercase">
          Giveaway Conditions
        </div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
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
