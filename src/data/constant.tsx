import { LogoMicrosoft } from "@/components/MicrosoftIcon";
import type { JSX } from "react";
import {
  SiOpenjdk,
  SiSpringboot,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGoogle,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiJunit5,
  SiTestinglibrary,
  SiJest,
  SiCypress,
  SiGatling,
  SiK6,
  SiElasticsearch,
  SiRedis,
  SiRabbitmq,
  SiApachekafka,
  SiLinux,
  SiTerraform,
  SiGithubactions,
  SiResend,
  SiElectron,
  SiExpress,
  SiPrisma,
  SiSequelize,
  SiPrometheus, SiGrafana, SiKibana
} from "react-icons/si";

const techStack = [
  { name: "Java", icon: <SiOpenjdk />, color: "bg-[#f89820]" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "bg-[#6db33f]" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "bg-[#339933]" },
  { name: "React", icon: <SiReact />, color: "bg-[#58c4dc]" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "bg-black text-white" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-[#336791]" },
  { name: "MongoDB", icon: <SiMongodb />, color: "bg-[#47A248]" },
  { name: "GraphQL", icon: <SiGraphql />, color: "bg-[#E10098]" },
  { name: "gRPC", icon: <SiGoogle />, color: "bg-[#4285F4]" },
  { name: "Git", icon: <SiGit />, color: "bg-[#F05032]" },
  { name: "Docker", icon: <SiDocker />, color: "bg-[#2496ED]" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "bg-[#326CE5]" },
  { name: "HTML5", icon: <SiHtml5 />, color: "bg-[#E34F26]" },
  { name: "CSS3", icon: <SiCss3 />, color: "bg-[#1572B6]" },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "bg-[#F7DF1E] text-black",
  },
  { name: "TypeScript", icon: <SiTypescript />, color: "bg-[#3178C6]" },
  { name: "Redux", icon: <SiRedux />, color: "bg-[#764ABC]" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-[#06B6D4]" },
  { name: "JUnit5", icon: <SiJunit5 />, color: "bg-[#25A162]" },
  { name: "AssertJ", icon: <SiTestinglibrary />, color: "bg-gray-600" },
  { name: "Mockito", color: "bg-green-600" },
  { name: "Jest", icon: <SiJest />, color: "bg-[#C21325]" },
  { name: "Cypress", icon: <SiCypress />, color: "bg-[#17202C]" },
  { name: "Gatling", icon: <SiGatling />, color: "bg-orange-500" },
  { name: "K6", icon: <SiK6 />, color: "bg-[#7D64FF]" },
  { name: "Elasticsearch", icon: <SiElasticsearch />, color: "bg-[#005571]" },
  { name: "Redis", icon: <SiRedis />, color: "bg-[#DC382D]" },
  { name: "RabbitMQ", icon: <SiRabbitmq />, color: "bg-[#FF6600]" },
  { name: "Apache Kafka", icon: <SiApachekafka />, color: "bg-[#231F20]" },
  { name: "Linux", icon: <SiLinux />, color: "bg-[#FCC624] text-black" },
  { name: "AWS", color: "bg-[#FF9900]" },

  { name: "REST", icon: <SiResend />, color: "bg-blue-400 text-white" },
  { name: "Terraform", icon: <SiTerraform />, color: "bg-[#844FBA]" },
  {
    name: "GitHub Pipelines",
    icon: <SiGithubactions />,
    color: "bg-[#2088FF]",
  },
  { name: "Electron.js", icon: <SiElectron />, color: "bg-[#47848F]" },
  { name: "Sequelize", icon: <SiSequelize />, color: "bg-[#52B0E7]" }, // Sequelize official blue
  { name: "Prisma", icon: <SiPrisma />, color: "bg-[#0C344B]" },
  { name: "Express", icon: <SiExpress />, color: "bg-black text-white" },
  { name: "Azure", icon: <LogoMicrosoft />, color: "bg-[#0078D4]" },
  { name: "Prometheus", icon: <SiPrometheus />, color: "bg-[#E6522C]" },
  { name: "Grafana", icon: <SiGrafana />, color: "bg-[#F46800]" },
  { name: "Loki", color: "bg-[#00B941]" },   // Loki green
  { name: "Tempo",  color: "bg-[#8A2BE2]" }, // Tempo purple
  { name: "Kibana", icon: <SiKibana />, color: "bg-[#005571]" },
] as const;

export type TechName = (typeof techStack)[number]["name"];
export type Tech ={name: string, icon?: JSX.Element, color: string} //typeof techStack)[number]

export const technologies: Record<TechName, Tech> = techStack.reduce(
  (map, ele) => {
    map[ele.name] = ele;
    return map;
  },
  {} as Record<TechName, Tech>
);
