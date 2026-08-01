import Me from "../../assets/images/me.jpg";

import { ArrowRight, Download } from "lucide-react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import TypedText from "../TypedText";
import { getAssetUrl } from "../../helpers/helper";

export default function Hero({ name, photo_url, summary, roles }: HeroProps) {

    const navigate = useNavigate();

    const cdnAsset = getAssetUrl(photo_url);

    return (
        <section className="flex align-middle items-center flex-col">

            <div className="p-5">
                <img
                    className="w-80 h-80 sm:w-48 sm:h-48 rounded-lg object-cover border-[6px] border-charcoal-ink dark:border-pure-white"
                    src={cdnAsset}
                    alt={name}
                />
            </div>


            <div className="p-5">

                <TypedText roles={roles} />

                <h1 className="text-4xl text-center font-bold font-serif text-secondary">{name}</h1>

                <p className="text-on-surface-variant sm:text-lg mt-5 mb-10 text-center">
                    {summary}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Button
                        onClick={() => navigate("/portfolio")}
                        className="nav-btn flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-on-primary cursor-pointer"
                    >
                        <span>Lihat Projects</span>
                        <ArrowRight size={18} />
                    </Button>

                    <Button
                        className="nav-btn flex items-center gap-2 px-6 py-3 rounded-md border border-outline-variant text-on-background cursor-pointer"
                    >
                        <span>Download CV</span>
                        <Download size={18} />
                    </Button>

                </div>

            </div>


        </section>
    )
}