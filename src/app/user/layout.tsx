import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Forms",
  description: "FiveM server management web application",
}
interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return <>{children}</>
}
