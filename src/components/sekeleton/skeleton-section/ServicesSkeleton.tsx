import Skeleton from "../../Skeleton";
import ServiceCardSkeleton from "../ServiceCardSkeleton";

export default function ServicesSkeleton() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-4">
          <Skeleton className="h-4 w-24" />
        </div>

        <div className="flex justify-center mb-12">
          <Skeleton className="h-9 sm:h-11 w-40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <ServiceCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}