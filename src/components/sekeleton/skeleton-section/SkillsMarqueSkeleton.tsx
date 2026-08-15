import Skeleton from "../../Skeleton";

export default function SkillsMarqueeSkeleton() {
  const placeholders = Array.from({ length: 12 });

  return (
    <section className="overflow-hidden border-y border-outline-variant py-6 sm:py-10">
      <div className="flex w-max whitespace-nowrap">
        {placeholders.map((_, index) => (
          <div
            key={index}
            className="flex flex-shrink-0 items-center px-3 xs:px-4 sm:px-6"
          >
            <Skeleton className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md" />
          </div>
        ))}
      </div>
    </section>
  );
}