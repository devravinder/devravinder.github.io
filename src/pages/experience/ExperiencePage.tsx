import { Badge } from "@/components/ui/badge";
import { Heading, SectionHeader, SubHeading } from "@/components/Elements";
import { motion } from "framer-motion";
import { profie, type Experience } from "@/data/profile";

export default function ExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col gap-14"
    >
      <SectionHeader>
        <Heading>Experience</Heading>
        <SubHeading>
          My professional journey and the amazing companies I've worked with
        </SubHeading>
      </SectionHeader>
      <div className="flex flex-col gap-4 min-w-xs">
        {profie.experiences.map(ex=> <ExperienceCard key={ex.period} {...ex} />)}

      </div>
    </motion.div>
  );
}

const ExperienceCard = (experience: Experience) => {
  return (
    <div className="@container border rounded-md p-4 flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <div className="text-blue-600 font-semibold text-xl">
          {experience.role}
        </div>
        <Badge variant="outline" className="rounded-xl text-muted-foreground">
          {experience.type}
        </Badge>
      </div>
      <div className=" flex flex-col @sm:flex-row gap-2 @sm:gap-8">
        <div className="text-sm text-muted-foreground">
          {experience.company}
        </div>
        <div className="text-sm text-muted-foreground">{experience.period}</div>
      </div>
    </div>
  );
};
