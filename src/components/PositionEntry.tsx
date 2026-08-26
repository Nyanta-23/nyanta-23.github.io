import { Briefcase } from "lucide-react";
import { formatPeriod } from "../helpers/helper";
import DOMPurify from "dompurify";

export default function PositionEntry({ position, is_latest }: PositionEntryProps) {
    const { employment_type, start_date, end_date, description, role } = position;

    const period = formatPeriod(start_date, end_date);
    const cleanDescription = DOMPurify.sanitize(description ?? "");

    return (
        <div className="relative pl-8 sm:pl-9 md:pl-10">
            <div
                className={`absolute left-[3px] sm:left-0 top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-charcoal-ink dark:border-pure-white
        ${is_latest ? "bg-on-background" : "bg-background"}`}
            />

            <div className="rounded-md border border-outline-variant p-4 sm:p-5 md:p-6 shadow-elevated hover:shadow-floating hover:bg-background-ghost transition-shadow duration-200 bg-background-ghost/80 hover:border-on-background">
                <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] text-on-background" />
                    </div>

                    <span className="rounded-md font-mono text-[10px] xs:text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 border border-outline-variant text-on-surface-variant">
                        {period}
                    </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-lg xs:text-xl sm:text-2xl font-semibold text-on-background leading-snug">
                        {role?.name}
                    </h3>
                </div>

                <p className="font-mono text-[11px] xs:text-xs sm:text-sm uppercase tracking-wide text-on-surface-variant mb-3 sm:mb-4">
                    {employment_type}
                </p>

                <div
                    className="text-xs xs:text-sm sm:text-base text-on-surface-variant leading-relaxed [&_ul]:list-disc [&_ul]:list-outside [&_ul]:ml-4 [&_li]:mb-1 text-justify"
                    dangerouslySetInnerHTML={{ __html: cleanDescription }}
                />

            </div>
        </div>
    );
}