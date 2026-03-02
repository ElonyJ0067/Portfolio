import { useCountUp } from "@/hooks/useCountUp";

const About = () => {
  const projectsCount = useCountUp(50, 2000);
  const satisfactionCount = useCountUp(98, 2000);
  const yearsCount = useCountUp(5, 2000);

  return (
    <section id="about" className="py-24 bg-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center animate-fade-in order-2 md:order-1">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/Photo/1.jpg"
                  alt="Elony Nevo - Full-Stack Developer"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="w-full h-full bg-primary/10 hidden items-center justify-center text-5xl font-bold text-primary"
                  style={{ display: "none" }}
                  aria-label="Elony Nevo initials"
                >
                  EN
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up order-1 md:order-2">
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Full-Stack developer with 5+ years of experience, specializing in scalable web platforms, UI development, APIs, Python automation, and backend solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've delivered 50+ projects for startups and private clients, building production-ready 
              software focused on performance, automation, and long-term scalability.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-foreground font-semibold">
                Core - Web & Automation Expert | UI, API, Data Solution
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground text-sm sm:text-base" role="list">
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold flex-shrink-0" aria-hidden="true">✔</span> 
                <span>Frontend & Backend Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold flex-shrink-0" aria-hidden="true">✔</span> 
                <span>Automation & Smart Integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold flex-shrink-0" aria-hidden="true">✔</span> 
                <span>Scalable & Clean Web Applications</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold flex-shrink-0" aria-hidden="true">✔</span> 
                <span>Performance Optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold flex-shrink-0" aria-hidden="true">✔</span> 
                <span>Logo & UI/UX Implementation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold flex-shrink-0" aria-hidden="true">✔</span> 
                <span>API Development & Integration</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-500/20 text-center hover:-translate-y-1 transition-all duration-300" ref={projectsCount.ref}>
            <div className="text-4xl font-bold text-foreground mb-2">{projectsCount.count}+</div>
            <div className="text-muted-foreground font-medium">Projects Delivered</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-purple-500/20 text-center hover:-translate-y-1 transition-all duration-300" ref={satisfactionCount.ref}>
            <div className="text-4xl font-bold text-foreground mb-2">{satisfactionCount.count}%</div>
            <div className="text-muted-foreground font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-emerald-500/20 text-center hover:-translate-y-1 transition-all duration-300" ref={yearsCount.ref}>
            <div className="text-4xl font-bold text-foreground mb-2">{yearsCount.count}+</div>
            <div className="text-muted-foreground font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
