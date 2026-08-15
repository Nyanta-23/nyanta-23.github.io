import Skeleton from "../../Skeleton";
import EducationSkeleton from "../EducationSkeleton";

export default function AcademicSkeleton() {
    return (
        <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <Skeleton className="h-3 sm:h-4 w-20 mb-4 sm:mb-5 md:mb-6" />

                <Skeleton className="h-8 sm:h-9 md:h-11 w-2/3 mb-8 sm:mb-10 md:mb-12" />

                <div className="relative">
                    <div className="absolute left-2 top-6 bottom-6 w-px bg-outline-variant" />

                    <div className="space-y-6 sm:space-y-7 md:space-y-8">
                        {[1, 2].map((i) => (
                            <EducationSkeleton key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}