import { Button } from "../components/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
];

const applyTheme = (isDark) => {
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
    root.style.setProperty("--color-background", "#ffffff");
    root.style.setProperty("--color-foreground", "#1a1208");
    root.style.setProperty("--color-surface", "#f5f0e8");
    root.style.setProperty("--color-card", "#faf6f0");
    root.style.setProperty("--color-border", "#e8d5b0");
    root.style.setProperty("--color-muted", "#f0ebe2");
    root.style.setProperty("--color-muted-foreground", "#6b5c45");
    root.style.setProperty("--color-secondary", "#f5f0e8");
    root.style.setProperty("--color-secondary-foreground", "#b25120");
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#1a1208";
  }
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    applyTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => { applyTheme(isDark); }, [location.pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}
          className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
          Krish<span className="text-primary font-black">Patel</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors cursor-pointer relative pb-1 ${
                location.pathname === link.href
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button size="sm" onClick={(e) => handleNavClick(e, "/contact")}>
            Contact Me
          </Button>
        </div>

        {/* Mobile */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(p => !p)}>
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index} onClick={(e) => handleNavClick(e, link.href)}
                className="text-muted-foreground hover:text-foreground py-2 text-sm font-medium">
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-secondary transition-colors">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <Button size="sm" onClick={(e) => handleNavClick(e, "/contact")}>Contact Me</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};