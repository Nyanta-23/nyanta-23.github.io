import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Project from "../Project";
import { getIconByName } from "../../helpers/helper";

export default function NewestProject({
  newest_projects_title,
  newest_projects_view_all_icon,
  newest_projects_view_all_label,
  projects
}: NewestProjectProps) {
  const navigate = useNavigate();

    const Icon = getIconByName(newest_projects_view_all_icon ? newest_projects_view_all_icon : "");

  return (
    <section className="py-10 sm:py-16 px-4 xs:px-6">

      <div className="max-w-6xl mx-auto">


        <div className="flex items-center justify-between max-w-6xl mx-auto mb-6 sm:mb-8">
          <p className="font-mono text-[10px] xs:text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant">
            {newest_projects_title}
          </p>
          <button
            onClick={() => navigate("/showcase")}
            className="font-mono text-[10px] xs:text-xs sm:text-sm text-on-background hover:text-on-surface-variant transition-colors duration-150 flex items-center gap-1 cursor-pointer"
          >
            {newest_projects_view_all_label}
            {/* <ArrowUpRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" /> */}
            {Icon && <Icon className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects?.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}