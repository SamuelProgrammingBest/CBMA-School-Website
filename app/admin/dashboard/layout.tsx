"use client"
import AuthProvider from "@/context/AuthContext"
import { deleteToken, getToken } from "@/lib/token"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React from "react"

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

  const token = getToken()

  const handleLogut = () => {
    deleteToken()
    router.replace("/admin")
  }

  return (
    <AuthProvider>
      <div className="flex min-h-screen bg-slate-50">
        <aside className="flex w-60 flex-col border-r border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-6 py-5">
            <span className="fredoka text-lg font-bold text-foreground">
              CBMA <span className="text-primary">Admin</span>
            </span>
          </div>

          <nav className="flex-1 px-3 py-4">
            <ul className="space-y-1">
              {links.map((link, i) => {
                const activeCheck = () => {
                  if (link.exact) {
                    return pathName == link.link
                  } else {
                    return pathName.startsWith(link.link)
                  }
                }

                const active = activeCheck()

                return (
                  <li key={i}>
                    <Link
                      href={link.link}
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
              onClick={handleLogut}
              className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-destructive hover:bg-destructive/10"
            >
              Log out
            </button>
          </div>
        </aside>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </AuthProvider>
  )
}

export default Layout
