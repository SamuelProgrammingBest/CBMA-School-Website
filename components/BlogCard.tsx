"use client"
import Image from "next/image"
import React from "react"
import {motion} from "framer-motion"
import Link from "next/link"

type BlogCard = {
  img: string
  alt: string
  category: string
  title: string
  desc: string,
  variant?:Record<string, any>,
  link:string
}

const BlogCard = ({img, alt, category, title, desc, variant, link }: BlogCard) => {
  return (
    <motion.div
      variants={variant}
      viewport={{ once: true }}
      // ✅ full width on mobile, 1/3 on desktop
      // ✅ white card instead of lime green
      className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl"
    >
      <Image
        src={img}
        alt={alt}
        className="h-60 w-full object-cover rounded-2xl"
        width={500}
        height={240}
      />

      <div className="p-6">
        <span className="text-sm font-semibold text-accent uppercase">
          {category}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-slate-900">{title}</h3>

        <p className="mt-4 mb-4 text-slate-600">{desc}</p>

        <Link className="mt-5 font-semibold text-accent" href={`/blog/${link}`}>
          Read More →
        </Link>
      </div>
    </motion.div>
  )
}

export default BlogCard
