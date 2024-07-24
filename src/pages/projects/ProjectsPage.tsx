import { Section, SectionHeading, SectionSubText } from "components/Elements";
import ProjectCard from "components/ProjectCard";
import { profile } from "constants";

export default function ProjectsPage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="">
          <SectionSubText>My work</SectionSubText>
          <SectionHeading>Projects.</SectionHeading>
        </div>
        <div className="flex flex-wrap gap-8">
          {profile.projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
