import Skeleton from "../../Skeleton";

export default function SkillsSkeleton() {
  const groupPlaceholders = [
    { id: "1", count: 7 },
    { id: "2", count: 6 },
    { id: "3", count: 2 },
  ];

  return (
    <section className="py-10 sm:py-16 px-4 xs:px-6">
      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-3 xs:h-4 sm:h-5 w-16 mb-4 xs:mb-6" />

        <Skeleton className="h-8 xs:h-9 sm:h-11 w-1/2 mb-6 xs:mb-10" />

        <div className="space-y-6 xs:space-y-8">
          {groupPlaceholders.map((group) => (
            <div
              key={group.id}
              className="grid grid-cols-1 sm:grid-cols-[120px_1fr] lg:grid-cols-[160px_1fr] gap-2 xs:gap-3 sm:gap-6 pb-6 xs:pb-8 border-b border-outline-variant last:border-b-0"
            >
              <Skeleton className="h-3 xs:h-4 w-20" />

              <div className="flex flex-wrap gap-3 xs:gap-4">
                {Array.from({ length: group.count }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-1.5 w-16 xs:w-16"
                  >
                    <Skeleton className="w-7 h-7 xs:w-6 xs:h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md" />
                    <Skeleton className="h-2 w-10" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}