import { Tilt } from "react-tilt";

import certification from "assets/achievements/certification.svg";
import goldmedal from "assets/achievements/goldmedal.svg";
import trophy from "assets/achievements/trophy.svg";
import { SectionHeading, SectionSubText } from "components/Elements";

const achievementsIcons: { [key in AchevementType]: string } = {
  certification: certification,
  medal: goldmedal,
  trophy: trophy,
};

export default function Achievements({
  achievements,
}: {
  achievements: Achevement[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <SectionSubText>My Progress</SectionSubText>
        <SectionHeading>Achievements.</SectionHeading>
      </div>

      <div className="w-full flex flex-wrap gap-8">
        {achievements?.map((ach) => (
          <AchievementCard
            key={ach.name}
            title={ach.name}
            icon={achievementsIcons[ach.type]}
          />
        ))}
      </div>
    </div>
  );
}

const AchievementCard = ({ title, icon }: { title: string; icon: string }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px]">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);
