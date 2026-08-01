import { useEffect } from "react";
import Projects from "../components/section/Projects";
import { portfolio } from "../services/portfolioService";

export default function Portfolio() {


    useEffect(() => {

        const loadDataPortfolio = async () => {
            const data = await portfolio();

            // setHomeData(data);
        }

        loadDataPortfolio();

    }, []);

    return (
        <section className="px-6 my-5">
            <Projects />
        </section>
    );
}