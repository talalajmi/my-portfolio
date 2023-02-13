import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

import styles from "./Header.module.css";

const socialIconsInitialState = {
  y: -100,
  opacity: 0,
  scale: 0.5,
};

const socialIconsAnimatedState = {
  y: 0,
  opacity: 1,
  scale: 1,
};

const socialIconsTransitionDuration = {
  duration: 1.5,
};

const mailIconInitialState = {
  y: -100,
  opacity: 0,
  scale: 0.5,
};

const mailIconAnimatedState = {
  y: 0,
  opacity: 1,
  scale: 1,
};

const mailIconTransitionDuration = {
  duration: 1.5,
};

const Header = () => {
  return (
    <header className={styles.header}>
      <motion.div
        className={styles.socialIconsContainer}
        initial={socialIconsInitialState}
        animate={socialIconsAnimatedState}
        transition={socialIconsTransitionDuration}
      >
        <SocialIcon
          url="https://twitter.com/talalajmi_"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/talalajmi_"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/talalajmi"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        className={styles.mailIconContainer}
        initial={mailIconInitialState}
        animate={mailIconAnimatedState}
        transition={mailIconTransitionDuration}
        onClick={() => (window.location.href = "#contact")}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className={styles.ctaText}>Get in Touch</p>
      </motion.div>
    </header>
  );
};

export default Header;
