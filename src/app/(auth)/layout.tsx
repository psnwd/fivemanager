import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FiveManager",
  description:
    "FiveM server management web application for managing fiveM server and players.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
