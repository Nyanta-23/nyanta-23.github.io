interface ThemeTransitionOverlayProps {
  isTransitioning: boolean;
}

export default function ThemeTransitionOverlay({ isTransitioning }: ThemeTransitionOverlayProps) {
  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] bg-background transition-opacity duration-150 ease-out
      ${isTransitioning ? "opacity-100" : "opacity-0"}`}
    />
  );
}