import { useEffect, useState } from "react";
import Connection from "../components/section/Connection";
import ConnectionSkeleton from "../components/sekeleton/skeleton-section/ConnectionSkeleton";
import FadeIn from "../components/FadeIn";
import { useMainData } from "../context/MainDataContext";
import { socialMediaService } from "../services/section/socialMediaService";

export default function Contact() {
    const { mainData } = useMainData();

    const [socialMediaData, setSocialMediaData] = useState<SocialMediaSectionData | null | undefined>(null);


    useEffect(() => {

        const loadDataSocialMedia = async () => {
            const data = await socialMediaService();

            setSocialMediaData(data);
        }

        loadDataSocialMedia();

    }, []);

    return (
        <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">
            {mainData && socialMediaData ? (
                <FadeIn>
                    <Connection
                        email={mainData.email}
                        phone={mainData.phone}
                        location={mainData.location}
                        social_medias={socialMediaData.social_medias}
                        contact_title={mainData.contact_title}
                        contact_description={mainData.contact_description}
                        contact_eyebrow={mainData.contact_eyebrow}
                        
                        contact_details_title={mainData.contact_details_title}
                        contact_form_title={mainData.contact_form_title}
                        contact_form_name_label={mainData.contact_form_name_label}
                        contact_form_name_placeholder={mainData.contact_form_name_placeholder}
                        contact_form_email_label={mainData.contact_form_email_label}
                        contact_form_email_placeholder={mainData.contact_form_email_placeholder}
                        contact_form_message_label={mainData.contact_form_message_label}
                        contact_form_message_placeholder={mainData.contact_form_message_placeholder}
                        
                        contact_form_button_label={mainData.contact_form_button_label}
                    />
                </FadeIn>

            ) :
                <ConnectionSkeleton />
            }
        </section>
    )
}