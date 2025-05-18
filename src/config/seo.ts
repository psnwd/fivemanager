import type { Metadata } from "next"

export const seo_onfig: Metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
  description: "This is my website where I share my thoughts and ideas.",
  applicationName: "My Website",
  authors: [
    {
      name: "John Doe",
      url: "https://johndoe.com",
    },
  ],
  keywords: ["website", "blog", "personal", "portfolio", "nextjs", "react"],
  referrer: "origin-when-cross-origin",
  creator: "John Doe",
  publisher: "John Doe",
  alternates: {
    canonical: "https://mywebsite.com",
    languages: {
      "en-US": "/",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "My Website",
    description: "This is my website where I share my thoughts and ideas.",
    url: "https://mywebsite.com",
    siteName: "My Website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "My Website OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Website",
    description: "This is my website where I share my thoughts and ideas.",
    images: ["/og-image.png"],
    creator: "@johndoe",
  },
  facebook: {
    appId: "1234567890",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-site-verification-code",
    me: "me-1234567890",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  assets: [],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    nosnippet: false,
    notranslate: false,
  },
  category: "website",
}
