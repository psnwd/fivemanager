"use client"

import * as React from "react"
import { Share } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Icons } from "../icons"

interface GiveawayPageCardProps {
  title: string
  details: string
  endTime: number
  totalKeys: number
  remainingKey: number
}

function GiveawayPageCard({
  title,
  details,
  endTime,
  totalKeys,
  remainingKey,
}: GiveawayPageCardProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  function onRedeem(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <Card className="container w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center gap-1 text-sm">
        <div className="space-x-2">
          <div className="text-gray-500">Remaining Keys</div>
          <div className="text-gray-900">{remainingKey}</div>

          <div className="text-gray-500">End Time</div>
          <div className="text-gray-900">{endTime}</div>
        </div>
        <div>{details}</div>
        <div>
          <Button
            variant="default"
            size={"sm"}
            disabled={isLoading}
            onClick={onRedeem}
          >
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Redeem
          </Button>
          <Button variant="outline" size={"sm"}>
            <Share className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default GiveawayPageCard
