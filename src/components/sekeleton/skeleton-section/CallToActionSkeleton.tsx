import Skeleton from "../../Skeleton";

export default function CallToActionSkeleton() {
    return (
        <section className="my-6 sm:my-10 mx-4 xs:mx-6 sm:mx-10 lg:mx-16">
            <div className="px-4 xs:px-6 py-10 xs:py-12 sm:py-16 rounded-md flex flex-col items-center text-center bg-surface-container-high">
                <Skeleton className="h-3 xs:h-4 w-48 mb-3 sm:mb-4" />

                <Skeleton className="h-10 xs:h-12 sm:h-14 lg:h-16 w-3/4 max-w-xl mb-2" />
                <Skeleton className="h-10 xs:h-12 sm:h-14 lg:h-16 w-1/2 max-w-md mb-4 sm:mb-6" />

                <div className="space-y-2 w-full max-w-xs xs:max-w-sm sm:max-w-md mb-8 sm:mb-10">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6 mx-auto" />
                </div>

                <Skeleton className="h-12 xs:h-14 w-40 xs:w-48 rounded-md" />
            </div>
        </section>
    );
}