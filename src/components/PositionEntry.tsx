import { formatPeriod } from "../helpers/helper";

export default function PositionEntry({ position, is_latest }: PositionEntryProps) {
    const period = formatPeriod(position.start_date, position.end_date);

    return (
        <div className="relative">
            <div
                className={`absolute -left-5 xs:-left-8 top-1.5 w-3 h-3 xs:w-4 xs:h-4 rounded-full border-2 border-charcoal-ink dark:border-pure-white
                ${is_latest ? "bg-on-background" : "bg-background"}`}
            />

            <div className="flex items-center gap-2 mb-1">
                <p className="font-mono text-[10px] xs:text-xs text-on-surface-variant">
                    {period}
                </p>
                {is_latest && !position.end_date && (
                    <span className="font-mono text-[8px] xs:text-[9px] px-1 xs:px-1.5 py-0.5 border border-on-background text-on-background uppercase tracking-wide">
                        Current
                    </span>
                )}
            </div>

            <h4 className="font-serif text-base xs:text-lg font-semibold text-on-background mb-2 xs:mb-3">
                {position.role?.name}
            </h4>

            <p className="text-xs xs:text-sm text-on-surface-variant leading-relaxed mb-4">
                {position.description}
            </p>
        </div>
    );
}