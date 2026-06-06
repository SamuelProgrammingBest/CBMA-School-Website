"use client"
import AboutCTA from "@/components/aboutPageParts/AboutCTA"
import AboutHero from "@/components/aboutPageParts/AboutHeroSection"
import Achievements from "@/components/aboutPageParts/Achievements"
import CoreValues from "@/components/aboutPageParts/CoreValues"
import MeetTheTeam from "@/components/aboutPageParts/MeetTheTeam"
import MissionVision from "@/components/aboutPageParts/MissionVision"
import SchoolStory from "@/components/aboutPageParts/SchoolStory"
import React from "react"

const AboutPage = () => {
  return (
    <div>
      <div className="mt-25">
        <AboutHero />
      </div>

      <div className="mt-30 w-full">
        <SchoolStory />
      </div>

      <div className="mt-30 w-full">
        <MissionVision />
      </div>

      <div className="mt-30 w-full">
        <CoreValues />
      </div>

      <div className="mt-5 w-full">
        <MeetTheTeam />
      </div>

      <div className="mt-30 w-full">
        <Achievements />
      </div>

      <div className="mt-30 w-full">
        <AboutCTA />
      </div>
    </div>
  )
}

export default AboutPage
