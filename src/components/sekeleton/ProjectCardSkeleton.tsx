import Skeleton from "../Skeleton";

export default function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full aspect-video border border-outline-variant relative overflow-hidden">
        <Skeleton className="w-full h-full" />

        <div className="absolute top-2 left-2 xs:top-3 xs:left-3 bg-background/90 backdrop-blur-sm px-2 py-1 border border-outline-variant">
          <Skeleton className="w-6 h-3" />
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4 sm:p-6 border border-t-0 border-outline-variant">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Skeleton className="h-5 sm:h-6 w-2/3" />
          <Skeleton className="w-[18px] h-[18px] flex-shrink-0 mt-1" />
        </div>

        <div className="mb-3 xs:mb-4 space-y-2">
          <Skeleton className="h-4 sm:h-5 w-1/2" />
          <Skeleton className="h-3 sm:h-4 w-1/3" />
        </div>

        <div className="space-y-2 mb-4 sm:mb-5 flex-1">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Skeleton className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full" />
          <Skeleton className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full" />
          <Skeleton className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full" />
        </div>
      </div>
    </div>
  );
}