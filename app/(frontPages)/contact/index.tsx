"use client"
import ContactForm from "@/components/contactPageParts/ContactForm"
import ContactHours from "@/components/contactPageParts/ContactHours"
import ContactInfo from "@/components/contactPageParts/ContactInfo"
import FadeIn from "@/components/FadeIn"
import SectionHeader from "@/components/SectionHeader"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Calendar, GraduationCap, Phone } from "lucide-react"
import Link from "next/link"
import React from "react"

const ContactPage = () => {
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
        badge="CONTACT US"
        title="Get in Touch with"
        highlight="CBMA"
        desc="Have questions or want to learn more? We're here to help!"
      />

      <ContactInfo />

      <ContactForm />

      <ContactHours />

      <FadeIn className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5110668667276!2d7.411948474067719!3d9.108225287745753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75425b221857%3A0x3c1922e22fbd2f97!2sCornerstone%20Baptist%20Church%20gwarinpa!5e0!3m2!1sen!2sng!4v1780835980078!5m2!1sen!2sng"
            className="h-87.5 w-full md:h-125"
            loading="lazy"
          ></iframe>
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

          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
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

export default ContactPage
