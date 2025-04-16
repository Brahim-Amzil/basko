"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Basko•Media transformed our online presence. Their team delivered a website that exceeded our expectations and has significantly increased our customer engagement.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "/images/testimonial-sarah.jpg",
  },
  {
    id: 2,
    quote:
      "The mobile app they developed for us has been a game-changer. User-friendly, fast, and exactly what we envisioned. Their attention to detail and commitment to quality is impressive.",
    author: "Michael Chen",
    position: "Founder, HealthTrack",
    avatar: "/images/testimonial-michael.jpg",
  },
  {
    id: 3,
    quote:
      "Their AI chatbot solution has reduced our customer service costs by 40% while improving response times. The team was professional, knowledgeable, and a pleasure to work with.",
    author: "Emily Rodriguez",
    position: "CTO, Global Retail",
    avatar: "/images/testimonial-emily.jpg",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(goToNext, 8000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-gradient-to-br from-darkblue-500 to-purple-800 rounded-lg p-8 md:p-10 relative">
                <div className="absolute -top-0 -left-2 w-12 h-12 flex items-center justify-center ">
                  <Quote className="w-8 h-8 text-cyan-200" />
                </div>
                <blockquote className="text-lg md:text-xl mb-6 text-white">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-blue-200">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return
              setIsAnimating(true)
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-gradient-to-r from-cyan-200 to-purple-300" : "bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 text-cyan-200"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 text-cyan-200"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </div>
  )
}
