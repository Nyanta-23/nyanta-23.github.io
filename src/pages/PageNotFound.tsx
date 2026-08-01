import { useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import Button from "../components/Button";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center h-[92vh] px-6">
      <h1 className="font-serif text-8xl sm:text-9xl font-semibold text-on-background leading-none">
        404
      </h1>

      <div className="w-16 h-[2px] bg-outline-variant my-6" />

      <h2 className="font-serif text-2xl sm:text-3xl font-medium text-on-background mb-3">
        Page Not Found
      </h2>

      <p className="text-on-surface-variant max-w-md mb-10">
        It looks like the page you're looking for has been moved, deleted, or never existed in the first place.
      </p>

      <div className="flex gap-4">
        <Button
          onClick={() => navigate("/")}
          className="nav-btn flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-on-primary cursor-pointer"
        >
          <House size={20} />
          <span>Back to Home</span>
        </Button>
      </div>
    </section>
  );
}