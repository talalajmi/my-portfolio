import { motion } from "framer-motion";
import { Skill } from "../";

import reactImg from "../../assets/images/react.png";
import reduxImg from "../../assets/images/redux.png";
import tailwindImg from "../../assets/images/tailwind.png";
import dotnetcoreImg from "../../assets/images/dotnetcore.png";
import nextImg from "../../assets/images/next.png";
import flutterImg from "../../assets/images/flutter.png";
import swiftImg from "../../assets/images/swift.png";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>

      <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill
          directionLeft
          skillImg="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
          skillMastery={85}
        />
        <Skill
          directionLeft
          skillImg="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          skillMastery={90}
        />
        <Skill directionLeft skillImg={reactImg.src} skillMastery={90} />
        <Skill directionLeft skillImg={reduxImg.src} skillMastery={80} />
        <Skill skillImg={nextImg.src} skillMastery={85} />
        <Skill skillImg={tailwindImg.src} skillMastery={90} />
        <Skill skillImg={dotnetcoreImg.src} skillMastery={60} />
        <Skill skillImg={flutterImg.src} skillMastery={70} />
        <Skill skillImg={swiftImg.src} skillMastery={10} />
      </div>
    </motion.div>
  );
};

export default Skills;
