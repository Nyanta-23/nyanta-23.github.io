import SkillIcon from "../Skill";

export default function Skills({ skill_groups, skills_eyebrow, skills_title }: SkillProps) {
  return (
    <section className="py-10 sm:py-16 px-4 xs:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[10px] xs:text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4 xs:mb-6">
          {skills_eyebrow}
        </p>

        <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-6 xs:mb-10">
          {skills_title}
        </h2>

        <div className="space-y-6 xs:space-y-8">
          {skill_groups?.map((group) => (
            <div
              key={group.id}
              className="pb-6 xs:pb-8 border-b border-outline-variant last:border-b-0"
            >
              <p className="font-mono text-xs xs:text-sm text-on-surface-variant uppercase tracking-wide mb-3 xs:mb-4">
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