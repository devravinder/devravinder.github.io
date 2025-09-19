import { Badge } from "@/components/ui/badge";
import { PanelsTopLeft } from "lucide-react";
import { Heading, SectionHeader, SubHeading } from "@/components/Elements";
import { motion } from "framer-motion";
import { profie, type Project } from "@/data/profile";
import { TechsCard } from "../overview/OverViewPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col gap-14"
    >
      <SectionHeader>
        <Heading>Key Projects</Heading>
        <SubHeading>
          Highlighted Projects Demonstrating Technical Expertise and Business
          Impact
        </SubHeading>
      </SectionHeader>
      <div className="flex flex-col min-w-xs rounded-md gap-4">
        {profie.projects.map((ele) => (
          <ProjectCard key={ele.name} {...ele} />
        ))}
      </div>
    </motion.div>
  );
}

const ProjectCard = (project: Project) => {
  return (
    <div className="@container border rounded-md p-4 flex flex-col gap-4 ">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <div className="font-semibold text-xl flex flex-row gap-1 items-center">
            <PanelsTopLeft className="w-5 h-5"></PanelsTopLeft>
            {project.name}
          </div>
          <Badge variant="outline" className="rounded-xl text-muted-foreground">
            {project.domain}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">{project.company}</div>
      </div>
      <div>
        <div className="font-semibold">Roles & Responsibilties:</div>
        <div className="pl-4">
          <ul className="list-disc list-outside">
          {project.keyFeatures.map((ele, index) => (
            <li
              className="text-sm"
              key={`${project.name}_${index}`}
              dangerouslySetInnerHTML={{ __html: ele }}
            ></li>
          ))}
        </ul>
        </div>
      </div>
      <div className="">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Tech Stack</AccordionTrigger>
            <AccordionContent>
              <TechsCard skills={project.techStack} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
