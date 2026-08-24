import Certification from "../Certification";

export default function ProffessionalCredential({ credentials, certifications_eyebrow, certifications_title }: ProffessionalCredentialProps) {
  return (
    <section className="py-10 sm:py-16 px-4 xs:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4 sm:mb-6">
          {certifications_eyebrow}
        </p>

        <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-6 sm:mb-10">
          {certifications_title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {credentials?.map((item) => (
            <Certification key={item.id} credential={item} />
          ))}
        </div>
      </div>
    </section>
  );
}