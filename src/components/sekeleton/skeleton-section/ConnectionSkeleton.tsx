import Skeleton from "../../Skeleton";
import ContactInfoSkeleton from "../ConnectionInfoSkeleton";
import ContactFormSkeleton from "./ContactFormSkeleton";

export default function ConnectionSkeleton() {
    return (
        <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <Skeleton className="h-3 sm:h-4 w-24 mb-3 sm:mb-4" />

                <Skeleton className="h-9 sm:h-11 md:h-13 w-40 mb-3 sm:mb-4" />

                <Skeleton className="h-4 sm:h-5 w-full max-w-lg mb-2" />
                <Skeleton className="h-4 sm:h-5 w-3/4 max-w-lg mb-8 sm:mb-10 md:mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    <ContactInfoSkeleton />

                    <ContactFormSkeleton />
                </div>
            </div>
        </section>
    );
}