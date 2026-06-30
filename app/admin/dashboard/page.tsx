"use client"
import { useAuth } from "@/context/AuthContext"
import { apiCall } from "@/lib/api"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

type Stats = {
  totalBlogs: number
  publishedBlogs: number
  totalImages: number
  totalEnquiries: number
  unreadEnquiries: number
}

const DashboardOverviewPage = () => {
  const { token } = useAuth()
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    const getStats = async () => {
      setErrorMsg("")
      try {
        const [blogsRes, enquiriesRes, imagesRes] = await Promise.all([
          apiCall({ method: "GET", pathName: "/get-blogs", token: token || undefined }),
          apiCall({ method: "GET", pathName: "/get-enquiries", token: token || undefined }),
          apiCall({ method: "GET", pathName: "/get-images", token: token || undefined }),
        ])

        const blogs = blogsRes.data || []
        const enquiries = enquiriesRes.data || []
        const images = imagesRes.data || []

        setStats({
          totalBlogs: blogs.length,
          publishedBlogs: blogs.filter((b: any) => b.isPublished).length,
          totalImages: images.length,
          totalEnquiries: enquiries.length,
          unreadEnquiries: enquiries.filter((e: any) => !e.isRead).length,
        })
      } catch (error) {
        setErrorMsg(
          error instanceof Error ? `There is an error: ${error.message}` : "Something went wrong"
        )
      } finally {
        setLoading(false)
      }
    }

    getStats()
  }, [token])

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-slate-400">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    )
  }

  if (errorMsg) {
    return (
      <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
        {errorMsg} — refresh to try again.
      </p>
    )
  }

  return (
    <div>
      <h1 className="fredoka text-2xl font-bold text-foreground">Overview</h1>
      <p className="mt-1 text-sm text-slate-500">A quick look at what's on the site right now.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Total Blogs</p>
          <p className="mt-1 text-3xl font-bold text-foreground">{stats?.totalBlogs}</p>
          <p className="mt-1 text-xs text-slate-400">{stats?.publishedBlogs} published</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Gallery Images</p>
          <p className="mt-1 text-3xl font-bold text-foreground">{stats?.totalImages}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Total Enquiries</p>
          <p className="mt-1 text-3xl font-bold text-foreground">{stats?.totalEnquiries}</p>
        </div>

        <div className="rounded-xl border border-accent bg-accent/10 p-5">
          <p className="text-sm text-slate-600">Unread Enquiries</p>
          <p className="mt-1 text-3xl font-bold text-foreground">{stats?.unreadEnquiries}</p>
          {stats && stats.unreadEnquiries > 0 && (
            <Link
              href="/admin/dashboard/enquiries"
              className="mt-1 inline-block text-xs font-medium text-primary hover:underline"
            >
              View them →
            </Link>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/admin/dashboard/blog/new"
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          + New Blog
        </Link>
        <Link
          href="/admin/dashboard/gallery"
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Manage Gallery
        </Link>
      </div>
    </div>
  )
}

export default DashboardOverviewPage