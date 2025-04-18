"use client"

// Only essential imports
import Link from "next/link"
import { ArrowRight, Code, Smartphone, Bot, Palette, ChevronDown } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FeaturedProjects from "@/components/featured-projects"
import ServiceCard from "@/components/service-card"
import { useState, useEffect, useRef } from "react"
import ParallaxHero from "@/components/parallax-hero"

// Remove this duplicate import
// import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
  // State for the typing animation
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Words to cycle through
  const words = [
    "Websites",
    "Web Apps",
    "Mobile Apps",
    "AI Assistants",
    "Chatbots",
    "Workflow Automation"
  ];

  // Handle typing animation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];
    
    // Handle different animation states
    if (!isDeleting && displayText === currentWord) {
      // Pause at complete word before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(80); // Faster when deleting
      }, 2000);
    } else if (isDeleting && displayText === "") {
      // Move to next word after complete deletion
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setTypingSpeed(150); // Normal speed for typing
    } else {
      // Handle typing or deleting
      timer = setTimeout(() => {
        setDisplayText(prev => 
          isDeleting 
            ? prev.substring(0, prev.length - 1) 
            : currentWord.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed]);

  return (
    <>
      <ParallaxHero videoSrc="/videos/video_bg4.mp4"> 
        <h1 style={{ 
          fontSize: "3.5rem", 
          textAlign: "left",
          fontWeight: "bold", 
          marginBottom: "1.5rem",
          background: "linear-gradient(to right, #00dbde, #fc00ff)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "none",
          position: "relative",
          zIndex: 20,
          display: "flex",
          flexWrap: "wrap"
        }}>
          <span>Build High-Performance</span><br/>
          <span style={{ 
            position: "relative", 
            display: "inline-block",
            width: "600px", 
            background: "linear-gradient(to right, #00dbde, #fc00ff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginLeft: "12px",
            whiteSpace: "nowrap" 
          }}>
            {displayText}
            <span 
              style={{
                display: "inline-block",
                width: "3px",
                height: "1em",
                backgroundColor: "#fc00ff",
                marginLeft: "0px"
              }}
              className="animate-blink"
            />
          </span>
          <span style={{ width: "100%" }}>for Your Business</span>
        </h1>
        
        {/* Add keyframe animation for cursor blinking */}
        <style jsx global>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}</style>
        
        <p style={{ 
          fontSize: "1.5rem", 
          maxWidth: "768px", 
          marginBottom: "2rem",
          background: "linear-gradient(to right, #c3cfe2 ,#f5f7fa)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "500",
          position: "relative",
          zIndex: 20
        }}>
          We build custom solutions for public institutions, private organizations, and small to mid-sized companies.
        </p>
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center",
            width: "100%",
            position: "relative",
            zIndex: 20,
            marginTop: "3rem"
          }}
        >
          <button
            onClick={() => {
              const sectionElement = document.getElementById('digital-solutions-section');
              if (sectionElement) {
                // Custom smooth scroll function with slower speed and ease-out effect
                const targetPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                
                // Longer duration for slower animation (2000ms = 2 seconds, which is about half speed)
                const duration = 2000;
                let startTime: number | null = null;
                
                function animation(currentTime: number) {
                  if (startTime === null) startTime = currentTime;
                  const timeElapsed = currentTime - startTime;
                  const progress = Math.min(timeElapsed / duration, 1);
                  
                  // Ease-out function: cubic ease out
                  const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);
                  
                  window.scrollTo(0, startPosition + distance * easeOutCubic(progress));
                  
                  if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                  }
                }
                
                requestAnimationFrame(animation);
              }
            }}
            aria-label="Scroll down to Digital Solutions section"
            className="bg-transparent border-none cursor-pointer wiggle-animation"
            style={{ outline: "none" }}
          >
            <ChevronDown size={68} className="text-purple-300 hover:text-cyan-400 transition-colors" />
          </button>
        </div>
      </ParallaxHero>

      {/* Intro Section */}
      <section id="digital-solutions-section" className="relative z-30 py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Solutions for Modern Businesses
            </h2>
            <p className="text-2xl text-gray-300">
              We specialize in building websites, mobile apps, AI assistants, and more to help businesses thrive in the
              digital world.<br/> Let us help you create a powerful digital presence that drives results.
            </p>
          </div>

          {/* Services Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Code className="w-10 h-10 text-white" />}
              title="Web Development"
              description="Custom websites and web applications tailored to your business needs."
              link="/services#web-development"
              gradient="from-blue-500 to-cyan-500"
              image="/images/web-development.jpg"
            />
            <ServiceCard
              icon={<Smartphone className="w-10 h-10 text-white" />}
              title="Mobile & Desktop"
              description="Native apps for iOS, Android, and desktop platforms."
              link="/services#mobile-desktop"
              gradient="from-purple-500 to-pink-500"
              image="/images/mobile-desktop.jpg"
            />
            <ServiceCard
              icon={<Bot className="w-10 h-10 text-white" />}
              title="AI & Automation"
              description="AI assistants, chatbots, and workflow automation solutions."
              link="/services#ai-automation"
              gradient="from-amber-500 to-orange-500"
              image="/images/ai-automation.jpg"
            />
            <ServiceCard
              icon={<Palette className="w-10 h-10 text-white" />}
              title="Design & Optimization"
              description="UI/UX design and performance optimization services."
              link="/services#design-optimization"
              gradient="from-green-500 to-teal-500"
              image="/images/design-optimization.jpg"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-30 py-20 bg-gradient-to-b from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-200 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Take a look at some of our recent work that showcases our expertise and capabilities.
            </p>
          </div>
          {/* Add the FeaturedProjects component */}
          <FeaturedProjects />
          
          {/* Your other existing sections */}
          <div className="text-center mt-12">
          <Link
  href="#"
  onClick={(e) => e.preventDefault()}
  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium group relative overflow-hidden px-6 py-2"
>
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:h-full transition-all duration-300 ease-in-out z-0"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-30 py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-30 py-10 pb-0 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="p-10 md:p-16 text-center text-white shadow-xl relative">
            <div className="absolute inset-0 rounded-2xl"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative bg-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-100 to-cyan-400 drop-shadow-md">Ready to Transform Your Digital Presence?</h2>
            <p className="text-2xl text-white/90 max-w-2xl mx-auto mb-8 relative">
              Let's discuss how we can help you achieve your business goals with our custom digital solutions.
            </p>
            <Link
  href="/contact"
  className="bg-gradient-to-r from-blue-200 to-purple-400 hover:from-purple-200 hover:to-blue-400 transition-colors px-8 py-3 rounded-xl font-medium inline-flex items-center gap-2 group relative border-2 border-purple-300 text-black"
>
  Contact Us
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-darkblue-600" />

</Link>


          </div>
        </div><br/><br/>
      </section>
    </>
  )
}
