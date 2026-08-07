import Bio from "../components/section/Bio";
import Skills from "../components/section/Skills";
import Experience from "../components/section/Experience";
import { useEffect, useState } from "react";
import { profileService } from "../services/profileService";
import Academic from "../components/section/Academic";
import ProffessionalCredential from "../components/section/ProffessionalCredential";
import Preloader from "../components/Preloader";

export default function Profile() {


    const [profileData, setProfileData] = useState<ProfileData | null | undefined>(null);


    useEffect(() => {

        const loadDataProfile = async () => {
            const data = await profileService();

            setProfileData(data);
        }
        loadDataProfile();

    }, []);


    if (!profileData) {
        return <Preloader isLoading={true} />;
    }

    const { bio_heading, bio, skill_groups, experiences, educations, certifications } = profileData;


    return (
        <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">
            <Bio bio={bio} bio_heading={bio_heading} />
            <Skills skill_groups={skill_groups}/>
            <Experience experiences={experiences} />
            <Academic academics={educations} />
            <ProffessionalCredential credentials={certifications} />
        </section>
    )
}