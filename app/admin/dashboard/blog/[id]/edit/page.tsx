"use client"
import { useFormik } from "formik"
import * as yup from "yup"
import { useParams, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { Loader2 } from "lucide-react"
import { apiCall } from "@/lib/api"
import { Blog } from "../../page"
import Link from "next/link"

const EditBlogPage = () => {
  const params = useParams()
  const router = useRouter()
  const { id } = params

  const [errorMsg, setErrorMsg] = useState("")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Blog>()

  const { token } = useAuth()

  const getBlog = async () => {
    setErrorMsg("")
    try {
      const originalBlog = await apiCall({
        method: "GET",
        token: token || undefined,
        pathName: `/get-blog-admin/${id}`,
      })
      setData(originalBlog.data)
    } catch (error) {
      setErrorMsg(error instanceof Error ? `There is an error: ${error.message}` : "")
    }
  }

  const editBlog = async (value: Record<string, any>) => {
    setErrorMsg("")
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append("title", value.title)
      formData.append("shortDesc", value.shortDesc)
      formData.append("content", value.content)
      formData.append("author", value.author)
      if (value.coverImage) formData.append("coverImage", value.coverImage)
      formData.append("isPublished", value.isPublished)

      const response = await apiCall({
        method: "PATCH",
        pathName: `/update-blog/${id}`,
        token: token || undefined,
        body: formData,
      })

      console.log(response.message)
      router.push("/admin/dashboard/blog")
    } catch (error) {
      setErrorMsg(error instanceof Error ? `There is an error: ${error.message}` : "")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBlog()
  }, [id, token])

  const formik = useFormik({
    initialValues: {
      title: data?.title || "",
      shortDesc: data?.shortDesc || "",
      content: data?.content || "",
      author: data?.author || "",
      coverImage: null as File | null,
      isPublished: data?.isPublished || false,
    },
    enableReinitialize: true,
    onSubmit: (values) => editBlog(values),
    validationSchema: yup.object({
      title: yup.string().required("Title is required"),
      shortDesc: yup.string().required("ShortDesc is required"),
      content: yup.string().required("Content is required"),
      author: yup.string().required("Author is required"),
      coverImage: yup
        .mixed()
        .nullable()
        .test("fileType", "Unsupported File Format", (value) => {
          if (!value) return true
          const file = value as File
          return ["image/jpeg", "image/png", "image/webp"].includes(file.type)
        }),
      isPublished: yup.boolean(),
    }),
  })

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href="/admin/dashboard/blog"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-primary"
      >
        ← Back to Blogs
      </Link>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="fredoka text-2xl font-bold text-foreground">Edit Blog Post</h1>
        <p className="mt-1 mb-6 text-sm text-slate-500">Update the details below and save your changes.</p>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="title" className="mb-1 block text-sm font-medium text-slate-700">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 focus:ring-primary/30 ${
                formik.touched.title && formik.errors.title ? "border-destructive" : "border-slate-300 focus:border-primary"
              }`}
            />
            {formik.touched.title && formik.errors.title && (
              <p className="mt-1 text-xs text-destructive">{formik.errors.title}</p>
            )}
          </div>

          <div>
            <label htmlFor="shortDesc" className="mb-1 block text-sm font-medium text-slate-700">
              Short Description
            </label>
            <input
              id="shortDesc"
              type="text"
              name="shortDesc"
              value={formik.values.shortDesc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 focus:ring-primary/30 ${
                formik.touched.shortDesc && formik.errors.shortDesc ? "border-destructive" : "border-slate-300 focus:border-primary"
              }`}
            />
            {formik.touched.shortDesc && formik.errors.shortDesc && (
              <p className="mt-1 text-xs text-destructive">{formik.errors.shortDesc}</p>
            )}
          </div>

          <div>
            <label htmlFor="content" className="mb-1 block text-sm font-medium text-slate-700">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={8}
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 focus:ring-primary/30 ${
                formik.touched.content && formik.errors.content ? "border-destructive" : "border-slate-300 focus:border-primary"
              }`}
            />
            {formik.touched.content && formik.errors.content && (
              <p className="mt-1 text-xs text-destructive">{formik.errors.content}</p>
            )}
          </div>

          <div>
            <label htmlFor="author" className="mb-1 block text-sm font-medium text-slate-700">
              Author
            </label>
            <input
              id="author"
              type="text"
              name="author"
              value={formik.values.author}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 focus:ring-primary/30 ${
                formik.touched.author && formik.errors.author ? "border-destructive" : "border-slate-300 focus:border-primary"
              }`}
            />
            {formik.touched.author && formik.errors.author && (
              <p className="mt-1 text-xs text-destructive">{formik.errors.author}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Cover Image</label>
            {data?.coverImage && (
              <img src={data.coverImage} alt="Current cover" className="mb-2 h-32 w-auto rounded-lg object-cover" />
            )}
            <label
              htmlFor="coverImage"
              className={`flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed px-4 py-8 text-sm transition hover:border-primary hover:text-primary ${
                formik.touched.coverImage && formik.errors.coverImage
                  ? "border-destructive text-destructive"
                  : "border-slate-300 text-slate-500"
              }`}
            >
              {formik.values.coverImage ? formik.values.coverImage.name : "Click to replace the image"}
            </label>
            <input
              id="coverImage"
              type="file"
              accept="image/*"
              name="coverImage"
              className="sr-only"
              onChange={(event) => {
                const files = event.currentTarget.files
                if (files && files.length > 0) {
                  formik.setFieldValue("coverImage", files[0])
                }
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.coverImage && formik.errors.coverImage && (
              <p className="mt-1 text-xs text-destructive">{formik.errors.coverImage}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              id="isPublished"
              type="checkbox"
              name="isPublished"
              checked={formik.values.isPublished}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-2 focus:ring-primary/30"
            />
            <label htmlFor="isPublished" className="text-sm font-medium text-slate-700">
              Published
            </label>
          </div>

          {errorMsg && (
            <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving Changes
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditBlogPage