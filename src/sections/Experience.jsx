import { useLang } from "@/context/LanguageContext";

const experiences = [
  {
    period: "Feb 2026 — Present", period_fr: "Fév 2026 — Présent",
    role_en: "Virtual Archives Beta Tester", role_fr: "Testeur Bêta Archives Virtuelles",
    company: "Contextral",
    type_en: "Internship · Remote", type_fr: "Stage · À distance",
    location: "Newark, New Jersey",
    desc_en: "Testing and analyzing virtual archive systems, providing detailed reports and technical analysis to improve product quality and user experience.",
    desc_fr: "Test et analyse de systèmes d'archives virtuelles, production de rapports détaillés et d'analyses techniques pour améliorer la qualité du produit.",
    technologies: ["Reporting & Analysis", "Technical Analysis"],
    current: true,
  },
  {
    period: "Feb 2026 — Present", period_fr: "Fév 2026 — Présent",
    role_en: "Ambassador", role_fr: "Ambassadeur",
    company: "Naano",
    type_en: "Part-time · Remote", type_fr: "Temps partiel · À distance",
    location: "Paris, France",
    desc_en: "Representing and promoting the brand through social media advertising and networking, building awareness and community engagement.",
    desc_fr: "Représentation et promotion de la marque via les réseaux sociaux et le networking, développement de la notoriété et de l'engagement communautaire.",
    technologies: ["Social Media", "Networking"],
    current: true,
  },
  {
    period: "Jun 2025 — Aug 2025", period_fr: "Juin 2025 — Août 2025",
    role_en: "Crew Member", role_fr: "Équipier",
    company: "McDonald's",
    type_en: "Contract · On-site", type_fr: "Contrat · Sur site",
    location: "Ferrières-en-Bray, France",
    desc_en: "Delivered excellent customer service in a fast-paced environment, developing strong communication and hospitality management skills.",
    desc_fr: "Service client excellent dans un environnement dynamique, développement de compétences en communication et gestion de l'hospitalité.",
    technologies: ["Communication", "Hospitality"],
    current: false,
  },
  {
    period: "Jan 2022 — May 2025", period_fr: "Jan 2022 — Mai 2025",
    role_en: "Hotel Managing Supervisor", role_fr: "Superviseur de Gestion Hôtelière",
    company: "Hotel Le Saint Aubin",
    type_en: "Self-employed · On-site", type_fr: "Indépendant · Sur site",
    location: "Gournay-en-Bray, France",
    desc_en: "Supervised daily hotel and restaurant operations over 3+ years, leading a team and ensuring exceptional guest experiences.",
    desc_fr: "Supervision des opérations quotidiennes de l'hôtel et du restaurant pendant plus de 3 ans, management d'équipe et expérience client exceptionnelle.",
    technologies: ["Leadership", "Time Management"],
    current: false,
  },
];

export const Experience = () => {
  const { t, lang } = useLang();
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-b border-border pb-6 animate-fade-in">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">{t("exp_label")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("exp_title")} <span className="font-serif italic font-normal text-foreground/60">{t("exp_title_italic")}</span>
          </h2>
        </div>
        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <div key={idx} className="grid md:grid-cols-[200px_1fr] gap-8 py-10 border-b border-border last:border-0 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              <div>
                <p className="text-sm text-muted-foreground font-medium">{lang === "fr" ? exp.period_fr : exp.period}</p>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 mt-2 text-xs text-primary font-medium">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    {t("exp_current")}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{lang === "fr" ? exp.role_fr : exp.role_en}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{lang === "fr" ? exp.type_fr : exp.type_en} · {exp.location}</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">{lang === "fr" ? exp.desc_fr : exp.desc_en}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground border border-border">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};