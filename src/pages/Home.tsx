import { useEffect, useMemo, useState } from "react";
import Hero from "../components/section/Hero";
// import { useNav } from "../context/NavContext";
import useSheetData from "../hooks/useSheetData";
// import { getDataKeyVal } from "../helpers/helper";
import Summary from "../components/section/Summary";
import CallToAction from "../components/section/CallToAction";
import SkillsHighlight from "../components/section/SkillsHighlight";
import FeaturedProjects from "../components/section/FeaturedProject";
import { home } from "../services/homeService";
import { HomeData } from "../types/page";
import Preloader from "../components/Preloader";

export default function Home() {

  const [homeData, setHomeData] = useState<HomeData | null | undefined>(null);

  useEffect(() => {

    const loadDataHome = async () => {
      const data = await home();

      setHomeData(data);
    }

    loadDataHome();

  }, []);


  if (!homeData) {
    return <Preloader isLoading={true} />;
  }


  const { name, photo_url, summary, roles } = homeData;


  return (



    <section className="px-6 my-5">

      <Hero name={name} photo_url={photo_url} summary={summary} roles={roles} />
      <SkillsHighlight />
      <FeaturedProjects />
      <CallToAction />

    </section>
  );
}
