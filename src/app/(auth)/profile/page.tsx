import Image from "next/image"
import { Pencil } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function page() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Profile</h1>
      <div className="flex items-center justify-around">
        <Avatar className="my-5 h-10 w-10 md:h-32 md:w-32">
          <AvatarImage src={"/images/avatars/avatar_1.jpeg"} alt="Avatar" />
          <AvatarFallback className="text-xs">BC</AvatarFallback>
        </Avatar>
        <div className="mx-5 flex flex-col items-start gap-1">
          <div className="flex items-center gap-1 text-lg font-semibold">
            <HoverCard>
              <HoverCardTrigger>Real BlackCAT</HoverCardTrigger>
              <HoverCardContent>
                <div className="flex items-center justify-center gap-2">
                  <Avatar className="my-5 h-10 w-10">
                    <AvatarImage
                      src={"/images/avatars/avatar_1.jpeg"}
                      alt="Avatar"
                    />
                    <AvatarFallback className="text-xs">BC</AvatarFallback>
                  </Avatar>
                  <div className="flex select-none items-center gap-1 text-sm font-semibold">
                    Real BlackCAT
                    <Image
                      src={"/images/profile/server-owner.png"}
                      width={16}
                      height={16}
                      alt="badge"
                      title="Server Owner"
                    />
                  </div>
                  <div className="text-xs">Server Owner</div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <Image
              src={"/images/profile/server-owner.png"}
              width={16}
              height={16}
              className="select-none"
              alt="user badge"
            />
          </div>

          <small className="text-sm font-medium leading-none">@blackcat</small>
          <blockquote className="w-96 italic">
            &quot;It&apos;s not about changing the world. It&apos;s about doing
            our best to leave the world the way it is.&quot;
          </blockquote>
          <Button variant="outline" size={"sm"}>
            <Pencil size={16} strokeWidth={0.5} />
          </Button>
        </div>
        <div>
          <div>Position</div>
          <div>Admin</div>
        </div>
        <div>
          <div>Joined</div>
          <div>5 Years Ago</div>
        </div>
      </div>
    </>
  )
}

export default page
