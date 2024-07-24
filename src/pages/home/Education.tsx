import graduation from "assets/graduation.svg";
import studying from "assets/studying.svg";
import { SectionHeading, SectionSubText } from "components/Elements";

export default function Education({
  qualifications,
}: {
  qualifications: Education[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <SectionSubText>My Qualifications</SectionSubText>
        <SectionHeading>Education.</SectionHeading>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <div className="w-full flex flex-col gap-6">
          {qualifications?.map((qual, index) => (
            <EducationCard
              key={`qual-${index}`}
              course={qual.course}
              institution={qual.institution}
            />
          ))}
        </div>
        <img className="w-96 h-96" src={studying}></img>
      </div>
    </div>
  );
}

const EducationCard = ({
  course,
  institution,
}: {
  course: string;
  institution: string;
}) => {
  return (
    <div className="rounded-xl bg-tertiary px-6 py-6">
      <div className="flex flex-row gap-4">
        <div className="">
          <img className="w-12 h-12 rounded-xl" src={graduation}></img>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold">{course}</h4>
          <p className="text-secondary">{institution}</p>
        </div>
      </div>
    </div>
  );
};
