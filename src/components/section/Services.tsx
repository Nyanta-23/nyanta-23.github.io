import Service from "../Service";

export default function Services({ services_title, services_eyebrow, services }: BusinessProps) {

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4 text-center">
          {services_eyebrow}
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-12 text-center">
          {services_title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services?.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}