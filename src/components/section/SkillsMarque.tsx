import SkillIcon from "../Skill";

export default function SkillsMarquee({ skills }: SkillMarqueProps) {
  const doubledSkills = [...(skills ?? []), ...(skills ?? [])];

  return (
    <section className="overflow-hidden border-y border-outline-variant py-6 sm:py-10">
      <div className="flex w-max whitespace-nowrap animate-marquee-slow">
        {doubledSkills.map((skill, index) => (
          <div
            key={`${skill.id}-${index}`}
            className="flex flex-shrink-0 items-center px-3 xs:px-4 sm:px-6"
          >
            <SkillIcon
              icon={skill.icon}
              color={skill.color}
              className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
            />
          </div>
        ))}
      </div>
    </section>
  );
}