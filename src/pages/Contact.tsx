import { useEffect, useState } from "react";
import { contactService } from "../services/contactService";
import ContactInfo from "../components/section/ContactInfo";
import ContactForm from "../components/section/ContactForm";
import Preloader from "../components/Preloader";
import Connection from "../components/section/Connection";

export default function Contact() {

    const [dataContact, setDataContact] = useState<ContactData | null | undefined>(null);

    useEffect(() => {

        const loadDataContact = async () => {
            const data = await contactService();

            setDataContact(data);
        }

        loadDataContact();

    }, []);


    if (!dataContact) {
        return <Preloader isLoading={true} />;
    }


    const { email, phone, location, social_medias, availability } = dataContact;


    return (
        <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">
            <Connection email={email} phone={phone} location={location} social_medias={social_medias} availability={availability} />
        </section>
    )
}