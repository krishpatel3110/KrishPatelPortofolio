import { Rocket } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}make an impact.
            </span>
          </h2>
        </div>

        {/* Coming Soon */}
        <div className="glass rounded-3xl p-16 text-center max-w-2xl mx-auto border border-primary/20 animate-fade-in animation-delay-200">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-10 h-10 text-primary animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Coming Soon
          </h3>
          <p className="text-muted-foreground">
            I'm currently working on some exciting projects. <br />
            Stay tuned — they'll be here soon!
          </p>
        </div>
      </div>
    </section>
  );
};