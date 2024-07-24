import profile from "assets/profile.png";
import {
  Button,
  DescriptionText,
  SectionHeading,
  SectionSubText,
} from "components/Elements";

export default function About({
  descriotion,
  roles,
  cvUrl,
}: {
  descriotion: string;
  roles: string[];
  cvUrl: string;
}) {
  const downoloadCV = () => {
    const a = document.createElement("a");
    a.href = cvUrl;
    //a.download = 'cv.pdf';
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <div className="">
        <SectionSubText>Introduction</SectionSubText>
        <SectionHeading>Overview.</SectionHeading>
      </div>
      <div className="w-full flex flex-row gap-4 flex-wrap">
        <div className="w-2/3 flex flex-col gap-4 justify-center">
          <DescriptionText>{descriotion}</DescriptionText>
          <div className="flex flex-row flex-wrap gap-4">
            {roles?.map((role) => <RoleCard key={role} title={role} />)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img className=" flex-grow-0 rounded-xl w-64" src={profile}></img>
          <Button onClick={downoloadCV}>Download CV</Button>
        </div>
      </div>
    </div>
  );
}

const RoleCard = ({ title }: { title: string }) => {
  return (
    <div className="hover:scale-105 transition-transform green-pink-gradient p-[1px] rounded-2xl">
      <div className="bg-tertiary rounded-2xl py-2 px-4 flex justify-evenly items-center flex-col">
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};
