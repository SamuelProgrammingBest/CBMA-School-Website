"use client"
import { useFormik } from "formik"
import * as yup from "yup"
import { useParams, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { Loader2 } from "lucide-react"
import { apiCall } from "@/lib/api"
import { GalleryImage } from "../../page"
import Link from "next/link"

const EditGalleryImagePage = () => {
  const params = useParams()
  const router = useRouter()
  const { id } = params

  const [errorMsg, setErrorMsg] = useState("")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<GalleryImage>()

  const { token } = useAuth()

  const getImage = async () => {
    setErrorMsg("")
    try {
      const originalImage = await apiCall({
        method: "GET",
        token: token || undefined,
        pathName: `/get-image/${id}`,
      })
      setData(originalImage.data)
    } catch (error) {
      setErrorMsg(error instanceof Error ? `There is an error: ${error.message}` : "")
    }
  }

  const editImage = async (value: Record<string, any>) => {
    setErrorMsg("")
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append("title", value.title)
      formData.append("description", value.description)
      if (value.image) formData.append("image", value.image)

      const response = await apiCall({
        method: "PATCH",
        pathName: `/update-image/${id}`,
        token: token || undefined,
        body: formData,
      })

      console.log(response.message)
      router.push("/admin/dashboard/gallery")
    } catch (error) {
      setErrorMsg(error instanceof Error ? `There is an error: ${error.message}` : "")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getImage()
  }, [id, token])

  const formik = useFormik({
    initialValues: {
      title: data?.title || "",
      description: data?.description || "",
      image: null as File | null,
    },
    enableReinitialize: true,
    onSubmit: (values) => editImage(values),
    validationSchema: yup.object({
      title: yup.string().required("Title is required"),
      description: yup.string().required("Description is required"),
      image: yup
        .mixed()
        .nullable()
        .test("fileType", "Unsupported File Format", (value) => {
          if (!value) return true
          const file = value as File
          return ["image/jpeg", "image/png", "image/webp"].includes(file.type)
        }),
    }),
  })

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href="/admin/dashboard/gallery"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-primary"
      >
        ← Back to Gallery
      </Link>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="fredoka text-2xl font-bold text-foreground">Edit Gallery Image</h1>
        <p className="mt-1 mb-6 text-sm text-slate-500">Update the details or replace the photo.</p>

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
            <label htmlFor="description" className="mb-1 block text-sm font-medium text-slate-700">
              Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 focus:ring-primary/30 ${
                formik.touched.description && formik.errors.description
                  ? "border-destructive"
                  : "border-slate-300 focus:border-primary"
              }`}
            />
            {formik.touched.description && formik.errors.description && (
              <p className="mt-1 text-xs text-destructive">{formik.errors.description}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Image</label>
            {data?.image && (
              <img src={data.image} alt="Current" className="mb-2 h-32 w-auto rounded-lg object-cover" />
            )}
            <label
              htmlFor="image"
              className={`flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed px-4 py-8 text-sm transition hover:border-primary hover:text-primary ${
                formik.touched.image && formik.errors.image
                  ? "border-destructive text-destructive"
                  : "border-slate-300 text-slate-500"
              }`}
            >
              {formik.values.image ? formik.values.image.name : "Click to replace the image"}
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              name="image"
              className="sr-only"
              onChange={(event) => {
                const files = event.currentTarget.files
                if (files && files.length > 0) {
                  formik.setFieldValue("image", files[0])
                }
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.image && formik.errors.image && (
              <p className="mt-1 text-xs text-destructive">{formik.errors.image}</p>
            )}
          </div>

          {errorMsg && (
            <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60 cursor-pointer"
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

export default EditGalleryImagePage