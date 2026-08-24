export default function Bio({ bio, bio_eyebrow, bio_title }: BioProps) {

    return (
        <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-6">
                    {bio_eyebrow}
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-on-background leading-tight mb-8">
                    {bio_title}
                </h2>

                <div
                    className="space-y-5 text-base sm:text-lg text-on-surface-variant leading-relaxed text-justify"
                    dangerouslySetInnerHTML={{ __html: bio ?? "" }}
                />

            </div>
        </section>
    );
}


