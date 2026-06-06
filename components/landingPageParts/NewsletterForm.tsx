import { Button } from "../ui/button"
import FadeIn from "../FadeIn"

const NewsletterForm = () => {
  return (
    <FadeIn className="dotted w-full rounded-lg p-6 text-center text-white md:p-16">
      {/* ✅ w-1/2 → w-full on mobile, w-1/2 on desktop */}
      <div className="mx-auto w-full rounded-lg bg-white p-6 py-6 md:w-1/2 md:p-10 md:py-12">
        <h2 className="fredoka mb-2 font-heading text-2xl font-semibold text-foreground md:text-3xl">
          Stay in the <span className="text-primary">Loop</span>
        </h2>
        <p className="mb-6 text-secondary">
          Get updates on events, admissions and school news
        </p>

        {/* ✅ flex-col on mobile, flex-row on desktop */}
        <div className="mx-auto flex max-w-md flex-col gap-3 px-4 lg:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl px-4 py-3 text-gray-800 outline focus:outline-2 focus:outline-accent"
          />
          <Button className="text-md w-full cursor-pointer rounded-xl bg-primary p-6 font-bold text-white transition hover:bg-emerald-700 lg:w-auto">
            Subscribe
          </Button>
        </div>
      </div>
    </FadeIn>
  )
}

export default NewsletterForm
