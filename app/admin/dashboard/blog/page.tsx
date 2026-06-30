"use client"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardDescription, CardHeader } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useAuth } from "@/context/AuthContext"
import { apiCall } from "@/lib/api"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import React, { useEffect, useState } from "react"

export type Blog = {
  _id: string
  title: string
  slug: string
  shortDesc: string
  coverImage: string
  isPublished: boolean
  content: string
  author: string
}

const page = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Blog[]>([])
  const [errorMsg, setErrorMsg] = useState("")
  const auth = useAuth()

  const getBlogs = async () => {
    setErrorMsg("")
    try {
      const response = await apiCall({
        method: "GET",
        token: auth.token || undefined,
        pathName: "/get-blogs",
      })
      setData(response.data)
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const deleteBlog = async (id: string) => {
    try {
      await apiCall({ method: "DELETE", token: auth.token || undefined, pathName: `/delete-blog/${id}` })
      setData((prev) => prev.filter((blog) => blog._id !== id))
    } catch (error) {
      setErrorMsg(error instanceof Error ? `There is an error: ${error.message}` : "")
    }
  }

  useEffect(() => {
    getBlogs()
  }, [auth.token])

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

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-300 py-20 text-center">
        <p className="text-sm text-slate-500">No blogs yet.</p>
        <Link
          href="/admin/dashboard/blog/new"
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          + Create your first blog
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="fredoka text-2xl font-bold text-foreground">Blogs</h1>
        <Link
          href="/admin/dashboard/blog/new"
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          + New Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((blog) => (
          <Card key={blog._id} className="overflow-hidden p-0">
            <div className="aspect-video w-full overflow-hidden bg-slate-100">
              <img src={blog.coverImage} alt={blog.shortDesc} className="h-full w-full object-cover" />
            </div>

            <div className="p-5">
              <span
                className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  blog.isPublished ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-500"
                }`}
              >
                {blog.isPublished ? "Published" : "Draft"}
              </span>

              <CardHeader className="px-0 text-base font-bold text-foreground">{blog.title}</CardHeader>
              <CardDescription className="px-0 line-clamp-2 text-sm text-slate-500">
                {blog.shortDesc}
              </CardDescription>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <Link
                  href={`/admin/dashboard/blog/${blog._id}/edit`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Edit
                </Link>
                <CardAction>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you sure you want to delete this?</DialogTitle>
                        <DialogDescription>This is irreversible.</DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="destructive" onClick={() => deleteBlog(blog._id)}>
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardAction>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default page