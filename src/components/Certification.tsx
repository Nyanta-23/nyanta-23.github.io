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
      <div className="group flex gap-4 border border-outline-variant p-5 hover:bg-background-ghost hover:border-on-background transition-all duration-150 h-full">
        <div className="w-11 h-11 rounded-full border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center flex-shrink-0">
          <Award size={20} className="text-on-background" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-base font-semibold text-on-background leading-snug">
              {name}
            </h3>
            {link && (
              <ExternalLink
                size={14}
                className="text-on-surface-variant group-hover:text-on-background transition-colors duration-150 flex-shrink-0 mt-1"
              />
            )}
          </div>

          <p className="text-sm text-on-surface-variant mb-2">
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

