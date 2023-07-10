export interface Contact {
  img: string;
  name: string;
  href: string;
}

export interface Developer {
  name: string;
  role: string;
  about: string;
  picture: string;
  contacts: Contact[];
}

export interface Experience {
  companyName: string;
  since: string;
  to: string;
  position: string;
  description?: string;
  responsibilities?: string[];
}

export interface Link {
  img: string;
  name: string;
  url: string;
}

export interface Project {
  imageSrc: string[];
  name: string;
  url: string;
  github: string;
  description: string[];
}

export interface Skill {
  img: string;
  name: string;
  level?: number;
}
