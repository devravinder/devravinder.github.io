import { SectionHeading, SectionSubText } from "components/Elements";

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="">
        <SectionSubText>Technology</SectionSubText>
        <SectionHeading>Skills.</SectionHeading>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {skills.map((technology) => (
          <div
            key={technology.name}
            className=" flex flex-col gap-1 justify-center items-center h-24 w-24 hover:scale-105 bg-tertiary shadow-shine rounded-lg p-2"
          >
            <div className="h-14 w-14 flex items-center justify-center">
              <img src={technology.icon}></img>
            </div>
            <div className="w-full text-center text-xs font-bold ">
              <span>{technology.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
