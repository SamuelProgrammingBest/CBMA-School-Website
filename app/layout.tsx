import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Nunito, DM_Sans } from 'next/font/google'


const geist = Geist({subsets:['latin'],variable:'--font-sans'})
const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased overflow-x-hidden mx-auto", fontMono.variable, "font-sans", geist.variable, nunito.variable, dmSans.variable)}
    >
      <body className="bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden selection:bg-accent-foreground selection:text-white">
        {children}
      </body>
    </html>
  )
}
