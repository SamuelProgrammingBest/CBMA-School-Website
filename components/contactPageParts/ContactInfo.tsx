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
    <section className="px-6 py-24">
      <div className="mx-auto grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {
          /* Container applies stagger to children */
          info.map((item, i) => (
            <motion.div
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}

export default ContactInfo
