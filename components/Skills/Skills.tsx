import { motion } from "framer-motion";
import { Skill } from "../";

import styles from "./Skills.module.css";

import javascriptImg from "/assets/images/javascript.png";
import typescriptImg from "/assets/images/typescript.png";
import reactImg from "/assets/images/react.png";
import reduxImg from "/assets/images/redux.png";
import tailwindImg from "/assets/images/tailwind.png";
import dotnetcoreImg from "/assets/images/dotnetcore.png";
import nextImg from "/assets/images/next.png";
import flutterImg from "/assets/images/flutter.png";
import swiftImg from "/assets/images/swift.png";

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
        <Skill directionDown skillImg={typescriptImg} skillMastery={85} />
        <Skill directionDown skillImg={javascriptImg} skillMastery={90} />
        <Skill directionDown skillImg={reactImg} skillMastery={90} />
        <Skill directionDown skillImg={reduxImg} skillMastery={80} />
        <Skill skillImg={nextImg} skillMastery={85} />
        <Skill skillImg={tailwindImg} skillMastery={90} />
        <Skill skillImg={dotnetcoreImg} skillMastery={60} />
        <Skill skillImg={flutterImg} skillMastery={70} />
        <Skill skillImg={swiftImg} skillMastery={10} />
      </div>
    </motion.div>
  );
};

export default Skills;
