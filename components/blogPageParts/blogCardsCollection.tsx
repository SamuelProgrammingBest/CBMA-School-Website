import React, { useEffect, useState } from "react"
import BlogCard from "../BlogCard"
import FadeIn from "../FadeIn"
import { motion } from "motion/react"
import { container, item } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"
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
      setData(response.data)
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
    return <Loader2 className="animate-spin" />
  }

  if (errorMsg) {
    return <p className="text-center text-xl font-bold">Refresh to get blogs</p> // your "Refresh to get blogs" message
  }

  return (
    <FadeIn className="mt-25 px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {data
            .filter((d) => d.isPublished)
            .map((blog, i) => (
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
