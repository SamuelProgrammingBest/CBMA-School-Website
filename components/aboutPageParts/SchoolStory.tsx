import Image from "next/image"
import FadeIn from "../FadeIn"

const SchoolStory = () => (
  //   <section className="mx-auto max-w-6xl px-6 py-16">
  <FadeIn className="py-12 md:py-24">
    <div className="flex w-full flex-col items-center justify-center gap-8 px-6 py-4 md:flex-row md:p-8">
      <Image
        src="/assets/started.jpg"
        alt="School founding"
        className="h-75 w-full rounded-3xl object-cover md:h-100 md:w-1/2"
        width={400}
        height={300}
      />
      <div className="w-full text-center md:w-1/2 md:text-left">
        <p className="mb-2 text-sm font-bold text-primary">OUR STORY</p>
        <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
          Where It All <span className="text-primary">Began</span>
        </h2>
        <p className="mb-4 text-[16px] leading-relaxed text-slate-600">
          Cornerstone Baptist Model Academy was founded in 2003 with a simple
          but powerful vision — to create a school where every child is seen,
          heard and empowered to reach their full potential.
        </p>
        <p className="text-[16px] leading-relaxed text-slate-600">
          What started as a small community school has grown into one of the
          most respected academic institutions in the region, with over 500
          students, 40 qualified teachers, and a track record of excellence that
          speaks for itself.
        </p>
      </div>
    </div>
  </FadeIn>
  //   </section>
)

export default SchoolStory
