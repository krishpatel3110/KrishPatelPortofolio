import { ExternalLink, Award } from "lucide-react";

const certifications = [
  { title: "PIX – Digital Competency Certification", issuer: "Pix", date: "Mar 2025", tags: ["Digital Competency"], link: "#" },
  { title: "English Proficiency Certificate", issuer: "Duolingo English Test", date: "Apr 2025", tags: ["English", "Language"], link: "#" },
  { title: "English Proficiency Certificate", issuer: "TOEFL", date: "Aug 2024", tags: ["English", "Language"], link: "#" },
  { title: "Cybersecurity Foundations", issuer: "LinkedIn", date: "Nov 2025", tags: ["Cybersecurity"], link: "#" },
  { title: "Machine Learning Foundations: Linear Algebra", issuer: "LinkedIn", date: "Nov 2025", tags: ["AI", "Linear Algebra"], link: "#" },
  { title: "Ethics in the Age of Generative AI", issuer: "LinkedIn", date: "Nov 2025", tags: ["AI", "Ethics"], link: "#" },
  { title: "Advanced Testing Practices Using AWS DevOps Tools", issuer: "Amazon Web Services (AWS)", date: "Dec 2025", tags: ["AWS", "DevOps"], link: "#" },
  { title: "Amazon Q - Generative AI-powered Assistant Learning Plan", issuer: "Amazon Web Services (AWS)", date: "Dec 2025", tags: ["Cloud", "Generative AI"], link: "#" },
  { title: "Bank of America - Investment Banking Job Simulation", issuer: "Forage", date: "Dec 2025", tags: ["Finance", "Banking"], link: "#" },
];

export const Testimonials = () => {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16 border-b border-border pb-6 animate-fade-in">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Credentials & <span className="font-serif italic font-normal text-foreground/60">achievements.</span>
          </h2>
        </div>

        {/* List */}
        <div className="space-y-0">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-[200px_1fr_auto] gap-6 items-center py-6 border-b border-border last:border-0 group animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 60}ms` }}
            >
              {/* Date */}
              <p className="text-sm text-muted-foreground">{cert.date}</p>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {cert.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-secondary text-xs rounded-full text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              {cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium whitespace-nowrap"
                >
                  View <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};