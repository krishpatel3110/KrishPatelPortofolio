import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

const courses = [
  { code: "CS 100", name_en: "Roadmap to Computing", name_fr: "Introduction à l'Informatique", semester: "1st Semester", semester_fr: "1er Semestre", year: "First Year", year_fr: "Première Année", credits: 3, category: "Computer Science" },
  { code: "CS 113", name_en: "Introduction to Computer Science I", name_fr: "Introduction à l'Informatique I", semester: "2nd Semester", semester_fr: "2ème Semestre", year: "First Year", year_fr: "Première Année", credits: 3, category: "Computer Science" },
  { code: "MATH 111", name_en: "Calculus I", name_fr: "Calcul I", semester: "1st Semester", semester_fr: "1er Semestre", year: "First Year", year_fr: "Première Année", credits: 4, category: "Math & Science" },
  { code: "MATH 112", name_en: "Calculus II", name_fr: "Calcul II", semester: "2nd Semester", semester_fr: "2ème Semestre", year: "First Year", year_fr: "Première Année", credits: 4, category: "Math & Science" },
  { code: "PHYS 111", name_en: "Physics I", name_fr: "Physique I", semester: "1st Semester", semester_fr: "1er Semestre", year: "First Year", year_fr: "Première Année", credits: 3, category: "Math & Science" },
  { code: "PHYS 111A", name_en: "Physics I Lab", name_fr: "TP Physique I", semester: "1st Semester", semester_fr: "1er Semestre", year: "First Year", year_fr: "Première Année", credits: 1, category: "Math & Science" },
  { code: "PHYS 121", name_en: "Physics II", name_fr: "Physique II", semester: "2nd Semester", semester_fr: "2ème Semestre", year: "First Year", year_fr: "Première Année", credits: 3, category: "Math & Science" },
  { code: "PHYS 121A", name_en: "Physics II Lab", name_fr: "TP Physique II", semester: "2nd Semester", semester_fr: "2ème Semestre", year: "First Year", year_fr: "Première Année", credits: 1, category: "Math & Science" },
  { code: "ENGL 101", name_en: "English Composition: Introduction to Academic Writing", name_fr: "Composition Anglaise : Introduction à l'Écriture Académique", semester: "1st Semester", semester_fr: "1er Semestre", year: "First Year", year_fr: "Première Année", credits: 3, category: "Communication / Others" },
  { code: "ENGL 102", name_en: "English Composition: Introduction to Writing for Research", name_fr: "Composition Anglaise : Écriture pour la Recherche", semester: "2nd Semester", semester_fr: "2ème Semestre", year: "First Year", year_fr: "Première Année", credits: 3, category: "Communication / Others" },
  { code: "FYS SEM", name_en: "First-Year Student Seminar", name_fr: "Séminaire Première Année", semester: "1st Semester", semester_fr: "1er Semestre", year: "First Year", year_fr: "Première Année", credits: 0, category: "Communication / Others" },
  { code: "HIST 213", name_en: "History and Humanities GER 200 level", name_fr: "Histoire et Humanités niveau GER 200", semester: "2nd Semester", semester_fr: "2ème Semestre", year: "First Year", year_fr: "Première Année", credits: 3, category: "Communication / Others" },
];

const categoryColor = {
  "Computer Science": "bg-primary/10 text-primary border-primary/20",
  "Math & Science": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "Communication / Others": "bg-purple-500/10 text-purple-600 border-purple-500/20",
};

const categoryLabel = {
  en: { "Computer Science": "Computer Science", "Math & Science": "Math & Science", "Communication / Others": "Communication / Others" },
  fr: { "Computer Science": "Informatique", "Math & Science": "Maths & Sciences", "Communication / Others": "Communication / Autres" },
};

export const Courses = () => {
  const [active, setActive] = useState("All");
  const { t, lang } = useLang();

  const filters = [
    { key: "All", label: t("courses_filter_all") },
    { key: "Computer Science", label: categoryLabel[lang]["Computer Science"] },
    { key: "Math & Science", label: categoryLabel[lang]["Math & Science"] },
    { key: "Communication / Others", label: categoryLabel[lang]["Communication / Others"] },
  ];

  const filtered = active === "All" ? courses : courses.filter(c => c.category === active);

  const grouped = filtered.reduce((acc, course) => {
    const key = lang === "fr"
      ? `${course.year_fr} — ${course.semester_fr}`
      : `${course.year} — ${course.semester}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(course);
    return acc;
  }, {});

  const totalCredits = filtered.reduce((sum, c) => sum + c.credits, 0);

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 border-b border-border pb-6 animate-fade-in">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">{t("courses_label")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("courses_title")} <span className="font-serif italic font-normal text-foreground/60">{t("courses_title_italic")}</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 animate-fade-in animation-delay-100">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === f.key
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto self-center text-xs text-muted-foreground">
            {filtered.length} {t("courses_count")} · <strong className="text-foreground">{totalCredits} {t("courses_credits")}</strong>
          </span>
        </div>

        <div className="space-y-10 animate-fade-in animation-delay-200">
          {Object.entries(grouped).map(([group, items]) => (
            <div key={group}>
              <div className="flex items-center gap-4 mb-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">{group}</p>
                <div className="flex-1 h-px bg-border" />
                <p className="text-xs text-muted-foreground whitespace-nowrap">{items.reduce((s, c) => s + c.credits, 0)} {t("courses_credits")}</p>
              </div>
              <div className="space-y-2">
                {items.map((course, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group">
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="text-xs font-bold text-primary font-mono whitespace-nowrap">{course.code}</span>
                      <span className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        {lang === "fr" ? course.name_fr : course.name_en}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`hidden sm:inline-flex px-2 py-0.5 text-xs rounded-full border ${categoryColor[course.category]}`}>
                        {categoryLabel[lang][course.category]}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground w-6 text-right">
                        {course.credits > 0 ? course.credits : "—"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};