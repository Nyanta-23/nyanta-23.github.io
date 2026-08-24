import { useEffect, useState } from "react";
import Hero from "../components/section/Hero";
import CallToAction from "../components/section/CallToAction";
import SkillsMarquee from "../components/section/SkillsMarque";
import NewestProject from "../components/section/NewestProject";
import Services from "../components/section/Services";
import HeroSkeleton from "../components/sekeleton/skeleton-section/HeroSkeleton";
import NewestProjectSkeleton from "../components/sekeleton/skeleton-section/NewestProjectSkeleton";
import SkillsMarqueeSkeleton from "../components/sekeleton/skeleton-section/SkillsMarqueSkeleton";
import ServicesSkeleton from "../components/sekeleton/skeleton-section/ServicesSkeleton";
import FadeIn from "../components/FadeIn";
import { useMainData } from "../context/MainDataContext";
import { heroService } from "../services/section/heroService";
import { projectService } from "../services/section/projectService";
import { skillsService } from "../services/section/skillService";
import { businessService } from "../services/section/businessService";
import CallToActionSkeleton from "../components/sekeleton/skeleton-section/CallToActionSkeleton";

export default function Home() {

  const { mainData } = useMainData();


  const [heroData, setHeroData] = useState<HeroSectionData | null | undefined>(null);
  const [projectData, setProjectData] = useState<ProjectSectionData | null | undefined>(null);
  const [skillData, setSkillData] = useState<SkillSectionData | null | undefined>(null);
  const [serviceData, setServiceData] = useState<ServiceSectionData | null | undefined>(null)

  useEffect(() => {

    const loadDataHero = async () => {
      const data = await heroService();

      setHeroData(data);
    }

    const loadDataProject = async () => {
      const data = await projectService({ limit: 3 });

      setProjectData(data);
    }

    const loadDataSkills = async () => {
      const data = await skillsService();

      setSkillData(data);
    }

    const loadDataService = async () => {
      const data = await businessService();

      setServiceData(data);
    }


    loadDataHero();
    loadDataProject();
    loadDataSkills();
    loadDataService();

  }, []);


  return (
    <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">

      {heroData && mainData ? (
        <FadeIn>
          <Hero
            name={mainData.name}
            photo_url={mainData.photo_url}
            summary={mainData.summary}
            roles={heroData.roles}
            hero_primary_button_icon={mainData.hero_primary_button_icon}
            hero_secondary_button_icon={mainData.hero_secondary_button_icon}
            hero_primary_button_label={mainData.hero_primary_button_label}
            hero_secondary_button_label={mainData.hero_secondary_button_label}
            cv_url={mainData.cv_url}
          />
        </FadeIn>
      ) : <HeroSkeleton />}

      {
        projectData && mainData ? (
          <FadeIn>
            <NewestProject
              newest_projects_title={mainData?.newest_projects_title}
              newest_projects_view_all_icon={mainData?.newest_projects_view_all_icon}
              newest_projects_view_all_label={mainData?.newest_projects_view_all_label}
              projects={projectData.projects}
            />
          </FadeIn>
        ) : <NewestProjectSkeleton />
      }

      {
        skillData ? (
          <FadeIn>
            <SkillsMarquee skills={skillData.skills} />
          </FadeIn>
        ) : <SkillsMarqueeSkeleton />
      }

      {
        serviceData && mainData ? (
          <FadeIn>
            <Services
              services_title={mainData?.services_title}
              services_eyebrow={mainData?.services_eyebrow}
              services={serviceData.services}
            />
          </FadeIn>
        ) : <ServicesSkeleton />
      }

      {
        mainData ? (
          <FadeIn>
            <CallToAction 
              cta_title={mainData.cta_title}
              cta_eyebrow={mainData.cta_title}
              cta_description={mainData.cta_description}
              cta_button_label={mainData.cta_button_label}
              cta_button_icon_primary={mainData.cta_button_icon_primary}
              cta_button_icon_secondary={mainData.cta_button_icon_secondary}
            />
          </FadeIn>
        ) : <CallToActionSkeleton />
      }


    </section>
  );
}
