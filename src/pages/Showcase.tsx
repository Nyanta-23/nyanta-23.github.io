import { useEffect, useState } from "react";
import Portfolio from "../components/section/Portfolio";
import { portfolioService } from "../services/portfolioService";
import PortfolioSkeleton from "../components/sekeleton/skeleton-section/PortfolioSkeleton";

export default function Showcase() {


    const [showcase, setShowcase] = useState<PortfolioData | null | undefined>(null);


    useEffect(() => {

        const loadDataPortfolio = async () => {
            const data = await portfolioService();

            setShowcase(data);
        }

        loadDataPortfolio();

    }, []);


    return (
        <section className="px-4 sm:px-6 md:px-8 my-0 sm:my-5 md:my-7">
            {showcase ? (
                <Portfolio projects={showcase.portfolio} />

            ) : (
                <PortfolioSkeleton />
            )}
        </section>
    );
}