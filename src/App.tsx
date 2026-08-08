import Preloader from "./components/Preloader";
import Navbar from "./components/section/Navbar";
import Routers from "./routes";
import Particle from "./components/Particle";
import useLoading from "./hooks/useLoading";
import Footer from "./components/section/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const { isLoading } = useLoading();

  return (
    <ThemeProvider>
      <Preloader isLoading={isLoading} />

      <section className="font-mono bg-background text-primary">
        <Particle />

        <div className="relative">
          <Navbar />
          <section className="pt-20">
            <Routers />
          </section>
          <Footer />
        </div>
      </section>
    </ThemeProvider>
  );
}