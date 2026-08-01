const PLACEHOLDER_SKILLS = [
  "Skill One",
  "Skill Two",
  "Skill Three",
  "Skill Four",
  "Skill Five",
  "Skill Six",
];

export default function SkillsHighlight() {
  return (
    <section className="py-16 px-6 flex flex-col items-center text-center">
      <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-8">
        Tech Stack
      </p>

      <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
        {PLACEHOLDER_SKILLS.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs sm:text-sm px-4 py-2 border border-outline-variant text-on-surface-variant hover:border-on-background hover:text-on-background transition-colors duration-150"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}