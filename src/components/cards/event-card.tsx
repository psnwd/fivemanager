import Image from "next/image"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "../ui/button"

interface EventCardProps {
  readonly id: number | string
  readonly title: string
  readonly content: string
  readonly image: string
}

function EventCard({ id, title, content, image }: EventCardProps) {
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
      <CardFooter className="flex justify-center gap-1 text-sm">
        <Link href={`/events/${title.replaceAll(" ", "-")}/${id}`}>
          <Button variant="outline">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default EventCard
