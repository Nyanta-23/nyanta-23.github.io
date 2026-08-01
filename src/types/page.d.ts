export interface HomeData {
  name: string | null;
  image_profile: string | null;
  summary: string | null;
  cv: string | null;

  roles: Role[];
}

export interface ContactData {

}

export interface ProfileData {

}

export interface PortfolioData {

}

export interface BlogData {
  
}


export interface Role {
  id: string;
  name: string;
}