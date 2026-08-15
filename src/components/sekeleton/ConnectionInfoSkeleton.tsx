import Skeleton from "../Skeleton";

export default function ContactInfoSkeleton() {
    return (
        <div className="border border-outline-variant p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
            <Skeleton className="h-3 w-28 mb-2" />

            <div className="flex items-center gap-2 sm:gap-3">
                <Skeleton className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 rounded-full flex-shrink-0" />
                <Skeleton className="h-3 sm:h-4 w-40" />
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <Skeleton className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 rounded-full flex-shrink-0" />
                <Skeleton className="h-3 sm:h-4 w-32" />
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <Skeleton className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 rounded-full flex-shrink-0" />
                <Skeleton className="h-3 sm:h-4 w-36" />
            </div>

            <div className="pt-3 sm:pt-4 border-t border-outline-variant space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                    <Skeleton className="w-4 h-4 rounded-full flex-shrink-0" />
                    <Skeleton className="h-3 w-24" />
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                    <Skeleton className="w-4 h-4 rounded-full flex-shrink-0" />
                    <Skeleton className="h-3 w-28" />
                </div>
            </div>
        </div>
    );
}