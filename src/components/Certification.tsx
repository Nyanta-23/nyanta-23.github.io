import { Award, ExternalLink } from "lucide-react";
import { formatPeriod } from "../helpers/helper";

export default function Certification({ credential }: CredentialProps) {
  const { id, name, subname, description, start_date, end_date, link } = credential;

  const period = formatPeriod(start_date, end_date);

  return (

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="group flex gap-3 xs:gap-4 border border-outline-variant p-4 xs:p-5 hover:bg-background-ghost hover:border-on-background transition-all duration-150 h-full">
        <div className="w-9 h-9 xs:w-11 xs:h-11 rounded-full border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center flex-shrink-0">
          <Award className="w-4 h-4 xs:w-5 xs:h-5 text-on-background" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-sm xs:text-base font-semibold text-on-background leading-snug">
              {name}
            </h3>
            {link && (
              <ExternalLink
                className="w-3.5 h-3.5 xs:w-[14px] xs:h-[14px] text-on-surface-variant group-hover:text-on-background transition-colors duration-150 flex-shrink-0 mt-1"
              />
            )}
          </div>

          <p className="text-xs xs:text-sm text-on-surface-variant mb-2">
            {subname}
          </p>

          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="font-mono text-[10px] text-on-surface-variant">
              {description}
            </span>
            <span className="font-mono text-[10px] px-2 py-1 border border-outline-variant text-on-surface-variant">
              {period}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}