import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  stack: string;
  clientLine: string;
}

const PROJECTS: Project[] = [
  {
    title: "FinTech Investment Platform",
    description: "Professional web platform for investment and wealth management. Clean UI with product and returns-focused messaging, built for a financial services client. Responsive, accessible, and conversion-oriented.",
    image: "/Image/image%20(1).png",
    category: "FinTech · Web",
    stack: "React, Node.js, TypeScript, REST API",
    clientLine: "Financial services · Web platform",
  },
  {
    title: "Grocery & Quick-Delivery Platform",
    description: "eCommerce and delivery web app with fast fulfillment messaging (e.g. 2-hour delivery). Illustrative hero, clear CTAs, and a modern stack for a retail or logistics client.",
    image: "/Image/image%20(2).png",
    category: "eCommerce · Web",
    stack: "React, Node.js, Stripe, PostgreSQL",
    clientLine: "Retail / logistics · Delivery platform",
  },
  {
    title: "Global Trading & Business Platform",
    description: "Enterprise-grade trading and business management platform. Single-platform positioning for global operations, with a professional hero and structured content for a B2B client.",
    image: "/Image/image%20(3).jpg",
    category: "SaaS · Enterprise",
    stack: "React, Node.js, PostgreSQL, Redis",
    clientLine: "B2B client · Trading platform",
  },
  {
    title: "Mobile App — Travel & Booking",
    description: "Cross-platform mobile app with a polished blue UI. Built for travel, booking, or lifestyle use. One codebase for iOS and Android with consistent UX and performance.",
    image: "/Image/image%20(3).png",
    category: "Mobile",
    stack: "Flutter, Node.js, Firebase",
    clientLine: "Mobile product · Cross-platform",
  },
  {
    title: "Honey & Gourmet Product eCommerce",
    description: "Elegant product site for a honey or gourmet brand. Hero with product photography and clear discovery messaging. Responsive layout and simple checkout flow.",
    image: "/Image/image%20(4).jpg",
    category: "eCommerce · Brand",
    stack: "React, Node.js, Stripe",
    clientLine: "Food / CPG brand · Product site",
  },
  {
    title: "Financial Product & Investment Web",
    description: "B2B FinTech product and investment returns messaging. Technology-focused positioning with clear product sections. Built for a financial or advisory client.",
    image: "/Image/image%20(4).png",
    category: "FinTech · B2B",
    stack: "React, Node.js, TypeScript, API",
    clientLine: "FinTech client · Product site",
  },
  {
    title: "PLEATPACK Product & eCommerce",
    description: "Product-led eCommerce site for bags and accessories. Dark theme, strong hero copy, and feature highlights. Scalable catalog and checkout for a D2C brand.",
    image: "/Image/image%20(5).png",
    category: "eCommerce · D2C",
    stack: "React, Node.js, Stripe, CMS",
    clientLine: "D2C brand · Product showcase",
  },
  {
    title: "Home Essentials & Furniture",
    description: "eCommerce site for home essentials and furniture. Grid layout, clear category messaging, and a minimal aesthetic. Built for a home goods or interior-focused client.",
    image: "/Image/image%20(6).png",
    category: "eCommerce · Web",
    stack: "React, Node.js, Stripe, PostgreSQL",
    clientLine: "Home goods client · Online store",
  },
  {
    title: "Taxi Driver Web App & Dashboard",
    description: "Driver-facing web app and dashboard for a taxi or ride-hail fleet. Earnings, trips, and activity metrics with charts and clear data hierarchy. Role-based access and real-time updates.",
    image: "/Image/image%20(7).png",
    category: "SaaS · Mobility",
    stack: "React, Node.js, WebSockets, PostgreSQL",
    clientLine: "Mobility client · Driver dashboard",
  },
  {
    title: "Analytics & Business Intelligence Dashboard",
    description: "Analytics and BI dashboard with configurable charts, KPIs, and reports. Clean data viz and multi-tenant support for internal teams or B2B clients.",
    image: "/Image/image%20(8).png",
    category: "SaaS · Data",
    stack: "React, Node.js, PostgreSQL, Redis",
    clientLine: "B2B / internal · Analytics platform",
  },
  {
    title: "Live & Travel Platform",
    description: "Travel and live-experience platform with a bold dark theme. Social and content integration. Built for a travel, events, or lifestyle brand.",
    image: "/Image/image%20(9).PNG",
    category: "Web · Travel",
    stack: "React, Node.js, REST API",
    clientLine: "Travel / lifestyle · Web platform",
  },
  {
    title: "Retail Branding & Signage (IVCH)",
    description: "Branding and storefront signage for a retail or commercial client. Cohesive identity applied to exterior and wayfinding. Delivered as part of a broader brand and digital rollout.",
    image: "/Image/image%20(2).jpg",
    category: "Branding · Retail",
    stack: "Design system, Web, Print",
    clientLine: "Retail client · Brand & signage",
  },
];

const INITIAL_COUNT = 6;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 animate-fade-in">
            Selected Projects
          </h2>
          <p className="text-center text-muted-foreground mb-2 animate-fade-in max-w-2xl mx-auto">
            Production-ready applications I've built for startups and clients — web, mobile, and full-stack.
          </p>
          <p className="text-center text-muted-foreground text-sm mb-12 animate-fade-in max-w-xl mx-auto">
            Real project screenshots. Each card reflects delivered work for clients and products.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayed.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift animate-fade-in-up group border border-border/50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden aspect-video bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold shadow">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2 italic">
                    {project.clientLine}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {project.stack}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!showAll && PROJECTS.length > INITIAL_COUNT && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="bg-primary text-white hover:bg-primary/90 text-lg font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                View More Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
