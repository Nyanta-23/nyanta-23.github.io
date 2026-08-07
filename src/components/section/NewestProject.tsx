import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Project from "../Project";

export default function NewestProject({ projects }: NewestProjectProps) {
  const navigate = useNavigate();

  return (
    <section className="py-10 sm:py-16 px-4 xs:px-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-6 sm:mb-8">
        <p className="font-mono text-[10px] xs:text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant">
          Newest Projects
        </p>
        <button
          onClick={() => navigate("/project")}
          className="font-mono text-[10px] xs:text-xs sm:text-sm text-on-background hover:text-on-surface-variant transition-colors duration-150 flex items-center gap-1 cursor-pointer"
        >
          See all
          <ArrowUpRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}