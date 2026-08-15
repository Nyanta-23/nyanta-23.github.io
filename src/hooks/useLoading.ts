import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 1200;

export default function useLoading() {
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);

    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, MIN_DISPLAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const isLoading = !isAppReady || !minTimeElapsed;

  return { isLoading };
}
