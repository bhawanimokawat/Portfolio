import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--text)]/20 py-6 sm:py-8 mt-12 sm:mt-16 bg-[var(--bg)] text-[var(--text)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">
            Bhawani <span className="text-[var(--accent)]">Mokawat</span>
          </h3>
          <p className="text-[var(--text)]/70 text-sm sm:text-base">
            MERN Stack Developer
          </p>
        </div>

        {/* Right Side */}
        <p className="text-[var(--text)]/50 text-sm sm:text-base text-center md:text-right">
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
