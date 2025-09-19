import { Heading, SectionHeader, SubHeading } from "@/components/Elements";
import { motion } from "framer-motion";
import profie from "@/data/profile";
import type { Tech } from "@/data/constant";
import { TechsCard } from "../overview/OverViewPage";

export default function SkillsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col gap-14"
    >
      <SectionHeader>
        <Heading>Skills</Heading>
        <SubHeading>
          Core Competencies Across Frontend, Backend, and Cloud Technologies
        </SubHeading>
      </SectionHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 min-w-xs">
        {Object.entries(profie.skillsGroupBy).map(([Key, value])=><SkillCard name={Key} skills={value}/>)}
      </div>
    </motion.div>
  );
}

const SkillCard = ({name, skills}:{name: string, skills: Tech[]}) => {
  return (
    <div className="flex flex-col gap-4 border shadow rounded-md p-4">
      <div className="text-foreground text-xl font-semibold">{name}</div>
      <div className="flex flex-row  flex-wrap gap-2">
        <TechsCard skills={skills} />
      </div>
    </div>
  );
};
