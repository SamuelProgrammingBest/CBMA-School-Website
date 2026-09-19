import { Mail, MapPin, Phone } from "lucide-react"
import React from "react"
import { motion } from "motion/react"
import { FaWhatsapp } from "react-icons/fa6"

const ContactInfo = () => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.3, delay: 2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const info = [
    {
      icon: <MapPin className="h-5 w-5 shrink-0 text-accent" />,
      title: "Visit Us",
      description:
        "Plot C103, B Close, Mike Okiro Rd. (522 Road), Off 1st Avenue Road, Gwarinpa Abuja Municipal Area, Gwarinpa, Federal Capital Territory",
    },
    {
      icon: <Phone className="h-5 w-5 shrink-0 text-accent" />,
      title: "Call Us",
      description: "+234 9029261117",
    },
    {
      icon: <Mail className="h-5 w-5 shrink-0 text-accent" />,
      title: "Email Us",
      description: "cornerstonebaptistmodelacademy@gmail.com",
    },
  ]

  return (
    <section className="px-4 py-8 sm:px-6 md:py-24">
  <div className="mx-auto grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 max-w-7xl w-full"> {/* Added grid-cols-1, max-width, and tight gaps */}
    {
      /* Container applies stagger to children */
      info.map((item, i) => (
        <motion.div
          className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-lg"
          key={i}
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }} 
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-3">
            <div className="shrink-0">{item.icon}</div> {/* Added flex-shrink-0 to keep icons from squishing if text wraps */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{item.title}</h3> {/* Adjusted font scaling */}
          </div>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{item.description}</p>
        </motion.div>
      ))
    }
  </div>
</section>

  )
}

export default ContactInfo
