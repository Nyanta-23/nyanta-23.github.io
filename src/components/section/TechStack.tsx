import SkillGroupCard, { type SkillGroup } from "../components/SkillGroupCard";

const PLACEHOLDER_SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "FaLaptopCode",
    skills: ["React.js", "Vue.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    icon: "FaServer",
    skills: ["Laravel", "Express.js", "Nest.js", "Node.js"],
  },
  {
    category: "Database",
    icon: "FaDatabase",
    skills: ["MySQL", "MongoDB", "Mongoose"],
  },
];

export default function TechStack() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-6">
          Skills
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-10">
          What I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PLACEHOLDER_SKILL_GROUPS.map((group, index) => (
            <div
              key={group.category}
              className={index === PLACEHOLDER_SKILL_GROUPS.length - 1 ? "sm:col-span-2" : ""}
            >
              <SkillGroupCard group={group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}