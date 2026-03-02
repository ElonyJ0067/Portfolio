import { useState, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Go to home section"
          >
            Home
          </button>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
                aria-label={`Go to ${link.label} section`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/ElonyJ0067"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Visit my GitHub profile"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
              scrolled ? "text-foreground hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 animate-fade-in"
            role="menu"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                  role="menuitem"
                  aria-label={`Go to ${link.label} section`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://github.com/ElonyJ0067"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
                role="menuitem"
                aria-label="Visit my GitHub profile"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
