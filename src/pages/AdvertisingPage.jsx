import React from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const AdvertisingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-gray-700 dark:text-white">
      {/* Back Button */}
      <div className="px-6 sm:px-12 lg:px-24 xl:px-40 pt-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="px-6 sm:px-12 lg:px-24 xl:px-40 pt-10 pb-20">
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#069aed] to-blue-600 shadow-lg">
            <img src={assets.ads_icon} alt="Advertising" className="w-8 h-8 invert brightness-0" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">Advertising</h1>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-12 leading-relaxed">
          We create and manage strategic ad campaigns across the most powerful digital platforms to help your business reach the right audience at the right time.
        </p>

        {/* What We Offer */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Google Ads', desc: 'Search, display, and shopping campaigns that put your business in front of people actively looking for what you offer.' },
              { title: 'Facebook & Instagram Ads', desc: 'Targeted social media ads that build brand awareness and drive conversions through compelling creatives.' },
              { title: 'Retargeting Campaigns', desc: 'Re-engage visitors who have already shown interest in your products or services.' },
              { title: 'Ad Creatives', desc: 'Eye-catching visuals and copy that grab attention and inspire action.' },
              { title: 'Campaign Optimization', desc: 'Continuous monitoring and tweaking of campaigns to improve performance and lower costs.' },
              { title: 'Performance Reporting', desc: 'Clear, transparent reports showing exactly how your ad budget is performing.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/60 border border-blue-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/80 dark:bg-gray-800/60 rounded-2xl p-8 border border-blue-100 dark:border-gray-700 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            {[
              'We focus on ROI — every rupee spent is tracked and optimized.',
              'Transparent reporting with no hidden costs.',
              'Campaigns tailored specifically for your business goals.',
              'We work with small and growing businesses, not just big brands.',
              'Dedicated support and regular check-ins to discuss results.',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-5">Ready to grow your business with targeted advertising?</p>
          <button
            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' }), 300); }}
            className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingPage;
