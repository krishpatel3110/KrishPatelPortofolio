import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const skillCategories = [
  { skills: [
    { name: "Python", level_en: "Advanced", level_fr: "Avancé", percent: 80 },
    { name: "Java", level_en: "Proficient", level_fr: "Compétent", percent: 70 },
    { name: "JavaScript", level_en: "Proficient", level_fr: "Compétent", percent: 75 },
    { name: "HTML / CSS", level_en: "Advanced", level_fr: "Avancé", percent: 85 },
  ]},
  { skills: [
    { name: "React", level_en: "Proficient", level_fr: "Compétent", percent: 70 },
    { name: "Tailwind CSS", level_en: "Proficient", level_fr: "Compétent", percent: 75 },
    { name: "Vite", level_en: "Intermediate", level_fr: "Intermédiaire", percent: 65 },
    { name: "EmailJS", level_en: "Intermediate", level_fr: "Intermédiaire", percent: 60 },
  ]},
];

const tools = [
  { name: "Git", icon: "🔀" },
  { name: "GitHub", icon: "🐙" },
  { name: "VS Code", icon: "💻" },
  { name: "Figma", icon: "🎨" },
  { name: "Vercel", icon: "▲" },
  { name: "Supabase", icon: "⚡" },
  { name: "npm", icon: "📦" },
  { name: "Terminal", icon: "🖥️" },
];

const languages = [
  { name: "English", level_en: "Fluent", level_fr: "Courant", percent: 90 },
  { name: "French / Français", level_en: "Native", level_fr: "Natif", percent: 100 },
  { name: "Hindi", level_en: "Native", level_fr: "Natif", percent: 95 },
  { name: "Gujarati", level_en: "Native", level_fr: "Natif", percent: 100 },
];

function SkillBar({ name, label, percent, animate }) {
  const [width, setWidth] = useState(0);
  useEffect(() => { if (!animate) return; const t = setTimeout(() => setWidth(percent), 150); return () => clearTimeout(t); }, [animate, percent]);
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-primary font-semibold">{label}</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <div className="h-full rounded-full transition-all duration-1000 ease-out bg-primary" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function LangBar({ name, level, percent, animate }) {
  const [width, setWidth] = useState(0);
  useEffect(() => { if (!animate) return; const t = setTimeout(() => setWidth(percent), 150); return () => clearTimeout(t); }, [animate, percent]);
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-primary font-semibold">{level}</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <div className="h-full rounded-full transition-all duration-1000 ease-out bg-primary" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function ToolChip({ name, icon, animate, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { if (!animate) return; const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t); }, [animate, delay]);
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-border bg-card text-foreground transition-all duration-500 hover:border-primary hover:shadow-md hover:-translate-y-0.5 cursor-default ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

export const About = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const { t, lang } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setAnimate(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="mb-16 border-b border-border pb-6 animate-fade-in">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">{t("about_label")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("about_title")} <span className="font-serif italic font-normal text-foreground/60">{t("about_title_italic")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-16 max-w-2xl mx-auto">
          <div className="animate-fade-in animation-delay-100">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 pb-2 border-b border-border">{t("about_prog")}</h3>
            {skillCategories[0].skills.map((s, i) => <SkillBar key={i} name={s.name} label={lang === "fr" ? s.level_fr : s.level_en} percent={s.percent} animate={animate} />)}
          </div>
          <div className="animate-fade-in animation-delay-200">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 pb-2 border-b border-border">{t("about_frameworks")}</h3>
            {skillCategories[1].skills.map((s, i) => <SkillBar key={i} name={s.name} label={lang === "fr" ? s.level_fr : s.level_en} percent={s.percent} animate={animate} />)}
          </div>
          <div className="animate-fade-in animation-delay-300">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 pb-2 border-b border-border">{t("about_tools")}</h3>
            <div className="grid grid-cols-4 gap-3">
              {tools.map((tool, i) => <ToolChip key={i} name={tool.name} icon={tool.icon} animate={animate} delay={100 + i * 80} />)}
            </div>
          </div>
          <div className="animate-fade-in animation-delay-400">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 pb-2 border-b border-border">{t("about_languages")}</h3>
            {languages.map((l, i) => <LangBar key={i} name={l.name} level={lang === "fr" ? l.level_fr : l.level_en} percent={l.percent} animate={animate} />)}
          </div>
        </div>
      </div>
    </section>
  );
};