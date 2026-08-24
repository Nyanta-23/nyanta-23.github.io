import Project from "../Project";

export default function Portfolio({
  projects,
  portfolio_title,
  portfolio_eyebrow,
  portfolio_description
}: PortfolioProps) {

  return (
    <section className="py-10 sm:py-16 px-4 xs:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-3 sm:mb-4">
          {portfolio_eyebrow}
        </p>

        <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl font-semibold text-on-background leading-tight mb-3 sm:mb-4">
          {portfolio_title}
        </h1>

        <p className="text-on-surface-variant text-sm xs:text-base mb-8 sm:mb-12 max-w-lg">
          {portfolio_description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects?.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}