"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

function page() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isConnected, setIsConnected] = React.useState<boolean>(false)

  function onConnectMetamask(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsConnected(true)
    }, 1500)
  }
  return (
    <div>
      <Card
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className={"grid w-full place-items-center"}
      >
        <CardHeader>
          <div className="grid h-20 w-20 place-items-center rounded-full bg-muted">
            BC
          </div>
        </CardHeader>
        <CardContent className="flex min-h-[176px] flex-col items-center justify-center space-y-4 text-center">
          <CardTitle className="text-2xl">BlackCAT</CardTitle>
          <CardDescription className="line-clamp-4">
            {isConnected ? "0xc9090584d8E...8697B3g3cC82Fc48" : "Not Connected"}
          </CardDescription>
          <Button
            variant="default"
            onClick={onConnectMetamask}
            disabled={isConnected}
            className="select-none"
          >
            {isLoading ? (
              <>
                <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />{" "}
                Connecting
              </>
            ) : (
              <>{isConnected ? "Connected" : "Connect Metamask"}</>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default page
