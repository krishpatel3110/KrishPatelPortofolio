import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Github, Linkedin, Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">

      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                Future Software Engineer • NJIT Computer Science
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                Krish<span className="text-primary">.</span>
                <br />
                <span className="font-serif italic font-normal text-foreground/70 text-4xl md:text-5xl">
                  Building the future with code.
                </span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in animation-delay-200">
              Hi, I'm <strong className="text-foreground">Krish Patel</strong>, a Computer Science student at NJIT.
              I'm passionate about software engineering, technology, and building systems that solve real problems.
              Currently focused on web development, algorithms, and tech-driven innovation.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={(e) => { e.preventDefault(); document.querySelector && window.location.assign('/contact'); }}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground font-medium">Follow me:</span>
              <div className="w-8 h-px bg-border" />
              {[
                { icon: Github, href: "https://github.com/krishpatel3110" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/krish-p-58a83a323/" },
                { icon: Instagram, href: "https://www.instagram.com/ptl.krishh?igsh=MTJzcTU4ODByYWMxeA%3D%3D&utm_source=qr" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 text-muted-foreground"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Photo */}
          <div className="flex justify-center animate-fade-in animation-delay-300">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-125" />

              {/* Photo */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src="/krishfond.png"
                  alt="Krish Patel"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 glass rounded-full px-4 py-2 flex items-center gap-2 border border-border shadow-lg">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Available for work</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};