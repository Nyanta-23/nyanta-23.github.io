import PositionEntry from "./PositionEntry";

export default function ExperienceEntry({ experience, latest_position_id }: ExperienceEntryProps) {
    return (
        <div>
            <h3 className="font-serif text-xl xs:text-2xl font-semibold text-on-background mb-4 xs:mb-6">
                {experience.company_name}
            </h3>

            <div className="relative pl-5 xs:pl-8">
                {(experience.roles?.length ?? 0) > 1 && (
                    <div className="absolute left-[5px] xs:left-[7px] top-2 bottom-2 w-px bg-outline-variant" />
                )}

                <div className="space-y-6 xs:space-y-10">
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