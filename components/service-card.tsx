import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  gradient: string
  image: string
}

export default function ServiceCard({ icon, title, description, link, gradient, image }: ServiceCardProps) {
  return (
    <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-500 relative" style={{ height: "380px" }}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">{icon}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="absolute bottom-[15px] right-6">
        <Link
          href={link}
          className={`inline-flex items-center font-medium group relative overflow-hidden px-4 py-2 rounded-md`}
        >
          <span
            className={`absolute inset-0 w-full h-full bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
          ></span>
          <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>Learn More</span>
          <ArrowRight
            className={`ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          />
        </Link>
      </div>
    </div>
  )
}
