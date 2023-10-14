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
    <Card className="basis-1/3">
      <CardHeader>
        <CardTitle className="line-clamp-1 text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <Image
          priority
          src={image}
          width={500}
          height={500}
          alt={title}
          className="aspect-[16/9] w-full"
        />
        <p className=" text-sm">{content}</p>
      </CardContent>
      <CardFooter className="flex gap-1 text-sm">
        <p></p>
      </CardFooter>
    </Card>
  )
}

export default EventCard