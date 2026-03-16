import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/krishpatel3110", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/krish-p-58a83a323/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/ptl.krishh?igsh=MTJzcTU4ODByYWMxeA%3D%3D&utm_source=qr", label: "Instagram" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} <span className="font-medium text-foreground">Krish Patel</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};