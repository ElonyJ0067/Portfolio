const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center animate-fade-in order-2 md:order-1">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/Photo/1.jpg"
                  alt="Elony Novo"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="w-full h-full bg-primary/10 hidden items-center justify-center text-5xl font-bold text-primary"
                  style={{ display: "none" }}
                >
                  EN
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Full-Stack AI developer with about 5 years of experience, specializing in eCommerce, 
              scalable web platforms, mobile applications, and AI-powered automation tools.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've delivered projects for startups, private clients, and through Upwork, building production-ready 
              software focused on performance, usability, and long-term scalability.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold">✔</span> AI & Automation Integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold">✔</span> Cross-Platform Mobile Apps
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold">✔</span> Scalable Web Applications
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold">✔</span> API & Backend Development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold">✔</span> Performance Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold">✔</span> On-Time Delivery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
