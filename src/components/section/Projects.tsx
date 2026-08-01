import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
    title: string;
    year: number;
    type: string;
    techStack: string[];
    role: string;
    link: string;
    description: string;
    thumbnailUrl?: string;
}

const PLACEHOLDER_PROJECTS: ProjectItem[] = [
    {
        title: "Project Title One",
        year: 2025,
        type: "Web Admin",
        techStack: ["Laravel", "Inertia.js", "MySQL"],
        role: "Fullstack Developer",
        link: "https://example.com",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    },
    {
        title: "Project Title Two",
        year: 2025,
        type: "Web Admin",
        techStack: ["TypeScript", "Tailwind CSS", "Laravel"],
        role: "Fullstack Developer",
        link: "https://example.com",
        description:
            "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
        title: "Project Title Three",
        year: 2025,
        type: "Web Admin & Monitoring",
        techStack: ["Laravel", "MySQL"],
        role: "Fullstack Developer",
        link: "https://example.com",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
        title: "Project Title Four",
        year: 2025,
        type: "Web Admin",
        techStack: ["html5-qrcode", "Tailwind CSS", "Laravel"],
        role: "Frontend Developer",
        link: "https://example.com",
        description:
            "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.",
    },
    {
        title: "Project Title Five",
        year: 2024,
        type: "E-Commerce & Restful API",
        techStack: ["React.js", "Node.js", "MongoDB"],
        role: "Fullstack Developer",
        link: "https://example.com",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
        title: "Project Title Six",
        year: 2024,
        type: "Web Admin & E-Commerce",
        techStack: ["PHP", "Bootstrap", "MySQL"],
        role: "Fullstack Developer",
        link: "https://example.com",
        description:
            "Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi.",
    },
];

export default function Projects() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4">
                    Portfolio
                </p>

                <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-on-background leading-tight mb-12">
                    All Projects
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-outline-variant">
                    {PLACEHOLDER_PROJECTS.map((project, index) => {
                        const isLastInRow = (index + 1) % 2 === 0;
                        const isLastRow =
                            index >= PLACEHOLDER_PROJECTS.length - (PLACEHOLDER_PROJECTS.length % 2 === 0 ? 2 : 1);

                        return (
                            <a
                                key={project.title}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group p-6 sm:p-8 hover:bg-background-ghost transition-colors duration-150
                  ${!isLastInRow ? "sm:border-r border-outline-variant" : ""}
                  ${!isLastRow ? "border-b border-outline-variant" : ""}`}
                            >
                                {/* Thumbnail placeholder */}
                                <div className="w-full aspect-video bg-surface-container-high border border-outline-variant mb-5 flex items-center justify-center">
                                    <span className="font-mono text-xs text-on-surface-variant">
                                        {project.thumbnailUrl ? "" : "No preview"}
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="font-serif text-xl font-semibold text-on-background">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight
                                        size={18}
                                        className="text-on-surface-variant group-hover:text-on-background transition-colors duration-150 flex-shrink-0 mt-1"
                                    />
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="font-mono text-xs text-on-surface-variant">
                                        {project.year}
                                    </span>
                                    <span className="text-on-surface-variant text-xs">•</span>
                                    <span className="font-mono text-xs text-on-surface-variant">
                                        {project.role}
                                    </span>
                                </div>

                                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="font-mono text-[10px] px-2 py-1 border border-outline-variant text-on-surface-variant"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}