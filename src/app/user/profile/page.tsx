import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function page() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Profile</h1>
      <div className="flex flex-wrap items-center justify-around">
        <Avatar className="my-5 h-28 w-28 md:h-32 md:w-32">
          <AvatarImage src={"/images/avatars/avatar_1.jpeg"} alt="Avatar" />
          <AvatarFallback className="text-xs">BC</AvatarFallback>
        </Avatar>

        <div className="mx-5 flex gap-5">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="text-3xl">BlackCAT</div>
              <div className="text-sm">@blackcat</div>
            </div>
            <blockquote className="my-3 w-96 italic">
              &quot;It&apos;s not about changing the world. It&apos;s about
              doing our best to leave the world the way it is.&quot;
            </blockquote>
          </div>

          <div className="my-1 flex w-full justify-around gap-5 md:flex-row">
            <div>
              <div className="font-bold">Position</div>
              <div>Admin</div>
            </div>
            <div>
              <div className="font-bold">Joined</div>
              <div>5 Years Ago</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
