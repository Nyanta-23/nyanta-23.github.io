// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

import NyantaBlackIcon from "../assets/icons/nyanta-black.svg";
import NyantaWhiteIcon from "../assets/icons/nyanta-white.svg";

const useDarkMode = () => {
  const [theme, setTheme] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");

    return saved ? saved === "light" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !theme);
    localStorage.setItem("theme", theme ? "light" : "dark");

    const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    const iconHref = theme ? NyantaWhiteIcon : NyantaBlackIcon;

    if (favicon) {
      favicon.href = iconHref;
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.type = "image/svg+xml";
      newFavicon.href = iconHref;
      document.head.appendChild(newFavicon);
    }
  }, [theme]);

  return { theme, setTheme };
};

export default useDarkMode;
