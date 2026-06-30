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
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ amount: 0.35, once: true }}
    className={className}
  >
    {children}
  </motion.div>
)

export default FadeIn
