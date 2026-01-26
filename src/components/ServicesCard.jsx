import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


const ServicesCard = ({ service, index }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null)

    const handelMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden max-w-xl m-3 sm:m-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/60 dark:hover:border-blue-500/60 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900" 
            onMouseEnter={() => setVisible(true)} 
            onMouseLeave={() => setVisible(false)} 
            ref={divRef} 
            onMouseMove={handelMouseMove}
        >
            {/* Subtle background glow */}
            <div className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r ${service.gradient} w-[350px] h-[350px] absolute z-0 transition-opacity duration-700 ${visible ? 'opacity-20' : 'opacity-0'} `} style={{ top: position.y - 175, left: position.x - 175 }} />

            {/* Top accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:h-2 transition-all duration-300`}></div>

            <div className="relative z-10 p-8 h-full min-h-[320px] flex flex-col">
                
                {/* Icon section */}
                <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.iconBg} shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        <img src={service.icon} alt="" className="w-8 h-8 invert brightness-0" />
                    </div>
                </div>

                {/* Content section */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-6">
                            {service.description}
                        </p>
                    </div>

                    {/* Call to action */}
                    <div className="flex items-center">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer">
                            <span>Learn More</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesCard;
