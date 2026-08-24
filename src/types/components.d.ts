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
  cv_url: string | null;
  hero_primary_button_label: string | null;
  hero_primary_button_icon: string | null;
  hero_secondary_button_label: string | null;
  hero_secondary_button_icon: string | null;
}

interface NewestProjectProps {
  newest_projects_title: string | null;
  newest_projects_view_all_label: string | null;
  newest_projects_view_all_icon: string | null;
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
  bio_eyebrow?: string | null;
  bio_title?: string | null;
}

interface SkillProps {
  skills_eyebrow: string | null;
  skills_title: string | null;
  skill_groups?: SkillGroup[];
}

interface ExperienceProps {
  experience_eyebrow: string | null;
  experience_title: string | null;
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
  education_eyebrow: string | null;
  education_title: string | null;
  academics?: Education[];
}

interface EducationProps {
  education: Education;
  is_latest: boolean;
}

interface ProffessionalCredentialProps {
  certifications_eyebrow: string | null;
  certifications_title: string | null;
  credentials?: Certification[];
}

interface CredentialProps {
  credential: Certification;
}

interface PortfolioProps {
  portfolio_eyebrow: string | null;
  portfolio_title: string | null;
  portfolio_description: string | null;
  projects?: Project[];
}

interface ContactInfoProps {
  email: string | null;
  phone: string | null;
  location: string | null;
  social_medias?: SocialMedia[];
}

interface ContactEmailProps {
  contact_form_title: string | null;
  contact_form_name_label: string | null;
  contact_form_name_placeholder: string | null;
  contact_form_email_label: string | null;
  contact_form_email_placeholder: string | null;
  contact_form_message_label: string | null;
  contact_form_message_placeholder: string | null;
  contact_form_button_label: string | null;
}

interface SocialMediaProps {
  social_media: SocialMedia;
}

interface ConnectionProps {
  email: string | null;
  phone: string | null;
  location: string | null;
  availability: string | null;
  social_medias?: SocialMedia[];

  contact_eyebrow: string | null;
  contact_title: string | null;

  contact_details_title: string | null;

  contact_form_title: string | null;
  contact_form_name_label: string | null;
  contact_form_name_placeholder: string | null;
  contact_form_email_label: string | null;
  contact_form_email_placeholder: string | null;
  contact_form_message_label: string | null;
  contact_form_message_placeholder: string | null;
  contact_form_button_label: string | null;
}

interface BusinessProps {
  services_eyebrow: string | null;
  services_title: string | null;
  services?: ServiceItem[];
}

interface ServiceProps {
  service?: ServiceItem;
}

interface CallToActionProps {
  cta_eyebrow: string | null;
  cta_title: string | null;
  cta_description: string | null;
  cta_button_label: string | null;
  cta_button_icon_primary: string | null;
  cta_button_icon_secondary: string | null;
}
