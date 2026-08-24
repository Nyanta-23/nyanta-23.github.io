import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 800;

export default function useLoading(isDataReady: boolean) {
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  // const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // setIsAppReady(true);

    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, MIN_DISPLAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const isLoading = !isDataReady || !minTimeElapsed;

  return { isLoading };
}
