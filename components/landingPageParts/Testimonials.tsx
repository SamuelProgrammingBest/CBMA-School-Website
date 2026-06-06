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
      name: "Mrs. Adeyemi",
      text: "My daughter has blossomed since joining CBMA. The teachers are exceptional.",
      role: "Parent",
    },
    {
      name: "Mr. Okonkwo",
      text: "The level of attention each child gets here is unlike any school I've seen.",
      role: "Parent",
    },
    {
      name: "Mrs. Bello",
      text: "CBMA gave my son the confidence he needed. We couldn't be happier.",
      role: "Parent",
    },
    {
      name: "Mr. Ibrahim",
      text: "Academic excellence plus strong moral values. Exactly what we wanted.",
      role: "Parent",
    },
    {
      name: "Mrs. Chukwu",
      text: "The school events and communication with parents is top notch.",
      role: "Parent",
    },
  ]

  return (
    <FadeIn className="mx-auto max-w-6xl px-4 md:px-6">
      <h2 className="fredoka mb-10 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
        What Parents Are <span className="text-primary">Saying</span>
      </h2>

      {/* ✅ no px-10 on mobile, only on md+ */}
      <div className="relative md:px-10">
        <Carousel className="w-full">
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
                  <p className="font-heading font-bold text-primary">
                    {t.name}
                  </p>
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
