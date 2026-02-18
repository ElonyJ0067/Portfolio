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
    title: "AI-Powered eCommerce Platform",
    description: "Custom online store with AI-driven product recommendations and search. Handles inventory, checkout, and reporting. Built for a retail client and launched on schedule.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "eCommerce · AI",
    stack: "React, Node.js, Stripe, Python",
    clientLine: "Retail client · 5-month delivery",
  },
  {
    title: "Customer Support AI Chatbot",
    description: "Chatbot for FAQs, ticket routing, and basic sentiment. Plugs into existing CRM and knowledge base. Reduced support load for the client’s team.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    category: "AI · SaaS",
    stack: "Node.js, OpenAI, React, WebSockets",
    clientLine: "SaaS client · Ongoing support",
  },
  {
    title: "Cross-Platform Fitness & Wellness App",
    description: "Mobile app for workouts, nutrition, and progress. iOS and Android from one codebase, with sync and simple analytics for a wellness startup.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    category: "Mobile",
    stack: "Flutter, Node.js, Firebase",
    clientLine: "Wellness startup · Flutter + Firebase",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics with configurable reports and KPIs. Role-based access and multi-tenant setup for a B2B SaaS product.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "SaaS · Web",
    stack: "React, Node.js, PostgreSQL, Redis",
    clientLine: "B2B SaaS client · 4-month build",
  },
  {
    title: "Multi-Vendor Marketplace",
    description: "Marketplace with vendor onboarding, split payments, and order flow. Inventory and basic reporting for a client in eCommerce.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    category: "eCommerce",
    stack: "React, Node.js, Stripe, MongoDB",
    clientLine: "eCommerce client · React, Node, Stripe",
  },
  {
    title: "Restaurant Ordering & Kitchen System",
    description: "Web and mobile ordering, kitchen display, and admin for menus and staff. Single system for a restaurant group client.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    category: "Full-Stack",
    stack: "React, Node.js, Flutter, WebSockets",
    clientLine: "Restaurant group · Web + mobile",
  },
  {
    title: "Payment & Subscription Billing",
    description: "Subscription management, invoicing, and payment flows with Stripe. Multi-currency and dunning for a SaaS client.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    category: "API · SaaS",
    stack: "Node.js, Stripe, React, PostgreSQL",
    clientLine: "SaaS client · Billing & subscriptions",
  },
  {
    title: "AI Content Moderation Tool",
    description: "Tool for moderating user content with NLP and image checks. Review queue and overrides for a platform client.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "AI",
    stack: "Python, TensorFlow, React, Node.js",
    clientLine: "Platform client · Moderation pipeline",
  },
  {
    title: "API & Integration Hub",
    description: "Central platform for third-party API connections, webhooks, and data sync. Used by internal teams and partners for a tech client.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "API · Backend",
    stack: "Node.js, Python, Redis, REST/GraphQL",
    clientLine: "Tech client · Integration platform",
  },
  {
    title: "Automated Reporting & Data Pipelines",
    description: "Scheduled ETL jobs, report generation, and alerts. Cut manual reporting time and kept stakeholders updated for a data client.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Automation · Data",
    stack: "Python, Node.js, AWS, SQL",
    clientLine: "Data client · ETL & reporting",
  },
  {
    title: "Healthcare Appointment & Records Portal",
    description: "Portal for appointments, patient records, and telehealth. Web admin and patient app with access controls for a healthcare client.",
    image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=800&q=80",
    category: "Mobile · Web",
    stack: "Flutter, React, Node.js, PostgreSQL",
    clientLine: "Healthcare client · Web + mobile",
  },
  {
    title: "Internal HR & Onboarding Automation",
    description: "Workflows for hiring, onboarding, and leave. Integrates with email and calendars. Deployed for an internal operations team.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "SaaS · Automation",
    stack: "React, Node.js, Python, Integrations",
    clientLine: "Operations client · HR workflows",
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
            Production-ready applications I've built for startups and clients — web, mobile, AI, and APIs.
          </p>
          <p className="text-center text-muted-foreground text-sm mb-12 animate-fade-in max-w-xl mx-auto">
            Representative of the types of products I deliver. Imagery is illustrative.
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
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
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
