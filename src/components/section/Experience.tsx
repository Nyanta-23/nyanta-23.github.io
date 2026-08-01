interface ExperienceItem {
    title: string;
    subtitle: string;
    period: string;
    description: string;
    tags: string[];
}

const PLACEHOLDER_EXPERIENCE: ExperienceItem[] = [
    {
        title: "Company Name One",
        subtitle: "Full-Stack Engineer",
        period: "Nov 2025 - May 2026",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
        tags: ["Laravel", "Livewire"],
    },
    {
        title: "Company Name Two",
        subtitle: "Full-Stack Developer",
        period: "Sep 2024 - Dec 2024",
        description:
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.",
        tags: ["Laravel", "MySQL"],
    },
    {
        title: "Company Name Three",
        subtitle: "Front-End Developer",
        period: "Jan 2023 - Mar 2023",
        description:
            "In voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
        tags: ["Next.js", "Axios"],
    },
];

export default function Experience() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-6">
                    Experience
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-10">
                    Where I've worked
                </h2>

                <div className="space-y-10">
                    {PLACEHOLDER_EXPERIENCE.map((item) => (
                        <div
                            key={item.title}
                            className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 pb-10 border-b border-outline-variant last:border-b-0 last:pb-0"
                        >
                            <p className="font-mono text-xs sm:text-sm text-on-surface-variant">
                                {item.period}
                            </p>

                            <div>
                                <h3 className="font-serif text-xl font-semibold text-on-background mb-1">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-on-surface-variant mb-4">
                                    {item.subtitle}
                                </p>

                                <p className="text-base text-on-surface-variant leading-relaxed mb-4">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[10px] px-2 py-1 border border-outline-variant text-on-surface-variant"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}