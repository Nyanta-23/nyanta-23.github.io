import Skeleton from "../Skeleton";
import PositionEntrySkeleton from "./PositionEntrySkeleton";

interface ExperienceEntrySkeletonProps {
    position_count?: number;
}

export default function ExperienceEntrySkeleton({
    position_count = 1,
}: ExperienceEntrySkeletonProps) {
    return (
        <div>
            <Skeleton className="h-6 xs:h-7 w-1/3 mb-4 xs:mb-6" />

            <div className="relative pl-5 xs:pl-8">
                {position_count > 1 && (
                    <div className="absolute left-[5px] xs:left-[7px] top-2 bottom-2 w-px bg-outline-variant" />
                )}

                <div className="space-y-6 xs:space-y-10">
                    {Array.from({ length: position_count }).map((_, idx) => (
                        <PositionEntrySkeleton key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
}