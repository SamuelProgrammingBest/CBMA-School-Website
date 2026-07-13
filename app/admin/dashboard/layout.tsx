"use client"
import AuthProvider from "@/context/AuthContext"
import { deleteToken, getToken } from "@/lib/token"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { useState } from "react"

const links = [
  { title: "Dashboard", link: "/admin/dashboard", exact: true },
  { title: "Blogs", link: "/admin/dashboard/blog", exact: false },
  { title: "Enquiries", link: "/admin/dashboard/enquiries", exact: false },
  { title: "Gallery", link: "/admin/dashboard/gallery", exact: false },
  { title: "Admissions", link: "/admin/dashboard/admissions", exact: true },
]

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    deleteToken()
    router.replace("/admin")
  }

  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <span className="fredoka text-lg font-bold text-foreground">
          CBMA <span className="text-primary">Admin</span>
        </span>
        {/* Close button — mobile only */}
        <button
          className="text-slate-500 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {links.map((link, i) => {
            const active = link.exact
              ? pathName === link.link
              : pathName.startsWith(link.link)

            return (
              <li key={i}>
                <Link
                  href={link.link}
                  onClick={() => setSidebarOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-200 px-3 py-4">
        <button
          onClick={handleLogout}
          className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-destructive hover:bg-destructive/10"
        >
          Log out
        </button>
      </div>
    </>
  )

  return (
    <AuthProvider>
      <div className="flex min-h-screen bg-slate-50">

        {/* Overlay — mobile only, closes sidebar when tapping outside */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar — slides in on mobile, always visible on desktop */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 flex w-60 flex-col border-r border-slate-200 bg-white transition-transform duration-300 md:static md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent />
        </aside>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          {/* Mobile topbar */}
          <header className="flex items-center gap-4 border-b border-slate-200 bg-white px-4 py-4 md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-slate-600"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <span className="fredoka font-bold text-foreground">
              CBMA <span className="text-primary">Admin</span>
            </span>
          </header>

          <main className="flex-1 p-4 md:p-8">{children}</main>
        </div>
      </div>
    </AuthProvider>
  )
}

export default Layout