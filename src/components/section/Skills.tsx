import SkillIcon from "../Skill";

export default function Skills({ skill_groups }: SkillProps) {
  return (
    <section className="py-10 sm:py-16 px-4 xs:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[10px] xs:text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4 xs:mb-6">
          Skills
        </p>

        <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-6 xs:mb-10">
          What I work with
        </h2>

        <div className="space-y-6 xs:space-y-8">
          {skill_groups?.map((group) => (
            <div
              key={group.id}
              className="grid grid-cols-1 sm:grid-cols-[120px_1fr] lg:grid-cols-[160px_1fr] gap-2 xs:gap-3 sm:gap-6 pb-6 xs:pb-8 border-b border-outline-variant last:border-b-0"
            >
              <p className="font-mono text-xs xs:text-sm text-on-surface-variant uppercase tracking-wide">
                {group.name}
              </p>

              <div className="flex flex-wrap gap-3 xs:gap-4">
                {group.skills?.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-col items-center gap-1.5 w-16 xs:w-16"
                  >
                    <SkillIcon
                      icon={skill.skill?.icon}
                      color={skill.skill?.color}
                      className="w-7 h-7 xs:w-6 xs:h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                    />
                    <span className="font-mono text-[10px] xs:text-[9px] text-on-surface-variant text-center leading-tight">
                      {skill.skill?.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}