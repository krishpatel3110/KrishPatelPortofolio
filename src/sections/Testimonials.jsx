import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "PIX – Digital Competency Certification",
    issuer: "Pix",
    date: "Mar 2025",
    tags: ["Digital Competency"],
    link: "#",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "English Proficiency Certificate",
    issuer: "Duolingo English Test",
    date: "Apr 2025",
    tags: ["English", "Language"],
    link: "#",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    title: "English Proficiency Certificate",
    issuer: "TOEFL",
    date: "Aug 2024",
    tags: ["English", "Language"],
    link: "#",
    color: "from-purple-500/20 to-violet-500/10",
  },
  {
    title: "Cybersecurity Foundations",
    issuer: "LinkedIn",
    date: "Nov 2025",
    tags: ["Cybersecurity"],
    link: "#",
    color: "from-red-500/20 to-orange-500/10",
  },
  {
    title: "Machine Learning Foundations: Linear Algebra",
    issuer: "LinkedIn",
    date: "Nov 2025",
    tags: ["AI", "Linear Algebra", "Machine Learning"],
    link: "#",
    color: "from-primary/20 to-yellow-500/10",
  },
  {
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    date: "Nov 2025",
    tags: ["AI", "Ethics"],
    link: "#",
    color: "from-pink-500/20 to-rose-500/10",
  },
  {
    title: "Advanced Testing Practices Using AWS DevOps Tools",
    issuer: "Amazon Web Services (AWS)",
    date: "Dec 2025",
    tags: ["AWS Lambda", "AWS CodePipeline", "DevOps"],
    link: "#",
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    title: "Amazon Q - Generative AI-powered Assistant Learning Plan",
    issuer: "Amazon Web Services (AWS)",
    date: "Dec 2025",
    tags: ["Cloud", "Generative AI"],
    link: "#",
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    title: "Bank of America - Investment Banking Job Simulation",
    issuer: "Forage",
    date: "Dec 2025",
    tags: ["Investment Banking", "Finance"],
    link: "#",
    color: "from-red-500/20 to-pink-500/10",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Credentials &{" "}
            <span className="font-serif italic font-normal text-white">
              achievements.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of certifications and credentials I've earned across
            technology, AI, and professional development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 animate-fade-in flex flex-col justify-between group"
              style={{ animationDelay: `${(idx + 1) * 80}ms` }}
            >
              {/* Top */}
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}>
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-primary/70 mt-1">Issued {cert.date}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {cert.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              {cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  View Credential <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};