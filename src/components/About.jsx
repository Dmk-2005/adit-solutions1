import React from 'react'
import { motion } from "framer-motion";
import Title from './Title';
import assets from '../assets/assets';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id='about'
            className='flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 pt-16 pb-20 text-gray-700 dark:text-white'
        >
            <Title title="Who We Are" desc="We’re a digital marketing company built for today’s fast-moving digital world. Our focus is on helping businesses grow online through smart, data-driven strategies that deliver real results." />

            <div className="grid md:grid-cols-2 gap-10 w-full">
                {/* Mission */}
                <div className="relative flex flex-col gap-4 p-8 rounded-2xl border-2 border-blue-200/60 dark:border-blue-500/40 bg-gradient-to-br from-blue-100/90 to-indigo-200/90 dark:bg-gradient-to-br dark:from-blue-800/60 dark:to-indigo-900/60 backdrop-blur-lg shadow-2xl hover:shadow-blue-500/30 hover:border-blue-400/80 hover:bg-gradient-to-br hover:from-blue-200/95 hover:to-indigo-300/95 dark:hover:from-blue-700/70 dark:hover:to-indigo-800/70 transition-all duration-300 overflow-hidden group hover:scale-105">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-400/40 to-indigo-600/40 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-125 group-hover:from-blue-500/50 group-hover:to-indigo-700/50"></div>
                    <div className="flex items-center gap-4 mb-3 z-10">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-300">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-300 dark:to-indigo-400 bg-clip-text text-transparent z-10">Our Mission</h3>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed z-10 font-medium">
                        To help businesses grow faster and smarter through clear, effective, and performance-driven digital marketing.
                    </p>
                </div>
                {/* Vision */}
                <div className="relative flex flex-col gap-4 p-8 rounded-2xl border-2 border-purple-200/60 dark:border-purple-500/40 bg-gradient-to-br from-purple-100/90 to-pink-200/90 dark:bg-gradient-to-br dark:from-purple-800/60 dark:to-pink-900/60 backdrop-blur-lg shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/80 hover:bg-gradient-to-br hover:from-purple-200/95 hover:to-pink-300/95 dark:hover:from-purple-700/70 dark:hover:to-pink-800/70 transition-all duration-300 overflow-hidden group hover:scale-105">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-400/40 to-pink-600/40 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-125 group-hover:from-purple-500/50 group-hover:to-pink-700/50"></div>
                    <div className="flex items-center gap-4 mb-3 z-10">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-700 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-purple-500/50 transition-all duration-300">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-800 dark:from-purple-300 dark:to-pink-400 bg-clip-text text-transparent z-10">Our Vision</h3>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed z-10 font-medium">
                        To become a trusted digital growth partner for brands looking to scale in an ever-changing digital landscape.
                    </p>
                </div>
            </div>

            {/* Values */}
            <div className="w-full mt-10">
                <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">Our Values</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { 
                            title: "Transparency", 
                            desc: "Clear communication and honest reporting, always.", 
                            icon: assets.content_icon, 
                            color: "bg-gradient-to-r from-blue-600 to-cyan-600",
                            bgColor: "from-blue-100/95 to-cyan-100/95 dark:from-blue-800/70 dark:to-cyan-800/70",
                            hoverBg: "hover:from-blue-200/100 hover:to-cyan-200/100 dark:hover:from-blue-700/80 dark:hover:to-cyan-700/80",
                            borderColor: "border-blue-300/70 dark:border-blue-500/50 hover:border-blue-500/90 dark:hover:border-blue-400/70",
                            titleColor: "bg-gradient-to-r from-blue-700 to-cyan-700 dark:from-blue-300 dark:to-cyan-300 bg-clip-text text-transparent",
                            shadowColor: "hover:shadow-blue-500/40"
                        },
                        { 
                            title: "Results First", 
                            desc: "Every decision is guided by data, performance, and ROI.", 
                            icon: assets.ads_icon, 
                            color: "bg-gradient-to-r from-green-600 to-emerald-600",
                            bgColor: "from-green-100/95 to-emerald-100/95 dark:from-green-800/70 dark:to-emerald-800/70",
                            hoverBg: "hover:from-green-200/100 hover:to-emerald-200/100 dark:hover:from-green-700/80 dark:hover:to-emerald-700/80",
                            borderColor: "border-green-300/70 dark:border-green-500/50 hover:border-green-500/90 dark:hover:border-green-400/70",
                            titleColor: "bg-gradient-to-r from-green-700 to-emerald-700 dark:from-green-300 dark:to-emerald-300 bg-clip-text text-transparent",
                            shadowColor: "hover:shadow-green-500/40"
                        },
                        { 
                            title: "Innovation", 
                            desc: "We stay ahead by embracing new tools, platforms, and ideas.", 
                            icon: assets.marketing_icon, 
                            color: "bg-gradient-to-r from-amber-600 to-orange-600",
                            bgColor: "from-amber-100/95 to-orange-100/95 dark:from-amber-800/70 dark:to-orange-800/70",
                            hoverBg: "hover:from-amber-200/100 hover:to-orange-200/100 dark:hover:from-amber-700/80 dark:hover:to-orange-700/80",
                            borderColor: "border-amber-300/70 dark:border-amber-500/50 hover:border-amber-500/90 dark:hover:border-amber-400/70",
                            titleColor: "bg-gradient-to-r from-amber-700 to-orange-700 dark:from-amber-300 dark:to-orange-300 bg-clip-text text-transparent",
                            shadowColor: "hover:shadow-amber-500/40"
                        },
                        { 
                            title: "Partnership", 
                            desc: "We grow when our clients grow.", 
                            icon: assets.social_icon, 
                            color: "bg-gradient-to-r from-pink-600 to-rose-600",
                            bgColor: "from-pink-100/95 to-rose-100/95 dark:from-pink-800/70 dark:to-rose-800/70",
                            hoverBg: "hover:from-pink-200/100 hover:to-rose-200/100 dark:hover:from-pink-700/80 dark:hover:to-rose-700/80",
                            borderColor: "border-pink-300/70 dark:border-pink-500/50 hover:border-pink-500/90 dark:hover:border-pink-400/70",
                            titleColor: "bg-gradient-to-r from-pink-700 to-rose-700 dark:from-pink-300 dark:to-rose-300 bg-clip-text text-transparent",
                            shadowColor: "hover:shadow-pink-500/40"
                        }
                    ].map((value, index) => (
                        <div key={index} className={`flex flex-col gap-5 p-7 rounded-2xl bg-gradient-to-br ${value.bgColor} backdrop-blur-md border-2 ${value.borderColor} ${value.hoverBg} hover:shadow-2xl ${value.shadowColor} transition-all duration-300 group hover:-translate-y-2 hover:scale-105`}>
                            <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                                <img src={value.icon} alt={value.title} className="w-7 h-7 invert brightness-0" />
                            </div>
                            <div>
                                <h4 className={`font-bold text-xl ${value.titleColor} mb-3`}>{value.title}</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{value.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default About