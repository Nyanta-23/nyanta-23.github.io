import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Project from "../Project";

export default function NewestProject({ projects }: NewestProjectProps) {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-8">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant">
          Newest Projects
        </p>
        <button
          onClick={() => navigate("/project")}
          className="font-mono text-xs sm:text-sm text-on-background hover:text-on-surface-variant transition-colors duration-150 flex items-center gap-1 cursor-pointer"
        >
          See all
          <ArrowUpRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects?.map((project) => (
          <Project
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}