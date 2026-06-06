import Image from "next/image"
import FadeIn from "../FadeIn"

const MissionLanding = () => {
  return (
    <FadeIn>
      {/* ✅ flex-col on mobile, flex-row on desktop */}
      <div className="flex w-full flex-col items-center justify-center gap-8 p-6 md:flex-row md:p-8">
        
        {/* ✅ Fixed image size — full width on mobile, fixed on desktop */}
        <Image
          src="/assets/medium.jpg"
          alt="Mission Image"
          className="h-75 w-full rounded-md object-cover md:h-100 md:w-100"
          width={400}
          height={300}
        />

        {/* ✅ Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="mb-2 text-[14px] font-bold text-primary">OUR MISSION</p>
          <h1 className="mb-4 text-[24px] font-bold text-accent md:text-[30px]">
            Nurturing Young Minds, Building Bright Futures
          </h1>
          <p className="text-[16px] text-secondary leading-relaxed">
            At Cornerstone Baptist Model Academy, our mission is to provide a
            nurturing and inclusive environment where every child can thrive
            academically, socially, and emotionally. We are committed to
            fostering a love for learning, promoting character development, and
            preparing our students to become responsible global citizens who
            will make a positive impact on the world.
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

export default MissionLanding
