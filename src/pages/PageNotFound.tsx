import { useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import Button from "../components/Button";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center h-[80vh] px-4 sm:px-6">
      <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-semibold text-on-background leading-none">
        404
      </h1>

      <div className="w-12 sm:w-16 h-[2px] bg-outline-variant my-4 sm:my-5 md:my-6" />

      <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-on-background mb-2 sm:mb-3">
        Page Not Found
      </h2>

      <p className="text-sm sm:text-base text-on-surface-variant max-w-md mb-6 sm:mb-8 md:mb-10">
        It looks like the page you're looking for has been moved, deleted, or never existed in the first place.
      </p>

      <div className="flex gap-3 sm:gap-4">
        <Button
          onClick={() => navigate("/")}
          className="nav-btn flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-primary text-on-primary cursor-pointer"
        >
          <House className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="leading-none whitespace-nowrap">Back to Home</span>
        </Button>
      </div>
    </section>
  );
}