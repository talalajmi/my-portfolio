import { motion } from "framer-motion";
import { Skill } from "../";

import styles from "./Skills.module.css";

import javascriptImg from "../../assets/images/javascript.png";
import typescriptImg from "../../assets/images/typescript.png";
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
      className={styles.content}
    >
      <h3 className="sectionName">Skills</h3>

      <h3 className={styles.heading}>
        Hover over a skill for current proficiency
      </h3>

      <div className={styles.row}>
        <Skill directionLeft skillImg={typescriptImg.src} skillMastery={85} />
        <Skill directionLeft skillImg={javascriptImg.src} skillMastery={90} />
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
