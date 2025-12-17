import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Karmachain Infotech | AI, Blockchain, Web & Mobile App Development",
  description:
    "Leading software development company delivering exotic mobile games, innovative web and mobile apps, and robust NFT solutions.",
  icons: {
    icon: "/logowithbg.png", // Path to your logo in public folder
    shortcut: "/logowithbg.png",
    apple: "/logowithbg.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
