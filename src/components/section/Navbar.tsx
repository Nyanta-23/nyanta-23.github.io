import { Download, Moon, Sun, ChevronDown, ChevronUp } from "lucide-react";
import Button from "../Button";
import NyantaBlackIcon from "../../assets/icons/nyanta-black.svg";
import NyantaWhiteIcon from "../../assets/icons/nyanta-white.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { getLucideIconByName, getThemedAsset } from "../../helpers/helper";
import { useMainData } from "../../context/MainDataContext";

interface NavAsset {
  number: number;
  name: string;
  icon: string;
  structure: string;
  to: string;
}

interface NavbarProps {
  navAssets: NavAsset[];
}

export default function Navbar({ navAssets }: NavbarProps) {
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();

  const { mainData } = useMainData();

  const [showNav, setShowNav] = useState<boolean>(false);

  const logoSrc = getThemedAsset(theme, NyantaWhiteIcon, NyantaBlackIcon);

  const navigate = useNavigate();

  return (
    <section className="fixed top-0 px-10 py-2 border-outline-variant border-b-[1px] w-full bg-background z-50">
      <div className="grid grid-cols-3 items-center">

        <div className="flex items-center justify-self-start">
          <Button
            onClick={() => navigate("/")}
          >
            <img
              className={`rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20`}
              src={logoSrc}
              alt="nyanta-logo"
            />
          </Button>
        </div>


        <div className="flex justify-self-center">
          <a href={mainData?.cv_url ?? "#"} target="_blank" rel="noonper noreferrer"></a>
          <Button
            className="nav-btn px-3 text-sm sm:text-base sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 bg-on-background rounded-md text-on-primary flex items-center justify-between gap-2 sm:gap-3 md:gap-4 cursor-pointer"
          >
            <span className="leading-none whitespace-nowrap">
              DOWNLOAD CV
            </span>
            <Download className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
          </Button>
        </div>

        <div className="flex items-center justify-self-end gap-4 xl:gap-6">
          <div className="hidden nav:flex items-center gap-5 xl:gap-7">
            {navAssets.map(({ number, to, name }) => {
              const isSelected = pathname === to;

              return (
                <NavLink key={number} to={to ?? "*"}>
                  <span
                    className={`font-mono text-xs xl:text-sm uppercase tracking-[0.08em] transition-colors duration-150
                    ${isSelected
                        ? "text-on-background font-semibold"
                        : "text-on-surface-variant hover:text-on-background"
                      }`}
                  >
                    {name}
                  </span>
                </NavLink>
              );
            })}
          </div>

          <Button
            className="bg-background text-on-surface border-outline-variant border-2 p-2 rounded-md nav-btn"
            onClick={() => setTheme(!theme)}
          >
            {theme ? (
              <Sun className={"w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 nav:w-9 nav:h-9"} />
            ) : (
              <Moon className={"w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 nav:w-9 nav:h-9"} />
            )}
          </Button>
        </div>

        <div className="nav:hidden fixed bottom-[4%] left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div
            className={`flex flex-col items-center transition-transform duration-300 ease-in-out
            ${showNav ? "translate-y-0" : "translate-y-[calc(100%+16px)]"}`}
          >
            <Button
              onClick={() => setShowNav(!showNav)}
              className="relative z-0 w-24 bg-surface-container-high pt-2 pb-3 -mb-2 rounded-t-2xl flex items-center justify-center nav-btn"
            >
              {showNav ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </Button>

            <div className="relative z-10 bg-background border-[1px] border-outline-variant rounded-[28px] shadow-elevated flex justify-between gap-5 px-4 py-2">
              {navAssets.map(({ number, to, icon }) => {
                const isSelected = pathname === to;

                const Icon = getLucideIconByName(icon);


                return (
                  <NavLink key={number} to={to ?? "*"}>
                    <Button
                      className={`rounded-full transition-all duration-150 p-3 text-primary nav-btn
                      ${isSelected
                          ? "bg-surface-container-high shadow-neu-inset scale-90"
                          : "scale-100"
                        }`}
                    >
                      {Icon && (
                        <Icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 nav:w-9 nav:h-9" />
                      )}
                    </Button>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}