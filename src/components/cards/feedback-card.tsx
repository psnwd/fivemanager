import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface FeedbackCardProps {
  readonly title: string
  readonly content: string
  readonly authorName: string
  readonly authorAvatar: string
  readonly authorJob: string
}

function FeedbackCard({
  title,
  content,
  authorName,
  authorAvatar,
  authorJob,
}: FeedbackCardProps) {
  return (
    <Card className="basis-1/3">
      <CardHeader>
        <CardTitle className="line-clamp-1 text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className=" text-sm">{content}</p>
      </CardContent>
      <CardFooter className="flex gap-1 text-sm">
        <Avatar className="h-6 w-6 md:h-9 md:w-9">
          <AvatarImage src={authorAvatar} alt="Author avatar" />
          <AvatarFallback className="text-xs">BC</AvatarFallback>
        </Avatar>
        <p>
          <span className="font-semibold">{authorName}</span>
          <span className="text-xs">{authorJob}</span>
        </p>
      </CardFooter>
    </Card>
  )
}

export default FeedbackCard
