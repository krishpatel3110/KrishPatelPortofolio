import { useLang } from "@/context/LanguageContext";

const educations = [
  {
    logo: "/njit.jpg",
    school: "New Jersey Institute of Technology",
    degree_en: "Bachelor of Science – Computer Science",
    degree_fr: "Licence en Sciences – Informatique",
    period: "Aug 2025 – May 2029",
    period_fr: "Août 2025 – Mai 2029",
    grade: "3.8 / 4.0 GPA",
    activities_en: "Active member of the Sanskar Community — contributing to cultural events, student networking, and promoting Indian heritage on campus.",
    activities_fr: "Membre actif de la communauté Sanskar — contribution aux événements culturels, réseautage étudiant et promotion du patrimoine indien sur le campus.",
    tags: ["Physics", "Mathematics", "Algorithms", "Data Structures", "Web Dev", "Java", "Python", "React"],
    current: true,
  },
  {
    logo: null,
    school: "Lycée Édouard Delamare Deboutteville",
    degree_en: "High School Diploma – General",
    degree_fr: "Baccalauréat Général",
    period: "2022 – 2025",
    period_fr: "2022 – 2025",
    grade: "10th, 11th & 12th Grade",
    activities_en: null,
    activities_fr: null,
    tags: [],
    current: false,
  },
];

export const Education = () => {
  const { lang } = useLang();

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        <div className="mb-16 border-b border-border pb-6 animate-fade-in">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
            {lang === "fr" ? "Parcours Académique" : "Academic Background"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {lang === "fr" ? "Formation" : "Education"}{" "}
            <span className="font-serif italic font-normal text-foreground/60">
              {lang === "fr" ? "& diplômes." : "& degrees."}
            </span>
          </h2>
        </div>

        <div className="space-y-0">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-[200px_1fr] gap-8 py-10 border-b border-border last:border-0 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                <p className="text-sm text-muted-foreground font-medium">
                  {lang === "fr" ? edu.period_fr : edu.period}
                </p>
                {edu.current && (
                  <span className="inline-flex items-center gap-1.5 mt-2 text-xs text-primary font-medium">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    {lang === "fr" ? "En cours" : "Current"}
                  </span>
                )}
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-border bg-secondary flex items-center justify-center">
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs font-bold text-muted-foreground">
                      {edu.school.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{edu.school}</h3>
                  <p className="text-primary font-medium mt-0.5">
                    {lang === "fr" ? edu.degree_fr : edu.degree_en}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">{edu.grade}</p>

                  {(lang === "fr" ? edu.activities_fr : edu.activities_en) && (
                    <p className="text-muted-foreground mt-3 leading-relaxed text-sm">
                      {lang === "fr" ? edu.activities_fr : edu.activities_en}
                    </p>
                  )}

                  {edu.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};