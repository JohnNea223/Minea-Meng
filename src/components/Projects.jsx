import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { 
  ExternalLink, 
  Code2, 
  Layers, 
  Server, 
  Database, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Terminal,
  FileCode2,
  FolderGit2
} from 'lucide-react';
import { GithubIcon as Github } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [expandedSnippet, setExpandedSnippet] = useState(null);

  const toggleSnippet = (projectId) => {
    setExpandedSnippet(prev => prev === projectId ? null : projectId);
  };

  const filteredProjects = projectsData.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return p.category.includes('Full-Stack') || p.category.includes('Responsive');
    if (filter === 'backend') return p.category.includes('Backend') || p.category.includes('Database');
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 mb-2 font-bold">
              <span className="w-6 h-[2px] bg-indigo-600 dark:bg-cyan-400"></span>
              03 / Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Projects with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 dark:from-indigo-400 dark:via-sky-400 dark:to-cyan-300">Engineering Intent.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xs sm:text-right">
            Production-grade RESTful APIs, responsive interfaces, and relational database systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'bg-white dark:bg-[#0d1322] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm'
            }`}
          >
            All Projects ({projectsData.length})
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              filter === 'fullstack'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'bg-white dark:bg-[#0d1322] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm'
            }`}
          >
            Full-Stack &amp; Web Apps
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFilter('backend')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              filter === 'backend'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'bg-white dark:bg-[#0d1322] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm'
            }`}
          >
            Backend APIs &amp; Databases
          </motion.button>
        </div>

        {/* Projects List with Framer Motion hover & press */}
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-lg shadow-slate-200/40 dark:shadow-none hover:border-indigo-500/60 dark:hover:border-cyan-400/60 transition-colors duration-300"
            >
              {/* Card Header Topline */}
              <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-slate-50 dark:bg-[#080c14] border-b border-slate-100 dark:border-slate-800 gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-cyan-400">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-500/30">
                      FEATURED SHOWCASE
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{project.demoStatus}</span>
                </div>
              </div>

              {/* Card Main Body */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Details & Features */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Feature Checklist */}
                      <div className="mb-6 space-y-2.5">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 font-bold block mb-2">
                          Key Capabilities &amp; Architecture:
                        </span>
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={15} className="text-indigo-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges & Actions */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-[#070a13] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {project.github && (
                          <motion.a
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white transition-all shadow-sm"
                          >
                            <Github size={16} />
                            <span>Source Repository</span>
                          </motion.a>
                        )}

                        {project.liveDemo && (
                          <motion.a
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md shadow-indigo-500/25"
                          >
                            <span>Live Application</span>
                            <ExternalLink size={14} />
                          </motion.a>
                        )}

                        {project.codeSnippet && (
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => toggleSnippet(project.id)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-indigo-600 dark:text-cyan-400 hover:bg-indigo-50 dark:hover:bg-cyan-500/10 transition-all"
                          >
                            <Code2 size={16} />
                            <span>{expandedSnippet === project.id ? 'Hide Code' : 'View Code Snippet'}</span>
                            {expandedSnippet === project.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Architecture Highlights & Stats */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div className="rounded-2xl p-5 bg-slate-50 dark:bg-[#070a13] border border-slate-200/80 dark:border-slate-800 mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block mb-3">
                        Technical Highlights
                      </span>

                      <div className="space-y-3">
                        {project.architectureHighlights?.map((item, aIdx) => (
                          <div key={aIdx} className="pb-2.5 border-b border-slate-200/60 dark:border-slate-800/80 last:border-b-0 last:pb-0">
                            <span className="text-xs font-bold text-indigo-600 dark:text-cyan-400 block">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed block mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats pills */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {project.stats?.map((st, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#070a13] border border-slate-200/80 dark:border-slate-800">
                          <span className="block text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                            {st.value}
                          </span>
                          <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                            {st.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Expandable Code Snippet Drawer with AnimatePresence */}
                <AnimatePresence>
                  {expandedSnippet === project.id && project.codeSnippet && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
                    >
                      <div className="rounded-xl bg-[#080c14] border border-slate-800 overflow-hidden shadow-inner">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#060910] border-b border-slate-800 text-[11px] font-mono text-slate-400">
                          <span className="flex items-center gap-2">
                            <Terminal size={13} className="text-cyan-400" />
                            <span>Code Excerpt &bull; {project.title}</span>
                          </span>
                          <span>Sample Implementation</span>
                        </div>
                        <pre className="p-4 text-xs font-mono leading-relaxed text-slate-200 overflow-x-auto">
                          <code>{project.codeSnippet}</code>
                        </pre>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
