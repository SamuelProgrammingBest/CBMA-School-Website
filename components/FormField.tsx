import { FieldConfig } from '@/lib/steps';
import React from 'react'

const FormField = ({ field, formik }: { field: FieldConfig; formik: any }) => {
  if (field.showIf && !field.showIf(formik.values)) return null

  const error = formik.touched[field.name] && formik.errors[field.name]
  const baseInputClass = `w-full rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 focus:ring-primary/30 ${
    error ? "border-destructive" : "border-slate-300 focus:border-primary"
  }`

  if (field.type === "checkbox") {
    return (
      <div className="flex items-center gap-2">
        <input
          id={field.name}
          type="checkbox"
          name={field.name}
          checked={formik.values[field.name]}
          onChange={formik.handleChange}
          className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-2 focus:ring-primary/30"
        />
        <label htmlFor={field.name} className="text-sm font-medium text-slate-700">
          {field.label}
        </label>
      </div>
    )
  }

  if (field.type === "file") {
    return (
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">{field.label}</label>
        <label
          htmlFor={field.name}
          className={`flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed px-4 py-8 text-sm transition hover:border-primary hover:text-primary ${
            error ? "border-destructive text-destructive" : "border-slate-300 text-slate-500"
          }`}
        >
          {formik.values[field.name] ? formik.values[field.name].name : "Click to upload"}
        </label>
        <input
          id={field.name}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => {
            const file = e.currentTarget.files?.[0]
            if (file) formik.setFieldValue(field.name, file)
          }}
          onBlur={formik.handleBlur}
        />
        {error && <p className="mt-1 text-xs text-destructive">{formik.errors[field.name]}</p>}
      </div>
    )
  }

  if (field.type === "select") {
    return (
      <div>
        <label htmlFor={field.name} className="mb-1 block text-sm font-medium text-slate-700">{field.label}</label>
        <select
          id={field.name}
          name={field.name}
          value={formik.values[field.name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={baseInputClass}
        >
          <option value="">Select...</option>
          {field.options?.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        {error && <p className="mt-1 text-xs text-destructive">{formik.errors[field.name]}</p>}
      </div>
    )
  }

  if (field.type === "textarea") {
    return (
      <div>
        <label htmlFor={field.name} className="mb-1 block text-sm font-medium text-slate-700">{field.label}</label>
        <textarea
          id={field.name}
          name={field.name}
          value={formik.values[field.name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={baseInputClass}
        />
        {error && <p className="mt-1 text-xs text-destructive">{formik.errors[field.name]}</p>}
      </div>
    )
  }

  // fallback: plain text/date inputs
  return (
    <div>
      <label htmlFor={field.name} className="mb-1 block text-sm font-medium text-slate-700">{field.label}</label>
      <input
        id={field.name}
        type={field.type}
        name={field.name}
        value={formik.values[field.name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={baseInputClass}
      />
      {error && <p className="mt-1 text-xs text-destructive">{formik.errors[field.name]}</p>}
    </div>
  )
}

export default FormField