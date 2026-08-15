import Skeleton from "../Skeleton";

export default function CertificationSkeleton() {
    return (
        <div className="flex gap-3 sm:gap-4 border border-outline-variant p-4 h-full">
            <Skeleton className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex-shrink-0" />

            <div className="flex-1 min-w-0">
                <Skeleton className="h-4 sm:h-5 w-3/4 mb-2" />

                <Skeleton className="h-3 sm:h-4 w-1/2 mb-2" />

                <div className="flex items-center justify-between gap-2">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-4 w-12" />
                </div>
            </div>
        </div>
    );
}