import ExperienceEntry from "../ExperienceEntry";
import { getLatestPositionId, sortExperiencesByRecency } from "../../helpers/helper";

export default function Experience({ experiences }: ExperienceProps) {
  if (!experiences) return null;

  const sortedExperiences = sortExperiencesByRecency(experiences);

  const latestPositionId = getLatestPositionId(experiences);

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-6">
          Experience
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-12">
          Where I&apos;ve worked
        </h2>

        <div className="space-y-14">
          {sortedExperiences.map((company) => (
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