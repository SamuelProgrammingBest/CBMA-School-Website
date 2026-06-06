import { motion } from "motion/react"
import { Button } from "../ui/button"

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
        className="mb-5 text-center text-[15px] font-medium text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        EST. 2003 | ACADEMIC EXCELLENCE | HOLISTIC DEVELOPMENT
      </motion.p>

      <div className="relative flex h-screen w-full items-center">
        {/* Background image — this stays the same */}
        <motion.img
          src="/assets/3907.jpg"
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

        {/* ✅ Fixed: responsive padding instead of absolute left-40 */}
        <div className="relative z-10 px-10 md:px-20 lg:px-28">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1
              variants={item}
              className="fredoka text-3xl leading-relaxed font-semibold md:text-4xl lg:text-5xl"
            >
              Where Bright Minds
            </motion.h1>
            <motion.h1
              variants={item}
              className="fredoka text-3xl leading-relaxed font-semibold md:text-4xl lg:text-5xl"
            >
              Bloom Into
            </motion.h1>
            <motion.h1
              variants={item}
              className="fredoka text-3xl leading-relaxed font-semibold text-accent md:text-4xl lg:text-5xl"
            >
              Bold Futures
            </motion.h1>
          </motion.div>

          {/* ✅ Fixed: w-[600px] → max-w with full width on mobile */}
          <motion.p
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5, type: "tween" }}
            className="mt-6 w-full max-w-[600px]"
          >
            Developing your child's mind and body requires constant A-grade
            efforts. And{" "}
            <span className="font-bold text-accent">
              Cornerstone Baptist Model Academy
            </span>{" "}
            is there to make sure that always happen.
          </motion.p>

          <div className="mt-6 flex gap-4">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.35, duration: 0.5, type: "tween" }}
            >
              <Button className="text-md cursor-pointer border-2 border-accent bg-accent p-5 text-white hover:border-accent-foreground hover:bg-accent-foreground">
                Apply Now
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.25, duration: 0.5, type: "tween" }}
            >
              <Button className="text-md cursor-pointer border-2 border-accent bg-transparent p-5 hover:border-accent-foreground hover:bg-accent-foreground hover:text-white">
                Explore
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
