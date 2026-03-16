const experiences = [
  {
    period: "Feb 2026 — Present",
    role: "Virtual Archives Beta Tester",
    company: "Contextral",
    type: "Internship · Remote",
    location: "Newark, New Jersey",
    description: "Testing and analyzing virtual archive systems, providing detailed reports and technical analysis to improve product quality and user experience.",
    technologies: ["Reporting & Analysis", "Technical Analysis"],
    current: true,
  },
  {
    period: "Feb 2026 — Present",
    role: "Ambassador",
    company: "Naano",
    type: "Part-time · Remote",
    location: "Paris, France",
    description: "Representing and promoting the brand through social media advertising and networking, building awareness and community engagement.",
    technologies: ["Social Media", "Networking"],
    current: true,
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Crew Member",
    company: "McDonald's",
    type: "Contract · On-site",
    location: "Ferrières-en-Bray, France",
    description: "Delivered excellent customer service in a fast-paced environment, developing strong communication and hospitality management skills.",
    technologies: ["Communication", "Hospitality"],
    current: false,
  },
  {
    period: "Jan 2022 — May 2025",
    role: "Hotel Managing Supervisor",
    company: "Hotel Le Saint Aubin",
    type: "Self-employed · On-site",
    location: "Gournay-en-Bray, France",
    description: "Supervised daily hotel and restaurant operations over 3+ years, leading a team and ensuring exceptional guest experiences.",
    technologies: ["Leadership", "Time Management"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16 border-b border-border pb-6 animate-fade-in">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Experience <span className="font-serif italic font-normal text-foreground/60">that speaks.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-[200px_1fr] gap-8 py-10 border-b border-border last:border-0 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Left - Date */}
              <div>
                <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 mt-2 text-xs text-primary font-medium">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    Current
                  </span>
                )}
              </div>

              {/* Right - Content */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{exp.type} · {exp.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
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