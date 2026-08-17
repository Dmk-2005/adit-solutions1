import React from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const ContentWritingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-yellow-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-gray-700 dark:text-white">
      {/* Back Button */}
      <div className="px-6 sm:px-12 lg:px-24 xl:px-40 pt-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold hover:gap-3 transition-all duration-300"
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
          <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
            <img src={assets.content_icon} alt="Content Writing" className="w-8 h-8 invert brightness-0" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">Content Writing</h1>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-12 leading-relaxed">
          Good writing builds trust. We craft clear, compelling content that communicates your brand's value and encourages people to take action.
        </p>

        {/* What We Offer */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Website Copywriting', desc: 'Homepage, about page, service pages — written to engage visitors and turn them into customers.' },
              { title: 'Blog Writing', desc: 'Regular, well-researched blog posts that boost your SEO and keep your audience informed.' },
              { title: 'Product Descriptions', desc: 'Clear and persuasive descriptions that highlight features, benefits, and drive purchases.' },
              { title: 'Social Media Captions', desc: 'Short, punchy captions that match your brand tone and encourage engagement.' },
              { title: 'Ad Copywriting', desc: 'High-converting copy for Google Ads, Facebook Ads, and other paid campaigns.' },
              { title: 'Proofreading & Editing', desc: 'Polishing your existing content to ensure it is error-free and professional.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/60 border border-amber-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-bold text-lg text-amber-600 dark:text-amber-400 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/80 dark:bg-gray-800/60 rounded-2xl p-8 border border-amber-100 dark:border-gray-700 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            {[
              'Every piece of content is written with your audience in mind.',
              'SEO-friendly writing that helps you rank higher on Google.',
              'On-time delivery — no delays, no excuses.',
              'Revisions included until you are satisfied with the content.',
              'Simple, jargon-free language that your customers can actually understand.',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-5">Need content that actually connects with your audience?</p>
          <button
            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' }), 300); }}
            className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentWritingPage;
