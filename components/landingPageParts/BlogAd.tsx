import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "../FadeIn"
import BlogCard from "../BlogCard"
import { Blog } from "@/app/admin/dashboard/blog/page"
import { apiCall } from "@/lib/api"
import { Loader2 } from "lucide-react"

const BlogAd = () => {
  const [loading, setLoading] = useState(false)
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [errorMsg, setErrorMsg] = useState("")

  const getBlogs = async () => {
    try {
      setLoading(true)
      const response = await apiCall({
        method: "GET",
        pathName: "/get-blogs-client",
      })
      setBlogs(response.data)
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBlogs()
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-75 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <FadeIn>
      {/* ✅ Neutral background instead of light green */}
      <div className="w-full p-4 md:p-8">
        <div className="flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-slate-50 p-6 md:p-8">
          <h1 className="mb-4 text-center text-[24px] font-bold text-foreground md:text-[30px]">
            Enjoy Gist from Our <span className="text-primary">Teachers</span>
          </h1>

          {/* ✅ flex-col on mobile, flex-row on desktop */}
          <div className="w-full">
            {errorMsg && (
              <p className="rounded-lg bg-slate-300 px-3 py-2 text-sm text-destructive">
                Refresh to get blogs
              </p>
            )}

            {blogs.length <= 0 && (
              <div className="flex min-h-75 flex-col items-center justify-center gap-3 text-center">
                <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Coming Soon
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  No Stories Yet
                </h2>
                <p className="max-w-sm text-slate-500">
                  Our teachers are cooking up something great. Check back soon
                  for insights, updates, and stories from the CBMA community.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.slice(0, 3).map((blog: Blog, i: number) => (
                <BlogCard
                  img={blog.coverImage}
                  title={blog.title}
                  category={"Academic"}
                  desc={`${blog.content.slice(0, 100)}...`}
                  alt={blog.title}
                  key={i}
                  link={blog.slug}
                />
              ))}
            </div>
          </div>

          {/* ✅ destructive red → primary green */}
          <Link
            href="/blog"
            className="text-center text-primary hover:underline"
          >
            View more stories →
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}

export default BlogAd
