import Skeleton from "../../Skeleton";
import ProjectCardSkeleton from "../ProjectCardSkeleton";

export default function PortfolioSkeleton() {
    return (
        <section className="py-10 sm:py-16 px-4 xs:px-6">
            <div className="max-w-6xl mx-auto">
                <Skeleton className="h-3 sm:h-4 w-20 mb-3 sm:mb-4" />

                <Skeleton className="h-9 xs:h-10 sm:h-12 w-1/2 mb-3 sm:mb-4" />

                <Skeleton className="h-4 xs:h-5 w-full max-w-lg mb-2" />
                <Skeleton className="h-4 xs:h-5 w-3/4 max-w-lg mb-8 sm:mb-12" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <ProjectCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}