declare global {
  type Links = Record<string, string>;
  type Project = {
    id: string;
    name: string;
    time: string;
    type: string;
    images: string[];
    client: Record<string, string>;
    roles: string[];
    features: string[];
    technologies: string[];
    links: Links;
    descriptions: string[];
  };
  type AchevementType = "trophy" | "medal" | "certification";
  type Achevement = { name: string; type: AchevementType };

  type Education = { course: string; institution: string };

  type Feedback = {
    text: string;
    name: string;
    designation: string;
    company: string;
    image: string;
  };

  type Skill = { name: string; icon: string };

  type Experience = {
    designation: string;
    companyName: string;
    companyIcon: string;
    companyIconBg: string;
    duration: string;
    roles: string[];
  };

  type ContactInfo = {
    address: string;
    phone: string;
    email: string;
  };

  type Profile = {
    name: string;
    image: string;
    description: string;
    roles: string[];
    cvUrl: string;
    contactInfo: ContactInfo;
    achievements: Achevement[];
    qualifications: Education[];
    feedbacks: Feedback[];
    projectsDescription: string;
    projects: Project[];
    skills: Skill[];
    experiences: Experience[];
    socialLinks: Links;
  };
}
export {};
