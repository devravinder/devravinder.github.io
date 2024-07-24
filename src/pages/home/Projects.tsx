import IconArrowRightShort from "assets/icons/IconArrowRightShort";
import {
  Button,
  DescriptionText,
  SectionHeading,
  SectionSubText,
} from "components/Elements";
import ProjectCard from "components/ProjectCard";
import { useNavigate } from "react-router-dom";

export default function Projects({
  projects,
  projectDescription,
}: {
  projects: Project[];
  projectDescription: string;
}) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <SectionSubText>My work</SectionSubText>
        <SectionHeading>Projects.</SectionHeading>
      </div>
      <DescriptionText className="w-full text-secondary text-[17px] max-w-3xl leading-[30px]">
        {projectDescription}
      </DescriptionText>

      <div className="flex flex-wrap gap-8">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
      <div className="self-end pr-4">
        <Button
          onClick={() => navigate("/projects")}
          className="flex flex-row items-center gap-2 py-2"
        >
          <span>View All</span> <IconArrowRightShort className="w-8 h-6" />{" "}
        </Button>
      </div>
    </div>
  );
}
