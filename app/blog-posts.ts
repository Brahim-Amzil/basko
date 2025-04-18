export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "why-businesses-need-websites",
    title: "Why Every Business Needs a Website in 2025",
    excerpt: "Discover why having a professional website is crucial for business success in today's digital landscape.",
    content: "",
    image: "/images/placeholder.jpg",
    date: "March 15, 2025",
    author: "Sarah Johnson",
    category: "Web Development"
  },
  {
    id: 2,
    slug: "website-vs-mobile-app-comparison",
    title: "Website vs Mobile App: Which One Do You Need?",
    excerpt: "A comprehensive comparison of websites and mobile apps to help you make the right choice for your business.",
    content: "",
    image: "/images/placeholder.jpg",
    date: "March 10, 2025",
    author: "Michael Chen",
    category: "Digital Strategy"
  },
  {
    id: 3,
    slug: "starting-digital-transformation",
    title: "Starting Your Digital Transformation Journey",
    excerpt: "A step-by-step guide to beginning your business's digital transformation process.",
    content: "",
    image: "/images/placeholder.jpg",
    date: "March 5, 2025",
    author: "Said Koutti",
    category: "Digital Transformation"
  },
  {
    id: 4,
    slug: "why-digital-transformation-matters",
    title: "Why Digital Transformation Matters More Than Ever",
    excerpt: "Understanding the critical importance of digital transformation in today's business landscape.",
    content: "",
    image: "/images/placeholder.jpg",
    date: "February 28, 2025",
    author: "David Wilson",
    category: "Digital Transformation"
  },
  {
    id: 5,
    slug: "future-web-development-trends-2025",
    title: "Future Web Development Trends in 2025",
    excerpt: "Explore the emerging trends and technologies shaping the future of web development.",
    content: "",
    image: "/images/placeholder.jpg",
    date: "February 20, 2025",
    author: "Alex Thompson",
    category: "Web Development"
  }
] 