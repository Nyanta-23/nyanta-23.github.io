import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface PlaceholderProject {
  title: string;
  description: string;
  tags: string[];
}

const PLACEHOLDER_PROJECTS: PlaceholderProject[] = [
  {
    title: "Project Title One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    tags: ["Laravel", "MySQL"],
  },
  {
    title: "Project Title Two",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    tags: ["React.js", "Node.js"],
  },
  {
    title: "Project Title Three",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    tags: ["TypeScript", "Tailwind"],
  },
];

export default function FeaturedProjects() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6">
      <div className="flex items-center justify-between max-w-5xl mx-auto mb-8">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant">
          Featured Projects
        </p>
        <button
          onClick={() => navigate("/project")}
          className="font-mono text-xs sm:text-sm text-on-background hover:text-on-surface-variant transition-colors duration-150 flex items-center gap-1 cursor-pointer"
        >
          See all
          <ArrowUpRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto border border-outline-variant">
        {PLACEHOLDER_PROJECTS.map((project, index) => (
          <div
            key={project.title}
            className={`p-6 border-outline-variant hover:bg-background-ghost transition-colors duration-150
              ${index !== PLACEHOLDER_PROJECTS.length - 1 ? "md:border-r" : ""}
              ${index !== 0 ? "border-t md:border-t-0" : ""}`}
          >
            <h3 className="font-serif text-lg font-semibold text-on-background mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-1 border border-outline-variant text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button className="font-mono text-xs text-on-background hover:text-on-surface-variant transition-colors duration-150 flex items-center gap-1 p-0 cursor-pointer">
              View project
              <ArrowUpRight size={12} />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}