interface EducationItem {
    title: string;
    subtitle: string;
    period: string;
    description: string;
}

const PLACEHOLDER_EDUCATION: EducationItem[] = [
    {
        title: "University Name",
        subtitle: "Computer Science",
        period: "Sep 2021 - Aug 2025",
        description: "GPA 3.69",
    },
    {
        title: "High School Name",
        subtitle: "Social Sciences",
        period: "Jul 2018 - May 2021",
        description: "Final score 82.67/100",
    },
];

export default function Education() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-6">
                    Education
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-10">
                    Academic background
                </h2>

                <div className="space-y-8">
                    {PLACEHOLDER_EDUCATION.map((item) => (
                        <div
                            key={item.title}
                            className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 pb-8 border-b border-outline-variant last:border-b-0 last:pb-0"
                        >
                            <p className="font-mono text-xs sm:text-sm text-on-surface-variant">
                                {item.period}
                            </p>

                            <div>
                                <h3 className="font-serif text-xl font-semibold text-on-background mb-1">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-on-surface-variant mb-2">
                                    {item.subtitle}
                                </p>

                                <p className="text-sm text-on-surface-variant">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}