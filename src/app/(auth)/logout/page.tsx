"use client"

import React from "react"
import { env } from "@/env.mjs"
import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export default function SignOutPage() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      signOut({ callbackUrl: env.NEXT_PUBLIC_APP_URL })
    }, 1500)
  }

  return (
    <Shell className="max-w-md">
      <PageHeader
        id="sign-out-page-header"
        aria-labelledby="sign-out-page-header-heading"
        className="text-center"
      >
        <PageHeaderHeading size="sm">Sign out</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Are you sure you want to sign out?
        </PageHeaderDescription>
      </PageHeader>
      <Button onClick={onSubmit}>
        {isLoading ? (
          <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        Log Out
      </Button>
    </Shell>
  )
}
