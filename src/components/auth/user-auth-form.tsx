"use client"

import * as React from "react"
import { signIn } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      signIn()
    }, 1500)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={onSubmit}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.discord className="mr-2 h-4 w-4" />
        )}
        Discord
      </Button>
    </div>
  )
}
