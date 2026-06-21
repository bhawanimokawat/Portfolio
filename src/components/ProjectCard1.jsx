import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, desc, tech, github, demo }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}          // start hidden + below
      whileInView={{ opacity: 1, y: 0 }}       // fade + slide up on scroll
      transition={{ duration: 0.8 }}           // smooth timing
      viewport={{ once: true }}                // animate only once
    >
      <motion.div
        whileHover={{ scale: 1.03 }}           // subtle zoom on hover
        transition={{ duration: 0.3 }}
        className="group bg-[var(--bg)] rounded-3xl overflow-hidden border border-[var(--text)]/20 
                   hover:border-[var(--accent)] hover:-translate-y-3 duration-300 transition-all relative"
      >
        {/* Image */}
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 duration-300"
          whileHover={{ scale: 1.1 }}          // zoom image more on hover
          transition={{ duration: 0.4 }}
        />

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)]">
            {title}
          </h3>

          <p className="text-[var(--text)]/70 mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7">
            {desc}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
            {tech.map((item) => (
              <motion.span
                key={item}
                className="bg-[var(--accent)]/20 text-[var(--accent)] px-2 sm:px-3 py-1 sm:py-2 rounded-full text-sm sm:text-lg"
                whileHover={{ scale: 1.1, backgroundColor: "var(--accent)", color: "#fff" }}
                transition={{ duration: 0.3 }}
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <motion.a
              href={github}
              className="flex-1 text-center border border-[var(--accent)] py-2 sm:py-3 rounded-xl hover:bg-[var(--accent)]/10"
              whileHover={{ scale: 1.05 }}
            >
              Github
            </motion.a>

            <motion.a
              href={demo}
              className="flex-1 text-center bg-[var(--accent)] text-white py-2 sm:py-3 rounded-xl hover:opacity-80"
              whileHover={{ scale: 1.05 }}
            >
              Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
