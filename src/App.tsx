
import Preloader from "./components/Preloader";
import Navbar from "./components/section/Navbar";
import useDarkMode from "./hooks/useDarkMode";
import Routers from "./routes";
import Particle from "./components/Particle";
import useLoading from "./hooks/useLoading";
import Footer from "./components/section/Footer";

export default function App() {
  const { isLoading } = useLoading();
  const { theme, setTheme } = useDarkMode();

  return (
    <>
      <Preloader isLoading={isLoading} />

      <section className="font-mono bg-background text-primary">
        <Particle />

        <div className="relative z-10">
          <Navbar theme={theme} setTheme={() => setTheme(!theme)} />
          <section className="pt-20">
            <Routers />
          </section>
          <Footer />
        </div>
      </section>
    </>
  );
}