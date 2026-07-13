import { Button } from "../ui/button"
import FadeIn from "../FadeIn"
import Link from "next/link"

const NewsletterForm = () => {
  return (
    <FadeIn className="py-12 md:py-24">
  <section className="dotted py-16 px-6 text-center">
    <h2 className="fredoka mb-4 text-3xl font-bold text-foreground md:text-4xl">
      Ready to Join the{" "}
      <span className="text-primary">CBMA Family?</span>
    </h2>
    <p className="mb-8 mx-auto max-w-lg text-slate-600">
      Give your child the foundation they deserve. Applications are open.
    </p>
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <Link href="/apply" target="_blank">
        <Button className="w-full bg-primary px-8 py-5 font-bold text-white hover:bg-emerald-700 sm:w-auto cursor-pointer">
          Apply Now
        </Button>
      </Link>
      <Link href="/contact">
        <Button className="w-full border-2 border-primary bg-transparent px-8 py-5 font-bold text-primary hover:bg-primary hover:text-white sm:w-auto transition-all duration-300 cursor-pointer">
          Contact Us
        </Button>
      </Link>
    </div>
  </section>
</FadeIn>
  )
}

export default NewsletterForm
