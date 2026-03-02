import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const ROLES = [
  "Full-Stack Developer",
  "Web & Automation Expert",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const target = ROLES[currentIndex];

    if (isTyping) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => {
          setDisplayed(target.slice(0, displayed.length + 1));
        }, 80);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setIsTyping(false), 2800);
      return () => clearTimeout(t);
    }

    if (displayed.length > 0) {
      const t = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 45);
      return () => clearTimeout(t);
    }

    setCurrentIndex((i) => (i + 1) % ROLES.length);
    setIsTyping(true);
    return undefined;
  }, [currentIndex, displayed, isTyping]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
      aria-label="Hero section"
    >
      <ParticleBackground />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-4">
        <div className="animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Hi, I'm Elony Nevo
            </h1>
            <div className="min-h-[3rem] md:min-h-[4rem] flex items-center justify-center">
              <p className="text-3xl md:text-4xl lg:text-4xl text-white/90 font-medium" aria-live="polite" aria-atomic="true">
                {displayed}
                <span className="animate-pulse" aria-hidden="true">|</span>
              </p>
            </div>
          </div>

          <div className="pt-32 flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => scrollTo("projects")}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="View my work section"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollTo("contact")}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Go to contact section"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
