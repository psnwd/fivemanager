import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { UserAuthForm } from "@/components/auth/user-auth-form"

export const metadata: Metadata = {
  title: "FiveManager",
  description: "FiveM server management web application",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-[100vh] flex-col items-center justify-center overflow-hidden md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900">
            <Image
              src={`/images/auth/bg_${Math.floor(Math.random() * 4) + 1}.jpg`}
              width={1280}
              height={843}
              alt="Authentication"
              className="hidden dark:block"
            />
          </div>
          <Link href="/">
            <div className="relative z-20 flex items-center gap-2 text-lg font-medium">
              <Image src="/images/logo.svg" width={32} height={32} alt="" />
              FiveManager
            </div>
          </Link>
          <div className="relative z-20 mt-auto bg-black/80 p-2">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;You Tell Me Exactly What You Want, And I Will Very
                Carefully Explain To You Why It Cannot Be.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
          <div></div>
        </div>
        <div className="flex h-screen items-center justify-center lg:p-8 ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
              <Link href="/">
                <Image src="/images/logo.svg" width={60} height={60} alt="" />
              </Link>
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back!
              </h1>
              <p className="text-sm text-muted-foreground">Continue with</p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
