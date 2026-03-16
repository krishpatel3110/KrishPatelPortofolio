import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "/", label: "ME" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/projects", label: "PORTFOLIO" },
  { href: "/about", label: "SKILLS" },
];

export const applyTheme = (isDark) => {
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
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    applyTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Re-apply theme on route change
  useEffect(() => {
    applyTheme(isDark);
  }, [location.pathname]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navBg = isDark ? "bg-[#0f1418] border-[#3d2a0a]" : "bg-[#ffffff] border-[#e8d5b0]";
  const logoColor = isDark ? "text-[#f0f2f5]" : "text-[#1a1208]";
  const linkActive = isDark ? "text-[#f0f2f5]" : "text-[#1a1208]";
  const linkInactive = isDark ? "text-[#7a8491] hover:text-[#f0f2f5]" : "text-[#9b8a74] hover:text-[#1a1208]";
  const toggleBg = isDark
    ? "text-[#7a8491] hover:text-[#ffbe5c] hover:bg-[#1f2830]"
    : "text-[#9b8a74] hover:text-[#b25120] hover:bg-[#f5f0e8]";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${navBg}`}>
      <nav className="max-w-5xl mx-auto px-8 h-14 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleNav(e, "/")}
          className={`text-lg font-bold tracking-tight transition-colors ${logoColor}`}
        >
          Krish<span className="text-primary font-black">Patel</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`text-xs font-semibold tracking-[0.15em] pb-0.5 transition-colors relative ${
                  isActive
                    ? `${linkActive} after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary`
                    : linkInactive
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right: theme toggle + contact */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-all duration-300 ${toggleBg}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={(e) => handleNav(e, "/contact")}
            className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-semibold tracking-wide hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className={`md:hidden p-2 text-xl ${logoColor}`}
          onClick={() => setMenuOpen((p) => !p)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className={`md:hidden border-t px-8 py-4 flex flex-col gap-4 transition-colors duration-300 ${navBg}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`text-xs font-semibold tracking-[0.15em] transition-colors ${linkInactive}`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-all ${toggleBg}`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={(e) => handleNav(e, "/contact")}
              className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-semibold tracking-wide"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};