const STAR = "★";
const STARS = STAR.repeat(5);

const testimonials = [
  {
    quote: "Elony delivered on time and was easy to work with. The app exceeded our expectations and he was very responsive throughout the project.",
    context: "Mobile app project",
    name: "James K.",
    role: "Startup founder",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face",
  },
  {
    quote: "Professional, clear communication, and the eCommerce site was built to scale. Would hire again for future work.",
    context: "eCommerce platform",
    name: "Sarah M.",
    role: "Private client",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face",
  },
  {
    quote: "Great experience from start to finish. The AI chatbot integration was done exactly as we needed, and the codebase is clean and maintainable.",
    context: "AI Chatbot · SaaS",
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
    quote: "Elony understood our requirements quickly and suggested improvements we hadn't thought of. The mobile app is smooth and users love it.",
    context: "Wellness app · Flutter",
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
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 animate-fade-in">
            What Clients Say
          </h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">
            Feedback from startups and clients I've worked with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md border border-border/50 hover-lift animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-amber-500 text-lg mb-3" aria-label="5 stars">
                  {STARS}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-1 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-sm text-primary font-medium">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
