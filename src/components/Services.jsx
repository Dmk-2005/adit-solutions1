import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'
import { motion } from "framer-motion";

const Services = () => {

  const servicesData = [
    {
      title: 'Advertising',
      description: 'Strategic ad campaigns that maximize ROI across Google, Facebook, and Instagram to reach your ideal customers.',
      icon: assets.ads_icon,
      gradient: "from-[#069aed] via-blue-400 to-cyan-300",
      iconBg: "from-[#069aed] to-blue-600",
      shadow: "shadow-blue-500/40"
    },
    {
      title: 'Content marketing',
      description: 'Valuable, relevant content strategies designed to attract, engage, and retain your target audience.',
      icon: assets.marketing_icon,
      gradient: "from-pink-500 via-rose-400 to-red-300",
      iconBg: "from-pink-500 to-rose-500",
      shadow: "shadow-pink-500/40"
    },
    {
      title: 'Content writing',
      description: 'Compelling copy for websites, blogs, and sales materials that captures your brand voice and drives conversions.',
      icon: assets.content_icon,
      gradient: "from-amber-400 via-orange-400 to-yellow-300",
      iconBg: "from-amber-400 to-orange-500",
      shadow: "shadow-amber-500/40"
    },
    {
      title: 'Social media',
      description: 'Building vibrant communities and fostering engagement through consistent, on-brand social media management.',
      icon: assets.social_icon,
      gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
      iconBg: "from-violet-600 to-purple-500",
      shadow: "shadow-violet-500/40"
    }
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}

      id='services' className='relative  flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-16 pb-20 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 z-1 dark:hidden' />

      <div className="z-10">
        <Title title='How can we help?' desc='From SEO and paid advertising to social media, content, and conversion optimization, we create digital marketing solutions designed to increase visibility, attract the right audience, and drive meaningful growth.' />
      </div>
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServicesCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Services
