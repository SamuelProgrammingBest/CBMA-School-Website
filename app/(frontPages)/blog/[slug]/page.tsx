"use client"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import { apiCall } from "@/lib/api"
import { Loader2 } from "lucide-react"
import Image from "next/image"

type Blog = {
  _id: string
  title: string
  slug: string
  shortDesc: string
  content: string
  author: string
  coverImage: string
  createdAt: string
}

const BlogPage = () => {
  const params = useParams()
  const { slug } = params

  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    const getBlog = async () => {
      setErrorMsg("")
      try {
        const response = await apiCall({
          method: "GET",
          pathName: `/get-blog/${slug}`,
        })
        setBlogs(response.data)
        console.log(response.data)
      } catch (error) {
        setErrorMsg(error instanceof Error ? error.message : "Blog not found")
      } finally {
        setLoading(false)
      }
    }
    if (slug) getBlog()
  }, [slug])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    )
  }

  if (errorMsg || !blogs) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 px-6 text-center">
        <h1 className="fredoka text-2xl font-bold text-foreground">
          Blog post not found
        </h1>
        <p className="text-sm text-slate-500">
          It may have been removed or unpublished.
        </p>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {blogs.map((blog) => (
        <div key={blog._id}>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={blog.coverImage ? blog.coverImage : "/assets/3907.jpg"}
              alt={blog.title ? blog.title : "Blog Title"}
              width={1200}
              height={600}
              className="h-80 w-full object-cover md:h-105"
            />
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-primary">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {" · "}
              {blog.author}
            </p>

            <h1 className="fredoka mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {blog.title}
            </h1>
            <p className="mt-3 text-lg text-slate-500">{blog.shortDesc}</p>

            <div className="mt-8 whitespace-pre-line text-slate-700">
              {blog.content}
            </div>
          </div>
        </div>
      ))}
    </article>
  )
}

export default BlogPage
