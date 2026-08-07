import { useNavigate } from "react-router-dom";
import { Construction, House } from "lucide-react";
import Button from "../Button";

export default function UnderConstruction() {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col items-center justify-center text-center h-[80vh] px-4 sm:px-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center mb-6 sm:mb-7 md:mb-8">
                <Construction className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-on-background" />
            </div>

            <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-3 sm:mb-4">
                Coming Soon
            </p>

            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-on-background leading-tight mb-4 sm:mb-5 md:mb-6 max-w-xl">
                This Page Is Still Under Construction
            </h1>

            <p className="text-sm sm:text-base text-on-surface-variant max-w-md mb-6 sm:mb-8 md:mb-10">
                This page is currently under development. Please check back later to see the updates.
            </p>

            <Button
                onClick={() => navigate("/")}
                className="nav-btn flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-primary text-on-primary cursor-pointer"
            >
                <House className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="leading-none whitespace-nowrap">Back to Home</span>
            </Button>
        </section>
    );
}