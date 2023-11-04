"use client"

import React, { useEffect, useState } from "react"

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
  const { ethereum } =
    typeof window !== "undefined" ? (window as any) : ({} as any)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [account, setAccount] = useState("")
  const [error, setError] = useState("")

  function checkEthereumExists() {
    if (!ethereum) {
      setError("Please Install MetaMask.")
      return false
    }
    return true
  }

  async function getConnectedAccounts() {
    try {
      setError("")
      const accounts = await ethereum.request({
        method: "eth_accounts",
      })
      console.log(accounts)
      setAccount(accounts[0])
    } catch (err: any) {
      setError(err.message)
    }
  }

  async function onConnectWallet(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    if (checkEthereumExists()) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        })
        console.log(accounts)

        setAccount(accounts[0])
        setIsConnected(true)
      } catch (err: any) {
        setError(err.message)
        setIsConnected(false)
      }

      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (account) {
      setIsConnected(true)
    }
  })

  useEffect(() => {
    if (checkEthereumExists()) {
      ethereum.on("accountsChanged", getConnectedAccounts)
      getConnectedAccounts()
    }
    return () => {
      ethereum.removeListener("accountsChanged", getConnectedAccounts)
    }
  }, [])

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
            {isConnected ? account : "Not Connected"}
          </CardDescription>
          <Button
            variant="default"
            onClick={onConnectWallet}
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
