"use client"
import React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { Button } from "../ui/button"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const pathName = usePathname()

  return (
    <motion.div
      className="fixed z-200 w-full"
      initial={{ y: -400 }}
      animate={{ y: -100 }}
      transition={{ delay: 1.4, duration: 1, type: "tween" }}
    >
      <NavigationMenu className="w-full bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="flex w-full items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Image src="/assets/medium.jpg" alt="Logo" height={30} width={30} />

          {/* Desktop links — hidden on mobile */}
          <NavigationMenuList className="hidden md:flex cursor-pointer items-center justify-center gap-7">
            {navLinks.map((link, i) => {
              const isActive = pathName === link.href
              return (
                <NavigationMenuItem
                  key={i}
                  className={`text-lg font-medium ${isActive ? "text-primary" : "text-gray-700"}`}
                >
                  <NavigationMenuLink href={link.href}>
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>

          {/* Desktop subscribe button — hidden on mobile */}
          <Button className="hidden md:flex cursor-pointer bg-primary opacity-85 hover:opacity-100">
            Subscribe for our Newsletter
          </Button>

          {/* Hamburger button — only on mobile */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} className="text-accent"/> : <Menu size={28} className="text-accent" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4 bg-white px-6 pb-6 md:hidden backdrop-blur-sm shadow-sm bg-white/80"
          >
            {navLinks.map((link, i) => {
              const isActive = pathName === link.href
              return (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${isActive ? "text-primary" : "text-gray-700"}`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Button className="w-full cursor-pointer bg-primary opacity-85 hover:opacity-100">
              Subscribe for our Newsletter
            </Button>
          </motion.div>
          </AnimatePresence>
        )}
      </NavigationMenu>
    </motion.div>
  )
}

export default NavBar
