import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "Helped a local fitness app increase their user base through social media campaigns and targeted advertising.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description:
        "Redesigned a client's analytics dashboard to make it more user-friendly and easier to navigate.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "Created promotional content and managed social media presence for a fitness startup's app launch.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-16 pb-20 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="group hover:scale-105 transition-all duration-500 cursor-pointer p-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 hover:shadow-xl bg-white dark:bg-gray-900"
          >
            <img src={work.image} className="w-full rounded-xl" alt="" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
