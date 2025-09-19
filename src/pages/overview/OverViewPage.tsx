import type { Tech } from "@/data/constant";
import { profie } from "@/data/profile";
import { motion } from "framer-motion";

export default function OverViewPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col gap-4  min-w-xs p-4 rounded-md border"
    >
      <div className="">
        <h2 className="text-2xl text-foreground font-semibold border-b py-2">
          {`👋 Hi, I'm ${profie.name}`}
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl text-foreground font-semibold border-b py-2">
          👨‍💻 About Me
        </h2>
        {profie.about.map((ele, index) => (
          <p
            key={`about_${index}`}
            dangerouslySetInnerHTML={{ __html: ele }}
            className="text-sm"
          ></p>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl text-foreground font-semibold border-b py-2">
          🛠️ Tech Stack
        </h2>
        <TechsCard skills={profie.skills} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl text-foreground font-semibold border-b py-2">
          📊 GitHub Stats
        </h2>
        <div className="flex flex-row justify-start">
          <img
            className="h-52"
            src={`https://github-readme-stats.vercel.app/api?username=${profie.gitHubId}&show_icons=true&theme=algolia`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export const TechsCard = ({ skills }: { skills: Tech[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(({ name, icon, color }) => (
        <span
          key={name}
          className={`inline-flex items-center gap-2 px-1 py-[1px] rounded text-sm font-semibold text-white ${color}`}
        >
          {icon}
          {name}
        </span>
      ))}
    </div>
  );
};
