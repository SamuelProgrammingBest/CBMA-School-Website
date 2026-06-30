"use client"
import Image from "next/image"
import React, { useState } from "react"
import FadeIn from "../FadeIn"
import { useFormik } from "formik"
import * as yup from "yup"
import { apiCall } from "@/lib/api"
import { Loader2 } from "lucide-react"

const ContactForm = () => {
  const [errorMsg, setErrorMsg] = useState("")
  const [loading, setLoading] = useState(false)

  const submitEnquiry = async (value: Record<string, any>) => {
    setErrorMsg("")
    setLoading(true)
    try {
      const response = await apiCall({
        method: "POST",
        pathName: "/create-enquiry",
        body: {
          parentName: value.name,
          email: value.email,
          phone: value.phoneNo,
          message: value.message,
        },
      })
      console.log(response.message)
      formik.resetForm()
    } catch (error) {
      setErrorMsg(error instanceof Error ? `There is an error: ${error.message}` : "")
    } finally {
      setLoading(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNo: "",
      message: "",
    },
    onSubmit: (values) => submitEnquiry(values),
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      email: yup.string().email("Please enter a valid email").required("Email is required"),
      phoneNo: yup.string().required("Phone Number is required"),
      message: yup.string().required("Message is required"),
    }),
  })

  return (
    <FadeIn className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Send Us A Message</h2>

          <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full rounded-xl border p-4 transition focus:border-2 focus:outline-none ${
                  formik.touched.name && formik.errors.name
                    ? "border-destructive"
                    : "border-slate-300 focus:border-primary"
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-xs text-destructive">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full rounded-xl border p-4 transition focus:border-2 focus:outline-none ${
                  formik.touched.email && formik.errors.email
                    ? "border-destructive"
                    : "border-slate-300 focus:border-primary"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-xs text-destructive">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phoneNo" className="mb-1 block text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <input
                id="phoneNo"
                type="text"
                name="phoneNo"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full rounded-xl border p-4 transition focus:border-2 focus:outline-none ${
                  formik.touched.phoneNo && formik.errors.phoneNo
                    ? "border-destructive"
                    : "border-slate-300 focus:border-primary"
                }`}
              />
              {formik.touched.phoneNo && formik.errors.phoneNo && (
                <p className="mt-1 text-xs text-destructive">{formik.errors.phoneNo}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full rounded-xl border p-4 transition focus:border-2 focus:outline-none ${
                  formik.touched.message && formik.errors.message
                    ? "border-destructive"
                    : "border-slate-300 focus:border-primary"
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="mt-1 text-xs text-destructive">{formik.errors.message}</p>
              )}
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
                  Submitting
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/assets/3907.jpg"
            alt="Children playing in school"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </FadeIn>
  )
}

export default ContactForm