interface HomeData {
  name: string | null;
  photo_url: string | null;
  summary: string | null;
  cv: string | null;

  roles?: Role[];
  projects?: Project[];
  skills?: Skill[];
}

interface ContactData {}

interface ProfileData {
  bio_heading: string | null;
  bio: string | null;

  skill_groups?: SkillGroup[];
  educations?: Education[];
  certifications?: Certification[]; 
  experiences?: Experience[];
}

interface PortfolioData {  

  name: string;

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

  skills?: ExperienceSkill[];
  roles?: ExperienceRole[];
}

interface TypeOfProject {
  id: string;
  name: string;  
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

interface ExperienceSkill {
  id: string;
  experience_id: string;
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
