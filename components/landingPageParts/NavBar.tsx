"use client"
import React, { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { Button } from "../ui/button"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Admissions", href: "/admissions" },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  return (
    <div
      className="fixed z-50 w-full"
    >
      <NavigationMenu className="w-full bg-white/80 shadow-sm backdrop-blur-sm">
        <div className="flex w-full items-center justify-between px-6 py-4">
          <Link href="/">
            <Image src="/assets/medium.jpg" alt="CBMA Logo" height={30} width={30} />
          </Link>

          <NavigationMenuList className="hidden cursor-pointer items-center justify-center gap-7 md:flex">
            {navLinks.map((link) => {
              const isActive = pathName === link.href
              return (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={`text-lg font-medium transition ${
                        isActive ? "text-primary" : "text-slate-700 hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>

          <Link href="/apply" className="hidden md:flex">
            <Button className="cursor-pointer bg-primary opacity-85 transition hover:opacity-100">
              Apply for Admission
            </Button>
          </Link>

          <button
            className="text-slate-700 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} className="text-accent" /> : <Menu size={28} className="text-accent" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 bg-white/80 px-6 pb-6 shadow-sm backdrop-blur-sm md:hidden"
            >
              {navLinks.map((link) => {
                const isActive = pathName === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition ${
                      isActive ? "text-primary" : "text-slate-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Link href="/admissions" onClick={() => setIsOpen(false)}>
                <Button className="w-full cursor-pointer bg-primary opacity-85 transition hover:opacity-100">
                  Apply for Admission
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </NavigationMenu>
    </div>
  )
}

export default NavBar