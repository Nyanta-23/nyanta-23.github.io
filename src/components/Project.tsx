import { ArrowUpRight } from "lucide-react";
import SkillIcon from "./Skill";
import { formatRoles, formatTypes } from "../helpers/helper";

export default function Project({ project }: ProjectProps) {
  const { name, link, year, description, skills, roles, types } = project;

  const roleText = formatRoles(roles);
  const typeText = formatTypes(types);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full z-10"
    >
      <div className="w-full aspect-video bg-surface-container-high border border-outline-variant overflow-hidden relative">
        {false ? (
          <img
            src={""}
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-xs text-on-surface-variant">
              No preview
            </span>
          </div>
        )}

        <div className="absolute top-2 left-2 xs:top-3 xs:left-3 bg-background/90 backdrop-blur-sm px-2 py-1 border border-outline-variant">
          <span className="font-mono text-[10px] text-on-background">
            {year}
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4 xs:p-5 sm:p-6 border border-t-0 border-outline-variant group-hover:bg-background-ghost transition-colors duration-150">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-serif text-lg xs:text-xl font-semibold text-on-background">
            {name}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-on-surface-variant group-hover:text-on-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 flex-shrink-0 mt-1"
          />
        </div>

        <div className="mb-3 xs:mb-4 space-y-0.5">
          <p className="font-mono text-sm xs:text-base text-on-background">
            {typeText}
          </p>
          <p className="font-mono text-xs xs:text-sm text-on-surface-variant">
            {roleText}
          </p>
        </div>

        <p className="text-sm text-on-surface-variant text-justify sm:text-justify leading-relaxed mb-4 xs:mb-5 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 xs:gap-3">
          {skills?.map((tech) => {
            const skill = tech.skill;

            return (
              <SkillIcon
                key={tech.id}
                icon={skill?.icon}
                // color={skill.color}
                className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
              />
            );
          })}
        </div>
      </div>
    </a>
  );
}