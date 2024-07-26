import IconClock from "assets/icons/IconClock";
import IconExternalLink from "assets/icons/IconExternalLink";
import IconGithub from "assets/icons/IconGithub";
import IconLinkedin from "assets/icons/IconLinkedin";
import IconTag from "assets/icons/IconTag";
import IconTwitterLogo from "assets/icons/IconTwitterLogo";
import IconWeb from "assets/icons/IconWeb";

import { Button, DescriptionText, Li, Section } from "components/Elements";
import { profile } from "constants";
import { useNavigate, useParams } from "react-router-dom";

const linkIcons: Record<string, JSX.Element> = {
  github: <IconGithub className="w-6 h-6" />,
  twitter: <IconTwitterLogo className="w-6 h-6" />,
  linkedin: <IconLinkedin className="w-6 h-6" />,
  website: <IconExternalLink className="w-6 h-6" />,
  externalLink: <IconWeb className="w-6 h-6" />,
};

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = profile.projects?.[parseInt(id!) - 1];
  return (
    <Section>
      <ProjectDetailsCard project={project} />
    </Section>
  );
}

const ProjectDetailsCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <Header name={project.name} time={project.time} type={project.type} />
      <ProjectImages images={project.images} />
      <div className="w-full flex flex-row gap-12">
        <ProjectSideDetails
          client={project.client}
          roles={project.roles}
          features={project.features}
          technologies={project.technologies}
          links={project.links}
        />
        <ProjectDescription descriptions={project.descriptions} />
      </div>
    </div>
  );
};

const Header = ({
  name,
  time,
  type,
}: {
  name: string;
  time: string;
  type: string;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={"font-bold text-5xl text-white"}>{name}</h2>
      <div className="flex flex-row gap-8">
        <div className="flex flex-row gap-2 items-center text-lg">
          <IconClock />
          <span>{time}</span>
        </div>
        <div className="flex flex-row gap-2 items-center text-lg">
          <IconTag />
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
};
const ProjectImages = ({ images }: { images: string[] }) => {
  return (
    <div className="py-4 flex flex-row gap-10">
      {images.map((image, index) => {
        return (
          <img
            key={`image-${index}`}
            className="rounded-xl w-4/12"
            src={image}
          ></img>
        );
      })}
    </div>
  );
};

const ProjectDescription = ({ descriptions }: { descriptions: string[] }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-2xl text-white">Details</h3>
        <div className="flex flex-col gap-8 py-4">
          {descriptions.map((description, index) => {
            return (
              <DescriptionText key={`description-${index}`}>
                {description}
              </DescriptionText>
            );
          })}
        </div>
      </div>
      <Button onClick={() => navigate(-1)} className="self-end">
        Close
      </Button>
    </div>
  );
};

const ProjectSideDetails = ({
  client,
  roles,
  features,
  technologies,
  links,
}: {
  client: Record<string, string>;
  roles: string[];
  features: string[];
  technologies: string[];
  links: Record<string, string>;
}) => {
  return (
    <div className="w-1/3 flex flex-col flex-shrink-0 gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-2xl text-white">About Client</h3>
        <div className="flex flex-col gap-1">
          {Object.entries(client)?.map(([key, value], index) => {
            return (
              <DescriptionText key={`client-${index}`}>
                {key}: {value}
              </DescriptionText>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-2xl text-white">My Role</h3>
        <ul className="list-disc list-outside pl-4">
          {roles?.map((role, index) => {
            return <Li key={`role-${index}`}>{role}</Li>;
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-2xl text-white">Key Features</h3>
        <ul className="list-disc list-outside pl-4">
          {features?.map((feature, index) => {
            return <Li key={`feature-${index}`}>{feature}</Li>;
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-2xl text-white">
          Technologies & Tools
        </h3>
        <div className="flex flex-col gap-1">
          <DescriptionText>{technologies?.join(", ")}</DescriptionText>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-2xl text-white">Links</h3>
        <div className="flex flex-row gap-2">
          {Object.entries(links)?.map(([name, value], index) => {
            return (
              <a
                key={`link-${index}`}
                href={value}
                target="_blank"
                className="p-2 rounded-lg bg-tertiary justify-center items-center"
              >
                {linkIcons[name] || linkIcons["externalLink"]}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
