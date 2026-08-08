import { useEffect, useRef, useState } from "react";

export default function useImageSlider({
  length,
  intervalMs = 2800,
  autoPlay = true,
}: UseImageSliderOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!autoPlay || length <= 1 || isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, intervalMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [length, isPaused, autoPlay, intervalMs]);

  useEffect(() => {
    if (activeIndex >= length) setActiveIndex(0);
  }, [length, activeIndex]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);
  const goTo = (index: number) => setActiveIndex(index);

  return { activeIndex, isPaused, pause, resume, goTo };
}
