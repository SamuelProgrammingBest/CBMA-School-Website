"use client"
import AboutCTA from "@/components/aboutPageParts/AboutCTA"
import Achievements from "@/components/aboutPageParts/Achievements"
import CoreValues from "@/components/aboutPageParts/CoreValues"
import MeetTheTeam from "@/components/aboutPageParts/MeetTheTeam"
import MissionVision from "@/components/aboutPageParts/MissionVision"
import SchoolStory from "@/components/aboutPageParts/SchoolStory"
import SectionHeader from "@/components/SectionHeader"
import React from "react"

const AboutPage = () => {
  return (
    <main className="min-h-screen">
        <SectionHeader badge="ABOUT CBMA" title="Take a Look at where it" highlight="All Began" desc="Discover the rich history and journey of our school." />
        <SchoolStory />
        <MissionVision />
        <CoreValues />
        {/* <MeetTheTeam /> */}
        {/* <Achievements /> */}
        <AboutCTA />
    </main>
  )
}

export default AboutPage
