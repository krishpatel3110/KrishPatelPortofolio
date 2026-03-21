import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { SOCIAL_LINKS } from "@/constants/socials";

export const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img src="/orange1.png" alt="orange" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t("hero_badge")}
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground animate-fade-in">
                {t("hero_about")} <strong className="text-foreground">{t("hero_about_me")}</strong>
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                {t("hero_title")} <strong>Krish Patel</strong>, {t("hero_title_2")}{" "}
                <strong>NJIT</strong>{" "}
                <span className="font-serif italic font-normal text-foreground/60">{t("hero_location")}</span>
              </h1>

              <div className="text-base text-muted-foreground max-w-lg space-y-3 animate-fade-in animation-delay-200">
                <p>{t("hero_p1")}</p>
                <p>{t("hero_p2")}</p>
                <div>
                  <p className="font-semibold text-foreground mb-2">{t("hero_interests")}</p>
                  <ul className="space-y-1">
                    {[
                      { bold: t("hero_i1_bold"), rest: t("hero_i1_rest") },
                      { bold: t("hero_i2_bold"), rest: t("hero_i2_rest") },
                      { bold: t("hero_i3_bold"), rest: t("hero_i3_rest") },
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span><strong className="text-foreground">{item.bold}</strong>{item.rest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" href="/contact">
                {t("hero_contact")} <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                {t("hero_resume")}
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">{t("hero_follow")} </span>
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Circular Photo */}
          <div className="relative animate-fade-in animation-delay-300 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-transparent to-primary/20 blur-3xl scale-110 animate-pulse" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-[3px] bg-gradient-to-br from-primary/70 via-primary/30 to-primary/60">
                <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
                  <img
                    src="/krishfond.png"
                    alt="Krish Patel"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 0%" }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 right-4 glass rounded-xl px-4 py-3 animate-float shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">{t("hero_available")}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};