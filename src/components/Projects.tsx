import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  filterCategory: string;
  stack: string;
  clientLine: string;
  result?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Financial Product & Investment Web",
    description: "B2B FinTech product and investment returns messaging. Technology-focused positioning with clear product sections.",
    image: "/Image/image%20(4).png",
    category: "FinTech",
    filterCategory: "Web",
    stack: "React, Node.js, TypeScript, API",
    clientLine: "FinTech client",
    result: "45% engagement increase",
  },
  {
    title: "Analytics & Business Intelligence Dashboard",
    description: "Analytics and BI dashboard with configurable charts, KPIs, and reports.",
    image: "/Image/image%20(8).png",
    category: "SaaS",
    filterCategory: "Web",
    stack: "React, Node.js, PostgreSQL, Redis",
    clientLine: "B2B Analytics",
    result: "60% faster reporting",
  },
  {
    title: "Home Essentials & Furniture",
    description: "eCommerce site for home essentials and furniture with minimal aesthetic.",
    image: "/Image/image%20(6).png",
    category: "eCommerce",
    filterCategory: "eCommerce",
    stack: "React, Node.js, Stripe, PostgreSQL",
    clientLine: "Home goods client",
    result: "2x conversion rate",
  },
  {
    title: "PLEATPACK eCommerce",
    description: "Product-led eCommerce site for bags and accessories.",
    image: "/Image/image%20(5).png",
    category: "eCommerce",
    filterCategory: "eCommerce",
    stack: "React, Node.js, Stripe, CMS",
    clientLine: "D2C brand",
  },
  {
    title: "Global Trading Platform",
    description: "Enterprise-grade trading and business management platform.",
    image: "/Image/image%20(3).jpg",
    category: "SaaS",
    filterCategory: "Web",
    stack: "React, Node.js, PostgreSQL, Redis",
    clientLine: "B2B Trading",
    result: "10K+ daily transactions",
  },
  {
    title: "FinTech Investment Platform",
    description: "Professional web platform for investment and wealth management.",
    image: "/Image/image%20(1).png",
    category: "FinTech",
    filterCategory: "Web",
    stack: "React, Node.js, TypeScript, API",
    clientLine: "Financial services",
    result: "$2M+ investments",
  },
  {
    title: "Travel Platform",
    description: "Travel and live-experience platform with social integration.",
    image: "/Image/image%20(9).PNG",
    category: "Web",
    filterCategory: "Web",
    stack: "React, Node.js, REST API",
    clientLine: "Travel brand",
  },
  {
    title: "Grocery Delivery Platform",
    description: "eCommerce and delivery web app with 2-hour delivery.",
    image: "/Image/image%20(2).png",
    category: "eCommerce",
    filterCategory: "eCommerce",
    stack: "React, Node.js, Stripe, PostgreSQL",
    clientLine: "Retail logistics",
    result: "50% faster checkout",
  },
  {
    title: "Honey & Gourmet Product eCommerce",
    description: "Elegant product site for a honey brand with product photography.",
    image: "/Image/image%20(4).jpg",
    category: "eCommerce",
    filterCategory: "eCommerce",
    stack: "React, Node.js, Stripe",
    clientLine: "Food brand",
    result: "40% sales increase",
  },
  {
    title: "Web Scraping & Data Pipeline",
    description: "Automated data extraction and processing system with scheduled jobs and data validation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Automation",
    filterCategory: "Automation",
    stack: "Python, Selenium, BeautifulSoup, PostgreSQL",
    clientLine: "Data analytics firm",
    result: "10K+ records processed daily",
  },
  {
    title: "Business Process Automation",
    description: "Custom workflow automation platform for invoice processing, approvals, and notifications.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    category: "Automation",
    filterCategory: "Automation",
    stack: "Python, FastAPI, React, RabbitMQ",
    clientLine: "Enterprise client",
    result: "50% reduction in manual work",
  },
  {
    title: "Taxi Driver Dashboard",
    description: "Driver-facing web app with earnings and trip metrics.",
    image: "/Image/image%20(7).png",
    category: "SaaS",
    filterCategory: "Automation",
    stack: "React, Node.js, WebSockets, PostgreSQL",
    clientLine: "Mobility client",
    result: "500+ drivers real-time",
  },
  {
    title: "Email Campaign Automation System",
    description: "Automated email marketing platform with scheduling, segmentation, and analytics tracking.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    category: "Automation",
    filterCategory: "Automation",
    stack: "Python, FastAPI, Celery, Redis",
    clientLine: "Marketing agency",
    result: "70% time saved on campaigns",
  },
  {
    title: "Retail Branding",
    description: "Branding and storefront signage for retail client.",
    image: "/Image/image%20(2).jpg",
    category: "Branding",
    filterCategory: "Web",
    stack: "Design system, Web",
    clientLine: "Retail client",
  },
];

const INITIAL_COUNT = 6;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "eCommerce", "Automation"];

  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.filterCategory === activeFilter);

  const displayed = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="py-24 bg-background" aria-labelledby="projects-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Selected Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Production-ready web applications with proven results for startups and clients
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {displayed.map((project, index) => (
              <article
                key={index}
                className="bg-gradient-to-br from-card to-card/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.05}s` }}
                role="listitem"
              >
                <div className="relative overflow-hidden aspect-video bg-muted">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1.5 bg-primary text-white rounded-full text-xs font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  {project.result && (
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-green-500/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-semibold">
                        ✓ {project.result}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3 italic">
                    {project.clientLine}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!showAll && filteredProjects.length > INITIAL_COUNT && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="View more projects"
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
