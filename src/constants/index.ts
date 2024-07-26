//=========== projects

import helpdesk_1 from "assets/projects/helpdesk_1.jpg";
import helpdesk_2 from "assets/projects/helpdesk_2.jpg";
import helpdesk_3 from "assets/projects/helpdesk_3.png";

import gradguide_1 from "assets/projects/gradguide_1.jpg";
import gradguide_2 from "assets/projects/gradguide_2.jpg";
import gradguide_3 from "assets/projects/gradguide_3.jpg";

import imprezz_1 from "assets/projects/imprezz_1.png";
import imprezz_2 from "assets/projects/imprezz_2.jpg";
import imprezz_3 from "assets/projects/imprezz_3.jpg";

import mvbri_1 from "assets/projects/mvbri_1.jpg";
import mvbri_2 from "assets/projects/mvbri_2.png";
import mvbri_3 from "assets/projects/mvbri_3.png";

import black_lotus_1 from "assets/projects/black_lotus_1.png";
import black_lotus_2 from "assets/projects/black_lotus_2.jpg";
import black_lotus_3 from "assets/projects/black_lotus_3.webp";

import uttara_1 from "assets/projects/uttara_1.jpg";
import uttara_2 from "assets/projects/uttara_2.png";
import uttara_3 from "assets/projects/uttara_3.jpeg";

//=============company

import zalaris from "assets/company/zalaris.svg";
import gradguide from "assets/company/gradguide.png";
import imprezz from "assets/company/imprezz.png";
import durvah from "assets/company/durvah.png";
import uttara from "assets/company/uttara.png";

//============= skills
import apachekafka from "assets/tech/apachekafka.svg";
import css3 from "assets/tech/css3.svg";
import docker from "assets/tech/docker.svg";
import elasticsearch from "assets/tech/elasticsearch.svg";
import git from "assets/tech/git.svg";
import graphql from "assets/tech/graphql.svg";
import html5 from "assets/tech/html5.svg";
import java from "assets/tech/java.svg";
import js from "assets/tech/js.svg";
import kubernetes from "assets/tech/kubernetes.svg";
import linux from "assets/tech/linux.svg";
import mongodb from "assets/tech/mongodb.svg";
import nodejs from "assets/tech/nodejs.svg";
import react from "assets/tech/react.svg";
import redis from "assets/tech/redis.svg";
import redux from "assets/tech/redux.svg";
import sql from "assets/tech/sql.svg";
import tailwind from "assets/tech/tailwind.svg";
import ts from "assets/tech/ts.svg";
import junit from "assets/tech/junit.svg";
import cypress from "assets/tech/cypress.svg";
import jest from "assets/tech/jest.svg";

// ============== feedbacks
import srinivas_sir from "assets/feedbacks/srinivas_sir.jpeg";
import binayak_mishra from "assets/feedbacks/binayak_mishra.jpeg";
import mark_gradguide from "assets/feedbacks/mark_gradguide.jpeg";

// ============== profile
import profileImg from "assets/profile.png";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#experience",
    title: "Experience",
  },
  {
    id: "#skills",
    title: "Skills",
  },
  {
    id: "#projects",
    title: "Projects",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];
const projects: Project[] = [
  {
    id: "1",
    name: "Helpdesk",
    time: "Dec 2022 - Jul 2024",
    type: "Professional",
    images: [helpdesk_1, helpdesk_2, helpdesk_3],
    client: {
      name: "Zalaris",
      services: "HR and payroll administration",
      website: "https://zalaris.com/",
      phone: "+47 4000 3300",
    },
    roles: [
      "Developing and managing ReactJs web apps",
      "Developing Java-Spring Boot/Nodejs back-end APIs & integrating with UI",
      "Unit testing, and Integration testing",
      "Integration with third-party libraries  like MSAL authentication, Azure Blob Services",
      "Participating in code reviews & providing constructive feedback to other developers",
      "Involving project future development meetings & Spring planning",
    ],
    features: [
      "Followed the Port-Adapter Design pattern",
      "Microservices for Tickets, Notifications, Feedbacks, CMS, C4C-Sync, and Azure Services",
      "Followed GDPR rules in the implementation",
      "O-Auth services such as Microsoft (MSAL), Signicat",
      "Dynamic forms with FormIo",
      "Implemented Micro Frontend",
      "ElasticSearch & Azure Index  for searching",
      "Azure Blob Service for file storage",
      "CI & CD with Docker, and Kubernetes",
    ],
    technologies: [
      "Spring Boot",
      "ReactJs",
      "Tailwind",
      "NodeJs",
      "MongoDB",
      "Cosmos DB",
      "PostgreSQL",
      "Docker",
      "K8s",
      "Elastic Search",
      "Azure Index Search",
      "Azure Blob Service",
      "Azure Service Bus",
    ],
    links: {
      github: "https://zalaris.com/get-in-touch/",
      twitter: "https://x.com/Zalaris",
      linkedin: "https://www.linkedin.com/company/zalaris/",
      website: "https://zalaris.com/",
    },
    descriptions: [
      "The Helpdesk is a high-feature ticketing system used in the HR domain. Current/Previous Employees can use this app to contact the Employer for their HR queries by raising a ticket, and they track status & give feedback.",
      "This app is integrated with a dedicated CMS (Zudio) for posting News/Updates/Policy Docs/Circulars.",
      "This app is extendable and can be integrated with other ticketing solutions like Azure Ticketing System(DevOps), C4C,  Service Now, and any third-party services.",
      "It has dedicated services for current employees (Main Helpdesk), old employees(Alumni),  and feedback ( Feedback App).",
    ],
  },
  {
    id: "2",
    name: "Gradguide",
    time: "Oct 2021 - Sep 2022",
    type: "Professional",
    images: [gradguide_1, gradguide_2, gradguide_3],
    client: {
      name: "Gradguide",
      services: "Mentership & Job Portal",
      website: "https://www.clunetech.com/",
    },
    roles: [
      "Application development, Unit testing, and Integration testing",
      "Developed both front-end and back-end modules for some features",
      "Integration with third-party APIs like SendBird, SendGrid, Intercom, and Vimeo",
      "Involved in MVP migration from Firebase to AWS",
    ],
    features: [
      "Followed the MVC Design pattern",
      "Integrated third-party services like SendBird, SendGrid, Intercom, and Vimeo",
      "Used Redis for cache",
      "Used separate microservices  for Auth, Jobs, and Notifications",
      "Implemented OpenId and OAuth for authentication",
      "CI & CD with Docker, Bitbucket Pipelines on AWS ECS",
    ],
    technologies: [
      "NodeJs",
      "ReactJs",
      "NestJs",
      "Material UI",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    links: {
      github:
        "https://www.siliconrepublic.com/start-ups/gradguide-uk-native-acquisition-students",
      twitter: "https://x.com/joingradguide",
      linkedin: "https://www.linkedin.com/company/gradguide/",
      website: "https://www.gradguide.com/",
    },
    descriptions: [
      "Gradguide is a Jobs and Mentorship platform for Graduates. Gradguide conducts both offline and online Mentorship Programs and Career Fairs.",
      "This app allows Graduates to interact with Mentors through Video & Chat communications. Graduates can upskill through recorded & live video programs. Graduates can apply for jobs through jobs portal & career fair programs.",
      "Later Graduide was acquired by Native, a UK-based company.",
    ],
  },
  {
    id: "3",
    name: "Imprezz",
    time: "Feb 2022 - Aug 2023",
    type: "Freelance",
    images: [imprezz_1, imprezz_2, imprezz_3],
    client: {
      name: "Buhl Data Service GmbH",
      services: "Financial and tax software",
      website: "http://www.buhl.de",
      phone: "+49 2735 7760",
    },
    roles: [
      "Application development, Unit testing, and Integration testing",
      "Developing APIs for mobile and web apps",
      "Involved in front-end development for some UIs",
      "Integration with third-party APIs like Razor Pay, Chargebee, Intercom, Fixer, and 2Factor",
      "Involved in Beta launch, User training, User feedback & Production Support",
      "Improvements and Bug fixes in the existing code",
    ],
    features: [
      "Followed the MVC Design pattern",
      "Implemented Multi-tenant architecture",
      "Integrated third-party services like Razor Pay, Chargebee, Intercom, Fixer, and 2Factor",
      "Used new technologies like Redis, Elastic Search, KnexJs, and SequelizeJs",
      "Used separate microservices for PDF/Invoice forms, Communications ( Emails, Schedulers )",
      "Subscription-based access to the application features",
      "Using Session-based authentication with JWT",
      "CI & CD with Docker, Docker-compose, and Kubernetes on Azure DevOps",
    ],
    technologies: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "Sequelize",
      "KnexJs",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    links: {
      github: "https://www.imprezz.in",
      twitter: "https://x.com/imprezz_india",
      linkedin: "https://www.linkedin.com/company/imprezz-india/",
      website: "https://www.imprezz.in",
    },
    descriptions: [
      "Imprezz is a point-of-sale (POS) product. It has both mobile and web apps. Its primary users are wholesale and retail sellers/buyers.",
      "The Web app allows users to do Accounting ( Quotations, Invoices, Expenses, and Purchase Orders). The users can track their business sales, expenses, and customer information, they can export data for GST filing. ",
      "Mobile application is mainly focused on POS ( Point Of Sale ). Retail shop owners can use this app to generate bills by scanning the products & accepting payments.",
      "t is integrated with third-party services such as Intercom for Customer Support, Razorpay for payment gateway, Chargebee for handling subscriptions, and Fixer for Multi-Currency rate conversions.",
      "Later this product was re-branded as Groflex and managed by Groflexerp.",
    ],
  },
  {
    id: "4",
    name: "mVBRI",
    time: "Sep 1019 - Feb 2022",
    type: "Personal",
    images: [mvbri_1, mvbri_2, mvbri_3],
    client: {
      name: "Amar Seva sangam",
      services: "Non-profit Organizations",
      website: "https://amarseva.org",
      phone: "99444592170",
    },
    roles: [
      "Requirement Gathering and Direct client interaction",
      "Application development, Unit testing, and Integration testing",
      "Backend development for both Mobile and Web applications",
      "Involved in user training, Implementation & Production Support",
      "Handling deployment and maintenance services",
    ],
    features: [
      "Followed the MVC Design pattern",
      "Implemented Multi-tenant architecture",
      "Developed custom Exception loggers",
      "Implemented Audit trail for database changes",
      "Used new features in React like Hooks, Context-API, Redux",
      "Included third-party services like Google Maps in React",
      "Implemented Dynamic Reactive Forms with Dynamic Data in React",
      "Using Session-based authentication with JWT",
      "CI & CD with Git-Hooks on AWS EC2 server",
    ],
    technologies: ["NodeJs", "ReactJs", "ExpressJs", "Sequelize", "AWS"],
    links: {
      github: "https://earlyintervention.amarseva.org/mvbr-ei-app/",
      twitter: "https://x.com/amarseva",
      linkedin: "https://www.linkedin.com/company/amar-seva-sangam/about/",
      website: "https://amarseva.org/",
    },
    descriptions: [
      "mVBRI (Mobile Village Based Rehabilitation Initiative) is an application used in the Health domain. Amar Seva Sangam, an NGO from Tamil Nadu uses this app to provide Rehabilitation services to specially-abled children.",
      "Rehabilitation Workers use this app to visit the children at their location using G-Map integration and perform Screening, Treatments, Treatment Evaluations, Awareness, and Training Programs.",
      "Therapists & Management use this app to communicate with Rehabilitation Workers.",
    ],
  },
  {
    id: "5",
    name: "Black Lotus",
    time: "Jan 2019 - Jun 2019",
    type: "Professional",
    images: [black_lotus_1, black_lotus_2, black_lotus_3],
    client: {
      name: "Black Lotus Technologies",
      services: "Meditation & Spiritual ",
      website: "https://blacklotus.app",
    },
    roles: [
      "Application development, Unit & integration testing",
      "Developing responsive web-app",
      "Enhancements & Production Support",
      "Providing Security features in the front-end application",
    ],
    features: [
      "Included third-party services like Google Authentication",
      "Used Redux with Saga for state management in React",
      "Used Vimeo for live-streaming",
    ],
    technologies: ["ReactJs", "MUI", "Firebase"],
    links: {
      github: "https://blacklotus.app/",
      twitter: "https://x.com/blacklotus_app",
      linkedin: "https://www.linkedin.com/company/blacklotustechnologies/",
      website: "https://blacklotus.app/",
    },
    descriptions: [
      "Black Lotus is a mobile and web-based meditation app. Users can practice meditation through recorded audio/videos. They can attend live meditation & Spiritual programs.",
      "App features are accessible only from one device & it has subscription-based plans.",
      "Om Swami, a spiritual guru from Himalaya uses this application to guide his followers.",
    ],
  },
  {
    id: "6",
    name: "Uttara Lerning Portal",
    time: "Apr 2018 - Jun 2019",
    type: "Professional",
    images: [uttara_1, uttara_2, uttara_3],
    client: {
      name: "Uttara InfoSolutions",
      services: "Software Training & Development",
      website: "https://www.uttarainfo.com/",
      phone: "+91 7022199933",
    },
    roles: [
      "Involved in the Planning, Development, Testing, and Production",
      "Designed & Developed a complete Admin application",
      "Developed a complete Desktop app for online learning",
      "Distributed executable apps for the users and fixed the bugs/issues at a later time",
      "Developed Authentication &  backend APIs",
    ],
    features: [
      "Followed the MVC Design pattern",
      "Implemented DAO-Factory and  Singleton Design patterns",
      "Developed custom Exception loggers",
      "Cross-Platform Desktop App",
      "Single-Device per User",
      "ntegrated YouTube API service",
      "Used Redux with Thunk for state management in React",
    ],
    technologies: ["Spring Boot", "ReactJs", "ElectronJs", "Redis", "OracleDB"],
    links: {
      github: "https://www.uttarainfo.com/",
      twitter: "https://x.com/uttarasolution",
      linkedin:
        "https://www.linkedin.com/company/uttara-infosolutions-pvt-ltd/",
      website: "https://www.uttarainfo.com/r",
    },
    descriptions: [
      "Uttara Learning Portal is an online education platform & User management application used by Uttara Info Solutions.",
      "Students use this app for online learning through videos & blogs. They also take online tests.",
      "Management uses this app to manage Students, Fees,  Blogs,  Videos, and Course details.",
    ],
  },
];

const skills = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GraphQl",
    icon: graphql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "HTML 5",
    icon: html5,
  },
  {
    name: "CSS 3",
    icon: css3,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "TypeScript",
    icon: ts,
  },

  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JUnit",
    icon: junit,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Elasticsearch",
    icon: elasticsearch,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Kafka",
    icon: apachekafka,
  },
  {
    name: "Linux",
    icon: linux,
  },
];

const experiences: Experience[] = [
  {
    designation: "Sr. Full Stack Developer",
    companyName: "Zalaris",
    companyIcon: zalaris,
    companyIconBg: "#383E56",
    duration: "Dec 2022 - Jul 2024",
    roles: [
      "Developing and maintaining React.js web apps",
      "Developing efficient, scalable, and maintainable back-end micro services applications with Java Spring Boot and NodeJs",
      "Integrating latest technologies like MongoDB, Elasticsearch, Redis, Azure Service Bus, Azure Blob service",
      "Collaborating with other teams including designers, product managers, and other developers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    designation: "Mid Software Engineer",
    companyName: "Gradguide",
    companyIcon: gradguide,
    companyIconBg: "#E6DEDD",
    duration: "Oct 2021 - Sep 2022",
    roles: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Involving monthly business meetings with sales and marketing teams.",
    ],
  },
  {
    designation: "Web Developer ( Freelance )",
    companyName: "Buhl Data Services (Imprezz)",
    companyIcon: imprezz,
    companyIconBg: "#383E56",
    duration: "Feb 2022 - Aug 2023",
    roles: [
      "Developing responsive web applications using React.js",
      "Implementing APIs using NodeJs, ExpressJs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers.",
    ],
  },
  {
    designation: "Full stack Developer",
    companyName: "Durvah",
    companyIcon: durvah,
    companyIconBg: "#E6DEDD",
    duration: "Sep 1019 - Feb 2022",
    roles: [
      "Developing and maintaining both React.js and Node.js web applications.",
      "Involving in code reafctor and application efficiency improvement.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Handling project deployment and maintenance with Bitbucket pipelines.",
      "Intrcating with Clients and taking UAT feedbacks",
    ],
  },
  {
    designation: "Jr. Developer",
    companyName: "Uttara Info Solutions",
    companyIcon: uttara,
    companyIconBg: "#383E56",
    duration: "Apr 2018 - Jun 2019",
    roles: [
      "Developing responsive web applications using React.js",
      "Implementing APIs using NodeJs, Java Spring Boot and other related technologies.",
      "Developing cross-platform desktop application with Electron Js",
      "Handling project deployment and maintenance",
    ],
  },
];

export const profile: Profile = {
  name: "Ravinder Reddy Kothabad",
  image: profileImg,
  description:
    "Full Stack Developer with 6+ years of experience in Node.js, Java, JavaScript, and TypeScript. Worked in various domains including Education, Finance, Health, and HR Management. Involved in business requirements gathering, client interactions, and project development & management. Skilled in developing user-friendly interfaces and scalable backend systems. Passionate about solving real-world problems with cutting-edge technologies. Let's work together for our mutual growth and a happy world.",
  roles: [
    "Full Stack Developer",
    "NodeJs Developer",
    "Java Developer",
    "React Developer",
  ],
  cvUrl:
    "https://docs.google.com/document/d/1YtoJKbxQIv7FKkhWBOaMhHSPOOt5tT2T/edit?pli=1",
  achievements: [
    { name: "Best Employee Of The Year 2023", type: "trophy" },
    { name: "Best Employee Of The Month August 2021", type: "medal" },
    { name: "Docker Certification", type: "certification" },
    { name: "Serverless Developer", type: "certification" },
  ],
  qualifications: [
    {
      course: "Bachelor of Computer Applications",
      institution: "Annamalai University, Chidambaram",
    },
    {
      course: "Higher Secondary Education",
      institution: "TS Residential Jr College, Sarvail",
    },
    {
      course: "Secondary Education",
      institution: "AP Residential School, Toopran",
    },
  ],
  feedbacks: [
    {
      text: "He is very passionate and always willing to learn. He made our product awesome. I would like to work with him again.",
      name: "Srinivas K",
      designation: "Director",
      company: "Durvah IT Consulting Pvt. Ltd",
      image: srinivas_sir,
    },
    {
      text: "We were looking for a developer, who is willing join our fast-growing startup. He is one of the few such guys, who took our product to a another level.",
      name: "Mark Hughes",
      designation: "Co-founder & CEO",
      company: "Gradguide",
      image: mark_gradguide,
    },
    {
      text: "He is an excellent developer and good team player. I would like to work with him again.",
      name: "Binayak Mishra",
      designation: "System Architect",
      company: "Gradguide",
      image: binayak_mishra,
    },
  ],
  projectsDescription:
    "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
  projects: projects,
  skills: skills,
  experiences: experiences,
  contactInfo: {
    address: "Bangalore, Karnataka, India",
    phone: "+91 7075792886",
    email: "developer.ravinder.reddy@gmail.com",
  },
  socialLinks: {
    github: "https://github.com/devravinder",
    twitter: "https://x.com/Ravinder__Reddy",
    linkedin: "https://www.linkedin.com/in/ravinder-reddy-kothabad-333719192/",
  },
};
