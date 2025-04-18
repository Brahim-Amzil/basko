import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Post | Basko Media",
  description: "Read our latest articles on web development and digital transformation",
};

// Define the blog posts data
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Simple function to get blog post data
function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug) || null;
}

// Simple page component without any fancy types
export default function Page({ params }: any) {
  const post = getBlogPost(params.slug);
  
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

  // Simplified content rendering
  let content;
  if (params.slug === "website-vs-mobile-app") {
    content = (
      <>
        <h2 className="text-2xl font-bold mb-4">1. Understanding the Core Differences</h2>
        <p>
          Websites and mobile apps serve different purposes and offer distinct advantages. A website is accessible through any browser and works across all devices, making it perfect for reaching a broad audience. In contrast, mobile apps are downloaded and installed on smartphones, offering deeper engagement and better performance for frequent users. Knowing these core differences is the first step in deciding which platform suits your business needs.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">2. When a Website Makes More Sense</h2>
        <p>
          For most businesses, especially when just starting out, a website is essential. It's cost-effective, easy to maintain, and ensures your business is discoverable on search engines. Whether you're providing information, showcasing services, or generating leads, a professional website boosts credibility and acts as your digital storefront—accessible to anyone, anywhere, at any time.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">3. The Power of Mobile Apps</h2>
        <p>
          Mobile apps shine when it comes to personalized experiences, offline access, and long-term customer engagement. If your business model involves frequent user interaction—like booking, shopping, or messaging—an app can offer smoother performance, push notifications, and device-specific features. Apps are especially valuable for building loyalty and offering functionality that goes beyond what websites can typically handle.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">4. Choosing Based on Business Goals</h2>
        <p>
          Your decision should align with your business goals, budget, and target audience. A website is usually the best place to start, especially for visibility and information-sharing. If you're looking to create a more immersive, feature-rich experience or build a community around your brand, an app might be the better investment. In some cases, a combination of both is ideal—each serving different parts of your user journey.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">5. Let's Help You Decide</h2>
        <p>
          Not sure which direction to take? That's where we come in. We help businesses evaluate their goals and design digital solutions that make sense—whether it's a beautifully designed website, a high-performance app, or both. Let us guide you through the decision-making process so you can focus on growing your business with confidence in the digital space.
        </p>
      </>
    );
  } else if (params.slug === "why-businesses-need-websites") {
    content = (
      <>
        <h2 className="text-2xl font-bold mb-4">1. The Digital First Impression</h2>
        <p>
          In 2025, your website is often the first interaction people have with your brand. It's your digital storefront, open 24/7 and accessible from anywhere in the world. A well-designed website instantly builds credibility, gives potential clients a clear understanding of who you are, and sets the tone for your business relationship. Without one, you risk being overlooked entirely in a highly competitive online marketplace.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">2. Visibility and Searchability</h2>
        <p>
          Consumers today rely on search engines for everything—from finding local services to researching product reviews. If your business isn't online, it might as well be invisible. A website optimized for search engines ensures that customers can find you when they're actively looking for what you offer. It's not just about being online; it's about being discoverable in the moments that matter most.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">3. Central Hub for Information and Action</h2>
        <p>
          Your website acts as the central hub for your brand—bringing together essential information like services, pricing, testimonials, FAQs, and contact options. It also allows you to guide users toward specific actions: booking appointments, making purchases, or signing up for newsletters. Without a centralized digital presence, you're likely missing out on countless opportunities to convert interest into action.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">4. Trust and Professionalism</h2>
        <p>
          A professional website signals that your business is legitimate, trustworthy, and invested in providing a solid customer experience. In contrast, businesses without a website can appear outdated or even suspicious to modern consumers. In 2025, having a secure, responsive, and visually appealing website isn't just a bonus—it's expected.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">5. Future-Proofing Your Business</h2>
        <p>
          As more consumers shift to digital-first behavior, having a website isn't just about staying relevant—it's about staying in business. Whether you're a local service provider or a growing startup, your website is your foundation for future growth, marketing, and customer engagement. Now is the time to invest in your digital presence and build a platform that supports long-term success.
        </p>
      </>
    );
  } else if (params.slug === "starting-digital-transformation") {
    content = (
      <>
        <h2 className="text-2xl font-bold mb-4">1. What Is Digital Transformation?</h2>
        <p>
          Digital transformation is the process of integrating digital technologies into all areas of your business to create more value, streamline operations, and enhance customer experiences. It's not just about going paperless or launching an app—it's about reimagining how your company works and delivers in today's digital-first world. Every business, no matter the size or industry, can benefit from embracing this shift.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">2. Why It Matters Now More Than Ever?</h2>
        <p>
          The pace of change in technology and consumer behavior has accelerated dramatically. Customers expect fast, seamless, and digital-first experiences. Companies that resist change risk falling behind competitors who are more adaptable and efficient. Embracing digital transformation is no longer a luxury—it's a necessity to remain relevant, competitive, and resilient in a constantly evolving market.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">3. Website or App? Choosing the Right Starting Point</h2>
        <p>
          For many businesses, the first step in their digital journey is creating a strong online presence. This could mean building a modern website, developing a mobile app, or both—depending on your goals and audience. A website is ideal for visibility, accessibility, and credibility, while an app can offer deeper engagement, personalized experiences, and offline functionality. Choosing the right platform depends on your business model, customer behavior, and long-term vision.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">4. Common Challenges and How to Overcome Them</h2>
        <p>
          Many businesses delay their digital transformation because of fear—fear of complexity, cost, or change itself. The key is to start small, with clear goals and measurable outcomes. Partnering with experienced professionals can help you navigate the process, avoid common pitfalls, and implement solutions that are scalable, secure, and aligned with your strategy. With the right support, transformation doesn't have to be overwhelming.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">5. Your Next Step Starts Here</h2>
        <p>
          Ready to begin your digital transformation journey? The first step is understanding where you are now and where you want to go. Our team specializes in helping businesses of all sizes navigate this process with confidence. From assessing your current digital maturity to implementing tailored solutions, we're here to ensure your transformation is successful, sustainable, and aligned with your business objectives.
        </p>
      </>
    );
  } else if (params.slug === "why-digital-transformation-essential") {
    content = (
      <>
        <h2 className="text-2xl font-bold mb-4">1. The Digital Shift Is No Longer Optional</h2>
        <p>
          In today's fast-paced digital world, the way businesses operate and engage with customers has fundamentally changed. Digital transformation is more than just adopting new tools—it's about rethinking how your company delivers value. From internal processes to customer experiences, businesses that embrace modern digital solutions are more agile, efficient, and competitive in the marketplace.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">2. Meeting Evolving Customer Expectations</h2>
        <p>
          Today's customers expect seamless, personalized, and convenient experiences across all touchpoints. They want to interact with your business on their terms—whether through a website, mobile app, social media, or in person. Companies that fail to meet these expectations risk losing customers to competitors who provide better digital experiences. Digital transformation enables you to create customer journeys that are intuitive, responsive, and aligned with modern expectations.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">3. Gaining Competitive Advantage</h2>
        <p>
          Digital transformation isn't just about keeping up—it's about standing out. By leveraging data analytics, automation, and digital channels, you can identify new opportunities, streamline operations, and deliver unique value propositions that set your business apart. Companies that lead in digital adoption often see increased market share, higher customer satisfaction, and stronger brand loyalty compared to their less digitally mature competitors.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">4. Improving Operational Efficiency</h2>
        <p>
          Digital tools and processes can dramatically reduce manual work, eliminate redundancies, and optimize resource allocation. From cloud-based collaboration platforms to automated workflows, digital transformation helps your team work smarter, not harder. This increased efficiency translates to reduced costs, faster delivery times, and the ability to scale operations without proportionally increasing overhead.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">5. Future-Proofing Your Business</h2>
        <p>
          Perhaps most importantly, digital transformation prepares your business for whatever comes next. By building a flexible, technology-enabled foundation, you'll be better positioned to adapt to market changes, incorporate emerging technologies, and pivot when necessary. In an era of rapid change and disruption, this adaptability isn't just a competitive advantage—it's essential for long-term survival and success.
        </p>
      </>
    );
  } else {
    content = (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <p>Sorry, the article you're looking for doesn't exist or has been moved.</p>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          Return to Blog
        </Link>
      </div>
    );
  }

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
            {content}
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