import React, { useEffect } from 'react';
import { personalInfo, educationTimeline, skillsData, projectsData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white animate-fadeIn">
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#0d1322] text-slate-800 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 print:my-0 print:border-none print:shadow-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-[#070a13] border-b border-slate-200 dark:border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
              Curriculum Vitae — Meng Minea
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md shadow-indigo-500/20"
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-8">
          
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-5">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-indigo-500/70 dark:border-cyan-400/70 shadow-lg"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-indigo-600 dark:text-cyan-400 font-bold text-sm sm:text-base mt-0.5">
                  Web Developer &amp; Computer Science Student
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                  Royal University of Phnom Penh (Year 4) • ANT Scholarship Recipient
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300 sm:text-right">
              <div className="flex items-center sm:justify-end gap-2">
                <Mail size={13} className="text-indigo-600 dark:text-cyan-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
              </div>
              <div className="flex items-center sm:justify-end gap-2">
                <Phone size={13} className="text-indigo-600 dark:text-cyan-400" />
                <a href={`tel:${personalInfo.phoneRaw}`} className="hover:underline">{personalInfo.phone}</a>
              </div>
              <div className="flex items-center sm:justify-end gap-2">
                <MapPin size={13} className="text-indigo-600 dark:text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-2">
                <Github size={13} className="text-indigo-600 dark:text-cyan-400" />
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">github.com/JohnNea223</a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Education & Training */}
          <div className="py-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 font-bold mb-4">
              Education &amp; Practical Training
            </h2>
            <div className="space-y-4">
              {educationTimeline.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-xs text-indigo-600 dark:text-cyan-400 font-semibold">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 whitespace-nowrap sm:text-right">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="py-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 font-bold mb-4">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Frontend: </span>
                <span className="text-slate-600 dark:text-slate-300">React.js, Vue.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap 5</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Backend &amp; APIs: </span>
                <span className="text-slate-600 dark:text-slate-300">Node.js, Express.js, RESTful API Design, Middleware Architecture, Postman</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Databases: </span>
                <span className="text-slate-600 dark:text-slate-300">MySQL, Relational Schema Normalization, Foreign Key Constraints, MySQL Workbench</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Security &amp; Tools: </span>
                <span className="text-slate-600 dark:text-slate-300">JWT Token Auth, bcrypt Password Hashing, Input Sanitization, Git, GitHub, VS Code</span>
              </div>
            </div>
          </div>

          {/* Selected Practical Projects */}
          <div className="py-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 font-bold mb-4">
              Featured Software Projects
            </h2>
            <div className="space-y-4">
              {projectsData.slice(0, 3).map((proj) => (
                <div key={proj.id} className="border-l-2 border-indigo-500/60 pl-4 py-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {proj.title} <span className="text-xs font-normal text-slate-500">({proj.category})</span>
                    </h3>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {proj.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
