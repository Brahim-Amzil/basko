import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Code,
  Smartphone,
  Bot,
  Palette,
  Globe,
  Cpu,
  MessageSquare,
  Workflow,
  Layers,
  Zap,
} from "lucide-react"
import HeroParallax from "@/components/hero-parallax"

export default function ServicesPage() {
  return (
    <main className="pt-24" style={{ marginBottom: "-1px" }}>
      {/* Hero Section with Parallax */}
      <HeroParallax
        title="Our Services"
        subtitle="We offer a comprehensive range of digital services to help your business thrive in the digital world."
        useChevron={true}
        scrollToId="web-development"
        imageSrc="/videos/video_bg1.mp4"
        videoOpacity={0.6}
      />

      {/* Rest of the page content remains the same */}
      {/* Web Development Section */}
      <section id="web-development" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Web Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom websites and web applications designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Static and Dynamic Websites */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full">
              <div className="mb-4 relative">
                <div className="absolute inset-0 group-hover:opacity-20 transition-opacity"></div>
                <Globe className="w-12 h-12 text-blue-600 relative z-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Static and Dynamic Websites
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We design and develop static websites for businesses that need a simple online presence, and dynamic
                websites for businesses looking to offer interactive features and user experiences.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 rounded-md hover:text-blue-800 hover:rounded-md font-medium group relative overflow-hidden px-4 py-2"
                >
                  <span className="relative z-10">Request a Quote</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:h-full transition-all duration-300 ease-in-out z-0 opacity-20"></span>
                </Link>
              </div>
            </div>

            {/* Progressive Web Apps */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full">
              <div className="mb-4 relative">
                <div className="absolute inset-0 "></div>
                <Cpu className="w-12 h-12 text-cyan-600 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Progressive Web Apps (PWAs)
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                PWAs combine the best features of web and mobile apps, delivering fast, reliable, and engaging
                experiences that work across all devices. PWAs are highly efficient and cost-effective.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium group relative overflow-hidden px-4 py-2"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-blue-500 group-hover:h-full transition-all duration-300 ease-in-out z-0 opacity-20"></span>
                </Link>
              </div>
            </div>

            {/* Web Applications */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full">
              <div className="mb-4 relative">
                <div className="absolute inset-0 "></div>
                <Layers className="w-12 h-12 text-indigo-600 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Web Applications
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We build web applications that streamline processes, manage data, and enhance user interaction. Whether
                it's a customer portal, enterprise app, or management system.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group relative overflow-hidden px-4 py-2"
                >
                  <span className="relative z-10">Let's Discuss Your Needs</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-500 group-hover:h-full transition-all duration-300 ease-in-out z-0 opacity-20"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile & Desktop Section */}
      <section id="mobile-desktop" className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mobile & Desktop
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Native applications for iOS, Android, and desktop platforms that deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Native Apps */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full">
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
                  alt="Mobile App Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-pink-500/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Native Apps for iOS & Android
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Our native apps are built specifically for iOS and Android to deliver optimal performance and user
                experience. From simple utility apps to complex mobile platforms.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium group relative overflow-hidden px-4 py-2"
                >
                  <span className="relative z-10">Start Your App Journey</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:h-full transition-all duration-300 ease-in-out z-0 opacity-20"></span>
                </Link>
              </div>
            </div>

            {/* Desktop Applications */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full">
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                  alt="Desktop App Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-indigo-500/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Desktop Applications & Widgets for Mac
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We create desktop applications and widgets for macOS, designed to enhance productivity and integrate
                seamlessly with your workflow. Whether you need a specialized tool or a custom dashboard.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group relative overflow-hidden px-4 py-2"
                >
                  <span className="relative z-10">Consult with Us</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-500 group-hover:h-full transition-all duration-300 ease-in-out z-0 opacity-20"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Automation Section */}
      <section id="ai-automation" className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              AI & Automation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Intelligent solutions that streamline operations and enhance customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Assistant Agents */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full">
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop"
                  alt="AI Assistant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/80 to-orange-500/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                AI Assistant Agents
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                AI assistant agents can handle customer service, answer inquiries, and provide personalized
                recommendations. We build custom AI assistants to streamline your processes.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-amber-600 hover:text-amber-800 font-medium group relative overflow-hidden px-4 py-2"
                >
                  <span className="relative z-10">Schedule a Demo</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 group-hover:h-full transition-all duration-300 ease-in-out z-0 opacity-20"></span>
                </Link>
              </div>
            </div>

            {/* Chatbot Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full">
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop"
                  alt="Chatbot Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-red-500/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <MessageSquare className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Chatbot Development
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We create intelligent chatbots that can assist customers 24/7, answer questions, and handle support
                tickets. Perfect for businesses looking to provide real-time customer service.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium group relative overflow-hidden px-4 py-2"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600 to-red-500 group-hover:h-full transition-all duration-300 ease-in-out z-0 opacity-20"></span>
                </Link>
              </div>
            </div>

            {/* Workflow Automation */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full">
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                  alt="Workflow Automation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/80 to-amber-500/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Workflow className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Workflow Automation
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We implement workflow automation to reduce repetitive tasks, increase efficiency, and optimize business
                processes. From automating data entry to creating custom workflows.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium group relative overflow-hidden px-4 py-2"
                >
                  <span className="relative z-10">Optimize Your Workflow</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-600 to-amber-500 group-hover:h-full transition-all duration-300 ease-in-out z-0 opacity-20"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Optimization Section */}
      <section id="design-optimization" className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-4">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Design & Optimization
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beautiful interfaces and optimized performance for exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* UI/UX Design */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
                  alt="UI/UX Design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 to-teal-500/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Palette className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                UI/UX Design Services
              </h3>
              <p className="text-gray-600 mb-4">
                Our UI/UX design services ensure your users have a seamless, enjoyable experience when interacting with
                your digital products. We focus on user-centered design principles.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium group relative overflow-hidden px-4 py-2"
              >
                <span className="relative z-10">Request a Design Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-600 to-teal-500 group-hover:h-full transition-all duration-300 ease-in-out z-0 opacity-20"></span>
              </Link>
            </div>

            {/* SEO & Performance */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                  alt="SEO & Performance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/80 to-cyan-500/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                SEO & Performance Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                We optimize your website for search engines and improve its performance, ensuring fast load times and
                high search rankings. With tailored SEO strategies and performance tuning.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium group relative overflow-hidden px-4 py-2"
              >
                <span className="relative z-10">Improve My Website</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-600 to-cyan-500 group-hover:h-full transition-all duration-300 ease-in-out z-0 opacity-20"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white mt-0">
        <div className="container mx-auto px-4 ">
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 animate-gradient rounded-2xl p-10 md:p-16 text-center text-white shadow-xl">
            <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-3xl"></div>
            <h1 className="text-5xl md:text-5xl font-bold mb-6 relative bg-gradient-to-r from-cyan-400 via-yellow-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-md py-2 leading-relaxed">
              Ready to Start Your Project?
            </h1>
            <p className="text-2xl text-white/90 max-w-2xl mx-auto mb-8 relative">
              Contact us today to discuss your project requirements and get a free consultation.
            </p>
            <Link
              href="/contact"
            className="bg-gradient-to-r from-blue-200 to-purple-400 hover:from-purple-200 hover:to-blue-400 transition-colors px-8 py-3 rounded-xl font-medium inline-flex items-center gap-2 group relative border-2 border-blue-500 text-black">
     
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white-400" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
