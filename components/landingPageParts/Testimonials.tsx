import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { QuoteIcon } from "lucide-react"
import FadeIn from "../FadeIn"

const Testimonials = () => {
  const testimonials = [
    { name: "Mrs. Faith Omoregie", text: "I'm impressed. Keep up the good work", role: "Parent" },
    { name: "Mr. Okonkwo", text: "The school is doing well. Thanks to all the staff (teaching and non-teaching). God bless you all", role: "Parent" },
    { name: "Mrs. Bello", text: "The school is getting better by the day. Great job. Please keep it up", role: "Parent" },
    { name: "Mr. Ibrahim", text: "Excellent job keep it up.", role: "Parent" },
    { name: "Mrs. Chukwu", text: "Thank you for the good work. God bless you", role: "Parent" },
    { name: "Mrs. Chukwu", text: "Good works by the teacher", role: "Parent" },
    { name: "Mrs. Chukwu", text: "Thank you for the good work. God bless you", role: "Parent" },
    { name: "Mrs. Chukwu", text: "We can see the improvement and are very appreciative for a job well done", role: "Parent" },
    { name: "Mrs. Chukwu", text: "I have observed a tremendous improvement in my child's performance. I appreciate the teachers effort. May God continue to help you and the school at large", role: "Parent" },
    { name: "Mrs. Chukwu", text: "The teacher's are doing a wonderful job", role: "Parent" },
  ]

  return (
    /* FIXED: If it still disappears, temporarily swap <FadeIn> for a standard <section className="mx-auto max-w-6xl px-4 md:px-6 mt-12"> to test if the animation is blocking it! */
    <FadeIn className="mx-auto max-w-6xl px-4 md:px-6 w-full overflow-hidden"> 
      <h2 className="fredoka mb-10 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
        What Parents Are <span className="text-primary">Saying</span>
      </h2>

      {/* FIXED: Enforced w-full and overflow-hidden layout safety barriers for small phone width constraints */}
      <div className="relative px-2 md:px-12 w-full overflow-hidden">
        
        {/* FIXED: Scaled margins and structured layout width rules safely */}
        <Carousel className="w-full px-0 md:px-10 overflow-hidden">
          <CarouselContent className="-ml-2 md:-ml-4"> {/* Enforces standard horizontal tracking gaps */}
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                {/* FIXED: flex flex-col h-full keeps the inner layout sizing predictable even if text lengths differ */}
                <div className="relative flex flex-col justify-between h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-9 mx-1">
                  <div>
                    <QuoteIcon width={30} height={30} color="#6EE7B7" className="mb-2" />

                    <div className="mb-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-md text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="mt-2 mb-4 text-gray-600 text-sm sm:text-base leading-relaxed">{t.text}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                    <div className="mt-3 h-[2.5px] w-12 rounded-full bg-primary" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Hide navigation arrow discs on mobile, users naturally swipe */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Swipe indicator layout visible exclusively on small viewports */}
        <p className="mt-4 text-center text-sm text-slate-400 md:hidden">
          Swipe to see more →
        </p>
      </div>
    </FadeIn>
  )
}

export default Testimonials
