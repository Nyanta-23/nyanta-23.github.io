import Skeleton from "../../Skeleton";
import ProjectCardSkeleton from "../ProjectCardSkeleton";

export default function NewestProjectSkeleton() {
  return (
    <section className="py-10 sm:py-16 px-4 xs:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between max-w-6xl mx-auto mb-6 sm:mb-8">
          <Skeleton className="h-3 xs:h-4 sm:h-5 w-28 xs:w-36" />
          <Skeleton className="h-3 xs:h-4 sm:h-5 w-14 xs:w-16" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}