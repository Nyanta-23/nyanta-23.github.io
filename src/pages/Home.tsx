import { useEffect, useState } from "react";
import Hero from "../components/section/Hero";
import CallToAction from "../components/section/CallToAction";
import { homeService } from "../services/homeService";
// import { HomeData } from "../types/page";
import Preloader from "../components/Preloader";
import SkillsMarquee from "../components/section/SkillsMarque";
import NewestProject from "../components/section/NewestProject";

export default function Home() {

  const [homeData, setHomeData] = useState<HomeData | null | undefined>(null);

  useEffect(() => {

    const loadDataHome = async () => {
      const data = await homeService();

      setHomeData(data);
    }

    loadDataHome();

  }, []);


  if (!homeData) {
    return <Preloader isLoading={true} />;
  }


  const {
    name,
    photo_url,
    summary,
    roles,
    projects,
    skills
  } = homeData;


  return (
    <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">

      <Hero
        name={name}
        photo_url={photo_url}
        summary={summary}
        roles={roles}
      />

      <NewestProject projects={projects} />
      <SkillsMarquee skills={skills} />
      <CallToAction />

    </section>
  );
}
