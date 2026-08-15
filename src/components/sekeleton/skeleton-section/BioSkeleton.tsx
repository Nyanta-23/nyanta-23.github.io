import Skeleton from "../../Skeleton";

export default function BioSkeleton() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <Skeleton className="h-4 sm:h-5 w-24 mb-6" />

                <Skeleton className="h-9 sm:h-11 w-2/3 mb-8" />

                <div className="space-y-5">
                    <div className="space-y-2">
                        <Skeleton className="h-4 sm:h-5 w-full" />
                        <Skeleton className="h-4 sm:h-5 w-full" />
                        <Skeleton className="h-4 sm:h-5 w-5/6" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-4 sm:h-5 w-full" />
                        <Skeleton className="h-4 sm:h-5 w-full" />
                        <Skeleton className="h-4 sm:h-5 w-3/4" />
                    </div>
                </div>
            </div>
        </section>
    );
}