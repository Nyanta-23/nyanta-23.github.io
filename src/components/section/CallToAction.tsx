import { ArrowRight, Mail } from "lucide-react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { getIconByName } from "../../helpers/helper";

export default function CallToAction({
    cta_title,
    cta_eyebrow,
    cta_description,
    cta_button_label,
    cta_button_icon_primary,
    cta_button_icon_secondary
}: CallToActionProps) {
    const navigate = useNavigate();

    const IconPrimary = getIconByName(cta_button_icon_primary ? cta_button_icon_primary : "");
    const IconSecondary = getIconByName(cta_button_icon_secondary ? cta_button_icon_secondary : "");

    return (
        <section className="my-6 sm:my-10 mx-4 xs:mx-6 sm:mx-10 lg:mx-16">
            <div
                className="relative overflow-hidden px-4 xs:px-6 py-10 xs:py-12 sm:py-16 rounded-md flex flex-col items-center text-center mx-auto transition-shadow duration-500 ease-in-out hover:shadow-floating"
                style={{
                    background:
                        "linear-gradient(135deg, rgb(var(--color-surface-container-high)) 0%, rgb(var(--color-surface-container)) 100%)",
                }}
            >
                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="absolute -top-20 -left-16 w-72 h-72 xs:w-96 xs:h-96 rounded-full blur-3xl opacity-40 animate-blob-1"
                        style={{ background: "rgb(var(--color-secondary))" }}
                    />
                    <div
                        className="absolute -bottom-24 -right-16 w-72 h-72 xs:w-96 xs:h-96 rounded-full blur-3xl opacity-30 animate-blob-2"
                        style={{ background: "rgb(var(--color-primary))" }}
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <p className="font-mono text-[10px] xs:text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-3 sm:mb-4">
                        {cta_eyebrow}
                    </p>

                    <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-semibold text-on-surface leading-tight max-w-2xl mb-4 sm:mb-6">
                        {cta_title}
                    </h2>

                    <p className="text-on-surface-variant text-sm xs:text-base sm:text-lg max-w-xs xs:max-w-sm sm:max-w-md mb-8 sm:mb-10">
                        {cta_description}
                    </p>

                    <Button
                        onClick={() => navigate("/contact")}
                        className="nav-btn group inline-flex items-center gap-2 px-6 py-3 xs:px-8 xs:py-4 text-on-surface cursor-pointer text-sm xs:text-base rounded-md transition-all duration-300"
                        style={{
                            background: "rgb(var(--color-surface-container-lowest) / 0.7)",
                        }}
                    >
                        {IconPrimary && <IconPrimary className="w-4 h-4 xs:w-[18px] xs:h-[18px] transition-transform duration-300" />}
                        {/* <Mail className="w-4 h-4 xs:w-[18px] xs:h-[18px] transition-transform duration-300" /> */}
                        <span>{cta_button_label}</span>
                        {/* <ArrowRight className="w-4 h-4 xs:w-[18px] xs:h-[18px] transition-transform duration-300" /> */}
                        {IconSecondary && <IconSecondary className="w-4 h-4 xs:w-[18px] xs:h-[18px] transition-transform duration-300" />}

                    </Button>
                </div>
            </div>
        </section>
    );
}