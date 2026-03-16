const experiences = [
  {
    period: "Feb 2026 — Present",
    role: "Virtual Archives Beta Tester",
    company: "Contextral · Internship",
    location: "Newark, New Jersey · Remote",
    description:
      "Testing and analyzing virtual archive systems, providing detailed reports and technical analysis to improve product quality and user experience.",
    technologies: ["Reporting & Analysis", "Technical Analysis"],
    current: true,
  },
  {
    period: "Feb 2026 — Present",
    role: "Ambassador",
    company: "Naano · Part-time",
    location: "Paris, Île-de-France · Remote",
    description:
      "Representing and promoting the brand through social media advertising and networking, building awareness and community engagement.",
    technologies: ["Social Media Advertising", "Networking"],
    current: true,
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Crew Member",
    company: "McDonald's · Contract",
    location: "Ferrières-en-Bray, Normandy, France · On-site",
    description:
      "Delivered excellent customer service in a fast-paced environment, developing strong communication and hospitality management skills.",
    technologies: ["Communication", "Hospitality Management"],
    current: false,
  },
  {
    period: "Jan 2022 — May 2025",
    role: "Hotel Managing Supervisor",
    company: "Hotel Le Saint Aubin - Restaurant Natraj · Self-employed",
    location: "Gournay-en-Bray, Normandy, France · On-site",
    description:
      "Supervised daily hotel and restaurant operations over 3+ years, leading a team and ensuring exceptional guest experiences through strong leadership and time management.",
    technologies: ["Time Management", "Leadership"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional journey, from hospitality management to tech internships.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">{exp.location}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};