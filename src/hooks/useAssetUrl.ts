import { useEffect, useState } from "react";
import { getAssetUrl } from "../helpers/helper";

const EXTENSIONS = ["png", "jpg"];

function probeImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

async function resolveIndexUrl(
  basePath: string,
  index: number,
): Promise<string | null> {
  for (const ext of EXTENSIONS) {
    const url = getAssetUrl(`${basePath}/${index}.${ext}`);
    const found = await probeImage(url);
    if (found) return url;
  }
  return null;
}

export default function useAssetImages(
  basePath?: string | null,
  maxCount = 35,
) {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(!!basePath);

  useEffect(() => {
    let cancelled = false;

    if (!basePath) {
      setImages([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    (async () => {
      const found: string[] = [];

      for (let i = 1; i <= maxCount; i++) {
        const url = await resolveIndexUrl(basePath, i);
        if (!url) break;
        found.push(url);
      }

      if (!cancelled) {
        setImages(found);
        setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [basePath, maxCount]);

  return { images, isLoading };
}
