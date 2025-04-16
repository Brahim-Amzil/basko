"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

interface HeroParallaxProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  imageSrc: string
  useChevron?: boolean
  scrollToId?: string
  videoOpacity?: number
}

export default function HeroParallax({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  imageSrc, 
  useChevron = false, 
  scrollToId,
  videoOpacity = 0.1
}: HeroParallaxProps) {
  const [scrollY, setScrollY] = useState(0)
  const [currentPath, setCurrentPath] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setCurrentPath(window.location.pathname)
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const imageTransform = 
    currentPath === "/digital-transformation"
      ? `scale(${Math.max(1.5 - scrollY * 0.001, 0.85)}) translateY(${scrollY * 0.2}px)`
      : `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.2}px)`

  const minOpacity = 0.4
  const maxOpacity = 0.9
  const gradientOpacity = Math.max(maxOpacity - scrollY * 0.001, minOpacity)

  const getGradientColors = () => {
    switch (currentPath) {
      case "/services":
        return {
          gradient: "from-emerald-900 via-teal-900 to-cyan-900",
          text: "from-emerald-300 via-white to-cyan-300",
          glow1: "bg-emerald-500/20",
          glow2: "bg-teal-500/20",
          glow3: "bg-cyan-500/20",
          button: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
          shadow: "shadow-teal-500/30 hover:shadow-teal-500/50",
        }
      case "/contact":
        return {
          gradient: "from-rose-900 via-orange-900 to-amber-900",
          text: "from-rose-300 via-white to-amber-300",
          glow1: "bg-rose-500/20",
          glow2: "bg-orange-500/20",
          glow3: "bg-amber-500/20",
          button: "from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600",
          shadow: "shadow-orange-500/30 hover:shadow-orange-500/50",
        }
      default:
        return {
          gradient: "from-purple-900 via-blue-900 to-cyan-800",
          text: "from-cyan-300 via-white to-purple-300",
          glow1: "bg-purple-500/20",
          glow2: "bg-blue-500/20",
          glow3: "bg-cyan-500/20",
          button: "from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
          shadow: "shadow-blue-500/30 hover:shadow-blue-500/50",
        }
    }
  }

  const colors = getGradientColors()
  
  const isVideo = imageSrc?.endsWith('.mp4') || imageSrc?.endsWith('.webm')

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {isMounted && (
        <>
          <div
            className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} animate-gradient z-10`}
            style={{
              opacity: currentPath === "/services" ? 0.9 : 
                      currentPath === "/digital-transformation" ? 0.9 : gradientOpacity, 
              transition: "opacity 0.1s ease-out",
            }}
          />
          <div
            className="absolute inset-0 w-full h-full"
            style={{ transform: imageTransform, transition: "transform 0.1s ease-out" }}
          >
            {isVideo ? (
              <video 
                src={imageSrc} 
                autoPlay 
                muted 
                loop 
                className="object-cover h-full w-full"
                style={{ 
                  opacity: currentPath === "/services" ? 0.6 : 
                          currentPath === "/digital-transformation" ? 0.5 : 0.1, 
                  filter: currentPath === "/services" ? "brightness(0.5)" : 
                         currentPath === "/digital-transformation" ? "brightness(0.4)" : "none" 
                }}
              />
            ) : (
              <Image 
                src={imageSrc || "/placeholder.svg"} 
                alt="Hero background" 
                fill 
                className="object-cover" 
                priority 
                style={{
                  opacity: currentPath === "/digital-transformation" ? 0.6 : 1,
                  filter: currentPath === "/digital-transformation" ? "brightness(0.5)" : "none"
                }}
              />
            )}
          </div>
        </>
      )}
      
      <div className="absolute inset-0 z-20">
        <div
          className={`absolute top-1/4 left-1/4 w-32 h-32 ${colors.glow1} rounded-full filter blur-3xl animate-pulse-slow`}
        ></div>
        <div
          className={`absolute bottom-1/3 right-1/4 w-40 h-40 ${colors.glow2} rounded-full filter blur-3xl animate-pulse-slow`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute top-1/2 right-1/3 w-24 h-24 ${colors.glow3} rounded-full filter blur-3xl animate-pulse-slow`}
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-30 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          <span className={`bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>{title}</span>
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <span 
            style={{ 
              backgroundColor: "#10161D", 
              color: "white",
              padding: "8px 8px",
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone",
              lineHeight: "2em"
            }}
          >
            {subtitle}
          </span>
        </p>
        
        <div
          className="mt-4 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {useChevron ? (
            <button
              onClick={() => {
                const sectionElement = document.getElementById(scrollToId || '');
                if (sectionElement) {
                  const targetPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
                  const startPosition = window.pageYOffset;
                  const distance = targetPosition - startPosition;
                  
                  const duration = 2000;
                  let startTime: number | null = null;
                  
                  function animation(currentTime: number): void {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    const easeOutCubic = (progress: number): number => 1 - Math.pow(1 - progress, 3);
                    
                    window.scrollTo(0, startPosition + distance * easeOutCubic(progress));
                    
                    if (timeElapsed < duration) {
                      requestAnimationFrame(animation);
                    }
                  }
                  
                  requestAnimationFrame(animation);
                }
              }}
              aria-label={`Scroll down to ${scrollToId || ''} section`}
              className="bg-transparent border-none cursor-pointer wiggle-animation mx-auto"
              style={{ outline: "none", display: "flex", justifyContent: "center" }}
            >
              <ChevronDown size={68} className="text-purple-300 hover:text-cyan-400 transition-colors" />
            </button>
          ) : ctaText && ctaLink ? (
            <Link
              href={ctaLink}
              className={`bg-gradient-to-r ${colors.button} text-white transition-all px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 group ${colors.shadow} mx-auto w-auto inline-flex`}
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
