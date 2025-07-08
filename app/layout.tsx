import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./mobile-optimizations.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JRev Ministries - Find Your Calling, Join a Team, Serve with Purpose",
  description:
    "Discover your place in our vibrant church community. Join one of our ministry teams and serve with purpose at JRev Ministries.",
  keywords:
    "JRev Ministries, church, ministry, worship, technical, ushering, communications, production, serve, community",
  authors: [{ name: "JRev Ministries" }],
  openGraph: {
    title: "JRev Ministries - Find Your Calling",
    description: "Join our vibrant church community and discover where your gifts can make an eternal impact.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JRev Ministries - Find Your Calling",
    description: "Join our vibrant church community and discover where your gifts can make an eternal impact.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
