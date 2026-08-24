import Preloader from "./components/Preloader";
import Navbar from "./components/section/Navbar";
import Routers from "./routes";
import Particle from "./components/Particle";
import useLoading from "./hooks/useLoading";
import Footer from "./components/section/Footer";
import navAssetData from "./data/navbar.json";
import { useMainData } from "./context/MainDataContext";
import ThemeTransitionOverlay from "./components/ThemeTransitionOverlay";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { mainData } = useMainData();
  const { isLoading } = useLoading(mainData !== null);
  const { isTransitioning } = useTheme();

  return (
    <>
      <ThemeTransitionOverlay isTransitioning={isTransitioning} />
      <Preloader isLoading={isLoading} />

      <section className="font-mono bg-background text-primary">
        <Particle />

        <div className="relative">
          <Navbar navAssets={navAssetData} />
          <section className="pt-20">
            <Routers />
          </section>
          <Footer />
        </div>
      </section>
    </>
  );
}