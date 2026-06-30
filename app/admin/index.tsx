"use client"
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { apiCall } from '@/lib/api';
import { setToken } from '@/lib/token';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';


const AdminLogin = () => {

    const [errorMsg, setErrorMsg] = useState("")

    const router = useRouter()

      const loginFunc = async (values:Record<string, string>) =>{
        setErrorMsg("")
        try {
            const response = await apiCall({method:"POST", pathName:"/sign-in", body:{...values}})
                setToken(response.data)

                router.push("/admin/dashboard")

        } catch (error) {
            console.log(error)
            setErrorMsg(error instanceof Error ? error.message : "Something went wrong");
        }
      }
    

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },

        onSubmit:(values) => loginFunc(values),

        validationSchema:yup.object({
            email:yup.string().email("Please enter a valid email").required("Email is required"),
            password:yup.string().min(6, "Password must be atleast 6 characters").required("Password is required")
        })
    })

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="fredoka mb-1 text-2xl font-bold text-foreground">
          CBMA <span className="text-primary">Admin</span>
        </h1>
        <p className="mb-6 text-sm text-slate-500">Sign in to manage the school site.</p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
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
              className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-primary/30 ${
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
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-primary/30 ${
                formik.touched.password && formik.errors.password
                  ? "border-destructive"
                  : "border-slate-300 focus:border-primary"
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-xs text-destructive">{formik.errors.password}</p>
            )}
          </div>

          {errorMsg && (
            <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
              Failed to Login
            </p>
          )}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
          >
            {formik.isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : 
              "Sign in"
            }
          </button>
        </form>
      </div>
    </main>
  )
}

export default AdminLogin