import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "2738e7c3-8bc9-46d4-acac-071c74d03fa6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-16 pb-20 text-gray-700 dark:text-white"
    >
      
      <Title
        title="Reach out to us"
        desc="Ready to grow your brand? Let's connect and build something exceptional together."
      />

      <div className="grid lg:grid-cols-5 gap-12 max-w-7xl w-full">
        {/* Left Half - Get in Touch */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 lg:col-span-2"
        >
          <div>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-3">Contact Info</p>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Get in Touch</h2>
          </div>

          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Location:</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">Hyderabad, Telangana, India</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Email:</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">info@adityadigitalinnovations.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Phone:</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">+91 9876543210</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Working Hours:</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-lg text-gray-600 dark:text-gray-300">Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Half - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/85 to-gray-900/85 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-3xl p-8 lg:col-span-3"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold text-blue-400 tracking-wide uppercase mb-3">Write to Us</p>
            <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 text-sm bg-white/90 dark:bg-gray-800/90 backdrop-blur-md outline-none rounded-2xl border-2 border-transparent focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white font-medium transition-all duration-300"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 text-sm bg-white/90 dark:bg-gray-800/90 backdrop-blur-md outline-none rounded-2xl border-2 border-transparent focus:border-purple-400 focus:bg-white dark:focus:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white font-medium transition-all duration-300"
                required
              />
            </div>
            
            <div>
              <textarea
                rows={5}
                name="message"
                placeholder="Tell us about your project and how we can help you grow..."
                className="w-full p-4 text-sm bg-white/90 dark:bg-gray-800/90 backdrop-blur-md outline-none rounded-2xl border-2 border-transparent focus:border-indigo-400 focus:bg-white dark:focus:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white font-medium resize-none transition-all duration-300"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white text-sm font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl shadow-blue-500/40 hover:shadow-3xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-500 group border border-white/20 overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;