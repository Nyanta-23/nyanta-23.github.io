import Skeleton from "../Skeleton";

export default function PositionEntrySkeleton() {
    return (
        <div className="relative">
            <div className="absolute -left-5 xs:-left-8 top-1.5 w-3 h-3 xs:w-4 xs:h-4 rounded-full border-2 border-charcoal-ink dark:border-pure-white bg-background" />

            <div className="flex items-center gap-2 mb-1">
                <Skeleton className="h-3 w-24 xs:w-28" />
            </div>

            <Skeleton className="h-5 xs:h-6 w-1/2 mb-2 xs:mb-3" />

            <div className="space-y-1.5 mb-4">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
            </div>
        </div>
    );
}