import { useEffect, useState } from "react";
import Portfolio from "../components/section/Portfolio";
import { portfolioService } from "../services/portfolioService";
import Preloader from "../components/Preloader";

export default function Showcase() {


    const [showcase, setShowcase] = useState<PortfolioData | null | undefined>(null);


    useEffect(() => {

        const loadDataPortfolio = async () => {
            const data = await portfolioService();

            setShowcase(data);
        }

        loadDataPortfolio();

    }, []);


      if (!showcase) {
        return <Preloader isLoading={true} />;
      }

    const { portfolio } = showcase;


    return (
        <section className="px-6 my-5">
            <Portfolio projects={portfolio} />
        </section>
    );
}