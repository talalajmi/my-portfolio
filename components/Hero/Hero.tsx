import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "../";
import Image from "next/image";

import styles from "./Hero.module.css";

import myImg from "../../assets/images/talal.jpeg";
import Link from "next/link";

interface HeroProps {}

const animatedText = {
  words: ["Hi, I am Talal Al Ajmi", "<FrontendDeveloper />", "Freelancer"],
  loop: true,
  delaySpeed: 2000,
};

const Hero = ({}: HeroProps) => {
  const [text, setText] = useTypewriter(animatedText);

  return (
    <div className={styles.content}>
      <BackgroundCircles />
      <Image src={myImg} alt="my-image" className={styles.img} />
      <div className="z-20">
        <h3 className={styles.jobTitle}>Software Developer</h3>
        <h1 className={styles.animatedText}>
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#A21717" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
