import React, { useState, useEffect, useRef } from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRefs = useRef([]);
  const timeoutRef = useRef(null);
  
  const carouselItems = [
    { type: 'video', src: '/videos/WP.mp4', alt: 'Demo Video' },
    { type: 'video', src: '/videos/WP (1).mp4', alt: 'Portfolio Video' },
    { type: 'video', src: '/videos/WP (2).mp4', alt: 'Showcase Video' },
    { type: 'video', src: '/videos/WP (3).mp4', alt: 'Promo Video' },
  ];

  // Handle video playback and slide progression
  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    
    if (currentVideo) {
      // Reset and play current video
      currentVideo.currentTime = 0;
      setIsVideoPlaying(true);
      
      const handleVideoEnd = () => {
        setIsVideoPlaying(false);
        // Wait 1 second after video ends, then move to next slide
        timeoutRef.current = setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
        }, 1000);
      };

      currentVideo.addEventListener('ended', handleVideoEnd);
      currentVideo.play().catch(console.error);

      // Pause other videos
      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentSlide) {
          video.pause();
        }
      });

      return () => {
        currentVideo.removeEventListener('ended', handleVideoEnd);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [currentSlide, carouselItems.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  return (
    <div id='hero' className='flex flex-col items-center gap-6 pt-56 pb-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>
        Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>
        We help businesses grow online through smart, data-driven strategies that deliver real results. We combine creativity with analytics to turn ideas into performance.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative max-w-6xl w-full"
      >
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <video 
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.src}
                    className="w-full h-auto object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselItems.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600 scale-125 shadow-lg' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                title={item.type === 'video' ? 'Video' : 'Image'}
              />
            ))}
          </div>
        </div>

        {/* Background Image */}
        <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 z-1 dark:hidden' />
      </motion.div>
    </div>
  )
}

export default Hero