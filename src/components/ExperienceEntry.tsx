import { Building2 } from "lucide-react";
import PositionEntry from "./PositionEntry";

export default function ExperienceEntry({ experience, latest_position_id }: ExperienceEntryProps) {
    return (
        <div>
            <div className="flex items-start justify-between mb-4 xs:mb-6">
                <div className="flex items-center gap-3 xs:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {experience.company_logo ? (
                            <img src={experience.company_logo} alt={experience.company_name} className="w-full h-full object-cover" />
                        ) : (
                            <Building2 className="w-5 h-5 text-on-background" />
                        )}
                    </div>

                    <div>
                        <h3 className="font-serif text-xl xs:text-2xl sm:text-3xl font-semibold text-on-background">
                            {experience.company_url ? (
                                <a href={experience.company_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {experience.company_name}
                                </a>
                            ) : (
                                experience.company_name
                            )}
                        </h3>

                        {experience.location && (
                            <p className="font-mono text-[11px] xs:text-xs sm:text-sm uppercase tracking-wide text-on-surface-variant mt-1">
                                {experience.location}
                            </p>
                        )}
                    </div>
                </div>


            </div>

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