import { GraduationCap } from "lucide-react";
import { formatPeriod } from "../helpers/helper";

// export interface EducationItem {
//   title: string;
//   subtitle: string;
//   startDate: string; // format: "Sep 2021"
//   endDate: string | null; // null artinya "Present" / masih berlangsung
//   description: string;
//   result: string;
// }

// interface EducationCardProps {
//   education: EducationItem;
//   isLatest: boolean;
// }

export default function Education({ education, is_latest }: EducationProps) {


  const { name, subname, description, start_date, end_date, result } = education;

  const period = formatPeriod(start_date, end_date);

  return (
    <div className="relative pl-10">
      <div
        className={`absolute left-0 top-6 w-4 h-4 rounded-full border-2 border-charcoal-ink dark:border-pure-white
          ${is_latest ? "bg-on-background" : "bg-background"}`}
      />

      <div className="border border-outline-variant p-6 shadow-elevated hover:shadow-floating transition-shadow duration-200 bg-background">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-full border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center flex-shrink-0">
            <GraduationCap size={22} className="text-on-background" />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="font-mono text-[10px] px-2 py-1 border border-outline-variant text-on-surface-variant">
              {period}
            </span>
            {is_latest && (
              <span className="font-mono text-[9px] px-1.5 py-0.5 border border-on-background text-on-background uppercase tracking-wide">
                Most Recent
              </span>
            )}
          </div>
        </div>

        <h3 className="font-serif text-2xl font-semibold text-on-background leading-snug mb-1">
          {name}
        </h3>

        <p className="font-mono text-xs uppercase tracking-wide text-on-surface-variant mb-4">
          {subname}
        </p>

        <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
          {description}
        </p>

        <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wide text-on-surface-variant">
            Result
          </span>
          <span className="font-mono text-sm font-semibold text-on-background">
            {result}
          </span>
        </div>
      </div>
    </div>
  );
}