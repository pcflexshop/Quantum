
export type Category = 'Video' | 'Channel' | 'Web' | 'All';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  imageUrl: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteSettings {
  brandName: string;
  accentColor: string;
  heroTitle: string;
  heroSubtitle: string;
  contactEmail: string;
  phoneNumber: string;
  socialLinks: {
    youtube?: string;
    instagram?: string;
    github?: string;
  };
}

export interface AppState {
  settings: SiteSettings;
  projects: Project[];
  services: Service[];
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  addProject: (project: Project) => void;
  removeProject: (id: string) => void;
}
