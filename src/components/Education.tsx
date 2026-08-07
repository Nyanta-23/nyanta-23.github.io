import { GraduationCap } from "lucide-react";
import { formatPeriod } from "../helpers/helper";

export default function Education({ education, is_latest }: EducationProps) {


  const { name, subname, description, start_date, end_date, result } = education;

  const period = formatPeriod(start_date, end_date);

  return (
    <div className="relative pl-8 sm:pl-9 md:pl-10">
      <div
        className={`absolute left-[3px] sm:left-0 top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-charcoal-ink dark:border-pure-white
        ${is_latest ? "bg-on-background" : "bg-background"}`}
      />

      <div className="border border-outline-variant p-4 sm:p-5 md:p-6 shadow-elevated hover:shadow-floating hover:bg-background transition-shadow duration-200">
        <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] text-on-background" />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="font-mono text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 border border-outline-variant text-on-surface-variant">
              {period}
            </span>
            {is_latest && (
              <span className="font-mono text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0.5 border border-on-background text-on-background uppercase tracking-wide">
                Most Recent
              </span>
            )}
          </div>
        </div>

        <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-on-background leading-snug mb-1">
          {name}
        </h3>

        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-wide text-on-surface-variant mb-3 sm:mb-4">
          {subname}
        </p>

        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4 sm:mb-5">
          {description}
        </p>

        <div className="pt-3 sm:pt-4 border-t border-outline-variant flex items-center justify-between">
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wide text-on-surface-variant">
            Result
          </span>
          <span className="font-mono text-xs sm:text-sm font-semibold text-on-background">
            {result}
          </span>
        </div>
      </div>
    </div>
  );
}