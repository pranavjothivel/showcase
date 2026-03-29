export type Logo = {
  src: string;
  width?: number;
  height?: number;
  className?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  logoKey?: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  color: string;
};

export type PersonalProject = {
  title: string;
  description: string;
  tags: string[];
  github: string;
};
