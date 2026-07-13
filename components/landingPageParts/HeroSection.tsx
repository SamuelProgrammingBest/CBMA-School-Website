import { motion } from "motion/react"
import { Button } from "../ui/button"
import Link from "next/link"

const HeroSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full">
      <motion.p
        className="mb-5 text-center text-[13px] font-medium text-accent md:text-[15px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        EST. SEPTEMBER 10 2018 | ACADEMIC EXCELLENCE | HOLISTIC DEVELOPMENT
        <br/>
        MOTTO — GODLINESS, DILIGENCE AND EXCELLENCE
      </motion.p>

      <div className="relative flex h-[85vh] w-full items-center md:h-screen">
        <motion.div
          className="absolute right-0 left-0 z-10 mx-auto h-full w-[90%] rounded-[20px] bg-black/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        />
        <motion.img
          src="/assets/hero.jpg"
          alt="Child"
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

        <div className="relative z-10 px-8 md:px-20 lg:px-28">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1
              variants={item}
              className="fredoka text-2xl leading-relaxed font-semibold text-white/90 md:text-4xl lg:text-5xl"
            >
              Where Bright Minds
            </motion.h1>
            <motion.h1
              variants={item}
              className="fredoka text-2xl leading-relaxed font-semibold text-white/90 md:text-4xl lg:text-5xl"
            >
              Bloom Into
            </motion.h1>
            <motion.h1
              variants={item}
              className="fredoka text-2xl leading-relaxed font-semibold text-accent md:text-4xl lg:text-5xl"
            >
              Bold Futures
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5, type: "tween" }}
            className="mt-4 w-full max-w-sm text-sm text-white/90 md:mt-6 md:max-w-150 md:text-base"
          >
            Developing your child's mind and body requires constant A-grade
            efforts. And{" "}
            <span className="font-bold text-accent">
              Cornerstone Baptist Model Academy
            </span>{" "}
            is there to make sure that always happen.
          </motion.p>

          <div className="mt-5 flex gap-3 md:mt-6 md:gap-4">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.35, duration: 0.5, type: "tween" }}
            >
              <Button className="md:text-md cursor-pointer border-2 border-accent bg-accent px-4 py-2 text-sm text-white hover:border-accent-foreground hover:bg-accent-foreground md:p-5">
                <Link href="/apply" target="_blank">Apply Now</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.25, duration: 0.5, type: "tween" }}
            >
              <Button className="md:text-md cursor-pointer border-2 border-accent bg-transparent px-4 py-2 text-sm hover:border-accent hover:bg-accent hover:text-white md:p-5">
                <Link href="/contact">Enquire</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
