import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Lorem Ipsum Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/ecommerce-platform.jpg",
    category: "Web Development",
    link: "/portfolio/e-commerce-platform",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
    image: "/images/health-fitness-app.jpg",
    category: "Mobile Development",
    link: "/portfolio/health-fitness-app",
  },
  {
    id: 3,
    title: "Consectetur Adipiscing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: "/images/ai-customer-service.jpg",
    category: "AI & Automation",
    link: "/portfolio/ai-customer-service-bot",
  },
]

export default function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link key={project.id} href={project.link} className="group">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl gradient-border">
            <div className="relative h-60 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
