import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070a13] py-12 relative transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Mission */}
          <div className="flex items-center gap-3">
            <img
              src={personalInfo.avatar}
              alt="Meng Minea"
              className="w-10 h-10 rounded-xl object-cover object-top border-2 border-indigo-500/60 dark:border-cyan-400/60 shadow-sm"
            />
            <div>
              <span className="font-extrabold text-slate-900 dark:text-white text-sm block">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block font-medium">
                Web Developer &bull; Computer Science &amp; Engineering
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#0d1322] dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#0d1322] dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#0d1322] dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>&copy; {new Date().getFullYear()} Meng Minea. Phnom Penh, Cambodia.</span>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#0d1322] dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all flex items-center gap-1 shadow-sm"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
