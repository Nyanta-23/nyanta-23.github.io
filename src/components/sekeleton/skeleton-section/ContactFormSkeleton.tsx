import Skeleton from "../../Skeleton";

export default function ContactFormSkeleton() {
  return (
    <div className="border border-outline-variant p-5 sm:p-6 md:p-8">
      <Skeleton className="h-3 w-28 mb-4 sm:mb-5 md:mb-6" />

      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        <div>
          <Skeleton className="h-3 w-14 mb-1.5 sm:mb-2" />
          <Skeleton className="h-6 sm:h-7 w-full" />
        </div>

        <div>
          <Skeleton className="h-3 w-14 mb-1.5 sm:mb-2" />
          <Skeleton className="h-6 sm:h-7 w-full" />
        </div>

        <div>
          <Skeleton className="h-3 w-16 mb-1.5 sm:mb-2" />
          <Skeleton className="h-20 sm:h-24 w-full" />
        </div>

        <Skeleton className="h-10 sm:h-12 w-full sm:w-40 rounded-md" />
      </div>
    </div>
  );
}