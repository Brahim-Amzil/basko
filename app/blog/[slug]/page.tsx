import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Post | Virtual Dimensions",
  description: "Read our latest articles on web development and digital transformation",
};

// Helper function to get blog post data
const getBlogPostData = (slug: string) => {
  const blogPosts = [
    {
      title: "Website vs Mobile App: Which One Does Your Business Need?",
      slug: "website-vs-mobile-app",
      date: "May 10, 2024",
      readTime: "6 min read",
      coverImage: "/images/blog/website-vs-app.jpg",
      category: "Strategy"
    },
    {
      title: "Why Every Business Needs a Website in 2025",
      slug: "why-businesses-need-websites",
      date: "May 5, 2024",
      readTime: "5 min read",
      coverImage: "/images/blog/business-website.jpg",
      category: "Business"
    },
    {
      title: "The Essential Guide to Starting Your Digital Transformation Journey",
      slug: "starting-digital-transformation",
      date: "April 28, 2024",
      readTime: "7 min read",
      coverImage: "/images/blog/digital-transformation-journey.jpg",
      category: "Digital Transformation"
    },
    {
      title: "Why Digital Transformation Is Essential for Your Business",
      slug: "why-digital-transformation-essential",
      date: "June 5, 2024",
      readTime: "5 min read",
      coverImage: "/images/blog/digital-transformation-matters.jpg",
      category: "Digital Transformation"
    }
  ];
  
  return blogPosts.find(post => post.slug === slug);
};

// Content components for each article
const WebsiteVsAppContent = () => (
  <>
    <h2 className="text-2xl font-bold mb-4">1. Understanding the Core Differences</h2>
    <p>
      Websites and mobile apps serve different purposes and offer distinct advantages. A website is accessible through any browser and works across all devices, making it perfect for reaching a broad audience. In contrast, mobile apps are downloaded and installed on smartphones, offering deeper engagement and better performance for frequent users. Knowing these core differences is the first step in deciding which platform suits your business needs.
    </p>
    
    {/* Rest of content remains the same */}
  </>
);

// Other content components remain the same

// Define the page component with a simpler structure
export default function BlogPostPage(props: {
  params: { slug: string }
}) {
  const { slug } = props.params;
  
  // Find the blog post with the matching slug
  const post = getBlogPostData(slug);

  // If post not found, show error page
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Determine which content to render based on slug
  const getContent = () => {
    switch (slug) {
      case "website-vs-mobile-app":
        return <WebsiteVsAppContent />;
      case "why-businesses-need-websites":
        return <BusinessWebsiteContent />;
      case "starting-digital-transformation":
        return <DigitalTransformationContent />;
      case "why-digital-transformation-essential":
        return <WhyDigitalTransformationContent />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
            <p>Sorry, the article you're looking for doesn't exist or has been moved.</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Return to Blog
            </Link>
          </div>
        );
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-indigo-800 text-white py-16 mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-4">
              <span className="text-sm bg-blue-500 px-3 py-1 rounded-full">{post.category}</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          </div>
        </div>
      </div>
      
      <div className="bg-[#F0F6FF]">
        <div className="container mx-auto px-4 py-12 max-w-4xl bg-[#FAFBFC] rounded-lg shadow-sm">
          <div className="mb-6">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </Link>
          </div>
        
          <div className="relative h-80 w-full mb-8 rounded-[18px] px-[14] overflow-hidden">
            <Image 
              src={post.coverImage} 
              alt={post.title}
              width={1200}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <article className="prose lg:prose-xl mx-auto text-gray-800 px-[10px] text-justify">
            {getContent()}
          </article>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// Define the other content components
const BusinessWebsiteContent = () => (
  <>
    <h2 className="text-2xl font-bold mb-4">1. The Digital First Impression</h2>
    <p>
      In 2025, your website is often the first interaction people have with your brand. It's your digital storefront, open 24/7 and accessible from anywhere in the world. A well-designed website instantly builds credibility, gives potential clients a clear understanding of who you are, and sets the tone for your business relationship. Without one, you risk being overlooked entirely in a highly competitive online marketplace.
    </p>
    
    {/* Rest of content remains the same */}
  </>
);

const DigitalTransformationContent = () => (
  <>
    <h2 className="text-2xl font-bold mb-4">1. What Is Digital Transformation?</h2>
    <p>
      Digital transformation is the process of integrating digital technologies into all areas of your business to create more value, streamline operations, and enhance customer experiences. It's not just about going paperless or launching an app—it's about reimagining how your company works and delivers in today's digital-first world. Every business, no matter the size or industry, can benefit from embracing this shift.
    </p>
    
    {/* Rest of content remains the same */}
  </>
);

const WhyDigitalTransformationContent = () => (
  <>
    <h2 className="text-2xl font-bold mb-4">1. The Digital Shift Is No Longer Optional</h2>
    <p>
      In today's fast-paced digital world, the way businesses operate and engage with customers has fundamentally changed. Digital transformation is more than just adopting new tools—it's about rethinking how your company delivers value. From internal processes to customer experiences, businesses that embrace modern digital solutions are more agile, efficient, and competitive in the marketplace.
    </p>
    
    {/* Rest of content remains the same */}
  </>
);