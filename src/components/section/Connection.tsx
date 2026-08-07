import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Connection({ availability, email, phone, location, social_medias }: ConnectionProps) {

    return (
        <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-3 sm:mb-4">
                    Get In Touch
                </p>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-on-background leading-tight mb-3 sm:mb-4">
                    Let&apos;s talk
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-lg">
                    {availability}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    <ContactInfo
                        email={email}
                        phone={phone}
                        location={location}
                        social_medias={social_medias}
                    />

                    <ContactForm />
                </div>
            </div>
        </section>
    )
}