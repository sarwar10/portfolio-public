import { SiPython, SiDjango, SiReact, SiHtml5, SiCss3 } from "react-icons/si";

export const projects = [
    {
      title: "E-Commerce Platform",
      date: "May 2025",
      type: "Full Stack",
      description: "Built with Django and React, featuring payment integration and inventory management.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&fit=max",
      link: "e-commerce-platform",
      technologies: ["Django", "React", "Stripe", "PostgreSQL"]
    },
    {
      title: "AI Content Generator",
      date: "April 2025",
      type: "AI Integration",
      description: "Next.js application with OpenAI API integration for automated content creation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&fit=max",
      link: "ai-content-generator",
      technologies: ["Next.js", "OpenAI", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Portfolio Dashboard",
      date: "March 2025",
      type: "Web Application",
      description: "Interactive dashboard for tracking and displaying creative work with analytics.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&fit=max",
      link: "portfolio-dashbord",
      technologies: ["React", "Chart.js", "Firebase", "Material UI"]
    },
  ];



export const techStack = [
    { name: "PYTHON", level: "Advance", percentage: 75, icon: <SiPython className="text-4xl" /> },
    { name: "DJANGO", level: "Expert", percentage: 100, icon: <SiDjango className="text-4xl" /> },
    { name: "DJANGO REST", level: "Advance", percentage: 75, icon: <span className="text-3xl font-bold">DJR</span> },
    { name: "REACT", level: "Intermediate", percentage: 50, icon: <SiReact className="text-4xl" /> },
    { name: "DATA STRUCTURES", level: "Intermediate", percentage: 50, icon: <span className="text-3xl font-bold">DS</span> },
    { name: "ALGORITHMS", level: "Intermediate", percentage: 50, icon: <span className="text-3xl font-bold">AL</span> },
    { name: "HTML", level: "Expert", percentage: 100, icon: <SiHtml5 className="text-4xl" /> },
    { name: "CSS", level: "Intermediate", percentage: 50, icon: <SiCss3 className="text-4xl" /> },
  ];


  
 export const skills = [
    {
        title: "Web Development",
        description: "Building responsive and performant web applications with modern technologies.",
        image: "/images/webdev2.png",
    },
    {
        title: "Web Designing",
        description: "Creating beautiful and intuitive user interfaces with attention to detail.",
        image: "/images/wd2.png",
    },
    {
        title: "Prompt Engineering",
        description: "Crafting effective prompts for AI systems to generate optimal outputs.",
        image: "/images/pe2.png",
    },
];



export const blogPosts = [
    {
      title: "Mastering React in 2025",
      link: "mastering-react-in-2025",
      date: "June 25, 2025",
      readTime: "5 min read",
      excerpt: "Explore the latest patterns, performance tricks, and new features in React.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&fit=max&ixid=eyJhcHBfaWQiOjE1MjY3NzkwMCJ9"
    },
    {
      title: "Why Django Still Dominates",
      link: "why-django-still-dominated",
      date: "June 20, 2025",
      readTime: "4 min read",
      excerpt: "A deep dive into Django's ecosystem and why it's still relevant in modern web dev.",
      image: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&fit=max&ixid=eyJhcHBfaWQiOjE1MjY3NzkwMCJ9"
    },
    {
      title: "Prompt Engineering Essentials",
      link: "prompt-enginerring-essentials",
      date: "June 15, 2025",
      readTime: "6 min read",
      excerpt: "Learn how to craft powerful prompts for better AI responses.",
      image: "https://images.unsplash.com/photo-1737641624486-7846df8528dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&fit=max&ixid=eyJhcHBfaWQiOjE1MjY3NzkwMCJ9"
    },
  ];