import Certification from "../Certification";

export default function ProffessionalCredential({ credentials }: ProffessionalCredentialProps) {


  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-6">
          Certifications
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-10">
          Licenses &amp; certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {credentials?.map((item) => (
            <Certification key={item.id} credential={item} />
          ))}
        </div>


      </div>
    </section>
  );
}