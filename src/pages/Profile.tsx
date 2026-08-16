import Bio from "../components/section/Bio";
import Skills from "../components/section/Skills";
import Experience from "../components/section/Experience";
import { useEffect, useState } from "react";
import { profileService } from "../services/profileService";
import Academic from "../components/section/Academic";
import ProffessionalCredential from "../components/section/ProffessionalCredential";
import BioSkeleton from "../components/sekeleton/skeleton-section/BioSkeleton";
import SkillsSkeleton from "../components/sekeleton/skeleton-section/SkillsSkeleton";
import ExperienceSkeleton from "../components/sekeleton/skeleton-section/ExperienceSkeleton";
import AcademicSkeleton from "../components/sekeleton/skeleton-section/AcademicSkeleton";
import ProffessionalCredentialSkeleton from "../components/sekeleton/skeleton-section/ProffessionalCredential";
import FadeIn from "../components/FadeIn";

export default function Profile() {


    const [profileData, setProfileData] = useState<ProfileData | null | undefined>(null);


    useEffect(() => {

        const loadDataProfile = async () => {
            const data = await profileService();

            setProfileData(data);
        }
        loadDataProfile();

    }, []);


    return (
        <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">z

            {profileData ? (
                <FadeIn>
                    <Bio bio={profileData.bio} bio_heading={profileData.bio_heading} />
                </FadeIn>
            ) : <BioSkeleton />}

            {profileData ? (
                <FadeIn>

                    <Skills skill_groups={profileData.skill_groups} />
                </FadeIn>
            ) : <SkillsSkeleton />}

            {profileData ? (
                <FadeIn>
                    <Experience experiences={profileData.experiences} />
                </FadeIn>
            ) : <ExperienceSkeleton />}

            {profileData ? (
                <FadeIn>
                    <Academic academics={profileData.educations} />
                </FadeIn>
            ) : <AcademicSkeleton />}

            {profileData ? (
                <FadeIn>

                    <ProffessionalCredential credentials={profileData.certifications} />
                </FadeIn>
            ) : <ProffessionalCredentialSkeleton />}


        </section>
    )
}