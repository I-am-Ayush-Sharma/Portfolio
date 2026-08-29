import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss } from "react-icons/si";
import "./TechStack.css";

const techStackData = [
  { Icon: FaReact, name: "React", colorClass: "text-[#61DAFB]" },
  { Icon: SiTypescript, name: "TypeScript", colorClass: "text-[#3178C6]" },
  { Icon: SiJavascript, name: "JavaScript", colorClass: "text-[#F7DF1E]" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", colorClass: "text-[#38B2AC]" },
  { Icon: FaNodeJs, name: "Node.js", colorClass: "text-[#339933]" },
  { Icon: FaGitAlt, name: "Git", colorClass: "text-[#F05032]" },
  { Icon: FaGithub, name: "GitHub", colorClass: "text-white" },
];

export function TechStack() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="mt-5 md:mt-2 py-5 px-8 rounded-2xl flex flex-col lg:flex-row items-center gap-8 justify-between w-full max-w-7xl mx-auto techstack">
      <div className="flex items-center gap-6 min-w-max">
        <p className="text-gray-300 text-sm md:text-base font-medium leading-tight text-left">
          Technologies <br className="hidden md:block" /> I work with
        </p>
        <div className="w-1.5 h-1.5 rounded-full bg-[#EAB308] shadow-[0_0_10px_3px_rgba(234,179,8,0.4)]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center lg:justify-end gap-6 md:gap-10 w-full"
      >
        {techStackData.map((tech, index) => (
          <motion.div variants={itemVariants} key={index} className="flex items-center gap-2">
            <tech.Icon className={`${tech.colorClass} text-2xl`} />
            <span className="text-sm font-medium text-gray-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
