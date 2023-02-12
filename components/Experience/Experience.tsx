import { motion } from "framer-motion";

import styles from "./Experience.module.css";
import { ExperienceCard } from "../";
interface ExperienceProps {}

const Experience = ({}: ExperienceProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>

      <div className="mt-24 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#A21717]/80 scrollbar-thumb-rounded-full md:mt-0">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};
export default Experience;
