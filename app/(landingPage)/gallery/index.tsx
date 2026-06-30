"use client"
import GalleryCard from "@/components/GalleryCard"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { container, item } from "@/lib/utils"
import SectionHeader from "@/components/SectionHeader"
import { GalleryImage } from "@/app/admin/dashboard/gallery/page"
import { useAuth } from "@/context/AuthContext"
import { apiCall } from "@/lib/api"
import { Loader2 } from "lucide-react"

const GalleryPage = () => {
  const [data, setData] = useState<GalleryImage[]>([])
  const [errorMsg, setErrorMsg] = useState("")
  const [loading, setLoading] = useState(true)

  const getImages = async () => {
    try {
      const response = await apiCall({
        method: "GET",
        pathName: "/get-images-client",
      })
      setData(response.data)
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  // if(loading) return <Loader2 className="animate-spin"/>

  // if (errorMsg) return <p className="text-center font-bold text-xl">Refresh to get images</p>

  return (
    <main className="min-h-screen">
      <SectionHeader
        badge="CBMA GALLERY"
        title="A Glimpse into the Vibrant Life at"
        highlight="CBMA"
        desc="Explore our gallery showcasing the vibrant life and memorable moments at our school."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading && <Loader2 className="animate-spin" />}
            {errorMsg ? (
              <p className="text-md mx-auto text-center font-bold">
                Refresh to get images
              </p>
            ) : (
              data.map((item) => (
                <GalleryCard
                  img={item.image}
                  key={item._id}
                  title={item.title}
                  desc={item.description}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default GalleryPage
