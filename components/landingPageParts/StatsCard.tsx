import { motion } from "motion/react"
import { GraduationCap, Trophy, User2Icon } from "lucide-react"
import CountUp from "react-countup"
import FadeIn from "../FadeIn"

const StatsCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  }

  let stats = [
    {
      icon: <User2Icon width={50} height={50} />,
      header: "500+",
      text: "Students",
    },
    {
      icon: <GraduationCap width={50} height={50} />,
      header: "40+",
      text: "Qualified Teachers",
    },
    {
      icon: <Trophy width={50} height={50} />,
      header: "99.9%",
      text: "Success Rate",
    },
  ]

  return (
    <FadeIn>
      <div className="p-6">
        {/* // Only the heading + subtext needed scaling — everything else was fine */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-center text-2xl font-bold text-accent md:text-[30px]">
            A Legacy of Excellence
          </h1>
          <p className="text-center text-[15px] text-secondary md:text-[16px]">
            Since our establishment, we have been committed to providing an
            exceptional educational experience that fosters growth, creativity,
            and academic excellence.
          </p>
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-evenly gap-6 md:flex-row">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2, once: true }}
              whileHover={{ y: -8 }}
              className="group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl bg-primary p-6 text-left text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20 md:w-1/3"
            >
              {/* Subtle academic geometric watermark effect in background */}
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-bl-full bg-white/3 transition-all duration-500 group-hover:scale-150 group-hover:bg-white/6" />

              {/* Top Section: Icon and Visual Accent */}
              <div className="mb-6 flex w-full items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 p-1 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
              </div>

              {/* Middle Section: The Big Stat Container */}
              <div className="mb-4">
                <h1 className="flex items-baseline gap-1 text-4xl font-black tracking-tight">
                  <CountUp
                    start={0}
                    end={parseInt(stat.header)}
                    duration={2}
                    className="font-sans text-white drop-shadow-sm"
                  />
                  <span className="inline-block text-2xl font-semibold text-destructive transition-transform duration-300 group-hover:translate-x-1">
                    +
                  </span>
                </h1>
              </div>

              {/* Bottom Section: Label with an uncommon asymmetrical border divider */}
              <div className="relative w-full pt-4">
                {/* Asymmetrical line that grows from the left on hover */}
                <div className="absolute top-0 left-0 h-0.5 w-8 bg-destructive transition-all duration-300 group-hover:w-full" />

                <p className="text-lg font-medium tracking-wide text-emerald-100 transition-colors duration-300 group-hover:text-white">
                  {stat.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export default StatsCard
