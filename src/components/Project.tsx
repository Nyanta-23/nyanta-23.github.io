import { ArrowUpRight } from "lucide-react";
import SkillIcon from "./Skill";
import { formatRoles, formatTypes, getThemedAsset } from "../helpers/helper";
import useImageSlider from "../hooks/useImageSlider";
import useAssetImages from "../hooks/useAssetUrl";
import { useTheme } from "../context/ThemeContext";
import NyantaBlackIcon from "../assets/icons/nyanta-black.svg";
import NyantaWhiteIcon from "../assets/icons/nyanta-white.svg";

export default function Project({ project }: ProjectProps) {
  const { name, link, year, description, skills, roles, types, asset } = project;

  const roleText = formatRoles(roles);
  const typeText = formatTypes(types);

  const { images, isLoading } = useAssetImages(asset);
  const { activeIndex, pause, resume } = useImageSlider({ length: images.length });

  const { theme } = useTheme();

  const icon = getThemedAsset(theme, NyantaWhiteIcon, NyantaBlackIcon);

  return (

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full z-10 shadow-elevated rounded-md"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="w-full aspect-video bg-surface-container-high border border-outline-variant overflow-hidden relative group-hover:border-on-background rounded-t-md border-b-0 transition-colors duration-150">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={icon}
              alt="Loading"
              className="w-10 h-10 sm:w-24 sm:h-24 rounded-full animate-spin opacity-70"
            />
          </div>
        ) : images.length === 0 ? (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={icon}
              alt="No preview"
              className="w-10 h-10 sm:w-24 sm:h-24 opacity-40 rounded-full"
            />
          </div>
        ) : images.length === 1 ? (
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 rounded-full"
            loading="lazy"
          />
        ) : (
          <>
            {images.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`${name} preview ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-opacity duration-700 ease-in-out
                ${idx === activeIndex ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
              />
            ))}

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300
                  ${idx === activeIndex
                      ? "w-4 bg-background"
                      : "w-1 bg-background/50"
                    }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-2 left-2 xs:top-3 xs:left-3 bg-background/90 backdrop-blur-sm px-2 py-0.5 rounded-sm border border-outline-variant">
          <span className="font-mono text-[10px] text-on-background">
            {year}
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4 sm:p-6 border border-t-0 border-outline-variant bg-background-ghost/80 group-hover:bg-background-ghost transition-colors duration-150 group-hover:border-on-background rounded-b-md">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-on-background">
            {name}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-on-surface-variant group-hover:text-on-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 flex-shrink-0 mt-1"
          />
        </div>

        <div className="mb-3 xs:mb-4 space-y-0.5">
          <p className="font-mono text-sm sm:text-base text-on-background">
            {typeText}
          </p>
          <p className="font-mono text-xs sm:text-sm text-on-surface-variant">
            {roleText}
          </p>
        </div>

        <p className="text-sm text-on-surface-variant text-justify leading-relaxed mb-4 sm:mb-5 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills?.map((tech) => {
            const skill = tech.skill;

            return (
              <div
                key={tech.id}
                className="grayscale brightness-0 dark:invert group-hover:grayscale-0 group-hover:brightness-100 dark:group-hover:invert-0 transition-all duration-200"
              >
                <SkillIcon
                  icon={skill?.icon}
                  color={skill?.color}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                />
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
}