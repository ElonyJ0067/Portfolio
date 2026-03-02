import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Updated with 9 clients - v3
const STAR = "★";
const STARS = STAR.repeat(5);

const testimonials = [
  {
    quote: "Elony delivered on time and was easy to work with. The app exceeded our expectations and he was very responsive throughout the project.",
    context: "Web automation project",
    name: "James K.",
    role: "Startup founder",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face",
  },
  {
    quote: "Professional, clear communication, and the web platform was built to scale. Would hire again for future work.",
    context: "eCommerce platform",
    name: "Sarah M.",
    role: "Private client",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face",
  },
  {
    quote: "Great experience from start to finish. The automation integration was done exactly as we needed, and the codebase is clean and maintainable.",
    context: "Python Automation",
    name: "David L.",
    role: "Product manager",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=face",
  },
  {
    quote: "Responsive, skilled, and delivered ahead of schedule. Our dashboard is now used daily by the whole team. Highly recommend.",
    context: "Analytics dashboard",
    name: "Rachel T.",
    role: "CTO",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=face",
  },
  {
    quote: "Elony understood our requirements quickly and suggested improvements we hadn't thought of. The web app is smooth and users love it.",
    context: "Web application",
    name: "Michael R.",
    role: "App owner",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face",
  },
  {
    quote: "From API design to deployment, everything was handled professionally. Our integration project was completed on budget and ahead of timeline.",
    context: "API & Backend",
    name: "Emily C.",
    role: "Tech lead",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&crop=face",
  },
  {
    quote: "Outstanding work on our automation system. The Python scripts saved us countless hours and the documentation was excellent.",
    context: "Workflow Automation",
    name: "Thomas B.",
    role: "Operations Director",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&fit=crop&crop=face",
  },
  {
    quote: "The API integration was seamless and the performance improvements were immediate. Elony's expertise in backend development is top-notch.",
    context: "API Integration",
    name: "Lisa W.",
    role: "Engineering Lead",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=128&h=128&fit=crop&crop=face",
  },
  {
    quote: "Delivered a complex web application with clean architecture and excellent documentation. The system handles high traffic without issues.",
    context: "Enterprise Web App",
    name: "Robert K.",
    role: "VP of Engineering",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=128&h=128&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide) - 1;

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev <= 0 ? totalSlides : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev >= totalSlides ? 0 : prev + 1));
  };

  // Get testimonials for current slide
  const startIndex = currentSlide * itemsPerSlide;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-secondary/20" 
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            What Clients Say
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Feedback from startups and clients I've worked with
          </p>

          <div className="relative px-12">
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity duration-500">
                {visibleTestimonials.map((item, index) => (
                  <article
                    key={startIndex + index}
                    className="bg-gradient-to-br from-card to-card/50 p-6 rounded-2xl shadow-lg border-2 border-border/50 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={item.photo}
                        alt={`${item.name}, ${item.role}`}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-amber-500 text-lg mb-3" aria-label="5 star rating">
                      {STARS}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4 flex-1 italic text-sm">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <p className="text-sm text-primary font-medium">{item.context}</p>
                  </article>
                ))}
              </div>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
