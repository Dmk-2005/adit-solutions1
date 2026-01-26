import React, { useState, useEffect } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";

const Navbar = ({ theme, setTheme, sidebarOpen, setSidebarOpen }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'our-work', 'contact-us'];
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setSidebarOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Account for fixed navbar height (increased to 120px for perfect clearance)
      const navbarHeight = 120;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getLinkClasses = (sectionId) => {
    const baseClasses = "text-2xl px-4 py-2 sm:px-3 sm:py-1 transition-all duration-300 rounded-lg relative";
    const activeClasses = "text-blue-600 dark:text-blue-400 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 after:rounded-full";
    const inactiveClasses = "text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:scale-105";
    
    return `${baseClasses} ${activeSection === sectionId ? activeClasses : inactiveClasses}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 font-medium sm:px-12 lg:px-24 xl:px-40 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70"
    >
      {/* Logo */}
      <a href="#hero" className="cursor-pointer group" onClick={(e) => handleSmoothScroll(e, 'hero')}>
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-28 sm:w-32 lg:w-36 brightness-110 contrast-125 saturate-125 hover:brightness-125 hover:contrast-150 hover:saturate-150 hover:scale-105 transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl"
          style={{
            filter: 'brightness(1.1) contrast(1.25) saturate(1.25) drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
          }}
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

        <a onClick={(e) => handleSmoothScroll(e, 'hero')} href="#hero" className={getLinkClasses('hero')}>
          Home
        </a>
        <a onClick={(e) => handleSmoothScroll(e, 'about')} href="#about" className={getLinkClasses('about')}>
          About
        </a>
        <a onClick={(e) => handleSmoothScroll(e, 'services')} href="#services" className={getLinkClasses('services')}>
          Services
        </a>
        <a onClick={(e) => handleSmoothScroll(e, 'our-work')} href="#our-work" className={getLinkClasses('our-work')}>
          Our Work
        </a>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Theme Toggle */}
        <div className="p-1">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        </div>

        {/* Mobile Menu Button */}
        <div className="p-1">
          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt="menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-8 cursor-pointer sm:hidden"
          />
        </div>

        {/* Contact Button (hidden on small screens) */}
        <a
          href="#contact-us"
          onClick={(e) => handleSmoothScroll(e, 'contact-us')}
          className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 group border border-white/10"
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
