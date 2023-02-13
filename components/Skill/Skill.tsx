import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Skill.module.css";

interface Props {
  directionDown?: boolean;
  skillImg: string;
  skillMastery: number;
}

const Skill = ({ directionDown, skillImg, skillMastery }: Props) => {
  const initialState = {
    opacity: 0,
    y: directionDown ? -100 : 100,
  };

  const animationDuration = {
    duration: 1,
  };

  const whileInViewAnimation = {
    opacity: 1,
    y: 0,
  };

  return (
    <div className={`group ${styles.content}`}>
      <motion.div
        initial={initialState}
        transition={animationDuration}
        whileInView={whileInViewAnimation}
        viewport={{ once: true }}
        className={styles.image}
      >
        <Image
          className={`group-hover:grayscale ${styles.image}`}
          src={skillImg}
          fill
          alt="skill-image"
        />
      </motion.div>
      <div
        className={`group-hover:bg-white group-hover:opacity-80 ${styles.roundedContainer}`}
      >
        <div className={styles.centerContent}>
          <p className={styles.skillPercentage}>{skillMastery}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
