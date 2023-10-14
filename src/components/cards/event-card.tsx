import Image from "next/image"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface EventCardProps {
  title: string
  content: string
  image: string
}

function EventCard({ title, content, image }: EventCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <Image src={image} width={500} height={500} alt="Event image" />
        <p className=" text-sm">{content}</p>
      </CardContent>
      <CardFooter className="flex gap-1 text-sm">
        <p></p>
      </CardFooter>
    </Card>
  )
}

export default EventCard
