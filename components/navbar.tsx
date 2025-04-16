"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Digital Transformation", path: "/digital-transformation" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 shadow-md py-2" : "bg-black py-4"}`}
      style={{ marginTop: 0, top: 0 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-normal text-white font-bebas-neue tracking-wide"
          >
            BASKO•MEDIA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-colors ${
                  pathname === link.path
                    ? "text-white border-b-2 border-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className={`w-6 h-6 text-white`} />
            ) : (
              <Menu className={`w-6 h-6 text-white`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`py-3 px-4 font-medium ${
                  pathname === link.path
                    ? "text-white"
                    : "text-gray-700 hover:text-white"
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
