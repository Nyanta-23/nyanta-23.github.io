import { useEffect, useState } from "react";
import Hero from "../components/section/Hero";
import CallToAction from "../components/section/CallToAction";
import { homeService } from "../services/homeService";
import SkillsMarquee from "../components/section/SkillsMarque";
import NewestProject from "../components/section/NewestProject";
import Services from "../components/section/Services";
import HeroSkeleton from "../components/sekeleton/skeleton-section/HeroSkeleton";
import NewestProjectSkeleton from "../components/sekeleton/skeleton-section/NewestProjectSkeleton";
import SkillsMarqueeSkeleton from "../components/sekeleton/skeleton-section/SkillsMarqueSkeleton";
import ServicesSkeleton from "../components/sekeleton/skeleton-section/ServicesSkeleton";

export default function Home() {

  const [homeData, setHomeData] = useState<HomeData | null | undefined>(null);

  useEffect(() => {

    const loadDataHome = async () => {
      const data = await homeService();

      setHomeData(data);
    }

    loadDataHome();

  }, []);


  return (
    <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">

      {homeData ? (
        <Hero
          name={homeData.name}
          photo_url={homeData.photo_url}
          summary={homeData.summary}
          roles={homeData.roles}
        />
      ) : (
        <HeroSkeleton />
      )}

      {
        homeData ? (
          <NewestProject projects={homeData.projects} />

        ) : (
          <NewestProjectSkeleton />
        )
      }

      {
        homeData ? (
          <SkillsMarquee skills={homeData.skills} />
        ) : <SkillsMarqueeSkeleton />
      }

      {
        homeData ? (
          <Services services={homeData.services} />

        ) : (
          <ServicesSkeleton />
        )
      }

      <CallToAction />

    </section>
  );
}
