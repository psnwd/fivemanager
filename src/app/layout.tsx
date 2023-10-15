import "@/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

// NOTE: Wait for UI to be ready
// import NextAuthProvider from "@/lib/auth/Provider"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
