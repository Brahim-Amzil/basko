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
      image: "/images/projects/01.png", // Updated to correct path
      url: "https://seemoshuttle.com/nw_home/",
      description: "Transportation service website with booking functionality"
    },
    {
      id: "02",
      title: "HProd.ma",
      image: "/images/projects/02.png", // Updated to correct path
      url: "https://hprod.ma",
      description: "Audiovisual Production Studio."
    },
    {
      id: "03",
      title: "PVC Car Service",
      image: "/images/projects/03.png", // Updated to correct path
      url: "https://pvcarservice.com",
      description: "Car service booking platform"
    },
    {
      id: "04",
      title: "Convert Price",
      image: "/images/projects/04.png", // Updated to correct path
      url: "https://convertprice.com",
      description: "Currency conversion and price comparison tool."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-700"
        >
          <div className="relative h-48 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              // Removed unoptimized prop since we're using local images
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <Link 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
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
  );
}
