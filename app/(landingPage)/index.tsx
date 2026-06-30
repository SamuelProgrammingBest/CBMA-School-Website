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
    <main className="mt-[100px] overflow-hidden min-h-screen">
      <HeroSection />
      <div className="mt-[120px] flex w-full items-center justify-center">
        <AboutLanding />
      </div>
      <div className="mt-[120px] flex w-full items-center justify-center">
        <StatsCard />
      </div>
      <div className="mt-[120px] flex w-full items-center justify-center">
        <MissionLanding />
      </div>
      <div className="mt-[120px] flex w-full items-center justify-center">
        <HeadMasterMessage />
      </div>
      <div className="mt-[120px] flex w-full items-center justify-center">
        <AdmissionAd />
      </div>
      <div className="mt-[120px] flex w-full items-center justify-center">
        <BlogAd />
      </div>
      <div className="mt-[120px] flex w-full items-center justify-center">
        <Testimonials />
      </div>
      <div className="mt-[120px] flex w-full items-center justify-center">
        <NewsletterForm />
      </div>
    </main>
  )
}

export default LandingPage
