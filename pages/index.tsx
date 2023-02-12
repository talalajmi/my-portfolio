import {
  About,
  Contact,
  Header,
  Experience,
  Hero,
  Projects,
  Skills,
} from "@/components";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import myImg from "../assets/images/talal.jpeg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Talal Al Ajmi&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="z-0 max-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth text-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#A21717]/80 scrollbar-thumb-rounded-full">
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* <section id="experience" className="snap-center">
          <Experience />
        </section> */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                src={myImg}
                alt="my-image"
                className="h-10 w-10 cursor-pointer rounded-full grayscale filter transition duration-300 ease-in-out hover:scale-110 hover:grayscale-0 active:scale-75"
              />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
}
