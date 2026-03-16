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
    <section className="min-h-screen bg-[#f0ede6]">
      <div className="max-w-5xl mx-auto px-8 pt-28 pb-16">

        <div className="mb-12 border-b border-[#d6cfc4] pb-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9b8a74] mb-1">
            My <strong className="text-[#1a1208]">Experiences</strong>
          </p>
          <h2 className="text-2xl font-bold text-[#1a1208]">
            Professional <strong>Experience</strong>
          </h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-[180px_1fr] gap-6 py-8 border-b border-[#d6cfc4] last:border-0"
            >
              <div>
                <p className="text-xs text-[#9b8a74] font-medium leading-relaxed">{exp.period}</p>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 mt-1.5 text-xs text-[#b25120] font-medium">
                    <span className="w-1.5 h-1.5 bg-[#b25120] rounded-full" />
                    Current
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1a1208]">{exp.role}</h3>
                <p className="text-sm font-semibold text-[#b25120]">{exp.company}</p>
                <p className="text-xs text-[#9b8a74] mt-0.5">{exp.type} · {exp.location}</p>
                <p className="text-sm text-[#3d2f1e] mt-3 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 bg-[#e8dfd0] text-xs rounded-full text-[#6b5c45] border border-[#d6cfc4]"
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