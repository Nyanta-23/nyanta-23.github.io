import { useEffect, useState } from "react";
import Bio from "../components/section/Bio";
import Experience from "../components/section/Experience";
import Academic from "../components/section/Academic";
import Skills from "../components/section/Skills";
import ProffessionalCredential from "../components/section/ProffessionalCredential";
import BioSkeleton from "../components/sekeleton/skeleton-section/BioSkeleton";
import SkillsSkeleton from "../components/sekeleton/skeleton-section/SkillsSkeleton";
import ExperienceSkeleton from "../components/sekeleton/skeleton-section/ExperienceSkeleton";
import AcademicSkeleton from "../components/sekeleton/skeleton-section/AcademicSkeleton";
import ProffessionalCredentialSkeleton from "../components/sekeleton/skeleton-section/ProffessionalCredential";
import FadeIn from "../components/FadeIn";
import { useMainData } from "../context/MainDataContext";
import { skillGroupService } from "../services/section/skillGroupService";
import { experienceService } from "../services/section/experienceService";
import { educationService } from "../services/section/educationService";
import { certificationService } from "../services/section/certificationService";

export default function Profile() {

    const { mainData } = useMainData();

    const [skillGroupData, setSkillGroupData] = useState<SkillGroupSectionData | null | undefined>(null);
    const [experienceData, setExperienceData] = useState<ExperienceSectionData | null | undefined>(null);
    const [educationData, setEducationData] = useState<EducationSectionData | null | undefined>(null);
    const [certificationData, setCertificationData] = useState<CertificationSectionData | null | undefined>(null);


    useEffect(() => {

        const loadDataSkillGroup = async () => {
            const data = await skillGroupService();

            setSkillGroupData(data);
        }
        const loadDataExperience = async () => {
            const data = await experienceService();

            setExperienceData(data);
        }
        const loadDataEducation = async () => {
            const data = await educationService();

            setEducationData(data);
        }
        const loadDataCertification = async () => {
            const data = await certificationService();

            setCertificationData(data);
        }

        loadDataSkillGroup();
        loadDataExperience();
        loadDataEducation();
        loadDataCertification();

    }, []);


    return (
        <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">

            {mainData ? (
                <FadeIn>
                    <Bio
                        bio={mainData.bio}
                        bio_title={mainData.bio_title}
                        bio_eyebrow={mainData.bio_eyebrow}
                    />
                </FadeIn>
            ) : <BioSkeleton />}

            {skillGroupData && mainData ? (
                <FadeIn>
                    <Skills
                        skills_eyebrow={mainData?.skills_eyebrow}
                        skills_title={mainData?.skills_title}
                        skill_groups={skillGroupData.skill_groups}
                    />
                </FadeIn>
            ) : <SkillsSkeleton />}

            {experienceData && mainData ? (
                <FadeIn>
                    <Experience
                        experiences={experienceData?.experiences}
                        experience_eyebrow={mainData?.experience_eyebrow}
                        experience_title={mainData?.experience_title}
                    />
                </FadeIn>
            ) : <ExperienceSkeleton />}

            {educationData && mainData ? (
                <FadeIn>
                    <Academic
                        academics={educationData.educations}
                        education_eyebrow={mainData?.education_eyebrow}
                        education_title={mainData?.education_title}
                    />
                </FadeIn>
            ) : <AcademicSkeleton />}

            {certificationData && mainData ? (
                <FadeIn>
                    <ProffessionalCredential
                        certifications_eyebrow={mainData?.certifications_eyebrow}
                        certifications_title={mainData?.certifications_title}
                        credentials={certificationData.certifications}
                    />
                </FadeIn>
            ) : <ProffessionalCredentialSkeleton />}


        </section>
    )
}