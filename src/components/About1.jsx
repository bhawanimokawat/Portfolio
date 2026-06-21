import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/profile5.png";
import img2 from "../assets/profile6.png";
import img3 from "../assets/profile.png";
import img4 from "../assets/profile8.png";
import img5 from "../assets/profile9.png";

const About = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section   id="about" className="max-w-7xl mx-auto px-6 lg:px-16 py-24 bg-[var(--bg)] text-[var(--text)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="text-[var(--accent)]">Me</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[var(--text)]/70 mt-6 sm:mt-8 leading-7 sm:leading-8 text-base sm:text-lg"
          >
            I am a BCA student and an aspiring MERN Stack Developer. I enjoy
            building responsive web applications and continuously learning
            modern technologies. Currently, I am looking for internship
            opportunities to gain real-world experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-10"
          >
            <div className="bg-[var(--bg)] border border-[var(--text)]/20 p-4 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              🎓 BCA Student
            </div>
            <div className="bg-[var(--bg)] border border-[var(--text)]/20 p-4 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              📍 Jaipur
            </div>
            <div className="bg-[var(--bg)] border border-[var(--text)]/20 p-4 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              💻 MERN Stack
            </div>
            <div className="bg-[var(--bg)] border border-[var(--text)]/20 p-4 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              🚀 Open to Internship
            </div>
          </motion.div>

           
        </motion.div>

        {/* RIGHT SIDE → Auto Slideshow */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="w-[250px] sm:w-[320px] lg:w-[450px] rounded-3xl object-cover"
            loading="lazy"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
