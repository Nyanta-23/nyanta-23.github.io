import Project from "../Project";

export default function Portfolio({ projects }: PortfolioProps) {

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4">
          Portfolio
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-on-background leading-tight mb-4">
          All Projects
        </h1>

        <p className="text-on-surface-variant text-base mb-12 max-w-lg">
          {projects?.length ?? 0} projects built across full-stack web
          apps, admin dashboards, and frontend interfaces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}