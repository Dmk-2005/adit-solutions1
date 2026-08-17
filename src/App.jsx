import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import AdvertisingPage from './pages/AdvertisingPage'
import ContentMarketingPage from './pages/ContentMarketingPage'
import ContentWritingPage from './pages/ContentWritingPage'
import SocialMediaPage from './pages/SocialMediaPage'

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') return saved
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

const MainLayout = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sidebarOpen]);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black transition-colors">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 backdrop-blur-sm"></div>
      <div className="fixed top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="fixed top-20 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="fixed bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-r from-rose-400/15 to-orange-400/15 rounded-full blur-3xl animate-pulse delay-3000"></div>
      <div className="relative z-10">
        <Toaster />
        <Navbar theme={theme} setTheme={setTheme} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Hero />
        <About />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />
        <Footer theme={theme} />
      </div>
    </div>
  )
}

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout theme={theme} setTheme={setTheme} />} />
        <Route path="/services/advertising" element={<AdvertisingPage />} />
        <Route path="/services/content-marketing" element={<ContentMarketingPage />} />
        <Route path="/services/content-writing" element={<ContentWritingPage />} />
        <Route path="/services/social-media" element={<SocialMediaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
