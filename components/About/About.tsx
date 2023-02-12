import { motion } from "framer-motion";

import styles from "./About.module.css";

import profileImg from "../../assets/images/profile-pic.png";

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src={profileImg.src}
        alt="my-second-photo"
        className="-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#A21717]/50">little</span>{" "}
          background
        </h4>
        <p>
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
