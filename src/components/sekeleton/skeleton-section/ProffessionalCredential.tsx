import Skeleton from "../../Skeleton";
import CertificationSkeleton from "../CertificationSkeleton";

export default function ProffessionalCredentialSkeleton() {
  return (
    <section className="py-10 sm:py-16 px-4 xs:px-6">
      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-3 sm:h-4 w-28 mb-4 sm:mb-6" />

        <Skeleton className="h-8 xs:h-9 sm:h-11 w-2/3 mb-6 sm:mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[1, 2, 3, 4].map((i) => (
            <CertificationSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}