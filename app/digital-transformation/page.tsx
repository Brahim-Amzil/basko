import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, BarChart2, Code, Cpu, Database, Zap, Users, FileText, Cloud } from "lucide-react"
import HeroParallax from "@/components/hero-parallax"

export default function DigitalTransformationPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section with Parallax */}
      <HeroParallax
        title="Digital Transformation"
        subtitle="Unlock innovative pathways to gain a competitive edge. Seize untapped opportunities with our tailored digital transformation strategies."
        useChevron={true}
        scrollToId="world-changing"
        imageSrc="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
      />

      {/* The World is Changing Fast */}
      <section id="world-changing" className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full -ml-20 -mb-20"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative z-10">
                The world is changing fast
              </h2>
              <p className="text-lg text-gray-700 mb-6 relative z-10">
                Your company has to change too. Here are some hard truths:
              </p>
              <ul className="space-y-4 relative z-10">
                {[
                  "You can't fix today's problems with yesterday's solutions.",
                  "You can't survive in a fast-changing world without adapting.",
                  "You can't stay competitive in a fast evolving market.",
                  "You can't resist change.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
              <div className="bg-white p-3 rounded-2xl shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                  alt="Digital transformation concept"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-6 py-2 rounded-full shadow-lg transform -rotate-3">
                Transform or be left behind
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Digital transformation isn't just a necessity for survival and growth, it's the key to unlocking new
              opportunities and expanding your reach. Digital transformation (DT) involves creating websites, apps, and
              custom solutions that help your business improve customer engagement, automate processes, and enhance
              efficiency.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              By integrating modern technology, we enable you to stay competitive, scale effectively, and optimize
              operations ensuring your company thrives in the digital era.
            </p>
            <p className="text-xl font-semibold text-blue-800 mt-6 text-center">
              It's never too late to change, and we are here to help make it happen.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-md transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
            >
              Start Your Digital Transformation Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How Do We Help Companies with Digital Transformation?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Assessment & Strategy */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <BarChart2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Assessment & Strategy
              </h3>
              <p className="text-gray-600"> <br/>Evaluating business needs and developing a digital roadmap.<br/><br/></p>
              <div className="mt-6 h-40 relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                  alt="Business strategy session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Custom Website & App Development */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Custom Website & App Development
              </h3>
              <p className="text-gray-600">Building tailored solutions to improve online presence and accessibility.</p>
              <div className="mt-6 h-40 relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                  alt="App development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Process Automation */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Process Automation
              </h3>
              <p className="text-gray-600">
                Reducing manual work with AI, workflow automation, and smart integrations.<br/><br/>
              </p>
              <div className="mt-6 h-40 relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop"
                  alt="Process automation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Cloud & Mobile Solutions */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Cloud & Mobile Solutions
              </h3>
              <p className="text-gray-600">
                Enhancing flexibility and scalability through cloud migration and mobile platforms.<br/><br/>
              </p>
              <div className="mt-6 h-40 relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  alt="Cloud computing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            </div>

            {/* AI & Data-Driven Insights */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                AI & Data-Driven Insights
              </h3>
              <p className="text-gray-600">
                Leveraging artificial intelligence and analytics for smarter decision making.<br/><br/>
              </p>
              <div className="mt-6 h-40 relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Data analytics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Customer Experience Enhancement */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Customer Experience Enhancement
              </h3>
              <p className="text-gray-600">
                Improving digital interactions with better UI/UX, chatbots, AI assistants, and call automation.
              </p>
              <div className="mt-6 h-40 relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2066&auto=format&fit=crop"
                  alt="Customer experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Digitization of Archives */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Digitization of Archives
              </h3>
              <p className="text-gray-600">
                Converting physical documents into digital formats for easier storage, search, and retrieval.<br/><br/>
              </p>
              <div className="mt-6 h-40 relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
                  alt="Document digitization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Data Migration */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-violet-500 to-purple-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Data Migration
              </h3>
              <p className="text-gray-600">
                Moving data from outdated legacy systems to modern solutions like NAS or cloud platforms for improved
                security and efficiency.
              </p>
              <div className="mt-6 h-40 relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
                  alt="Data migration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 animate-gradient rounded-2xl p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-3xl bg-gradient-to-r from-cyan-600 to-purple-600"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Let's create a digital strategy that will help your business thrive in the modern world.
              </p>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-md transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Start Your Digital Transformation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
