import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next";

import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Nunito, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next';


export const metadata: Metadata = {
  title: "Cornerstone Baptist Model Academy",
  description: "Welcome to Cornerstone Baptist Model Academy—a premier institution dedicated to raising leaders of excellence through a balanced foundation of sound academic instruction, strong moral values, and spiritual growth. Explore our programs, admissions info, and school community updates.",
  icons: {
    icon: '/assets/school-logo.png', // Or the path relative to your public folder
  },
};

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
        <Analytics />
      </body>
    </html>
  )
}
