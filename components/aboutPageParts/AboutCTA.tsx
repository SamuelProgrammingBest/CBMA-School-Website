import Link from "next/link"
import FadeIn from "../FadeIn"
import { Button } from "../ui/button"

const AboutCTA = () => (
  <FadeIn className="py-12 md:py-24">
    <section className="dotted px-6 py-16 text-center">
      <h2 className="fredoka mb-4 text-3xl font-bold text-foreground md:text-4xl">
        Ready to Join the <span className="text-primary">CBMA Family?</span>
      </h2>
      <p className="mx-auto mb-8 max-w-lg text-slate-600">
        Give your child the foundation they deserve. Applications are open.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link href="/apply" target="_blank">
          <Button className="w-full cursor-pointer bg-primary px-8 py-5 font-bold text-white hover:bg-emerald-700 sm:w-auto">
            Apply Now
          </Button>
        </Link>
        <Link href="/contact">
          <Button className="w-full cursor-pointer border-2 border-primary bg-transparent px-8 py-5 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white sm:w-auto">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  </FadeIn>
)

export default AboutCTA
