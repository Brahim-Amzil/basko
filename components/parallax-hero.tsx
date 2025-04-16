"use client"

import { useEffect, useRef, useState } from 'react'

interface ParallaxHeroProps {
  videoSrc: string;
  children: React.ReactNode;
}

export default function ParallaxHero({ videoSrc, children }: ParallaxHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll position
      setScrollY(window.scrollY);
      
      // Log scroll for debugging
      console.log("Scroll position:", window.scrollY);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Debug message
    console.log('Fixed parallax hero mounted, scroll listener attached');
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-screen"
      style={{ 
        backgroundColor: "#000000",
        marginTop: 0,
        paddingTop: 0 
      }}
    >
      {/* Fixed Video Background */}
      <div 
        className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[5]"
        style={{ 
          marginTop: 0,
          height: '100vh',
          maxHeight: '100vh'
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ 
            opacity: 0.1,
            top: 0,
            marginTop: 0
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fixed Dark overlay */}
        <div 
          className="absolute inset-0 z-[6]"
          style={{ 
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top: 0,
            marginTop: 0
          }}
        />
      </div>

      {/* Content that scrolls over the fixed background */}
      <div 
        ref={contentRef} 
        className="relative z-[20] w-full h-screen flex items-center"
        style={{ marginTop: 0 }}
      >
        <div className="w-full max-w-[1200px] mx-auto text-left pl-[10%]">
          {children}
        </div>
      </div>
    </div>
  );
}
