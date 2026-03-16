import { ExternalLink, FileText } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const certifications = [
  { title: "PIX – Digital Competency Certification", issuer: "Pix", date: "Mar 2025", tags: ["Digital Competency"], link: "#", isPdf: false },
  { title: "English Proficiency Certificate", issuer: "Duolingo English Test", date: "Apr 2025", tags: ["English", "Language"], link: "https://certs.duolingo.com/atjguxk9zisach8d", isPdf: false },
  { title: "English Proficiency Certificate", issuer: "TOEFL", date: "Aug 2024", tags: ["English", "Language"], link: "#", isPdf: false },
  { title: "Cybersecurity Foundations", issuer: "LinkedIn Learning", date: "Nov 2025", tags: ["Cybersecurity"], link: "https://www.linkedin.com/learning/certificates/c897fe2d1d99759a83b2aa97093aa669ee0c14617e17ec6de4c6ac1af706531a?u=36051636", isPdf: false },
  { title: "Machine Learning Foundations: Linear Algebra", issuer: "LinkedIn Learning", date: "Nov 2025", tags: ["AI", "Linear Algebra"], link: "https://www.linkedin.com/learning/certificates/38293355461aea52a0bebb4320219d4aeea059fcf701983cf96eb04fb329097e?u=36051636", isPdf: false },
  { title: "Ethics in the Age of Generative AI", issuer: "LinkedIn Learning", date: "Nov 2025", tags: ["AI", "Ethics"], link: "https://www.linkedin.com/learning/certificates/2ff89351cc3f5b9babb1ef5b44fa9ce5d68aa8f24bb43ead90e7be02682d9726?u=36051636", isPdf: false },
  { title: "Advanced Testing Practices Using AWS DevOps Tools", issuer: "Amazon Web Services (AWS)", date: "Dec 2025", tags: ["AWS", "DevOps"], link: "#", isPdf: true },
  { title: "Amazon Q - Generative AI-powered Assistant Learning Plan", issuer: "Amazon Web Services (AWS)", date: "Dec 2025", tags: ["Cloud", "Generative AI"], link: "#", isPdf: true },
  { title: "Bank of America - Investment Banking Job Simulation", issuer: "Forage", date: "Dec 2025", tags: ["Finance", "Banking"], link: "https://www.theforage.com/completion-certificates/fMCqmt8qR4G85Puue/Hi8MJQE5T3MeTRWQR_fMCqmt8qR4G85Puue_69349f447dfff38876700ed0_1765057460654_completion_certificate.pdf", isPdf: true },
];

export const Testimonials = () => {
  const { t } = useLang();
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-b border-border pb-6 animate-fade-in">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">{t("cert_label")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("cert_title")} <span className="font-serif italic font-normal text-foreground/60">{t("cert_title_italic")}</span>
          </h2>
        </div>
        <div className="space-y-0">
          {certifications.map((cert, idx) => (
            <div key={idx} className="grid md:grid-cols-[200px_1fr_auto] gap-6 items-center py-6 border-b border-border last:border-0 group animate-fade-in" style={{ animationDelay: `${(idx + 1) * 60}ms` }}>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {cert.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-secondary text-xs rounded-full text-muted-foreground border border-border">{tag}</span>
                  ))}
                </div>
              </div>
              {cert.link !== "#" ? (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium whitespace-nowrap">
                  {cert.isPdf ? <><FileText className="w-3.5 h-3.5" /> PDF</> : <>{t("cert_view")} <ExternalLink className="w-3.5 h-3.5" /></>}
                </a>
              ) : cert.isPdf ? (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap italic">
                  <FileText className="w-3.5 h-3.5" /> {t("cert_pdf_soon")}
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted-foreground text-center">{t("cert_note")}</p>
      </div>
    </section>
  );
};