import React from "react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "../FadeIn"

const BlogAd = () => {
  const cardVariants = {
    hidden: { opacity: 0 },
    show: (i: any) => ({
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  }

  const blogs = [
    {
      title: "How Schools thrive",
      img: "/assets/medium.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas error numquam voluptatum suscipit, voluptatem placeat rerum voluptas. Ex voluptas ipsa repudiandae velit repellat? Eveniet tenetur numquam quae odit enim ratione accusantium architecto, necessitatibus quidem consectetur, consequuntur a! Deleniti, nobis!",
    },
    {
      title: "How Schools thrive",
      img: "/assets/medium.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas error numquam voluptatum suscipit, voluptatem placeat rerum voluptas. Ex voluptas ipsa repudiandae velit repellat? Eveniet tenetur numquam quae odit enim ratione accusantium architecto, necessitatibus quidem consectetur, consequuntur a! Deleniti, nobis!",
    },
    {
      title: "How Schools thrive",
      img: "/assets/medium.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas error numquam voluptatum suscipit, voluptatem placeat rerum voluptas. Ex voluptas ipsa repudiandae velit repellat? Eveniet tenetur numquam quae odit enim ratione accusantium architecto, necessitatibus quidem consectetur, consequuntur a! Deleniti, nobis!",
    },
  ]

  return (
    <FadeIn>
      {/* ✅ Neutral background instead of light green */}
      <div className="w-full p-4 md:p-8">
        <div className="flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-slate-50 p-6 md:p-8">
          <h1 className="mb-4 text-center text-[24px] font-bold text-foreground md:text-[30px]">
            Enjoy Gist from Our <span className="text-primary">Teachers</span>
          </h1>

          {/* ✅ flex-col on mobile, flex-row on desktop */}
          <div className="flex w-full flex-col items-center justify-evenly gap-6 md:flex-row">
            {blogs.map((blog: any, i: number) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                // ✅ full width on mobile, 1/3 on desktop
                // ✅ white card instead of lime green
                className="w-full rounded-md border border-slate-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:shadow-xl md:w-1/3"
              >
                <Link
                  href="/"
                  className="flex flex-col items-center justify-center gap-5"
                >
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    width={400}
                    height={400}
                    className="rounded-md"
                  />
                  <h1 className="text-center text-[20px] font-bold text-foreground">
                    {blog.title}
                  </h1>
                  <p className="text-[16px] text-slate-500">
                    {blog.content.slice(0, 98)}...
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ✅ destructive red → primary green */}
          <Link
            href="/blog"
            className="text-center text-primary hover:underline"
          >
            View more stories →
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}

export default BlogAd
