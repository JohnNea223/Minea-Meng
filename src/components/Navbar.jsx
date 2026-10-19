import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenCv }) {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'GitHub', href: '#activity', id: 'activity' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'activity', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#070a13]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Avatar */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group text-slate-900 dark:text-white focus:outline-none"
            aria-label="Meng Minea Home"
          >
            <div className="relative">
              <img
                src={personalInfo.avatar}
                alt="Meng Minea"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover object-top border-2 border-indigo-500/80 dark:border-cyan-400/80 shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#070a13]"></span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-base sm:text-lg group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
                Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm shadow-inner" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeSection === link.id
                    ? 'text-indigo-600 dark:text-cyan-300 bg-white dark:bg-[#11192e] shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & CV Trigger */}
          <div className="flex items-center gap-2.5">
            
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1322] text-slate-700 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-cyan-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all shadow-sm"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-600" />}
            </button>

            {/* Quick CV Button */}
            <button
              onClick={onOpenCv}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-cyan-600 dark:hover:from-indigo-500 dark:hover:to-cyan-500 text-white transition-all shadow-md shadow-indigo-500/25 transform hover:-translate-y-0.5"
              title="Open Curriculum Vitae"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1322] text-slate-700 dark:text-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0d1322]/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl animate-fadeIn">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeSection === link.id
                      ? 'text-indigo-600 dark:text-cyan-400 bg-indigo-50 dark:bg-cyan-500/10'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCv();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                >
                  <FileText size={15} />
                  <span>View Curriculum Vitae</span>
                </button>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
