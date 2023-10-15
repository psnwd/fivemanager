import type { Metadata } from "next"

import EventCard from "@/components/cards/event-card"

export const metadata: Metadata = {
  title: "FiveManager | Events",
  description:
    "FiveM server management web application for managing fiveM server and players.",
}

const events = [
  {
    id: 1,
    title: "Illegal Street Race",
    details:
      "Join the adrenaline-pumping world of illegal street racing in the heart of Los Santos. Compete against other racers in high-speed pursuits, and dodge the cops to claim victory. Be prepared for epic car chases and close calls!",
    image: "/images/events/1.webp",
  },
  {
    id: 2,
    title: "Heist Planning Session",
    details:
      "Assemble a crew of skilled criminals and masterminds to plan the ultimate heist. Discuss the details, roles, and strategies to maximize the take while minimizing the risks. Precision and teamwork are key to success.",
    image: "/images/events/2.webp",
  },
  {
    id: 3,
    title: "Underground Fight Club",
    details:
      "Step into the gritty underground fight club scene. Battle it out in bare-knuckle brawls against tough opponents. Prove your fighting skills and climb the ranks in this brutal competition.",
    image: "/images/events/3.webp",
  },
  {
    id: 4,
    title: "Illegal Street Race",
    details:
      "Join the adrenaline-pumping world of illegal street racing in the heart of Los Santos. Compete against other racers in high-speed pursuits, and dodge the cops to claim victory. Be prepared for epic car chases and close calls!",
    image: "/images/events/1.webp",
  },
  {
    id: 5,
    title: "Heist Planning Session",
    details:
      "Assemble a crew of skilled criminals and masterminds to plan the ultimate heist. Discuss the details, roles, and strategies to maximize the take while minimizing the risks. Precision and teamwork are key to success.",
    image: "/images/events/2.webp",
  },
  {
    id: 6,
    title: "Underground Fight Club",
    details:
      "Step into the gritty underground fight club scene. Battle it out in bare-knuckle brawls against tough opponents. Prove your fighting skills and climb the ranks in this brutal competition.",
    image: "/images/events/3.webp",
  },
]

function page() {
  return (
    <>
      <div className="text-2xl font-bold uppercase">Events & Activities</div>
      <div className="grid grid-flow-col grid-cols-1 grid-rows-6 gap-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            content={event.details}
            image={event.image}
          />
        ))}
      </div>
    </>
  )
}

export default page
