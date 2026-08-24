import { useEffect, useRef, useState } from "react";
import statusData from "../data/status.json";

interface AvailabilityStatus {
  id: number;
  key: string;
  label: string;
  short_label: string;
  color: string;
  description: string;
}

interface AvailabilityIndicatorProps {
  status?: string | number | null;
}

const AVAILABILITY_STATUSES = statusData as AvailabilityStatus[];

const COLOR_CLASS_MAP: Record<string, string> = {
  gray: "bg-gray-400",
  yellow: "bg-yellow-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
};

const RING_COLOR_CLASS_MAP: Record<string, string> = {
  gray: "bg-gray-400/90",
  yellow: "bg-yellow-500/90",
  blue: "bg-blue-500/90",
  green: "bg-green-500/90",
};

function getAvailabilityStatus(status?: string | number | null): AvailabilityStatus {
  const numericId = Number(status);

  const found = AVAILABILITY_STATUSES.find((item) => item.id === numericId);
  return found ?? AVAILABILITY_STATUSES[0];
}

export default function AvailabilityIndicator({ status }: AvailabilityIndicatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const unmountTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const availability = getAvailabilityStatus(status);
  const dotColorClass = COLOR_CLASS_MAP[availability.color] ?? "bg-gray-400";
  const ringColorClass = RING_COLOR_CLASS_MAP[availability.color] ?? "bg-gray-400/60";

  const openTooltip = () => {
    if (unmountTimerRef.current) clearTimeout(unmountTimerRef.current);
    setIsMounted(true);
    requestAnimationFrame(() => setIsOpen(true));
  };

  const closeTooltip = () => {
    setIsOpen(false);
    unmountTimerRef.current = setTimeout(() => setIsMounted(false), 200);
  };

  useEffect(() => {
    if (!isMounted) return;

    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeTooltip();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMounted]);

  useEffect(() => {
    return () => {
      if (unmountTimerRef.current) clearTimeout(unmountTimerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute z-20 bottom-2 right-2 xs:bottom-3 xs:right-3 lg:bottom-5 lg:right-5"
      // onMouseEnter={openTooltip}
      // onMouseLeave={closeTooltip}
    >
      <span
        onClick={() => (isOpen ? closeTooltip() : openTooltip())}
        className="relative w-5 h-5 xs:w-6 xs:h-6 lg:w-7 lg:h-7 rounded-full bg-background border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center cursor-pointer"
      >
        <span className={`absolute inline-flex w-2.5 h-2.5 xs:w-3 xs:h-3 lg:w-3.5 lg:h-3.5 rounded-full ${ringColorClass} animate-ping`} />
        <span className={`relative w-2 h-2 xs:w-2.5 xs:h-2.5 lg:w-3 lg:h-3 rounded-full ${dotColorClass}`} />
      </span>

      {isMounted && (
        <div
          className={`absolute bottom-full right-[-1px] mb-3 w-56 xs:w-64 origin-bottom-right transition-all duration-200 ease-out
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1"}`}
        >
          <div className="bg-background border border-outline-variant rounded-md p-3 shadow-elevated">
            <div className="flex items-center gap-2 mb-1">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColorClass}`} />
              <span className="font-mono text-[10px] xs:text-xs uppercase tracking-wide text-on-background">
                {availability.short_label}
              </span>
            </div>
            <p className="text-xs xs:text-sm text-on-surface-variant leading-relaxed text-justify">
              {availability.description}
            </p>
          </div>

          <div className="absolute -bottom-[7px] right-2 w-3 h-3 bg-background border-r border-b border-outline-variant rotate-45" />
        </div>
      )}
    </div>
  );
}