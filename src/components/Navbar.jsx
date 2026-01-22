import React from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";

const Navbar = ({ theme, setTheme, sidebarOpen, setSidebarOpen }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 font-medium sm:px-12 lg:px-24 xl:px-40 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70"
    >
      {/* Logo */}
      <a href="#hero" className="cursor-pointer" onClick={() => setSidebarOpen(false)}>
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-28 sm:w-32 lg:w-40"
        />
      </a>

      {/* Sidebar / Menu Links */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`absolute sm:static top-full right-0 h-screen sm:h-auto flex flex-col sm:flex-row sm:items-center gap-5 sm:bg-transparent transition-all duration-300
          ${sidebarOpen ? "w-full bg-blue-600 text-white items-center justify-center" : "w-0 overflow-hidden sm:w-auto sm:pl-0 sm:pt-0 text-gray-700 dark:text-white sm:text-lg"}`}
      >
        {/* Close Button (Mobile Only) */}
        <img
          src={assets.close_icon}
          alt="close"
          className="absolute w-5 cursor-pointer right-4 top-4 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        <a onClick={() => setSidebarOpen(false)} href="#hero" className="text-2xl transition-all duration-300 sm:hover:text-blue-500 dark:sm:hover:text-blue-400 sm:hover:scale-105">
          Home
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#about" className="text-2xl transition-all duration-300 sm:hover:text-blue-500 dark:sm:hover:text-blue-400 sm:hover:scale-105">
          About
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className="text-2xl transition-all duration-300 sm:hover:text-blue-500 dark:sm:hover:text-blue-400 sm:hover:scale-105">
          Services
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#our-work" className="text-2xl transition-all duration-300 sm:hover:text-blue-500 dark:sm:hover:text-blue-400 sm:hover:scale-105">
          Our Work
        </a>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Theme Toggle */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Mobile Menu Button */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="menu"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-8 cursor-pointer sm:hidden"
        />

        {/* Contact Button (hidden on small screens) */}
        <a
          href="#contact-us"
          className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 group border border-white/10"
        >
          Contact Us
          <img
            src={assets.arrow_icon}
            width={14}
            alt="arrow"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
