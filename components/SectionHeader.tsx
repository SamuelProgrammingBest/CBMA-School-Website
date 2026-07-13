import { container, item } from "@/lib/utils"
import React from "react"
import { motion } from "motion/react"

const SectionHeader = ({
  badge,
  title,
  highlight,
  desc,
}: {
  badge: string
  title: string
  highlight: string
  desc: string
}) => {
  return (
    <section className="relative overflow-hidden py-14 md:py-24">
      <motion.div
        className="absolute top-0 left-0 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl"
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6 text-center"
        variants={container}
      >
        <motion.span
          className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600"
          variants={item}
        >
          {badge}
        </motion.span>

        <motion.h1
          className="fredoka mt-6 text-3xl font-bold text-slate-900 capitalize md:text-5xl lg:text-6xl"
          variants={item}
        >
          {title}
          <span className="text-accent"> {highlight}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
          variants={item}
        >
          {desc}
        </motion.p>
      </motion.div>
    </section>
  )
}

export default SectionHeader
