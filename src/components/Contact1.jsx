import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      icon: "📧",
      title: "Email",
      value: "send me mail ",
      link: "mailto:bhawanimokawat599@gmail.com",
    },

    {
      icon: "💼",
      title: "LinkedIn",
      value: "bhawani's linkdin",
      link: "https://www.linkedin.com/in/bhawani-mokawat-8b3b63364/",
    },

    {
      icon: "🐙",
      title: "GitHub",
      value: "click here",
      link: "https://github.com/bhawanimokawat",
    },

    {
      icon: "📍",
      title: "Instagram",
      value: "bhawani_singh_18",
      link: "https://www.instagram.com/bhawani_singh_18/",
    },
  ];
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-16 py-24 bg-[var(--bg)] text-[var(--text)]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="rounded-3xl p-8 sm:p-10 border border-[var(--text)]/20 bg-[var(--bg)]"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center"
        >
          Get <span className="text-[var(--accent)]">In Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-[var(--text)]/70 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
        >
          I am currently open to internship opportunities and collaborations.
        </motion.p>

        {/* Info Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-16"
        >
          {contacts.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="border border-[var(--text)]/20 p-6 rounded-2xl text-center"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[var(--accent)]"
                >
                  <div className="text-3xl">{item.icon}</div>

                  <h3 className="font-semibold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-[var(--text)]/70 mt-1">
                    {item.value}
                  </p>
                </a>
              ) : (
                <>
                  <div className="text-3xl">{item.icon}</div>

                  <h3 className="font-semibold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-[var(--text)]/70 mt-1">
                    {item.value}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
