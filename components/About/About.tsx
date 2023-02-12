import { motion } from "framer-motion";

import styles from "./About.module.css";

import profileImg from "../../assets/images/profile-pic.png";

const imageInitialAnimation = {
  x: -200,
  opacity: 0,
};

const imageAnimationDuration = {
  duration: 1.2,
};

const imageWhileInViewAnimation = {
  x: 0,
  opacity: 1,
};

const contentInitialAnimation = {
  opacity: 0,
};

const contentAnimationDuration = {
  duration: 1.5,
};

const contentWhileInViewAnimation = {
  opacity: 1,
};

const About = () => {
  return (
    <motion.div
      initial={contentInitialAnimation}
      whileInView={contentWhileInViewAnimation}
      transition={contentAnimationDuration}
      className={styles.content}
    >
      <h3 className="sectionName">About</h3>

      <motion.img
        initial={imageInitialAnimation}
        transition={imageAnimationDuration}
        whileInView={imageWhileInViewAnimation}
        src={profileImg.src}
        alt="my-second-photo"
        className={styles.image}
        viewport={{ once: true }}
      />

      <div className={styles.informationContainer}>
        <h4 className={styles.boldText}>
          Here is a <span className={styles.underlineText}>little</span>{" "}
          background
        </h4>
        <p className={styles.bio}>
          Hello, I am Talal Al Ajmi, a frontend developer with a BSc in Computer
          Science. I have gained experience in the most widely used libraries
          and frameworks, including React, Next.js, and Redux for state
          management. My expertise in TypeScript allows me to write clean and
          efficient code, and I am well-versed in working with custom APIs and
          creating applications. I am confident in my abilities to bring ideas
          to life, and I am always seeking new challenges and opportunities to
          grow as a developer. If you&apos;re looking for a professional and
          skilled frontend developer, I would be happy to bring my expertise to
          your next project.
        </p>
      </div>
    </motion.div>
  );
};
export default About;
