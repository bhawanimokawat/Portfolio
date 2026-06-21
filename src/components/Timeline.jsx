import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const timeline = [
    {
      year: "2024",
      title: "Started BCA",
      desc: "Began my Bachelor of Computer Applications at SS Jain Subodh PG College.",
    },
    {
      year: "2025",
      title: "Leraning Basics ",
     desc: "Started with C and C++, learning programming fundamentals, data structures, and problem-solving techniques.",
    },
    {
      year: "2026",
      title: "Development",
      desc: "Learned Node.js, Express.js, and MongoDB. Created REST APIs and authentication systems.",
    },
    {
      year: "2026",
      title: " Ready for Internship",
      desc: "Currently ready for working as a MERN Stack Intern, building full-stack applications.",
    },
  ];

  return (
    <section id="time" className="max-w-7xl mx-auto px-6 lg:px-16 py-24 bg-[var(--bg)] text-[var(--text)]">
      <h2 className="text-4xl sm:text-5xl font-bold text-center">
        My <span className="text-[var(--accent)]">Journey</span>
      </h2>

      <div className="relative mt-12">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[var(--accent)] hidden lg:block"></div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center lg:items-start ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="lg:w-1/2 lg:px-8">
                <div className="bg-[var(--bg)] border border-[var(--text)]/20 rounded-2xl p-6 shadow-md hover:border-[var(--accent)] duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[var(--accent)]">
                    {item.year} — {item.title}
                  </h3>
                  <p className="mt-2 text-[var(--text)]/100 text:sm sm:text-base leading-6  font-stretch-expanded">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-[var(--accent)] text-white font-bold z-10">
                {index + 1}
              </div>

              {/* Spacer for alignment */}
              <div className="lg:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
