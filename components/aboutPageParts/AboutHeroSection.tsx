import React from "react"
import FadeIn from "../FadeIn"
import { motion } from "framer-motion"

const AboutHero = () => (
  <section className="w-full">
    <motion.p
      className="mb-5 text-center text-[15px] font-medium text-accent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      GET TO KNOW US
    </motion.p>

    {/* Background image — this stays the same */}
    <div className="relative flex h-screen w-full items-center">
      <motion.img
        src="/assets/3907.jpg"
        alt="Children posing"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "90%",
          height: "100%",
          borderRadius: "20px",
          objectFit: "cover",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      />

      <motion.div
        className="absolute inset-0 mx-auto w-[90%] rounded-[20px] bg-black/40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      />

      {/* ✅ Fixed: responsive padding instead of absolute left-40 */}

      <FadeIn className="z-100 px-10 md:px-20 lg:px-28">
        <h1 className="fredoka text-3xl leading-relaxed font-semibold md:text-4xl lg:text-5xl">
          About <span className="text-accent">CBMA</span>
        </h1>
        <p className="text-md mx-auto mt-4 max-w-xl text-accent md:text-base">
          Over two decades of shaping young minds and building bold futures.
        </p>
      </FadeIn>
    </div>
  </section>
)

export default AboutHero
