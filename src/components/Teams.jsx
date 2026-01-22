import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "framer-motion";

const Teams = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center px-4 py-20 text-gray-800 gap-7 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand’s success."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4">
        {teamData.map((team, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}

            key={index}
            className="flex items-center gap-5 p-6 transition-all duration-500 bg-white border border-gray-200 shadow-lg max-sm:flex-col rounded-xl dark:border-gray-700 dark:bg-gray-900 hover:shadow-2xl hover:border-blue-500/30 hover:scale-105"
          >
            <img src={team.image} className="w-12 h-12 rounded-full" alt="" />
            <div className="flex-1">
              <h3 className="text-sm font-bold">{team.name}</h3>
              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
