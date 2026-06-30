import React from "react"
import { motion } from "motion/react"
import { Button } from "../ui/button"
import Link from "next/link"
import { WholeWordIcon } from "lucide-react"
import FadeIn from "../FadeIn"

const AboutLanding = () => {
  return (
    <FadeIn
      className="relative flex w-full flex-col items-center justify-center gap-4 px-6 md:w-[50%] md:px-0"
    >
      <div className="rounded-md bg-primary p-2 text-sm font-semibold text-white">
        About CBMA
      </div>

      {/* ✅ Fixed: w-[75%] → w-full on mobile, 75% on larger screens */}
      <div className="w-full text-center text-secondary md:w-[75%]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          itaque accusantium quos nihil deserunt cum perferendis, esse ipsam
          necessitatibus asperiores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          consectetur eius dolores eaque, sunt aperiam eveniet, nemo numquam
          nostrum quos quisquam fugit magni quod neque nam reiciendis ex illum
          repellat commodi?
        </p>

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
      <img
        src="/assets/medium.jpg"
        alt="Children playing"
        className="absolute top-15 -left-60 hidden -rotate-10 rounded-md drop-shadow-2xl lg:block"
      />

      <img
        src="/assets/medium.jpg"
        alt="Children playing"
        className="absolute -right-60 bottom-15 hidden rotate-10 rounded-md drop-shadow-2xl lg:block"
      />
    </FadeIn>
  )
}

export default AboutLanding
