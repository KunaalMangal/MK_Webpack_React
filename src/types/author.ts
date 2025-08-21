export interface FellowshipLink {
  title: string;
  url: string;
}

export interface Fellowship {
  name: string;
  sponsor: string;
  description: string;
  highlights: string[];
  links: FellowshipLink[];
}

export interface Skills {
  frontend: string[];
  stateManagement: string[];
  mobile: string[];
  tools: string[];
  buildTools: string[];
  maps: string[];
  authentication: string[];
  emerging: string[];
}

export interface Specializations {
  webDevelopment: string[];
  mobileDevelopment: string[];
  xrDevelopment: string[];
  openSource: string[];
}

export interface SocialLink {
  url: string;
  label: string;
}

export interface Social {
  github: SocialLink;
  linkedin: SocialLink;
  portfolio: SocialLink;
}

export interface Project {
  name: string;
  description: string;
  repository: string;
  license: string;
  licenseUrl: string;
  technologies: string[];
  features: string[];
}

export interface CommunityLink {
  name: string;
  url: string;
  icon: string;
}

export interface CommunityLinks {
  react: CommunityLink;
  webpack: CommunityLink;
}

export interface Author {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  experience: string;
  fellowship: Fellowship;
  skills: Skills;
  specializations: Specializations;
  social: Social;
  project: Project;
  professionalSummary: string;
  lastUpdated: string;
  communityLinks: CommunityLinks;
}
