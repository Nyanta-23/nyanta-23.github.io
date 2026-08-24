import { useEffect, useState } from "react";
import Portfolio from "../components/section/Portfolio";
import PortfolioSkeleton from "../components/sekeleton/skeleton-section/PortfolioSkeleton";
import FadeIn from "../components/FadeIn";
import { projectService } from "../services/section/projectService";
import { useMainData } from "../context/MainDataContext";

export default function Showcase() {

    const { mainData } = useMainData();


    const [project, setProject] = useState<ProjectSectionData | null | undefined>(null);


    useEffect(() => {

        const loadDataPortfolio = async () => {
            const data = await projectService();

            setProject(data);
        }

        loadDataPortfolio();

    }, []);

    // console.log(project);

    return (
        <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">
            {project && mainData ? (
                <FadeIn>
                    <Portfolio
                        projects={project.projects}
                        portfolio_title={mainData?.portfolio_title}
                        portfolio_eyebrow={mainData?.portfolio_eyebrow}
                        portfolio_description={mainData?.portfolio_description}
                    />
                </FadeIn>
            ) : <PortfolioSkeleton />}
        </section>
    );
}