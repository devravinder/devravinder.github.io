import IconExternalLink from "assets/icons/IconExternalLink";
import IconGithub from "assets/icons/IconGithub";
import { useNavigate } from "react-router-dom";

const textColors = [
  "blue-text-gradient",
  "green-text-gradient",
  "pink-text-gradient",
];

const ProjectCard = (project: Project) => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col gap-2 hover:scale-105 transition-transform bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <img
          src={project.images?.[0]}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="pt-2">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <div className="flex flex-row gap-2">
            {project?.links?.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconExternalLink className="w-5 h-5" />
              </a>
            )}
            {project?.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-400">{project.type}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className=" text-secondary text-[14px] line-clamp-3">
          {project.descriptions?.[0]}
        </p>
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-wrap gap-2 line-clamp-1">
            {project.technologies?.slice(0, 3)?.map((tech, index) => (
              <p
                key={`tech_${tech}`}
                className={`text-[14px] ${textColors[index]}`}
              >
                #{tech}
              </p>
            ))}
          </div>
          <button
            onClick={() => navigate(`/projects/${project.id}`)}
            className="border border-white text-xs px-2 rounded-lg"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
