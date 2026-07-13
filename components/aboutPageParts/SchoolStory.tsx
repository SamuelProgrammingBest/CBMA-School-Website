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
          CBMA began with just 7 learners and a dedicated team of 5 staff
          members who believed in that vision. Though our beginning was humble,
          our commitment to raising children in an environment of Godliness,
          Diligence, and Excellence has never changed. By God's grace, the trust
          of our parents, and the dedication of our staff, the school has grown
          remarkably. Today, Cornerstone Baptist Model Academy is proud to serve
          over 100 learners with the support of more than 25 committed members
          of staff, all working together to provide a safe, nurturing, and
          inspiring learning environment.
        </p>
        <p className="text-[16px] leading-relaxed text-slate-600">
          As we continue to grow, we remain committed to the vision upon which
          the school was founded—raising confident, disciplined, God-fearing,
          and academically excellent learners who will positively impact their
          families, communities, and the nation. Our story is one of faith,
          growth, and purpose, and we look forward to writing many more chapters
          of excellence in the years ahead.
        </p>
      </div>
    </div>
  </FadeIn>
  //   </section>
)

export default SchoolStory
