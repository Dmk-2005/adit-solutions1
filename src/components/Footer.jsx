import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* Footer Top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt=""
            className="w-32 sm:w-44"
          />
          <p className="max-w-md">
            We believe great digital marketing is simple, transparent, and continuously evolving. That’s why we work closely with our clients as growth partners.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <ul className="flex gap-8 flex-wrap lg:justify-end">
            <li>
              <a className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="#our-work">
                Our work
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* footer bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright 2026 © Aditya digital Innovations - All Right Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
