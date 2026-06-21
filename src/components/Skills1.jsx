import React from "react";
//import skills from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
    { title: "Backend", items: ["Node.js", "Express.js"] },
    { title: "Database", items: ["MongoDB"] },
    { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
    { title: "Programming Languages", items: ["C", "C++"] },
  ];
  

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 lg:px-16 py-24 bg-[var(--bg)] text-[var(--text)]">
      <h2 className="text-4xl sm:text-5xl font-bold text-center">
        My <span className="text-[var(--accent)]">Skills</span>
      </h2>

      <p className="text-center text-[var(--text)]/70 mt-4 text-base sm:text-lg">
        Technologies I work with.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[var(--bg)] p-6 sm:p-8 rounded-3xl border border-[var(--text)]/20 
                       hover:border-[var(--accent)] duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[var(--accent)]">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skill.items.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.1, backgroundColor: "var(--accent)", color: "#fff" }}
                  transition={{ duration: 0.3 }}
                  className="bg-[var(--accent)]/20 text-[var(--accent)] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
