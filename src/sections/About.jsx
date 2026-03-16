import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const skillCategories = [
  { skills: [{ name: "Python", level: 80 }, { name: "Java", level: 70 }, { name: "JavaScript", level: 75 }, { name: "HTML / CSS", level: 85 }] },
  { skills: [{ name: "React", level: 70 }, { name: "Tailwind CSS", level: 75 }, { name: "Vite", level: 65 }, { name: "EmailJS", level: 60 }] },
];
const languages = [
  { name: "English", level_en: "Fluent", level_fr: "Courant", percent: 90 },
  { name: "French / Français", level_en: "Native", level_fr: "Natif", percent: 100 },
  { name: "Hindi", level_en: "Native", level_fr: "Natif", percent: 95 },
  { name: "Gujarati", level_en: "Native", level_fr: "Natif", percent: 100 },
];

function SkillBar({ name, level, animate }) {
  const [width, setWidth] = useState(0);
  useEffect(() => { if (!animate) return; const t = setTimeout(() => setWidth(level), 150); return () => clearTimeout(t); }, [animate, level]);
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-primary font-semibold">{level}%</span>
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
        <div className="grid md:grid-cols-3 gap-12">
          <div className="animate-fade-in animation-delay-100">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 pb-2 border-b border-border">{t("about_prog")}</h3>
            {skillCategories[0].skills.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} animate={animate} />)}
          </div>
          <div className="animate-fade-in animation-delay-200">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 pb-2 border-b border-border">{t("about_frameworks")}</h3>
            {skillCategories[1].skills.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} animate={animate} />)}
          </div>
          <div className="animate-fade-in animation-delay-300">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 pb-2 border-b border-border">{t("about_languages")}</h3>
            {languages.map((l, i) => <LangBar key={i} name={l.name} level={lang === "fr" ? l.level_fr : l.level_en} percent={l.percent} animate={animate} />)}
          </div>
        </div>
      </div>
    </section>
  );
};