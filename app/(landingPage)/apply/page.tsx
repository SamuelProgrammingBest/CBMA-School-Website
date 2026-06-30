"use client"
import React, { useState } from "react"
import { useFormik, setNestedObjectValues } from "formik"
import * as yup from "yup"
import { apiCall } from "@/lib/api"
import FormField from "@/components/FormField"
import { Loader2, Router } from "lucide-react"
import { steps, validationSchema } from "@/lib/steps"
import { useRouter } from "next/navigation"

const stepFieldNames = steps.map((step) => step.fields.map((f) => f.name))

const AdmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const submitApplication = async (values: Record<string, any>) => {
    setErrorMsg("")
    setLoading(true)
    try {
      const formData = new FormData()
      Object.entries(values).forEach(([key, value]) => {
        if (value !== null && value !== undefined) formData.append(key, value as any)
      })

      await apiCall({ method: "POST", pathName: "/apply", body: formData })
      setSubmitted(true)
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      surname: "", middleName: "", firstName: "", dob: "", sex: "", nationality: "",
      stateOfOrigin: "", bloodGroup: "", ailment: "", onMedication: "",
      criesOften: false, criesOftenReason: "", childPhoto: null,
      parentName: "", homeAddress: "", phone: "", occupation: "", officeAddress: "",
      officePhone: "", email: "", parentPhoto: null,
      assigneeName: "", assigneePhoto: null, emergencyName: "", emergencyRelationship: "",
      emergencyOccupation: "", emergencyAddress: "", emergencyPhone: "",
      signedName: "", certifiedAccurate: false,
    },
    validationSchema,
    onSubmit: (values) => submitApplication(values),
  })

  const handleFinalSubmit = async () => {
    const errors = await formik.validateForm()

    if (Object.keys(errors).length > 0) {
      formik.setTouched(setNestedObjectValues(errors, true))
      const stepWithError = stepFieldNames.findIndex((fields) =>
        fields.some((field) => errors[field as keyof typeof errors])
      )
      if (stepWithError !== -1) setCurrentStep(stepWithError)
      return
    }

    formik.handleSubmit()
  }

  if (submitted) {
    router.push("/")
    return (
      <div className="mx-auto max-w-lg px-6 py-24 text-center">
        <h1 className="fredoka text-2xl font-bold text-foreground">Application Received</h1>
        <p className="mt-2 text-slate-500">
          Thank you for applying to CBMA. We'll be in touch soon regarding next steps.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-xs font-medium text-slate-500">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span>{steps[currentStep].title}</span>
        </div>
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${i <= currentStep ? "bg-primary" : "bg-slate-200"}`}
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-5">
          {steps[currentStep].fields.map((field) => (
            <FormField key={field.name} field={field} formik={formik} />
          ))}
        </div>

        {errorMsg && (
          <p className="mt-4 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{errorMsg}</p>
        )}

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={() => setCurrentStep((s) => s - 1)}
            disabled={currentStep === 0}
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40"
          >
            Back
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((s) => s + 1)}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinalSubmit}
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdmissionForm