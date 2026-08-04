import { useEffect, useState } from "react";
import { contactService } from "../services/contactService";
import { ContactData } from "../types/page";
import ContactInfo from "../components/section/ContactInfo";
import ContactForm from "../components/section/ContactForm";

const PLACEHOLDER_CONTACT = {
  email: "email@example.com",
  phone: "+62 000 0000 0000",
  linkedin: "yourname",
  github: "yourname",
  location: "City, Country",
  availability: "Open for collaboration and job opportunities",
};


export default function Contact() {

    const [dataContact, setDataContact] = useState<ContactData | null | undefined>(null);

    useEffect(() => {

        const loadDataContact = async () => {
            const data = await contactService();

            setDataContact(data);
        }

        loadDataContact();

    }, []);

    console.log(dataContact);

    // const { email, phone, location, linkedin, github } = dataContact;

    return (
        <section className="px-6 my-7">
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4">
                        Get In Touch
                    </p>

                    <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-on-background leading-tight mb-4">
                        Let&apos;s talk
                    </h1>

                    <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-12 max-w-lg">
                        {PLACEHOLDER_CONTACT.availability}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ContactInfo
                            email={PLACEHOLDER_CONTACT.email}
                            phone={PLACEHOLDER_CONTACT.phone}
                            linkedin={PLACEHOLDER_CONTACT.linkedin}
                            github={PLACEHOLDER_CONTACT.github}
                            location={PLACEHOLDER_CONTACT.location}
                        />

                        <ContactForm />
                    </div>
                </div>
            </section>

        </section>
    )
}