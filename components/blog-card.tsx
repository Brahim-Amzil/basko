import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  coverImage: string;
  category: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
  readTime,
  coverImage,
  category,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-gray-100">
        <div className="relative h-48 w-full">
          <Image
            src={coverImage}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-5 flex-grow flex flex-col">
          <div className="text-sm text-gray-500 mb-2">
            {date} · {readTime}
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {excerpt}
          </p>
          
          <div className="text-blue-600 font-medium flex items-center mt-auto">
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}