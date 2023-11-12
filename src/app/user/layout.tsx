import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FiveManager | User",
  description: "FiveM server management web application",
}

interface SettingsLayoutProps {
  readonly children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return <>{children}</>
}
