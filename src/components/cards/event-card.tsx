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
        <CardTitle className="text-md">{title}</CardTitle>
      </CardHeader>
      <CardContent>
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
