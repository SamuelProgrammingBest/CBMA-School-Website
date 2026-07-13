import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6'


const Footer = () => {
  return (
    <footer className="w-full bg-primary py-12 text-gray-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        
        {/* Column 1 - Brand */}
        <div className="md:col-span-1">
          {/* ✅ Replace placeholder image with school name until real logo arrives */}
          <Image src="/assets/school-logo.png" alt="CBMA Logo" height={50} width={50} className="mb-3"/>
          <p className="text-emerald-100 text-sm mb-4">
            Cornerstone Baptist Model Academy — nurturing bright minds since 2003.
          </p>

          {/* ✅ Actual social icons instead of InspectionPanel */}
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/share/1T9dVxMMgr/" target="_blank">
              <FaFacebook className="h-5 w-5 text-emerald-100 hover:text-white transition" />
            </Link>
            <Link href="https://www.instagram.com/cornerstoneacademyabuja?igsh=MW5janY4d2tyaDUzbg==" target="_blank">
              <FaInstagram className="h-5 w-5 text-emerald-100 hover:text-white transition" />
            </Link>
            <Link href="https://www.tiktok.com/@cornerstoneacademyabuja?_r=1&_t=ZS-97Xdd2aK9Q4" target="_blank">
              <FaTiktok className="h-5 w-5 text-emerald-100 hover:text-white transition" />
            </Link>
            <Link href="https://whatsapp.com/channel/0029VbBkNqI1CYoY01rtF21s" target="_blank">
              <FaWhatsapp className="h-5 w-5 text-emerald-100 hover:text-white transition" />
            </Link>
            <Link href="https://youtube.com/@cornerstonebaptistmodelacademy?si=nP7WTEiFmlq6HVPy" target="_blank">
              <FaYoutube className="h-5 w-5 text-emerald-100 hover:text-white transition" />
            </Link>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="mb-3 text-xl font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="text-emerald-100 transition hover:text-white">About</a></li>
            <li><a href="/admissions" className="text-emerald-100 transition hover:text-white">Admissions</a></li>
            <li><a href="/gallery" className="text-emerald-100 transition hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="text-emerald-100 transition hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h4 className="mb-3 text-xl font-semibold text-white">Contact Us</h4>
          <ul className="space-y-4 text-sm text-emerald-100">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-emerald-100" />
              Plot C103, B Close, Mike Okiro Rd. (522 Road), Off 1st Avenue Road, Gwarinpa Abuja Municipal Area, Gwarinpa, Federal Capital Territory
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-emerald-100" />
              +234 9029261117
            </li>
            {/* ✅ removed duplicate emoji */}
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-emerald-100" />
              cornerstonebaptistmodelacademy@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-emerald-500 pt-6 text-center text-sm text-emerald-200">
        © 2025 Cornerstone Baptist Model Academy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
