import ExperienceEntry from "../ExperienceEntry";

export default function Experience({ experiences = [], experience_eyebrow, experience_title }: ExperienceProps) {
  const latestPositionId = experiences[0]?.roles?.[0].id ?? null;

  return (
    <section className="py-10 sm:py-16 px-4 xs:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[10px] xs:text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4 xs:mb-6">
          {experience_eyebrow}
        </p>

        <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-8 xs:mb-12">
          {experience_title}
        </h2>

        <div className="space-y-8 xs:space-y-14">
          {experiences?.map((company) => (
            <ExperienceEntry
              key={company.id}
              experience={company}
              latest_position_id={latestPositionId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}