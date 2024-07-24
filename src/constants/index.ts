//=========== projects
import carrent from "assets/projects/carrent.png";
import jobit from "assets/projects/jobit.png";
import tripguide from "assets/projects/tripguide.png";

//=============company
import meta from "assets/company/meta.png";
import shopify from "assets/company/shopify.png";
import starbucks from "assets/company/starbucks.png";
import tesla from "assets/company/tesla.png";

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
    time: "Jul 26, 2024",
    type: "Personal",
    images: [carrent, jobit, tripguide],
    client: {
      name: "Company Ltd",
      services: "UI Design & Frontend Development",
      website: "https://company.com",
      phone: "555 8888 888",
    },
    roles: [
      "Sprint Planning",
      "Code Review",
      "Code Deployment ",
      "Developed Frontend & Rest APIs ",
    ],
    features: [
      "Port & Adaptor Design Patter",
      "Micro services",
      "Azure Cloud",
      "Elastic Search & Azure Index Search",
      "Consmos DB, Azure Service Bus",
      "Azure Functions",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "TailwindCSS",
      "AdobeXD",
    ],
    links: {
      github: "https://github.com/devravinder/devravinder",
      twitter: "https://x.com/Ravinder__Reddy",
      linkedin:
        "https://www.linkedin.com/in/ravinder-reddy-kothabad-333719192/",
      website: "https://github.com/devravinder/devravinder",
    },
    descriptions: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia placeat ratione temporibus blanditiis numquam, aliquam accusamus sint corrupti non! Expedita accusamus mollitia alias quis eligendi exercitationem ad, suscipit voluptas.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
    ],
  },
  {
    id: "1",
    name: "Helpdesk",
    time: "Jul 26, 2024",
    type: "Personal",
    images: [carrent, jobit, tripguide],
    client: {
      name: "Company Ltd",
      services: "UI Design & Frontend Development",
      website: "https://company.com",
      phone: "555 8888 888",
    },
    roles: [
      "Sprint Planning",
      "Code Review",
      "Code Deployment ",
      "Developed Frontend & Rest APIs ",
    ],
    features: [
      "Port & Adaptor Design Patter",
      "Micro services",
      "Azure Cloud",
      "Elastic Search & Azure Index Search",
      "Consmos DB, Azure Service Bus",
      "Azure Functions",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "TailwindCSS",
      "AdobeXD",
    ],
    links: {
      github: "https://github.com/devravinder/devravinder",
      twitter: "https://x.com/Ravinder__Reddy",
      linkedin:
        "https://www.linkedin.com/in/ravinder-reddy-kothabad-333719192/",
      website: "https://github.com/devravinder/devravinder",
    },
    descriptions: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia placeat ratione temporibus blanditiis numquam, aliquam accusamus sint corrupti non! Expedita accusamus mollitia alias quis eligendi exercitationem ad, suscipit voluptas.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
    ],
  },
  {
    id: "1",
    name: "Helpdesk",
    time: "Jul 26, 2024",
    type: "Personal",
    images: [carrent, jobit, tripguide],
    client: {
      name: "Company Ltd",
      services: "UI Design & Frontend Development",
      website: "https://company.com",
      phone: "555 8888 888",
    },
    roles: [
      "Sprint Planning",
      "Code Review",
      "Code Deployment ",
      "Developed Frontend & Rest APIs ",
    ],
    features: [
      "Port & Adaptor Design Patter",
      "Micro services",
      "Azure Cloud",
      "Elastic Search & Azure Index Search",
      "Consmos DB, Azure Service Bus",
      "Azure Functions",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "TailwindCSS",
      "AdobeXD",
    ],
    links: {
      github: "https://github.com/devravinder/devravinder",
      twitter: "https://x.com/Ravinder__Reddy",
      linkedin:
        "https://www.linkedin.com/in/ravinder-reddy-kothabad-333719192/",
      website: "https://github.com/devravinder/devravinder",
    },
    descriptions: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia placeat ratione temporibus blanditiis numquam, aliquam accusamus sint corrupti non! Expedita accusamus mollitia alias quis eligendi exercitationem ad, suscipit voluptas.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
    ],
  },
  {
    id: "1",
    name: "Helpdesk",
    time: "Jul 26, 2024",
    type: "Personal",
    images: [carrent, jobit, tripguide],
    client: {
      name: "Company Ltd",
      services: "UI Design & Frontend Development",
      website: "https://company.com",
      phone: "555 8888 888",
    },
    roles: [
      "Sprint Planning",
      "Code Review",
      "Code Deployment ",
      "Developed Frontend & Rest APIs ",
    ],
    features: [
      "Port & Adaptor Design Patter",
      "Micro services",
      "Azure Cloud",
      "Elastic Search & Azure Index Search",
      "Consmos DB, Azure Service Bus",
      "Azure Functions",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "TailwindCSS",
      "AdobeXD",
    ],
    links: {
      github: "https://github.com/devravinder/devravinder",
      twitter: "https://x.com/Ravinder__Reddy",
      linkedin:
        "https://www.linkedin.com/in/ravinder-reddy-kothabad-333719192/",
      website: "https://github.com/devravinder/devravinder",
    },
    descriptions: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia placeat ratione temporibus blanditiis numquam, aliquam accusamus sint corrupti non! Expedita accusamus mollitia alias quis eligendi exercitationem ad, suscipit voluptas.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
    ],
  },
  {
    id: "1",
    name: "Helpdesk",
    time: "Jul 26, 2024",
    type: "Personal",
    images: [carrent, jobit, tripguide],
    client: {
      name: "Company Ltd",
      services: "UI Design & Frontend Development",
      website: "https://company.com",
      phone: "555 8888 888",
    },
    roles: [
      "Sprint Planning",
      "Code Review",
      "Code Deployment ",
      "Developed Frontend & Rest APIs ",
    ],
    features: [
      "Port & Adaptor Design Patter",
      "Micro services",
      "Azure Cloud",
      "Elastic Search & Azure Index Search",
      "Consmos DB, Azure Service Bus",
      "Azure Functions",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "TailwindCSS",
      "AdobeXD",
    ],
    links: {
      github: "https://github.com/devravinder/devravinder",
      twitter: "https://x.com/Ravinder__Reddy",
      linkedin:
        "https://www.linkedin.com/in/ravinder-reddy-kothabad-333719192/",
      website: "https://github.com/devravinder/devravinder",
    },
    descriptions: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia placeat ratione temporibus blanditiis numquam, aliquam accusamus sint corrupti non! Expedita accusamus mollitia alias quis eligendi exercitationem ad, suscipit voluptas.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
    ],
  },
  {
    id: "1",
    name: "Helpdesk",
    time: "Jul 26, 2024",
    type: "Personal",
    images: [carrent, jobit, tripguide],
    client: {
      name: "Company Ltd",
      services: "UI Design & Frontend Development",
      website: "https://company.com",
      phone: "555 8888 888",
    },
    roles: [
      "Sprint Planning",
      "Code Review",
      "Code Deployment ",
      "Developed Frontend & Rest APIs ",
    ],
    features: [
      "Port & Adaptor Design Patter",
      "Micro services",
      "Azure Cloud",
      "Elastic Search & Azure Index Search",
      "Consmos DB, Azure Service Bus",
      "Azure Functions",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "TailwindCSS",
      "AdobeXD",
    ],
    links: {
      github: "https://github.com/devravinder/devravinder",
      twitter: "https://x.com/Ravinder__Reddy",
      linkedin:
        "https://www.linkedin.com/in/ravinder-reddy-kothabad-333719192/",
      website: "https://github.com/devravinder/devravinder",
    },
    descriptions: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia placeat ratione temporibus blanditiis numquam, aliquam accusamus sint corrupti non! Expedita accusamus mollitia alias quis eligendi exercitationem ad, suscipit voluptas.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magnam perferendis asperiores alias unde dolore quidem eum harum possimus libero blanditiis voluptates nulla eos quasi, dolorum earum accusamus itaque dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium corporis, molestiae quod autem id nostrum. Facilis animi, voluptatum eos molestias enim voluptatibus optio minima. Fuga non harum cum veniam!",
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
    name: "GraphQL",
    icon: graphql,
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
    designation: "React.js Developer",
    companyName: "Starbucks",
    companyIcon: starbucks,
    companyIconBg: "#383E56",
    duration: "March 2020 - April 2021",
    roles: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    designation: "React Native Developer",
    companyName: "Tesla",
    companyIcon: tesla,
    companyIconBg: "#E6DEDD",
    duration: "Jan 2021 - Feb 2022",
    roles: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    designation: "Web Developer",
    companyName: "Shopify",
    companyIcon: shopify,
    companyIconBg: "#383E56",
    duration: "Jan 2022 - Jan 2023",
    roles: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    designation: "Full stack Developer",
    companyName: "Meta",
    companyIcon: meta,
    companyIconBg: "#E6DEDD",
    duration: "Jan 2023 - Present",
    roles: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
export const profile: Profile = {
  description:
    "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
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
      course: "Bachelor of Technology",
      institution: "Sri Venkateswara College of Engineering",
    },
    {
      course: "Bachelor of Technology",
      institution: "Sri Venkateswara College of Engineering",
    },
    {
      course: "Bachelor In Computer Science",
      institution: "Sri Venkateswara College of Engineering",
    },
  ],
  feedbacks: [
    {
      text: "I had a great experience working with this developer. He was very professional and easy to work with. I highly recommend him!",
      name: "Sara Lee",
      designation: "Manager",
      company: "Sri Venkateswara College of Engineering",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      text: "We were looking for a developer to join our team. He was very professional and easy to work with. I highly recommend him!",
      name: "Vinayak R",
      designation: "CEO",
      company: "University of California, San Diego",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      text: "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Tom C",
      designation: "Director",
      company: "Acme Construction",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ],
  projectsDescription:
    "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
  projects: projects,
  skills: skills,
  experiences: experiences,
};
