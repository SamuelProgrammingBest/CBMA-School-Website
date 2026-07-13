import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"
import { QuoteIcon } from "lucide-react"
import FadeIn from "../FadeIn"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mrs. Faith Omoregie",
      text: "I'm impressed. Keep up the good work",
      role: "Parent",
    },
    {
      name: "Mr. Okonkwo",
      text: "The school is doing well. Thanks to all the staff (teaching and non-teaching). God bless you all",
      role: "Parent",
    },
    {
      name: "Mrs. Bello",
      text: "The school is getting better by the day. Great job. Please keep it up",
      role: "Parent",
    },
    {
      name: "Mr. Ibrahim",
      text: "Excellent job keep it up.",
      role: "Parent",
    },
    {
      name: "Mrs. Chukwu",
      text: "Thank you for the good work. God bless you",
      role: "Parent",
    },
  ]

  return (
    <FadeIn className="mx-auto max-w-6xl px-4 md:px-6 overflow-hidden">
      <h2 className="fredoka mb-10 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
        What Parents Are <span className="text-primary">Saying</span>
      </h2>

      {/* ✅ no px-10 on mobile, only on md+ */}
      <div className="relative">
        <Carousel className="w-full px-2 md:px-10">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                {/* ✅ p-9 → p-5 on mobile, p-9 on desktop */}
                <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-9">
                  <QuoteIcon width={30} height={30} color="#6EE7B7" />

                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-md text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="mt-2 mb-4 text-gray-600">{t.text}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                  <div className="mt-4 h-[2.5px] w-12 rounded-full bg-primary" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* ✅ hide buttons on mobile, users can swipe */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* ✅ swipe hint on mobile only */}
        <p className="mt-4 text-center text-sm text-slate-400 md:hidden">
          Swipe to see more →
        </p>
      </div>
    </FadeIn>
  )
}

export default Testimonials
