import Skeleton from "../Skeleton";

export default function ServiceCardSkeleton() {
  return (
    <section className="border border-outline-variant p-6">
      <Skeleton className="w-12 h-12 rounded-full mb-5" />

      <Skeleton className="h-6 w-2/3 mb-3" />

      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </section>
  );
}