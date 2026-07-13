"use client"
import AboutLanding from "@/components/landingPageParts/AboutLanding"
import AdmissionAd from "@/components/landingPageParts/Admission"
import BlogAd from "@/components/landingPageParts/BlogAd"
import HeadMasterMessage from "@/components/landingPageParts/HeadMasterMessage"
import HeroSection from "@/components/landingPageParts/HeroSection"
import MissionLanding from "@/components/landingPageParts/MissionLanding"
import NewsletterForm from "@/components/landingPageParts/NewsletterForm"
import StatsCard from "@/components/landingPageParts/StatsCard"
import Testimonials from "@/components/landingPageParts/Testimonials"
import React from "react"

const LandingPage = () => {
  return (
    <main className="mt-16 min-h-screen md:mt-25">
      <HeroSection />
      <div className="mt-12 flex w-full items-center justify-center md:mt-20 lg:mt-30">
        <AboutLanding />
      </div>
      <div className="mt-12 flex w-full items-center justify-center md:mt-20 lg:mt-30">
        <StatsCard />
      </div>
      <div className="mt-12 flex w-full items-center justify-center md:mt-20 lg:mt-30">
        <MissionLanding />
      </div>
      <div className="mt-12 flex w-full items-center justify-center md:mt-20 lg:mt-30">
        <HeadMasterMessage />
      </div>
      <div className="mt-12 flex w-full items-center justify-center md:mt-20 lg:mt-30">
        <AdmissionAd />
      </div>
      <div className="mt-12 flex w-full items-center justify-center md:mt-20 lg:mt-30">
        <BlogAd />
      </div>
      <div className="mt-12 flex w-full items-center justify-center md:mt-20 lg:mt-30">
        <Testimonials />
      </div>
      <div className="mt-12 flex w-full items-center justify-center md:mt-20 lg:mt-30">
        <NewsletterForm />
      </div>
    </main>
  )
}

export default LandingPage
