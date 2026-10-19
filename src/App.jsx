import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#070a13] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Subtle Ambient Radial Glows */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none z-0"></div>

      {/* Background Texture Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 dark:opacity-100 pointer-events-none z-0"></div>

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar onOpenCv={() => setIsResumeOpen(true)} />
        
        <main>
          <Hero onOpenCv={() => setIsResumeOpen(true)} />
          <About onOpenCv={() => setIsResumeOpen(true)} />
          <Skills />
          <Projects />
          <Education />
          <GithubActivity />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
