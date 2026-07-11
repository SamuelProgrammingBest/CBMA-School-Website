"use client"
import BlogCardsCol from "@/components/blogPageParts/blogCardsCollection"
import FadeIn from "@/components/FadeIn"
import NewsletterForm from "@/components/landingPageParts/NewsletterForm"
import SectionHeader from "@/components/SectionHeader"
import React from "react"

const BlogPage = () => {

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <SectionHeader badge="CBMA BLOG" title="Insights, Stories, and Updates from" highlight="Our School Community" desc="Discover the latest news, stories, and insights from our school community." />

      {/* BLOG GRID */}
      {/* <h2 className="fredoka text-2xl md:text-3xl text-center font-bold">Our <span className="text-primary">Blogs</span></h2> */}
      <BlogCardsCol/>

      {/* NEWSLETTER */}
      <NewsletterForm/>
    </main>

        )
}

export default BlogPage
