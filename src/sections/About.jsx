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

export const About = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science freshman at NJIT with a passion for
                software engineering and building systems that solve real
                problems. My journey started with curiosity about how the web
                works, and has grown into hands-on experience with modern
                technologies.
              </p>
              <p>
                I'm currently focused on sharpening my skills in web
                development, algorithms, and full-stack engineering — always
                looking to learn and grow as a developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to grow into a strong engineer and contribute to
                impactful technology that makes a difference."
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6 animate-fade-in animation-delay-200">
            <h3 className="text-sm font-medium tracking-wider uppercase text-secondary-foreground">
              My Skills
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {skillCategories.map((category, catIdx) => (
                <div
                  key={catIdx}
                  className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                    {category.title}
                  </h4>
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skillIdx}
                      name={skill.name}
                      level={skill.level}
                      animate={animate}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};