import { Rocket } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16 border-b border-border pb-6 animate-fade-in">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Projects <span className="font-serif italic font-normal text-foreground/60">that matter.</span>
          </h2>
        </div>

        {/* Coming Soon */}
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Rocket className="w-8 h-8 text-primary animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Coming Soon</h3>
          <p className="text-muted-foreground max-w-md">
            I'm currently working on some exciting projects.
            Stay tuned — they'll be here soon!
          </p>
        </div>

      </div>
    </section>
  );
};