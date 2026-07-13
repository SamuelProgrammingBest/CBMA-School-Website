"use client"
import FadeIn from "@/components/FadeIn"
import SectionHeader from "@/components/SectionHeader"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BookCheckIcon,
  Calendar,
  GraduationCap,
  PersonStandingIcon,
  Phone,
  SchoolIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaCity } from "react-icons/fa6"

const AdmissionPage = () => {
  const features = [
    {
      title: "Experienced Faculty",
      description:
        "Our dedicated teachers bring years of experience and a passion for education.",
      icon: <SchoolIcon className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Modern Facilities",
      description:
        "State-of-the-art classrooms and learning environments designed for optimal education.",
      icon: <FaCity className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "A well-rounded education that prepares students for future academic and personal success.",
      icon: <BookCheckIcon className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Personalized Attention",
      description:
        "Small class sizes ensure each student receives the individualized support they need.",
      icon: <PersonStandingIcon className="h-8 w-8 text-emerald-500" />,
    },
  ]

  const steps = [
    {
      title: "Application Submission",
      desc: "Complete the online application form and submit all required documents.",
    },
    {
      title: "Document Verification",
      desc: "Our team will review your submitted documents for completeness.",
    },
    {
      title: "Admission Interview",
      desc: "Schedule and attend an interview with our admissions committee.",
    },
    {
      title: "Offer of Admission",
      desc: "Receive your admission decision and next steps for enrollment.",
    },
  ]

  const faqs = [
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      title: "How can I contact the school?",
      text: "You can reach us by phone at +234 800 000 0000, email us at info@cbma.edu.ng, or visit our office at 123 School Road, Abuja, Nigeria.",
    },
    {
      icon: <Calendar className="h-5 w-5 text-accent" />,
      title: "When is the school open?",
      text: "Our school is open from Monday to Friday, 8:00 AM to 4:00 PM.",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-accent" />,
      title: "What are the admission requirements?",
      text: "To apply for admission, please submit your child's birth certificate, academic transcripts, and a completed application form.",
    },
  ]

  return (
    <main className="min-h-screen">
      <SectionHeader
        badge="ADMISSIONS"
        title="Begin Your Child's Journey at"
        highlight="CBMA"
        desc="Admissions are now open for the new academic session."
      />

      <FadeIn className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold text-primary">WHY CBMA</p>
            <h2 className="text-2xl font-bold md:text-3xl">
              Why Parents Choose Us
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="text-md rounded-3xl border-slate-200 p-6 transition hover:-translate-y-2 hover:shadow-lg"
              >
                {feature.icon}
                <h3 className="mt-4 font-bold">{feature.title}</h3>
                <p className="mt-2 text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="bg-slate-50 py-12 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Admission Process
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-white">
                  {i + 1}
                </div>

                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>

                <p className="text-md mt-2 text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">
              Admission Requirements
            </h2>

            <ul className="space-y-4 text-secondary">
              <li>✓ Completed Application Form</li>

              <li>✓ Birth Certificate</li>

              <li>✓ Passport Photographs</li>

              <li>✓ Previous Academic Records</li>

              <li>✓ Parent/Guardian Information</li>
            </ul>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="py-12 md:py-24">
        {/* defaultValue="item-0" keeps first item open */}
        <div className="mx-auto max-w-5xl px-6">
          {/* <h2 className="fredoka text-md mb-2 font-bold text-accent">
            FREQUENTLY ASKED QUESTIONS
          </h2> */}
          <p className="mb-2 text-center text-sm font-bold text-primary uppercase">
            Frequently asked questions
          </p>

          <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">
            Common <span className="text-primary">Questions</span>
          </h2>
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="flex gap-4 text-left font-bold text-foreground">
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                      {faq.icon}
                    </span>
                    {faq.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-md pb-3 pl-11 leading-relaxed text-slate-600">
                  {faq.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeIn>

      <FadeIn className="dotted px-6 py-12 text-center md:py-24">
        <h2 className="fredoka mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Ready to Join the <span className="text-primary">CBMA Family?</span>
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-slate-600">
          Give your child the foundation they deserve. Applications are open.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/admissions">
            <Button className="w-full cursor-pointer bg-primary px-8 py-5 font-bold text-white hover:bg-emerald-700 sm:w-auto">
              Apply Now
            </Button>
          </Link>
        </div>
      </FadeIn>
    </main>
  )
}

export default AdmissionPage
