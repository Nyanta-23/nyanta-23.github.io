import { useEffect, useState } from "react";
import { getAssetUrl } from "../helpers/helper";

const EXTENSIONS = ["png", "jpg"];
const CACHE_PREFIX = "assetImages:";

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

function readCache(basePath: string): string[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_PREFIX + basePath);
    if (!raw) return null;
    return JSON.parse(raw) as string[];
  } catch (err) {
    console.error("Gagal membaca cache sessionStorage:", err);
    return null;
  }
}

function writeCache(basePath: string, images: string[]) {
  try {
    sessionStorage.setItem(CACHE_PREFIX + basePath, JSON.stringify(images));
  } catch (err) {
    console.error("Gagal menyimpan cache sessionStorage:", err);
  }
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

    const cached = readCache(basePath);
    if (cached) {
      setImages(cached);
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
        writeCache(basePath, found);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [basePath, maxCount]);

  return { images, isLoading };
}
