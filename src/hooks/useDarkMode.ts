import { useEffect, useState } from "react";
import NyantaBlackIcon from "../assets/icons/nyanta-black.svg";
import NyantaWhiteIcon from "../assets/icons/nyanta-white.svg";

const useDarkMode = () => {
  const [theme, setThemeState] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "light" : true;
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  const applyTheme = (newTheme: boolean) => {
    document.documentElement.classList.toggle("dark", !newTheme);
    localStorage.setItem("theme", newTheme ? "light" : "dark");

    const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    const iconHref = newTheme ? NyantaWhiteIcon : NyantaBlackIcon;

    if (favicon) {
      favicon.href = iconHref;
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.type = "image/svg+xml";
      newFavicon.href = iconHref;
      document.head.appendChild(newFavicon);
    }
  };

  const setTheme = (newTheme: boolean) => {
    setIsTransitioning(true);

    setTimeout(() => {
      applyTheme(newTheme);
      setThemeState(newTheme);

      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 150);
  };

  useEffect(() => {
    applyTheme(theme);
  }, []);

  return { theme, setTheme, isTransitioning };
};

export default useDarkMode;