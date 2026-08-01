import { ArrowRight, Mail } from "lucide-react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {

    const navigate = useNavigate();

    return (

        <section className="py-24 px-6 flex flex-col items-center text-center border-t border-outline-variant">
            <p className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4">
                Open For Collaboration
            </p>

            <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-on-background leading-tight max-w-2xl mb-6">
                Let&apos;s Work Together
            </h2>

            <p className="text-on-surface-variant text-base sm:text-lg max-w-md mb-10">
                Punya proyek atau ide yang ingin diwujudkan? Saya terbuka untuk
                diskusi, kolaborasi, maupun peluang kerja.
            </p>


            <Button
                onClick={() => navigate("/contact")}
                className="nav-btn inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-on-primary cursor-pointer"
            >
                <Mail size={18} />
                <span>Hubungi Saya</span>
                <ArrowRight size={18} />
            </Button>

        </section>
    );
}