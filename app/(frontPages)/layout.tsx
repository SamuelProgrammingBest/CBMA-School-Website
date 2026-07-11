import Footer from "@/components/Footer"
import NavBar from "@/components/landingPageParts/NavBar"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="mt-25">{children}</div>

        <Footer />
    </div>
  )
}

export default layout
