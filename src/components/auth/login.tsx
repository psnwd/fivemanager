"use client"

import Image from "next/image"
import { signIn, signOut, useSession } from "next-auth/react"

import { Button } from "../ui/button"

export default function SignIn() {
  const { data: session, status } = useSession()

  if (status === "loading")
    return (
      <div className="absolute left-[48%] top-[48%] animate-ping">
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="loading image"
        />
      </div>
    )

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <Button variant={"destructive"} onClick={() => signOut()}>
          Log out
        </Button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Login</Button>
    </>
  )
}
