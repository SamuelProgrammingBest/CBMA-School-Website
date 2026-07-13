"use client"
import React from "react"
import { FaEye } from "react-icons/fa6"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import Image from "next/image"

const GalleryCard = ({
  img,
  title,
  desc,
}: {
  img: string
  title: string
  desc: string
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative cursor-pointer overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-0 z-10 h-full w-full transition duration-300 group-hover:bg-black/20" />
            <span className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/90 p-2 text-lg text-emerald-600 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              <FaEye />
            </span>
            <Image
              src={img}
              alt={title}
              className="h-60 w-full object-cover transition duration-500 group-hover:scale-110 md:h-72"
              height={288}
              width={500}
            />
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-4xl overflow-hidden rounded-2xl p-0">
          <Image
            src={img}
            alt={title}
            height={900}
            width={900}
            className="max-h-[75vh] w-full object-cover"
          />
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">
                {title}
              </DialogTitle>
              <DialogDescription className="mt-2 text-base leading-relaxed text-slate-600">
                {desc}
              </DialogDescription>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default GalleryCard
