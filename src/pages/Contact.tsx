import { useEffect, useState } from "react";
import { contactService } from "../services/contactService";
import Connection from "../components/section/Connection";
import ConnectionSkeleton from "../components/sekeleton/skeleton-section/ConnectionSkeleton";
import FadeIn from "../components/FadeIn";

export default function Contact() {

    const [dataContact, setDataContact] = useState<ContactData | null | undefined>(null);

    useEffect(() => {

        const loadDataContact = async () => {
            const data = await contactService();

            setDataContact(data);
        }

        loadDataContact();

    }, []);

    return (
        <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">
            {dataContact ? (
                <FadeIn>
                    <Connection email={dataContact.email} phone={dataContact.phone} location={dataContact.location} social_medias={dataContact.social_medias} availability={dataContact.availability} />
                </FadeIn>

            ) :
                <ConnectionSkeleton />
                }
        </section>
    )
}