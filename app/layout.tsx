import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Bebas_Neue } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const montserrat = Montserrat({ subsets: ["latin"] })
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
})

export const metadata: Metadata = {
  title: "Digital Services Company",
  description:
    "Professional digital services including web development, mobile apps, AI solutions, and design services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${bebasNeue.variable}`} style={{ background: "black", margin: 0, padding: 0 }}>
        <Navbar />
        {/* Wrap children in a div with explicit styles to prevent any gradient overlays */}
        <div style={{ 
          position: "relative", 
          zIndex: 1, 
          background: "transparent",
          backgroundImage: "none !important",
          margin: 0,
          padding: 0
        }}>
          {children}
        </div>
        <div style={{ position: "relative", zIndex: 50 }}>
          <Footer />
        </div>
      </body>
    </html>
  )
}