import React from "react"
import { motion } from "motion/react"
import { Button } from "../ui/button"
import { PartyPopper } from "lucide-react"
import FadeIn from "../FadeIn"
import Link from "next/link"

const AdmissionAd = () => {
  return (
    <FadeIn>
      {/* ✅ p-16 → p-6 md:p-16 */}
      <div className="flex flex-col items-center justify-center gap-8 p-6 md:p-16">
        
        {/* ✅ scale down heading on mobile */}
        <motion.h1 className="fredoka text-center text-2xl font-bold text-accent md:text-4xl">
          WE ARE OPEN FOR ADMISSION
        </motion.h1>

        <div className="flex items-center justify-center gap-4">
          <PartyPopper className="h-8 w-8 text-accent md:h-12 md:w-12" />
          <PartyPopper className="h-8 w-8 text-accent md:h-12 md:w-12" />
          <PartyPopper className="h-8 w-8 text-accent md:h-12 md:w-12" />
          <PartyPopper className="h-8 w-8 text-accent md:h-12 md:w-12" />
        </div>

        {/* ✅ w-250px (broken) → w-full max-w-2xl */}
        <p className="w-full max-w-2xl text-center text-[16px] text-secondary">
          Admissions for the new academic session are officially ongoing at Cornerstone Baptist Model Academy! We invite parents and guardians seeking a holistic, values-driven, and academically rigorous environment for their children to apply. Enroll your child today and partner with us to build a solid foundation for their future!
        </p>

        {/* ✅ w-[500px] → w-full max-w-[500px] */}
        <motion.img
          src="/assets/admission.png"
          alt="Serious student"
          className="aspect-4/3 w-full max-w-125 rounded-md object-cover"
        />

        <Link href="/apply" target="_blank">
        <Button className="text-md cursor-pointer bg-primary opacity-90 p-5 text-white hover:opacity-100">
          Apply Now
        </Button>
        </Link>
      </div>
    </FadeIn>
  )
}

export default AdmissionAd
