interface MainData {
  // Sudah ada sebelumnya
  bio: string | null;

  email: string | null;
  phone: string | null;
  location: string | null;
  status: string | null;

  name: string | null;
  photo_url: string | null;
  summary: string | null;

  cv_url: string | null;

  // Baru ditambahkan
  resume_url: string | null;
  portfolio_persentation_url: string | null;

  // Hero section
  hero_primary_button_label: string | null;
  hero_primary_button_icon: string | null;
  hero_secondary_button_label: string | null;
  hero_secondary_button_icon: string | null;

  // Newest Projects section
  newest_projects_title: string | null;
  newest_projects_view_all_label: string | null;
  newest_projects_view_all_icon: string | null;

  // Services section
  services_eyebrow: string | null;
  services_title: string | null;

  // CTA section
  cta_eyebrow: string | null;
  cta_title: string | null;
  cta_description: string | null;
  cta_button_label: string | null;
  cta_button_icon_primary: string | null;
  cta_button_icon_secondary: string | null;

  // Bio Section
  bio_eyebrow: string | null;
  bio_title: string | null;

  // Skills section
  skills_eyebrow: string | null;
  skills_title: string | null;

  // Experience section
  experience_eyebrow: string | null;
  experience_title: string | null;

  // Education section
  education_eyebrow: string | null;
  education_title: string | null;

  // Certifications section
  certifications_eyebrow: string | null;
  certifications_title: string | null;

  // Portfolio section
  portfolio_eyebrow: string | null;
  portfolio_title: string | null;
  portfolio_description: string | null;

  // Contact section
  contact_eyebrow: string | null;
  contact_title: string | null;
  contact_description: string | null;
  
  contact_details_title: string | null;

  // Contact form
  contact_form_title: string | null;
  contact_form_name_label: string | null;
  contact_form_name_placeholder: string | null;
  contact_form_email_label: string | null;
  contact_form_email_placeholder: string | null;
  contact_form_message_label: string | null;
  contact_form_message_placeholder: string | null;
  contact_form_button_label: string | null;
}

interface HeroSectionData {
  roles: Role[];
}

interface ProjectSectionData {
  projects: Project[];
}

interface SocialMediaSectionData {
  social_medias: SocialMedia[];
}

interface ServiceSectionData {
  services: Service[];
}

interface SkillSectionData {
  skills: Skill[];
}

interface SkillGroupSectionData {
  skill_groups: SkillGroup[];
}

interface CertificationSectionData {
  certifications?: Certification[];
}

interface EducationSectionData {
  educations?: Education[];
}

interface ExperienceSectionData {
  experiences?: Experience[];
}

interface HomeData {
  name: string | null;
  photo_url: string | null;
  summary: string | null;
  cv_url: string | null;

  roles?: Role[];
  projects?: Project[];
  skills?: Skill[];
  services?: Service[];
}

interface ContactData {
  email: string | null;
  phone: string | null;
  location: string | null;

  social_medias?: SocialMedia[];
}

interface ProfileData {
  bio_heading: string | null;
  bio: string | null;

  skill_groups?: SkillGroup[];
  educations?: Education[];
  certifications?: Certification[];
  experiences?: Experience[];
}

interface PortfolioData {
  name: string | null;

  portfolio: Project[];
}

interface Role {
  id: string;
  name: string;
}

interface Skill {
  id: string;
  color: string;
  name: string;
  type: string;
  icon: string;
}

interface Type {
  id: string;
  name: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
  year: string;
  asset: string;
  roles?: ProjectRole[];
  types?: ProjectType[];
  skills?: ProjectStack[];
}

interface SkillGroup {
  id: string;
  name: string;
  skills?: SkillGroupTag[];
}

interface Education {
  id: string;
  name: string;
  subname: string;
  result: string;
  description: string;
  result: string;
  start_date: string;
  end_date: string;
}

interface Certification {
  id: string;
  description: string;
  name: string;
  subname: string;
  start_date: string;
  end_date: string;
  link: string;
}

interface Experience {
  id: string;
  company_logo: string;
  company_name: string;
  company_url: string;
  location: string;

  roles?: ExperienceRole[];
}

interface SocialMedia {
  id: string;
  name: string;
  icon: string;
  link: string;
}

interface TypeOfProject {
  id: string;
  name: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  price?: string;
}

interface ProjectRole {
  id: string;
  project_id: string;
  role_id: string;
  role?: Role;
}

interface ProjectType {
  id: string;
  project_id: string;
  type_id: string;
  type?: Type;
}

interface ProjectStack {
  id: string;
  project_id: string;
  skill_id: string;
  skill?: Skill;
}

interface SkillGroupTag {
  id: string;
  skill_group_id: string;
  skill_id: string;
  skill?: Skill;
}

interface ExperienceRole {
  id: string;
  experience_id: string;
  role_id: string;
  description: string;
  employment_type: string;
  start_date: string;
  end_date: string;

  role?: Role;
  skill?: Skill;
}

interface BlogData {}
