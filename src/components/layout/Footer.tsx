import GitHubIcon from "@/components/GitHubIcon";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-row py-4 justify-center items-center"
    >
      <p className="text-sm text-muted-foreground p-4">
        <span>
          No rights reserved — everything here is open source, copy away!
        </span>
        <a
          className="px-2"
          target="_blank"
          href={"https://github.com/devravinder/devravinder.github.io"}
        >
          <GitHubIcon className=" inline w-5 h-5" />
        </a>
      </p>
    </motion.footer>
  );
}
