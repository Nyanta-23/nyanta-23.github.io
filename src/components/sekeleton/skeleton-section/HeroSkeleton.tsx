import Skeleton from "../../Skeleton";

export default function HeroSkeleton() {
  return (
    <section
      className="flex flex-col items-center text-center px-4 xs:px-6 pt-8 xs:pt-12 pb-10 xs:pb-16
        lg:flex-row-reverse lg:items-center lg:text-left lg:justify-center lg:gap-16 lg:max-w-6xl lg:mx-auto lg:pt-20"
    >
      <div className="relative mb-6 xs:mb-8 lg:mb-0 lg:flex-shrink-0">
        <Skeleton className="w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-md" />
      </div>

      <div className="flex flex-col items-center lg:items-start w-full">
        <Skeleton className="h-4 xs:h-5 w-32 xs:w-40 mb-3 xs:mb-4" />

        <Skeleton className="h-10 xs:h-12 sm:h-16 lg:h-20 w-full max-w-md lg:max-w-2xl mb-2" />
        <Skeleton className="h-10 xs:h-12 sm:h-16 lg:h-20 w-3/4 max-w-sm lg:max-w-xl" />

        <div className="w-12 h-[2px] bg-outline-variant my-4 xs:my-6" />

        <Skeleton className="h-4 w-full max-w-xs xs:max-w-lg mb-2" />
        <Skeleton className="h-4 w-5/6 max-w-xs xs:max-w-lg mb-2" />
        <Skeleton className="h-4 w-2/3 max-w-xs xs:max-w-lg mb-8 xs:mb-10" />

        <div className="flex flex-wrap justify-center lg:justify-start gap-3 xs:gap-4">
          <Skeleton className="h-10 xs:h-12 w-40 xs:w-44 rounded-md" />
          <Skeleton className="h-10 xs:h-12 w-36 xs:w-40 rounded-md" />
        </div>
      </div>
    </section>
  );
}