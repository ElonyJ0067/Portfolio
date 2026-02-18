import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className={`text-lg font-medium transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Home
            </button>
            
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("about")}
                className={`transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
