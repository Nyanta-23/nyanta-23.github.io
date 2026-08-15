import Skeleton from "../../Skeleton";
import ExperienceEntrySkeleton from "../ExperienceEntrySkeleton";

export default function ExperienceSkeleton() {
    return (
        <section className="py-10 sm:py-16 px-4 xs:px-6">
            <div className="max-w-3xl mx-auto">
                <Skeleton className="h-3 xs:h-4 sm:h-5 w-24 mb-4 xs:mb-6" />

                <Skeleton className="h-8 xs:h-9 sm:h-11 w-2/3 mb-8 xs:mb-12" />

                <div className="space-y-8 xs:space-y-14">
                    <ExperienceEntrySkeleton position_count={2} />
                    <ExperienceEntrySkeleton position_count={1} />
                </div>
            </div>
        </section>
    );
}