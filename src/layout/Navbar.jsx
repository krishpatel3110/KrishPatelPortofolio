import { Button } from "../components/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty("--color-background", "#0f1418");
      root.style.setProperty("--color-foreground", "#f0f2f5");
      root.style.setProperty("--color-surface", "#1c1208");
      root.style.setProperty("--color-card", "#1f1508");
      root.style.setProperty("--color-border", "#3d2a0a");
      root.style.setProperty("--color-muted", "#252e37");
      root.style.setProperty("--color-muted-foreground", "#7a8491");
      root.style.setProperty("--color-secondary", "#1f2830");
      root.style.setProperty("--color-secondary-foreground", "#ffbe5c");
      document.body.style.backgroundColor = "#0f1418";
      document.body.style.color = "#f0f2f5";
    } else {
      root.style.setProperty("--color-background", "#f5f0e8");
      root.style.setProperty("--color-foreground", "#1a1208");
      root.style.setProperty("--color-surface", "#ede8df");
      root.style.setProperty("--color-card", "#f0ebe2");
      root.style.setProperty("--color-border", "#d4a96a");
      root.style.setProperty("--color-muted", "#e8e0d0");
      root.style.setProperty("--color-muted-foreground", "#6b5c45");
      root.style.setProperty("--color-secondary", "#ede8df");
      root.style.setProperty("--color-secondary-foreground", "#b25120");
      document.body.style.backgroundColor = "#f5f0e8";
      document.body.style.color = "#1a1208";
    }
  }, [isDark]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
      isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
    } z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight hover:text-primary">
          KP<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <Button size="sm" href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
            Contact Me
          </Button>
        </div>

        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg text-muted-foreground hover:text-foreground py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Button href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};