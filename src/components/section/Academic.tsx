// import { getLatestEducationId, sortEducationByRecency } from "../../helpers/helper";
import Education from "../Education";

export default function Academic({ academics = [], education_eyebrow, education_title }: AcademicProps) {

  const latestId = academics[0]?.id ?? null;


  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4 sm:mb-5 md:mb-6">
          {education_eyebrow}
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background leading-tight mb-8 sm:mb-10 md:mb-12">
          {education_title}
        </h2>

        <div className="relative">
          <div className="absolute left-2 top-6 bottom-6 w-px bg-outline-variant" />

          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            {academics.map((item) => (
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