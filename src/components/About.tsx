import { Download } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { motion } from "framer-motion";
const skills = [
  "Full Stack Developer",
  "NodeJs Developer",
  "Java Developer",
  "React Developer",
];
export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden ">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10"
      >
         <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-10"
            >
              <p className="text-muted-foreground text-sm sm:text-base font-medium mb-4 tracking-wider uppercase">
                Introduction
              </p>
              <h2 className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Overview
              </h2>
            </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                Full Stack Developer with 6+ years of experience in Node.js,
                Java, JavaScript, and TypeScript. Worked in various domains
                including Education, Finance, Health, and HR Management.
                Involved in business requirements gathering, client
                interactions, and project development & management.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Skilled in developing user-friendly interfaces and scalable
                backend systems. Passionate about solving real-world problems
                with cutting-edge technologies. Let's work together for our
                mutual growth and a happy world.
              </p>
            </motion.div>

            {/* Skills Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {skills.map((skill) => (
                <RoleCard key={skill} title={skill}></RoleCard>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col items-center justify-end"
          >
            <div className="relative mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden"
              >
                <div className="bg-gradient-to-br from-green-500 via-pink-500 to-blue-500 p-[2px]">
                  <img
                    // decoding="async"
                    loading="lazy"
                    src={profileImg}
                    alt="Ravinder Reddy Kothabad"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              target="_blank"
              href="https://docs.google.com/document/d/1YtoJKbxQIv7FKkhWBOaMhHSPOOt5tT2T"
              className="px-12 py-2 rounded-2xl flex flex-row cursor-pointer font-semibold bg-foreground text-background hover:bg-foreground/60 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

const RoleCard = ({ title }: { title: string }) => {
  return (
    <div className="bg-gradient-to-br from-green-500 via-pink-500 to-blue-500 p-[1px] rounded-2xl">
      <div className="bg-background rounded-2xl py-2 px-4 flex justify-evenly items-center flex-col">
        <h3 className="text-foreground text-base font-semibold">{title}</h3>
      </div>
    </div>
  );
};
