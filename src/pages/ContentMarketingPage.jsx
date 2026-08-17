import React from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const ContentMarketingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/80 via-rose-50/60 to-purple-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-gray-700 dark:text-white">
      {/* Back Button */}
      <div className="px-6 sm:px-12 lg:px-24 xl:px-40 pt-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-pink-600 dark:text-pink-400 font-semibold hover:gap-3 transition-all duration-300"
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
          <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg">
            <img src={assets.marketing_icon} alt="Content Marketing" className="w-8 h-8 invert brightness-0" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">Content Marketing</h1>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-12 leading-relaxed">
          We help you build a strong content presence that attracts the right audience, builds trust, and converts visitors into loyal customers.
        </p>

        {/* What We Offer */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Content Strategy', desc: 'A clear, goal-driven plan for what content to create, when to publish, and where to distribute it.' },
              { title: 'Blog & Article Writing', desc: 'Well-researched, SEO-friendly articles that position your brand as an industry expert.' },
              { title: 'Email Campaigns', desc: 'Engaging email newsletters and drip campaigns that keep your audience connected to your brand.' },
              { title: 'Video Content Planning', desc: 'Script writing and content planning for YouTube, Reels, and other video platforms.' },
              { title: 'Infographics & Visuals', desc: 'Visual content that makes complex information easy to understand and share.' },
              { title: 'Content Calendar', desc: 'A structured schedule to ensure consistent and timely content delivery across all channels.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/60 border border-pink-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-bold text-lg text-pink-600 dark:text-pink-400 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/80 dark:bg-gray-800/60 rounded-2xl p-8 border border-pink-100 dark:border-gray-700 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            {[
              'Content crafted specifically for your target audience and industry.',
              'SEO-optimized writing to improve your organic search rankings.',
              'Consistent brand voice across all platforms and formats.',
              'Regular performance reviews to refine the content strategy.',
              'Affordable packages suitable for startups and growing businesses.',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-5">Want to build a content strategy that actually works?</p>
          <button
            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' }), 300); }}
            className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentMarketingPage;
