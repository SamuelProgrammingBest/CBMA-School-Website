import { Badge, Star } from "lucide-react"
import FadeIn from "../FadeIn"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Button } from "../ui/button"
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"
import Link from "next/link"
import { motion } from "motion/react"
import Image from "next/image"

const MeetTheTeam = () => {
  const team = [
    { name: "Mrs. [Name]", role: "Head Mistress", img: "/assets/medium.jpg" },
    { name: "Mr. [Name]", role: "Deputy Head", img: "/assets/medium.jpg" },
    {
      name: "Mrs. [Name]",
      role: "Head of Academics",
      img: "/assets/medium.jpg",
    },
    { name: "Mr. [Name]", role: "Head of Sports", img: "/assets/medium.jpg" },
  ]

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold text-primary">
            THE PEOPLE BEHIND THE MAGIC
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Meet Our <span className="text-primary">Team</span>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="group relative mx-auto w-full max-w-sm overflow-hidden border-slate-200 pt-0 transition-all duration-300 hover:border-emerald-300 hover:shadow-xl">
                {/* Image + overlay */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.img}
                    fill
                    alt={member.name}
                    className="object-cover"
                  />

                  {/* Dark overlay — fades out on hover */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Social icons — slide up from bottom on hover */}
                  <div className="absolute right-0 bottom-0 left-0 flex translate-y-full items-center justify-center gap-4 bg-primary/90 py-3 transition-transform duration-300 group-hover:translate-y-0">
                    <Link href="https://facebook.com" target="_blank">
                      <FaFacebook className="h-4 w-4 text-white transition hover:text-emerald-200" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank">
                      <FaInstagram className="h-4 w-4 text-white transition hover:text-emerald-200" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank">
                      <FaXTwitter className="h-4 w-4 text-white transition hover:text-emerald-200" />
                    </Link>
                    <Link href="https://youtube.com" target="_blank">
                      <FaYoutube className="h-4 w-4 text-white transition hover:text-emerald-200" />
                    </Link>
                  </div>
                </div>

                {/* Name + role */}
                <CardHeader className="py-4 text-center">
                  {/* Green accent line */}
                  <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-primary transition-all duration-300 group-hover:w-16" />
                  <CardTitle className="text-base font-bold text-foreground">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetTheTeam
