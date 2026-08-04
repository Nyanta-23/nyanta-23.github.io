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

interface HeroProps {
  name?: string | null;
  photo_url?: string | null;
  summary?: string | null;
  roles?: Role[];
}

interface NewestProjectProps {
  projects?: Project[];
}

interface ProjectProps {
  project: Project;
}

interface SkillMarqueProps {
  skills?: Skill[];
}

interface BioProps {
  bio?: string | null;
  bio_heading?: string | null;
}

interface SkillProps {
  skill_groups?: SkillGroup[];
}

interface ExperienceProps {
  experiences?: Experience[];
}

interface ExperienceEntryProps {
  experience: Experience;
  latest_position_id: string | null;
}

interface PositionEntryProps {
  position: ExperienceRole;
  is_latest: boolean;
}

interface AcademicProps {
  academics?: Education[];
}

interface EducationProps {
  education: Education;
  is_latest: boolean;
}

interface ProffessionalCredentialProps {
  credentials?: Certification[];
}

interface CredentialProps {
  credential: Certification;
}

interface PortfolioProps {
  projects?: Project[];
}