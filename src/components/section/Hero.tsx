import { ArrowRight, Download } from "lucide-react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import TypedText from "../TypedText";
import { getAssetUrl } from "../../helpers/helper";

export default function Hero({
  name,
  photo_url,
  summary,
  roles,
}: HeroProps) {
  const navigate = useNavigate();
  const cdnAsset = getAssetUrl(photo_url);

  return (
    <section
      className="flex flex-col items-center text-center px-6 pt-12 pb-16
        lg:flex-row-reverse lg:items-center lg:text-left lg:justify-center lg:gap-16 lg:max-w-6xl lg:mx-auto lg:pt-20"
    >
      <div className="relative mb-8 lg:mb-0 lg:flex-shrink-0">
        <img
          className="z-10 relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-md object-cover border-[6px] border-charcoal-ink dark:border-pure-white"
          src={cdnAsset}
          alt={name ?? "This is my image profile."}
        />

        <span className="absolute bottom-3 right-3 lg:bottom-5 lg:right-5 w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-background border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center">
          <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500" />
        </span>
      </div>

      <div className="flex flex-col items-center lg:items-start">
        <div className="font-mono text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-4 h-5 flex items-center">
          <TypedText roles={roles} />
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold text-on-background leading-tight max-w-2xl">
          {name}
        </h1>

        <div className="w-12 h-[2px] bg-outline-variant my-6" />

        <p className="text-on-surface-variant text-base sm:text-lg max-w-lg leading-relaxed mb-10">
          {summary}
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <Button
            onClick={() => navigate("/portfolio")}
            className="nav-btn flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-on-primary cursor-pointer"
          >
            <span>See all projects</span>
            <ArrowRight size={18} />
          </Button>

          <a
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button className="nav-btn flex items-center gap-2 px-6 py-3 rounded-md border border-outline-variant text-on-background cursor-pointer">
              <span>Download CV</span>
              <Download size={18} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}