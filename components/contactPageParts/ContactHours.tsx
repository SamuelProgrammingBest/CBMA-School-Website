import React from "react"
import FadeIn from "../FadeIn"

const ContactHours = () => {
  return (
    <FadeIn className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <span className="font-semibold">Administrative Office Hours</span>
        </div>

        <div className="mt-6 divide-y md:divide-y-0 md:grid md:grid-cols-2">
          <p>Monday - Friday: 8:00am - 4:00pm</p>
          <p>Saturday: 9:00am - 1:00pm</p>
        </div>
      </div>
    </FadeIn>
  )
}

export default ContactHours
