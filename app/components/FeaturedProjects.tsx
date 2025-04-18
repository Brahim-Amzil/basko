import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  image: string;
  url: string;
  description: string;
}

export default function FeaturedProjects() {
  const projects: Project[] = [
    {
      id: "01",
      title: "Seemo Shuttle",
      image: "/images/projects/01.jpg",
      url: "https://https://seemoshuttle.com/nw_home/",
      description: "Transportation service website with booking functionality"
    },
    {
      id: "02",
      title: "Hprod.ma",
      image: "/images/projects/02.jpg",
      url: "https://Hprod.ma",
      description: "E-commerce platform for local products"
    },
    {
      id: "03",
      title: "PVC Car Service",
      image: "/images/projects/03.jpg",
      url: "https://pvcarservice.com",
      description: "Car service and maintenance booking platform"
    },
    {
      id: "04",
      title: "Convert Price",
      image: "/images/projects/04.jpg", // You'll need to add this image
      url: "https://convertprice.com",
      description: "Currency conversion and price comparison tool"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent work. We've helped businesses transform their digital presence with custom solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Visit Website
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}