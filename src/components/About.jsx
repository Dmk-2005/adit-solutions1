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
            className='flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white bg-gray-50 dark:bg-transparent'
        >
            <Title title="Who We Are" desc="We’re a digital marketing company built for today’s fast-moving digital world. Our focus is on helping businesses grow online through smart, data-driven strategies that deliver real results." />

            <div className="grid md:grid-cols-2 gap-10 w-full">
                {/* Mission */}
                <div className="relative flex flex-col gap-4 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-150 group-hover:bg-blue-500/20"></div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white z-10">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed z-10">
                        To help businesses grow faster and smarter through clear, effective, and performance-driven digital marketing.
                    </p>
                </div>
                {/* Vision */}
                <div className="relative flex flex-col gap-4 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300 overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-150 group-hover:bg-purple-500/20"></div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white z-10">Our Vision</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed z-10">
                        To become a trusted digital growth partner for brands looking to scale in an ever-changing digital landscape.
                    </p>
                </div>
            </div>

            {/* Values */}
            <div className="w-full mt-10">
                <h3 className="text-3xl font-semibold text-center mb-12">Our Values</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Transparency", desc: "Clear communication and honest reporting, always.", icon: assets.content_icon, color: "bg-blue-500" },
                        { title: "Results First", desc: "Every decision is guided by data, performance, and ROI.", icon: assets.ads_icon, color: "bg-green-500" },
                        { title: "Innovation", desc: "We stay ahead by embracing new tools, platforms, and ideas.", icon: assets.marketing_icon, color: "bg-amber-500" },
                        { title: "Partnership", desc: "We grow when our clients grow.", icon: assets.social_icon, color: "bg-pink-500" }
                    ].map((value, index) => (
                        <div key={index} className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                            <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                                <img src={value.icon} alt={value.title} className="w-6 h-6 invert brightness-0" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-800 dark:text-white mb-2">{value.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{value.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default About