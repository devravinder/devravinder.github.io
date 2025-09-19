import { profie } from "@/data/profile";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-4 items-start grow md:grow-0 md:w-xs px-4 pb-4 border-b md:border-none">
      <div className="w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden"
        >
          <div className="bg-border p-[2px]">
            <img
              loading="lazy"
              src={profie.img}
              alt={profie.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className=""
      >
        <div className="text-2xl font-semibold">{profie.name}</div>
        <div className="text-muted-foreground">{profie.subTitle}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {profie.tags.join(" | ")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full"
      >
        <Button className="w-full" variant={"outline"} size={"sm"}>
          <a target="_blank" href={profie.cvLink}>
            Download CV
          </a>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col gap-1 text-sm"
      >
        <div className="flex flex-row gap-2">
          <div className="">
            <MapPin className="w-4 h-4 text-muted-foreground"></MapPin>
          </div>
          <div className="">{profie.location}</div>
        </div>

        {profie.social.map((ele, index) => (
          <SocialLink key={`${ele.url}${index}`} {...ele} />
        ))}
      </motion.div>
    </div>
  );
}

const SocialLink = ({
  Icon,
  url,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
}) => {
  return (
    <a
      className="flex flex-row gap-2 cursor-pointer"
      target="_blank"
      href={url}
    >
      <div className="">
        <Icon className="w-4 h-4 text-muted-foreground"></Icon>
      </div>
      <div className="line-clamp-1">{url}</div>
    </a>
  );
};
