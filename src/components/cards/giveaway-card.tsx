import Image from "next/image"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import { Button } from "../ui/button"

interface GiveawayCardProps {
  title: string
  content: string
  image: string
}

function GiveawayCard({ title, content, image }: GiveawayCardProps) {
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
        <span className="text-sm">
          Ends in <span className="font-medium text-cyan-400">22H:12M:10S</span>
        </span>
        <div className="flex w-full flex-row items-center justify-center gap-1 text-xs">
          0%
          <Progress value={50} className="relative h-4 w-[60%]" />
          <span className="absolute text-[10px] font-semibold text-green-600">
            57% KEYS LEFT
          </span>
          100%
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-1 text-sm">
        <Button variant="default" size={"sm"}>
          Redeem
        </Button>
        <Button variant="outline" size={"sm"}>
          Read more
        </Button>
      </CardFooter>
    </Card>
  )
}

export default GiveawayCard