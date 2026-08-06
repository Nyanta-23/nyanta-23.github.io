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
        </div>
    );
}