import Skeleton from "../Skeleton";

export default function EducationSkeleton() {
  return (
    <div className="relative pl-8 sm:pl-9 md:pl-10">
      <div className="absolute left-[3px] sm:left-0 top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-charcoal-ink dark:border-pure-white bg-background" />

      <div className="border border-outline-variant p-4 sm:p-5 md:p-6">
        <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
          <Skeleton className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex-shrink-0" />

          <Skeleton className="h-4 sm:h-5 w-20 sm:w-24" />
        </div>

        <Skeleton className="h-6 sm:h-7 md:h-8 w-3/4 mb-2" />

        <Skeleton className="h-3 w-1/2 mb-3 sm:mb-4" />

        <div className="space-y-1.5 mb-4 sm:mb-5">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>

        <div className="pt-3 sm:pt-4 border-t border-outline-variant flex items-center justify-between">
          <Skeleton className="h-3 w-14" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
}