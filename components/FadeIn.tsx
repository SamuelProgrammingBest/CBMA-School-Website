import React from "react"
import { motion } from "motion/react"

const FadeIn = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} // FIXED: Reduced y-offset from 40 to 20 so items don't feel sluggish or jumpy on mobile scrolls
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }} // FIXED: Speed up animation slightly to 0.5s for a snappier mobile interface feel
    viewport={{ amount: 0.05, once: true }} // FIXED: Changed 0.25 to 0.05 (5%) so long, tall sections instantly animate on small phone screens
    className={className}
  >
    {children}
  </motion.div>
)

export default FadeIn
