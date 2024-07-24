import { SectionHeading, SectionSubText } from "components/Elements";

export default function Feedbacks({ feedbacks }: { feedbacks: Feedback[] }) {
  return (
    <div className={"mt-12 bg-black-100 rounded-[20px]"}>
      <div
        className={
          "bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]"
        }
      >
        <div>
          <SectionSubText>What others say</SectionSubText>
          <SectionHeading>Testimonials.</SectionHeading>
        </div>
      </div>
      <div className={"-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7"}>
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={`feedback-${index}`} {...feedback} />
        ))}
      </div>
    </div>
  );
}

const FeedbackCard = ({
  text,
  name,
  designation,
  company,
  image,
}: Feedback) => (
  <div className="bg-black-200 p-10 rounded-3xl h-96 w-80 flex flex-col justify-between">
    <div className="flex flex-col">
      <p className="text-white font-black text-5xl">"</p>
      <p className="text-white tracking-wider text-[18px]">{text}</p>
    </div>

    <div className=" flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  </div>
);
