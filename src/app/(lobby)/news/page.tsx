import type { Metadata } from "next"

import NewsCard from "@/components/cards/news-card"

export const metadata: Metadata = {
  title: "FiveManager | News",
  description:
    "FiveM server management web application for managing fiveM server and players.",
}

const news = [
  {
    id: 1,
    title: "Gang War Erupts in Los Santos",
    images: [
      "/images/home/news/gang_war_image1.webp",
      "/images/home/news/gang_war_image2.jpg",
    ],
    details:
      "A violent gang war has erupted on the streets of Los Santos, with rival criminal organizations vying for control of the city's underground. Gunfights, car chases, and explosions have become a common sight. Civilians are advised to stay indoors and exercise caution.",
  },
  {
    id: 2,
    title: "New Nightclub 'The Neon Oasis' Opens its Doors",
    images: [
      "/images/home/news/nightclub_exterior_image.png",
      "/images/home/news/nightclub_interior_image.jpg",
    ],
    details:
      "Los Santos is buzzing with excitement as the new nightclub 'The Neon Oasis' opens its doors to partygoers. With state-of-the-art sound and lighting systems, it promises a unique nightlife experience. Visit The Neon Oasis for great music, dancing, and a chance to rub shoulders with the city's elite.",
  },
  {
    id: 3,
    title: "Police Crack Down on Street Racing Syndicate",
    images: [
      "/images/home/news/police_raid_image.jpg",
      "/images/home/news/racing_syndicate_image.webp",
    ],
    details:
      "The Los Santos Police Department is launching a major crackdown on the illegal street racing syndicate that has been plaguing the city. In a series of coordinated raids, several high-performance cars have been seized, and numerous arrests have been made. The streets are becoming safer, but racers are advised to watch their backs.",
  },
  {
    id: 4,
    title: "Gang War Erupts in Los Santos",
    images: [
      "/images/home/news/gang_war_image1.webp",
      "/images/home/news/gang_war_image2.jpg",
    ],
    details:
      "A violent gang war has erupted on the streets of Los Santos, with rival criminal organizations vying for control of the city's underground. Gunfights, car chases, and explosions have become a common sight. Civilians are advised to stay indoors and exercise caution.",
  },
  {
    id: 5,
    title: "New Nightclub 'The Neon Oasis' Opens its Doors",
    images: [
      "/images/home/news/nightclub_exterior_image.png",
      "/images/home/news/nightclub_interior_image.jpg",
    ],
    details:
      "Los Santos is buzzing with excitement as the new nightclub 'The Neon Oasis' opens its doors to partygoers. With state-of-the-art sound and lighting systems, it promises a unique nightlife experience. Visit The Neon Oasis for great music, dancing, and a chance to rub shoulders with the city's elite.",
  },
  {
    id: 6,
    title: "Police Crack Down on Street Racing Syndicate",
    images: [
      "/images/home/news/police_raid_image.jpg",
      "/images/home/news/racing_syndicate_image.webp",
    ],
    details:
      "The Los Santos Police Department is launching a major crackdown on the illegal street racing syndicate that has been plaguing the city. In a series of coordinated raids, several high-performance cars have been seized, and numerous arrests have been made. The streets are becoming safer, but racers are advised to watch their backs.",
  },
]

function page() {
  return (
    <>
      <div className="text-2xl font-bold uppercase">Latest News</div>
      <div className="grid grid-flow-col grid-cols-1 grid-rows-6 gap-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
        {news.map((news) => (
          <NewsCard
            key={news.id}
            id={news.id}
            title={news.title}
            details={news.details}
            image={news.images[0]}
          />
        ))}
      </div>
    </>
  )
}

export default page
