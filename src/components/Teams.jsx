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
      className="flex flex-col items-center px-4 pt-16 pb-20 text-gray-800 gap-10 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand's success."
      />

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 w-full">
        {teamData.map((team, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            key={index}
            className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:border-blue-400/40 hover:scale-105 transition-all duration-300 group"
          >
            {/* Profile Image */}
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
              {team.image ? (
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-800 flex items-center justify-center">
                  <svg className="w-14 h-14 text-blue-400 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Name & Title */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-800 dark:text-white">{team.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">{team.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
