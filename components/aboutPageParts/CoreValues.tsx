import {
  BookOpen,
  GraduationCap,
  Heart,
  Shield,
  Trophy,
  Users,
} from "lucide-react"
import FadeIn from "../FadeIn"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const CoreValues = () => {
  const values = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Academic Excellence",
      text: "We hold our students to the highest academic standards while making learning enjoyable.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Integrity",
      text: "We build character alongside knowledge — honesty and moral courage are non-negotiable.",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Compassion",
      text: "Every child matters. We create a culture of kindness, empathy and belonging.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Community",
      text: "We believe education thrives when parents, teachers and students work as one team.",
    },
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      title: "Excellence",
      text: "From sports to arts to academics — we encourage every child to be their best self.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Lifelong Learning",
      text: "We don't just prepare kids for exams. We prepare them for life.",
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn className="mb-12 text-center">
        <p className="mb-2 text-sm font-bold text-primary">WHAT WE STAND FOR</p>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Our Core <span className="text-primary">Values</span>
        </h2>
      </FadeIn>

      <FadeIn>
        {/* defaultValue="item-0" keeps first item open */}
        <Accordion type="single" collapsible defaultValue="item-0">
          {values.map((value, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="flex gap-4 text-left font-bold text-foreground">
                <span className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    {value.icon}
                  </span>
                  {value.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-11 pb-3 text-slate-600 leading-relaxed text-md">
                {value.text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  )
}

export default CoreValues
