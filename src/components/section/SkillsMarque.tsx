import SkillIcon from "../Skill";

export default function SkillsMarquee({ skills }: SkillMarqueProps) {

  const doubledSkills = [
    ...(skills ?? []),
    ...(skills ?? []),
  ];

  return (
    <section className="overflow-hidden border-y border-outline-variant py-10">
      <div className="flex w-max whitespace-nowrap animate-marquee-slow">

        {doubledSkills.map((skill, index) => (
          <div
            key={`${skill.id}-${index}`}
            className="flex flex-shrink-0 items-center"
          >
            <span className="px-6 font-mono text-sm text-on-surface-variant sm:text-base">
              <SkillIcon icon={skill.icon}
                color={skill.color}
                className={"w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10"} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}