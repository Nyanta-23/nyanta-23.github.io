import PositionEntry from "./PositionEntry";
import SkillIcon from "./Skill";

export default function ExperienceEntry({ experience, latest_position_id }: ExperienceEntryProps) {


    return (
        <div>
            <h3 className="font-serif text-2xl font-semibold text-on-background mb-6">
                {experience.company_name}
            </h3>

            <div className="relative pl-8">
                {(experience.roles?.length ?? 0) > 1 && (
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-outline-variant" />
                )}

                <div className="space-y-10">
                    {experience.roles?.map((position) => (
                        <PositionEntry
                            key={position.id}
                            position={position}
                            is_latest={position.id === latest_position_id}
                        />
                    ))}
                </div>

            </div>
            <div className="space-y-5 flex flex-wrap gap-2">
                {experience.skills?.map((skill) => (
                    <span key={skill.id} className="pl-3 pr-5 font-mono text-sm text-on-surface-variant sm:text-base">
                        <SkillIcon
                            icon={skill.skill?.icon}
                            color={skill.skill?.color}
                            className={"w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10"} />
                    </span>
                ))}
            </div>
        </div>
    );
}