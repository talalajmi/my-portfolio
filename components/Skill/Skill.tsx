import { motion } from "framer-motion";
import styles from "./Skill.module.css";

interface Props {
  directionLeft?: boolean;
  skillImg: string;
  skillMastery: number;
}

const Skill = ({ directionLeft, skillImg, skillMastery }: Props) => {
  const initialState = {
    x: directionLeft ? -200 : 200,
    opacity: 0,
  };

  const animationDuration = {
    duration: 1,
  };

  const whileInViewAnimation = {
    opacity: 1,
    x: 0,
  };

  return (
    <div className={`group ${styles.content}`}>
      <motion.img
        initial={initialState}
        transition={animationDuration}
        whileInView={whileInViewAnimation}
        viewport={{ once: true }}
        className={`group-hover:grayscale ${styles.image}`}
        src={skillImg}
        alt="skill-image"
      />
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
