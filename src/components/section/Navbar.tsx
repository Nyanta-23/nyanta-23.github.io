import { Clipboard, Download, House, Moon, Rss, Sun, User, Contact } from "lucide-react";
import Button from "../Button";
import NyantaBlackIcon from "../../assets/icons/nyanta-black.svg";
import NyantaWhiteIcon from "../../assets/icons/nyanta-white.svg";
import { NavLink, useLocation } from "react-router-dom";

const NAV_ASSETS = [
  {
    number: 1,
    name: "home",
    icon: House,
    structure: "key-values",
    to: "/",
  },
  {
    number: 2,
    name: "profile",
    icon: User,
    structure: "table",
    to: "/profile",
  },
  {
    number: 3,
    name: "portfolio",
    icon: Clipboard,
    structure: "table",
    to: "/portfolio",
  },
  {
    number: 4,
    name: "blog",
    icon: Rss,
    structure: "table",
    to: "/blog",
  },
  {
    number: 5,
    name: "contact",
    icon: Contact,
    structure: "key-values",
    to: "/contact",
  },
];

export default function Navbar({ theme, setTheme }: NavbarProps) {

  const size: number = 36;

    const { pathname } = useLocation();

  return (
    <section className="fixed top-0 px-10 py-2 border-outline-variant border-b-[1px] w-full bg-background">

      <div className="relative flex justify-between items-center">

        <Button>
          <img className="rounded-full" src={theme ? NyantaWhiteIcon : NyantaBlackIcon} alt="nyanta-white-logo" width={size * 2} height={size * 2} />
        </Button>


        <nav className="bg-background border-background border-[1px] rounded-full fixed bottom-[5%] left-1/2 -translate-x-1/2 shadow-elevated">

          <div className="flex justify-between gap-5 px-4 py-2">

            {NAV_ASSETS.map(({ number, to, icon: Icon }) => {

              const isSelected = pathname === to;

              return (
                <NavLink key={number}
                  to={to ?? "*"}>
                  <Button
                    className={`rounded-full transition-all duration-150 p-3 text-primary nav-btn
									${isSelected
                        ? "bg-surface-container-high shadow-neu-inset scale-90"
                        : "scale-100"
                      }`}
                  >
                    {Icon && <Icon size={size} />}
                  </Button>
                </NavLink>
              );
            })}

          </div>

        </nav>

        <Button
          className="px-5 py-2 h-1/2 bg-on-background rounded-md text-background flex justify-between items-center gap-4 nav-btn-cv"
        >
          <p>DOWNLOAD CV</p>
          <Download size={size / 2} />
        </Button>



        <Button
          className="bg-background text-on-surface border-outline-variant border-2 p-2 rounded-md nav-btn"
          onClick={setTheme}
        >
          {theme ? <Sun size={size} /> : <Moon size={size} />}
        </Button>

      </div>



    </section>
  )
}


