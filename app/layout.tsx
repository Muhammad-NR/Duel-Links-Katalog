import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for PWA and Yu-Gi-Oh theme
export const metadata: Metadata = {
  title: "Duel Links Catalog",
  description: "Comprehensive catalog of Yu-Gi-Oh Duel Links cards, decks, and meta tier lists",
  // generator: "v0.app",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/YuGiOh_Duel_Links.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/YuGiOh_Duel_Links.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/YuGiOh_Duel_Links.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/YuGiOh_Duel_Links.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Yu-Gi-Oh Duel Links",
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0e27",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* <CHANGE> Added PWA meta tags */}
        <meta name="application-name" content="Yu-Gi-Oh Catalog" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="YGO Catalog" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
