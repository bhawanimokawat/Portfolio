import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/Profile3.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  console.log("Hero theme:", theme);
  const profileImage = {

    light: profile2,
    dark: profile,
    solarized: profile3,
  }[theme];

  return (
    <section id="home" className="max-w-7xl mx-auto px-6 lg:px-16 py-16 bg-[var(--bg)] text-[var(--text)]">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[var(--accent)] font-semibold uppercase tracking-wider">
            Full Stack Developer & MERN Enthusiast
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-5xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I'm
            <span className="text-[var(--accent)]"> Bhawani Singh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 max-w-xl text-lg leading-8 text-[var(--text)]/200"
          >
            I create digital experiences by combining technology, design and
            problem solving. Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex gap-6 mt-10"
          >
            <a
              href="#contact"
              className="inline-block bg-[var(--accent)] text-white px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </a>

            <a
              href="/Bhawani_Singh_CV.pdf"
              download
              className="border border-[var(--accent)] px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300 inline-block"
            >
              Download CV
            </a>

          </motion.div>


        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="absolute w-[350px] h-[350px] bg-[var(--accent)] rounded-full blur-[120px] opacity-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          ></motion.div>

          <motion.img
            src={profileImage}
            alt="Bhawani"
            className="relative z-10 w-[550px] object-contain"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Tech Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex gap-10 mt-14 text-5xl text-[var(--text)]/50"
      >
        <FaReact className="  text-[var(--accent)] transition-colors duration-300" />
        <FaNodeJs className=" text-[var(--accent)] transition-colors duration-300" />
        <SiMongodb className=" text-[var(--accent)] transition-colors duration-300" />
        <SiTailwindcss className=" text-[var(--accent)]  transition-colors duration-300" />
      </motion.div>
    </section>
  );
};

export default Hero;
