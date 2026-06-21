import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar1 = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)] text-[var(--text)] shadow-sm">

      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4">

        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold">
          Bk<span className="text-[var(--accent)]">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <ul className="flex gap-6 text-lg">
            <li>
              <a href="#home" className="hover:text-[var(--accent)]">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-[var(--accent)]">
                About
              </a>
            </li>

            <li>
              <a href="#project" className="hover:text-[var(--accent)]">
                Project
              </a>
            </li>

            <li>
              <a href="#time" className="hover:text-[var(--accent)]">
                Journey
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[var(--accent)]">
                Contact
              </a>
            </li>
          </ul>

          <ThemeSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 text-lg">

          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#project" onClick={() => setOpen(false)}>
            Project
          </a>

          <a href="#time" onClick={() => setOpen(false)}>
            Journey
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          {/* Theme buttons */}
          <ThemeSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar1;