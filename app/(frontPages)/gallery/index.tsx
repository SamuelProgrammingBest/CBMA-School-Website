"use client"
import GalleryCard from "@/components/GalleryCard"
import React, { useEffect, useState } from "react"
import SectionHeader from "@/components/SectionHeader"
import { GalleryImage } from "@/app/admin/dashboard/gallery/page"
import { apiCall } from "@/lib/api"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const PAGE_SIZE = 12

const GalleryPage = () => {
  const [data, setData] = useState<GalleryImage[]>([])
  const [errorMsg, setErrorMsg] = useState("")
  const [loading, setLoading] = useState(true)
  const [strtVisible, setstrtVisible] = useState(0)
  const [visible, setVisible] = useState(PAGE_SIZE)

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

  return (
    <main className="min-h-screen">
      <SectionHeader
        badge="CBMA GALLERY"
        title="A Glimpse into the Vibrant Life at"
        highlight="CBMA"
        desc="Explore our gallery showcasing the vibrant life and memorable moments at our school."
      />

      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          {loading && (
            <div className="flex min-h-75 items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {errorMsg && (
            <div className="flex min-h-75 items-center justify-center">
              <p className="text-center text-xl font-bold">
                Refresh to get images
              </p>
            </div>
          )}
          {data.length <= 0 && (
            <div className="flex min-h-75 flex-col items-center justify-center gap-3 text-center">
              <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Coming Soon
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                No Images Yet
              </h2>
              <p className="max-w-sm text-slate-500">
                More images coming soon from CBMA.
              </p>
            </div>
          )}

          {!loading && !errorMsg && (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.slice(strtVisible, visible).map((img) => (
                  <GalleryCard
                    img={img.image}
                    key={img._id}
                    title={img.title}
                    desc={img.description ? img.description : ""}
                  />
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                {strtVisible > 0 && (
                  <Button
                    onClick={() => {
                      setstrtVisible((prev) => prev - PAGE_SIZE)
                      setVisible((prev) => prev - PAGE_SIZE)
                    }}
                    className="w-full cursor-pointer border-2 border-primary bg-transparent px-8 py-5 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white sm:w-auto"
                  >
                    ← Previous
                  </Button>
                )}

                <p className="text-sm text-slate-500">
                  Showing {strtVisible + 1}–{Math.min(visible, data.length)} of{" "}
                  {data.length}
                </p>

                {visible < data.length && (
                  <Button
                    onClick={() => {
                      setstrtVisible((prev) => prev + PAGE_SIZE)
                      setVisible((prev) => prev + PAGE_SIZE)
                    }}
                    className="w-full cursor-pointer border-2 border-primary bg-transparent px-8 py-5 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white sm:w-auto"
                  >
                    Next ({data.length - visible} remaining) →
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default GalleryPage
