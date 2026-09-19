import React, { useEffect, useState } from "react"
import BlogCard from "../BlogCard"
import FadeIn from "../FadeIn"
import { motion } from "motion/react"
import { container, item } from "@/lib/utils"
import { apiCall } from "@/lib/api"
import { Blog } from "@/app/admin/dashboard/blog/page"
import { Loader2 } from "lucide-react"

const BlogCardsCol = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Blog[]>([])
  const [errorMsg, setErrorMsg] = useState("")

  const getBlogs = async () => {
    try {
      const response = await apiCall({
        method: "GET",
        pathName: "/get-blogs-client",
      })
      setData(response.data || [])
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Failed to load blogs")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBlogs()
  }, [])

  // 1. FIXED: Changed invalid min-h-75 to standard min-h-[250px]
  if (loading) {
    return (
      <div className="flex min-h-[250px] items-center justify-center w-full py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  // 2. FIXED: Safe error state tracking height
  if (errorMsg) {
    return (
      <div className="flex min-h-[250px] items-center justify-center w-full text-center px-4">
        <p className="text-xl font-bold text-destructive">Refresh to get blogs</p>
      </div>
    )
  }

  // Filter the published blogs cleanly first
  const publishedBlogs = data.filter((d) => d.isPublished)

  // 3. FIXED: Safe height wrapper for empty fallback
  if (publishedBlogs.length <= 0) {
    return (
      <div className="flex min-h-[350px] flex-col items-center justify-center gap-3 text-center px-6 py-12">
        <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          Coming Soon
        </div>
        <h2 className="text-2xl font-bold text-foreground">No Stories Yet</h2>
        <p className="max-w-sm text-slate-500 text-sm sm:text-base">
          Our teachers are cooking up something great. Check back soon for
          insights, updates, and stories from the CBMA community.
        </p>
      </div>
    )
  }

  return (
    <FadeIn className="mt-12 px-4 sm:px-6 pb-16 md:mt-20 md:pb-24">
      <div className="mx-auto max-w-7xl w-full">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full"
          variants={container}
          initial="hidden"
          whileInView="show" // FIXED: Restored to whileInView for standard tracking setup
          viewport={{ once: true, amount: 0.05 }} // FIXED: Dropped view requirement to 5% entries so small mobile displays hit it instantly
        >
          {publishedBlogs.map((blog) => (
            <BlogCard
              img={blog.coverImage}
              title={blog.title}
              category={"Academic"}
              desc={blog.shortDesc}
              alt={blog.shortDesc}
              key={blog._id}
              variant={item}
              link={blog.slug}
            />
          ))}
        </motion.div>
      </div>
    </FadeIn>
  )
}

export default BlogCardsCol
