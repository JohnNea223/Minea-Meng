import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { 
  Layout, 
  Server, 
  Database, 
  ShieldAlert, 
  Wrench, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2,
  Code2
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Layout size={18} className="text-indigo-600 dark:text-indigo-400" />;
      case 'backend':
        return <Server size={18} className="text-sky-600 dark:text-cyan-400" />;
      case 'database':
        return <Database size={18} className="text-emerald-600 dark:text-emerald-400" />;
      case 'security':
        return <ShieldAlert size={18} className="text-amber-600 dark:text-amber-400" />;
      case 'tools':
      default:
        return <Wrench size={18} className="text-purple-600 dark:text-purple-400" />;
    }
  };

  const categoriesToDisplay = activeTab === 'all' 
    ? skillsData.categories 
    : skillsData.categories.filter(c => c.id === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 mb-2 font-bold">
              <span className="w-6 h-[2px] bg-indigo-600 dark:bg-cyan-400"></span>
              02 / Toolkit &amp; Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Skills Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 dark:from-indigo-400 dark:via-sky-400 dark:to-cyan-300">Production Reliability.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xs sm:text-right">
            Technologies mastered through university computer science and ANT scholarship training.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'bg-white dark:bg-[#0d1322] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm'
            }`}
          >
            All Disciplines ({skillsData.categories.reduce((acc, c) => acc + c.skills.length, 0)})
          </motion.button>

          {skillsData.categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'bg-white dark:bg-[#0d1322] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.title}</span>
              <span className="text-[11px] opacity-75 font-mono">({cat.skills.length})</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Cards Grid with Framer Motion hover & press */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categoriesToDisplay.map((cat) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-2xl p-6 bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-cyan-400/50 transition-colors duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl dark:shadow-none cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.15 }}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-[#070a13] border border-slate-100 dark:border-slate-800/80 group hover:border-indigo-400/40 dark:hover:border-cyan-400/40 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                          skill.level === 'Core'
                            ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-500/30'
                            : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        {skill.notes}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Defensive Engineering / Security Feature Callout Banner */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25 }}
          className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-emerald-500/10 via-white to-white dark:from-emerald-950/40 dark:via-[#0d1322] dark:to-[#0d1322] border border-emerald-500/30 shadow-lg dark:shadow-none flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                <span>Core Philosophy</span>
                <span>•</span>
                <span>Security by Design</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Security is Not an Afterthought — It is Built into Every Endpoint.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Whether implementing bcrypt password hashing with salt rounds, validating request schemas, issuing signed JWT tokens, or isolating CORS origins, security is treated as a baseline engineering requirement.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-200 dark:border-emerald-500/30 whitespace-nowrap font-bold">
            <CheckCircle2 size={15} />
            <span>OWASP Guidelines Aware</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
