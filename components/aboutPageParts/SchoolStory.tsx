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
          Every great institution begins with a vision, and Cornerstone Baptist
          Model Academy (CBMA) is no exception. Established in September 2018 by
          Cornerstone Baptist Church, the school was founded through the
          God-given vision of Late Rev. Dr. Moses Olurotimi Owolabi, whose
          passion was to provide quality, Christ-centred education that nurtures
          both academic excellence and godly character.
        </p>
        <p className="text-[16px] leading-relaxed text-slate-600">
          From a humble beginning of just 7 learners and 5 dedicated staff members, CBMA has grown into a thriving school with over 100 learners and more than 25 committed staff. This growth reflects God's faithfulness, the trust of our parents, and the dedication of our team.
        </p>
        <p className="text-[16px] leading-relaxed text-slate-600">
          Today, we remain committed to raising confident, disciplined, God-fearing learners who are equipped to excel academically and make a positive impact in their communities and beyond.
        </p>
      </div>
    </div>
  </FadeIn>
  //   </section>
)

export default SchoolStory
