interface SheetItem {
  number?: number;
  name: string;
  gid: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  structure?: string;
  to?: string;
}

interface NavbarProps {
  theme: boolean;
  setTheme: () => void;
}

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

interface PropsThemeTransitionOverlay {
  trigger: number;
}

interface PropsPreloader {
  isLoading: boolean;
}

interface PropsParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}
