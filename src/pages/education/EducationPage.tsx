import { SectionHeader, SubHeading, Heading } from "@/components/Elements";
import { profie, type Education } from "@/data/profile";
import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col gap-14"
    >
      <SectionHeader>
        <Heading>Educational Journey</Heading>
        <SubHeading>Learning that fuels innovation and growth.</SubHeading>
      </SectionHeader>
      <div className="flex flex-col gap-4 min-w-xs">
        {profie.qualifications.map(e=><EducationCard key={e.course} {...e} />)}
      </div>
    </motion.div>
  );
}

const EducationCard = (education: Education) => {
  return (
    <div className="@container border p-4 rounded-md flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <div className="text-foreground font-semibold text-xl">
          {education.course}
        </div>
      </div>
      <div className=" flex flex-col @sm:flex-row gap-2 @sm:gap-8">
        <div className="text-sm text-muted-foreground">
          {education.university}
        </div>
        <div className="text-sm text-muted-foreground">{education.duration}</div>
      </div>
    </div>
  );
};
