import { useNavigate } from "react-router-dom";
import { Construction, House } from "lucide-react";
import Button from "../Button";

export default function UnderConstruction() {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col items-center justify-center text-center h-[92vh] px-6">
            <div className="w-20 h-20 rounded-full border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center mb-8">
                <Construction size={32} className="text-on-background" />
            </div>

            <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4">
                Coming Soon
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-on-background leading-tight mb-6 max-w-xl">
                This Page Is Still Under Construction
            </h1>

            <p className="text-on-surface-variant max-w-md mb-10">
                Halaman ini sedang dalam proses pengembangan. Silakan kembali lagi
                nanti untuk melihat pembaruannya.
            </p>

            <Button
                onClick={() => navigate("/")}
                className="nav-btn flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-on-primary cursor-pointer"
            >
                <House size={18} />
                <span>Kembali ke Home</span>
            </Button>
        </section>
    );
}