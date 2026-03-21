import { useLang } from "@/context/LanguageContext";
import { SOCIAL_LINKS } from "@/constants/socials";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLang();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} <span className="font-medium text-foreground">Krish Patel</span>. {t("footer_rights")}
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};