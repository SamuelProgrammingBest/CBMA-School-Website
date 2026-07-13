import React from "react"
import { motion } from "motion/react"
import { Button } from "../ui/button"
import Link from "next/link"
import { WholeWordIcon } from "lucide-react"
import FadeIn from "../FadeIn"
import Image from "next/image"

const AboutLanding = () => {
  return (
    <FadeIn className="relative flex w-full flex-col items-center justify-center gap-4 px-6 md:w-[50%] md:px-0">
      <div className="rounded-md bg-primary p-2 text-sm font-semibold text-white">
        About CBMA
      </div>

      {/* ✅ Fixed: w-[75%] → w-full on mobile, 75% on larger screens */}
      <div className="w-full text-center text-secondary md:w-[75%]">
        At Cornerstone Baptist Model Academy (CBMA), we believe that every child
        has the potential to achieve greatness. Through a unique blend of
        quality education, Christian values, and a nurturing learning
        environment, we equip our learners with the knowledge, character, and
        confidence they need to thrive.
        <br />
        Since our establishment in September 2018, we have remained committed to raising
        learners who are academically sound, morally upright, spiritually
        grounded, and prepared to make a positive impact wherever they go.
        <br />
        Guided by our motto, Godliness • Diligence • Excellence, we inspire
        every learner to discover their purpose, pursue excellence, and become
        responsible leaders for tomorrow.
        Discover a place where learning is meaningful, character is built, and
        every child is empowered to succeed.
        {/* <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="cursor-pointer">
            <Button className="cursor-pointer bg-primary p-5">Enquire</Button>
          </Link>
          <Button className="cursor-pointer bg-primary p-5">
            <WholeWordIcon width={30} height={30} />
            Ask more on Whatsapp
          </Button>
        </div> */}
      </div>

      {/* ✅ Fixed: hidden on mobile, only shows on large screens */}
      <Image
        width={200}
        height={250}
        src="/assets/firstAbt.jpg"
        alt="Children playing"
        className="absolute top-15 -left-60 hidden -rotate-10 rounded-md drop-shadow-2xl lg:block"
      />

      <Image
        width={210}
        height={250}
        src="/assets/secondAbt.jpg"
        alt="Children playing"
        className="absolute -right-60 bottom-15 hidden rotate-10 rounded-md drop-shadow-2xl lg:block"
      />
    </FadeIn>
  )
}

export default AboutLanding
