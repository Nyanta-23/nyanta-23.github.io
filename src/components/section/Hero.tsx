import { ArrowRight, Download } from "lucide-react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import TypedText from "../TypedText";
import { getAssetUrl, getThemedAsset } from "../../helpers/helper";
import { useTheme } from "../../context/ThemeContext";
import NyantaBlackIcon from "../../assets/icons/nyanta-black.svg";
import NyantaWhiteIcon from "../../assets/icons/nyanta-white.svg";

export default function Hero({
  name,
  photo_url,
  summary,
  roles,
}: HeroProps) {
  const navigate = useNavigate();
  const cdnAsset = getAssetUrl(photo_url);

  const { theme } = useTheme();

  const image = getThemedAsset(theme, NyantaWhiteIcon, NyantaBlackIcon);

  return (
    <section
      className="flex flex-col items-center text-center px-4 xs:px-6 pt-8 xs:pt-12 pb-10 xs:pb-16
        lg:flex-row-reverse lg:items-center lg:text-left lg:justify-center lg:gap-16 lg:max-w-6xl lg:mx-auto lg:pt-20"
    >
      <div className="relative mb-6 xs:mb-8 lg:mb-0 lg:flex-shrink-0">
        <img
          className="z-10 relative w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-md object-cover border-4 xs:border-[6px] border-charcoal-ink dark:border-pure-white"
          src={cdnAsset ?? image}
          alt={name ?? "This is my image profile."}
        />

        <span className="absolute bottom-2 right-2 xs:bottom-3 xs:right-3 lg:bottom-5 lg:right-5 w-5 h-5 xs:w-6 xs:h-6 lg:w-7 lg:h-7 rounded-full bg-background border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center">
          <span className="w-2 h-2 xs:w-2.5 xs:h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500" />
        </span>
      </div>

      <div className="flex flex-col items-center lg:items-start">
        <div className="font-mono text-[10px] xs:text-xs sm:text-sm tracking-[0.1em] uppercase text-on-surface-variant mb-3 xs:mb-4 h-5 flex items-center">
          <TypedText roles={roles} />
        </div>

        <h1 className="font-serif text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-semibold text-on-background leading-tight max-w-2xl">
          {name}
        </h1>

        <div className="w-12 h-[2px] bg-outline-variant my-4 xs:my-6" />

        <p className="text-on-surface-variant text-sm xs:text-base sm:text-lg max-w-xs xs:max-w-lg leading-relaxed mb-8 xs:mb-10">
          {summary}
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3 xs:gap-4">
          <Button
            onClick={() => navigate("/showcase")}
            className="nav-btn flex items-center gap-2 px-5 py-2.5 xs:px-6 xs:py-3 rounded-md bg-primary text-on-primary cursor-pointer text-sm xs:text-base"
          >
            <span>See all projects</span>
            <ArrowRight className="w-4 h-4 xs:w-[18px] xs:h-[18px]" />
          </Button>

          <a href={"#"} target="_blank" rel="noopener noreferrer" download>
            <Button className="nav-btn flex items-center gap-2 px-5 py-2.5 xs:px-6 xs:py-3 rounded-md border border-outline-variant text-on-background cursor-pointer text-sm xs:text-base">
              <span>Download CV</span>
              <Download className="w-4 h-4 xs:w-[18px] xs:h-[18px]" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}