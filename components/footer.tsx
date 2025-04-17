import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white mt-0">
      <div className="container mx-auto px-4 pt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  BASKO•MEDIA            </h3>
            <p className="text-gray-300 mb-4">
              We build custom digital solutions to help businesses thrive in the digital world.
            </p>
        
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-transformation"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#web-development"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mobile-desktop"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Mobile & Desktop Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-automation"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#design-optimization"
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Design & Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Calle Virgen del Mar, 20, Santurtzi  / Bilbao - Spain</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="tel:+34613658220" className="text-gray-300 hover:text-white transition-colors">
                +34 613 65 82 20
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@baskomedia.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@baskomedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Basko Media. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
