import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { AnimatedBackground } from "@/components/animations/animationBackground"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Max Lucas | Portfólio",
  description:
    "Portfólio profissional de Max Lucas, com projetos de infraestrutura, desenvolvimento e automação.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AnimatedBackground />

        <div className="relative z-0">{children}</div>
      </body>
    </html>
  )
}
