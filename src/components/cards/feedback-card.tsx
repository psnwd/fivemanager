import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface FeedbackCardProps {
  title: string
  content: string
  author: string
  authorImage: string
  authorDetail: string
}

function FeedbackCard({
  title,
  content,
  author,
  authorImage,
  authorDetail,
}: FeedbackCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className=" text-sm">{content}</p>
      </CardContent>
      <CardFooter className="flex gap-1 text-sm">
        <Avatar className="h-6 w-6 md:h-9 md:w-9">
          <AvatarImage src={authorImage} alt="Avatar" />
          <AvatarFallback className="text-xs">BC</AvatarFallback>
        </Avatar>
        <p>
          <span className="font-semibold">{author}</span>, {authorDetail}
        </p>
      </CardFooter>
    </Card>
  )
}

export default FeedbackCard
