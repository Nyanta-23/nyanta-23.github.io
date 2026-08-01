interface SkillGroup {
  category: string;
  skills: string[];
}

const PLACEHOLDER_SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React.js", "Vue.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Laravel", "Express.js", "Nest.js", "Node.js"],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB", "Mongoose"],
  },
];

export default function Skills() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-6">
          Skills
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-10">
          What I work with
        </h2>

        <div className="space-y-8">
          {PLACEHOLDER_SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-6 pb-8 border-b border-outline-variant last:border-b-0"
            >
              <p className="font-mono text-sm text-on-surface-variant uppercase tracking-wide">
                {group.category}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs sm:text-sm px-3 py-1.5 border border-outline-variant text-on-background"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}