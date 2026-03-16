import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
      { name: "JavaScript", level: 75 },
      { name: "HTML / CSS", level: 85 },
    ],
  },
  {
    title: "Frameworks / Libraries",
    skills: [
      { name: "React", level: 70 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Vite", level: 65 },
      { name: "EmailJS", level: 60 },
    ],
  },
];

const languages = [
  { name: "English", level: "Fluent", percent: 100 },
  { name: "French", level: "Native", percent: 85 },
  { name: "Hindi", level: "Native", percent: 85 },
  { name: "Gujarati", level: "Native", percent: 100 },
  { name: "Spanish", level: "Moderate", percent: 100 },
];

function SkillBar({ name, level, animate }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setWidth(level), 150);
    return () => clearTimeout(t);
  }, [animate, level]);

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-surface border border-border/50 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: "linear-gradient(90deg, #ffbe5c, #f5a623)",
          }}
        />
      </div>
    </div>
  );
}

function LangBar({ name, level, percent, animate }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setWidth(percent), 150);
    return () => clearTimeout(t);
  }, [animate, percent]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-primary font-semibold">{level}</span>
      </div>
      <div className="h-2 rounded-full bg-surface border border-border/50 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: "linear-gradient(90deg, #ffbe5c, #f5a623)",
          }}
        />
      </div>
    </div>
  );
}

export const About = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-12 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 text-secondary-foreground">
            Skills &{" "}
            <span className="font-serif italic font-normal text-white">
              Languages
            </span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Programming Languages */}
          <div className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in animation-delay-100">
            <h4 className="text-sm font-semibold text-primary mb-5 uppercase tracking-wider">
              Programming Languages
            </h4>
            {skillCategories[0].skills.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} animate={animate} />
            ))}
          </div>

          {/* Frameworks / Libraries */}
          <div className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in animation-delay-200">
            <h4 className="text-sm font-semibold text-primary mb-5 uppercase tracking-wider">
              Frameworks / Libraries
            </h4>
            {skillCategories[1].skills.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} animate={animate} />
            ))}
          </div>

          {/* Languages */}
          <div className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in animation-delay-300">
            <h4 className="text-sm font-semibold text-primary mb-5 uppercase tracking-wider">
              Languages
            </h4>
            {languages.map((lang, idx) => (
              <LangBar key={idx} name={lang.name} level={lang.level} percent={lang.percent} animate={animate} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};