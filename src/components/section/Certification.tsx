import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "../Button";

interface CertificationItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

const PLACEHOLDER_CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Certification Title One",
    subtitle: "Issuing Organization",
    period: "Mar 2026",
    description: "Credential ID: XXXX-0000",
  },
  {
    title: "Certification Title Two",
    subtitle: "Issuing Organization",
    period: "Mar 2025",
    description: "Credential ID: XXXX-0001",
  },
  {
    title: "Certification Title Three",
    subtitle: "Issuing Organization",
    period: "Apr 2025",
    description: "Credential ID: XXXX-0002",
  },
  {
    title: "Certification Title Four",
    subtitle: "Issuing Organization",
    period: "Dec 2023",
    description: "Credential ID: XXXX-0003",
  },
  {
    title: "Certification Title Five",
    subtitle: "Issuing Organization",
    period: "Sep 2023",
    description: "Credential ID: XXXX-0004",
  },
];

const INITIAL_VISIBLE_COUNT = 3;

export default function Certification() {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? PLACEHOLDER_CERTIFICATIONS
    : PLACEHOLDER_CERTIFICATIONS.slice(0, INITIAL_VISIBLE_COUNT);

  const hasMore = PLACEHOLDER_CERTIFICATIONS.length > INITIAL_VISIBLE_COUNT;

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-6">
          Certifications
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-10">
          Licenses &amp; certifications
        </h2>

        <div className="space-y-6">
          {visibleItems.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 pb-6 border-b border-outline-variant last:border-b-0 last:pb-0"
            >
              <p className="font-mono text-xs sm:text-sm text-on-surface-variant">
                {item.period}
              </p>

              <div>
                <h3 className="font-serif text-lg font-semibold text-on-background mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-on-surface-variant mb-1">
                  {item.subtitle}
                </p>

                <p className="font-mono text-xs text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <Button
            onClick={() => setShowAll(!showAll)}
            className="nav-btn mt-8 flex items-center gap-2 mx-auto px-5 py-2 border border-outline-variant text-on-background cursor-pointer"
          >
            <span className="font-mono text-xs sm:text-sm">
              {showAll ? "Show less" : `Show all (${PLACEHOLDER_CERTIFICATIONS.length})`}
            </span>
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        )}
      </div>
    </section>
  );
}