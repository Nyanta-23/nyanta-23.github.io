import { getLatestEducationId, sortEducationByRecency } from "../../helpers/helper";
import Education from "../Education";

export default function Academic({ academics }: AcademicProps) {

  if (!academics) return null;


  const sortedAcademics = sortEducationByRecency(academics);
  const latestId = getLatestEducationId(academics);


  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-6">
          Education
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-12">
          Academic background
        </h2>

        <div className="relative">
          <div className="absolute left-2 top-6 bottom-6 w-px bg-outline-variant" />

          <div className="space-y-8">
            {sortedAcademics.map((item) => (
              <Education
                key={item.id}
                education={item}
                is_latest={item.id === latestId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}