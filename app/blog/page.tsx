import Link from "next/link";
import { Metadata } from "next";
import BlogCard from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Blog | Virtual Dimensions",
  description: "Read our latest articles on web development and digital transformation",
};

const blogPosts = [

  {
    title: "Why Every Business Needs a Website in 2025 ?",
    slug: "why-businesses-need-websites",
    excerpt: "Learn why having a professional website remains essential for businesses of all sizes in 2025, from creating first impressions to building trust.",
    date: "May 5, 2024",
    readTime: "5 min read",
    coverImage: "/images/blog/business-website.jpg",
    category: "Business"
  },
  {
    title: "The Essential Guide to Starting Your Digital Transformation Journey",
    slug: "starting-digital-transformation",
    excerpt: "A step-by-step guide to beginning your organization's digital transformation, from assessment to implementation.",
    date: "April 28, 2024",
    readTime: "7 min read",
    coverImage: "/images/blog/digital-transformation-journey.jpg",
    category: "Digital Transformation"
  },
  {
    title: "Why Digital Transformation Is Essential for Your Business",
    slug: "why-digital-transformation-essential",
    excerpt: "Learn why digital transformation is crucial for business success in today's fast-paced digital world and how to get started on your journey.",
    date: "June 5, 2024",
    readTime: "5 min read",
    coverImage: "/images/blog/digital-transformation-matters.jpg",
    category: "Digital Transformation"
  },
  {
    title: "Website vs Mobile App: Which One Does Your Business Need?",
    slug: "website-vs-mobile-app",
    excerpt: "Explore the pros and cons of websites and mobile apps to determine the best digital solution for your business needs and goals.",
    date: "May 10, 2024",
    readTime: "6 min read",
    coverImage: "/images/blog/website-vs-app.jpg",
    category: "Strategy"
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl opacity-90">
              Insights, strategies, and expert advice on web development, digital transformation, and growing your online presence.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              readTime={post.readTime}
              coverImage={post.coverImage}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}