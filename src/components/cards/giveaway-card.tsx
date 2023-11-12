"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import { Icons } from "../icons"
import { Button } from "../ui/button"

interface GiveawayCardProps {
  readonly id: string | number
  readonly title: string
  readonly content: string
  readonly image: string
  readonly totalKeys: number
  readonly remainingKey: number
  readonly endTime: number
}

function GiveawayCard({
  id,
  title,
  content,
  image,
  totalKeys,
  remainingKey,
  endTime,
}: GiveawayCardProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  function onRedeem(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <Card className="basis-1/3">
      <CardHeader>
        <CardTitle className="line-clamp-1 text-lg" title={title}>
          <Link href="/giveaways/1">{title}</Link>
        </CardTitle>
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
          </span>{" "}
          100%
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-1 text-sm">
        <Button
          variant="default"
          size={"sm"}
          disabled={isLoading}
          onClick={onRedeem}
        >
          {isLoading ? (
            <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Redeem
        </Button>
        <Link href={`/giveaways/${title.replaceAll(" ", "-")}/${id}`}>
          <Button variant="outline" size={"sm"}>
            Read more
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default GiveawayCard
