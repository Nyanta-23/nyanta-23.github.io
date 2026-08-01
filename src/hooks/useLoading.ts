import { useEffect, useState } from "react";

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minDelay = new Promise((resolve) => setTimeout(resolve, 1000));
    const pageLoad = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve(true);
      } else {
        window.addEventListener("load", () => resolve(true), { once: true });
      }
    });

    Promise.all([minDelay, pageLoad]).then(() => setIsLoading(false));
  }, []);

  return { isLoading };
}
