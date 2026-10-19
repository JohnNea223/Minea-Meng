import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  Bug, 
  Award, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';

export default function About({ onOpenCv }) {
  const getInterestIcon = (title) => {
    switch (title) {
      case 'Full-Stack Web Development':
        return <Layers size={20} className="text-indigo-600 dark:text-indigo-400" />;
      case 'Backend API Development':
        return <Server size={20} className="text-sky-600 dark:text-cyan-400" />;
      case 'Database Design & Management':
        return <Database size={20} className="text-emerald-600 dark:text-emerald-400" />;
      case 'Web Application Security':
        return <ShieldCheck size={20} className="text-amber-600 dark:text-amber-400" />;
      case 'Software Testing & Debugging':
        return <Bug size={20} className="text-rose-600 dark:text-rose-400" />;
      case 'Continuous Learning & Problem Solving':
      default:
        return <GraduationCap size={20} className="text-purple-600 dark:text-purple-400" />;
    }
  };

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
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 mb-2 font-bold">
              <span className="w-6 h-[2px] bg-indigo-600 dark:bg-cyan-400"></span>
              01 / About Me
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Curious Mind. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 dark:from-indigo-400 dark:via-sky-400 dark:to-cyan-300">Practical Builder.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xs sm:text-right">
            Committed to solid foundations, clean architectures, and disciplined engineering.
          </p>
        </div>

        {/* Narrative & Developer Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Narrative Bio */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            {aboutData.introduction.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-500/10 dark:hover:bg-indigo-500/20 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-500/30 transition-all shadow-sm"
              >
                <span>Read detailed curriculum vitae</span>
                <ArrowUpRight size={16} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50 transition-all"
              >
                <span>Let's talk opportunities</span>
              </motion.a>
            </div>
          </div>

          {/* Clean Information Card with Framer Motion hover & press */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none relative overflow-hidden group cursor-pointer transition-colors duration-300 hover:border-indigo-500/50"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="overflow-hidden rounded-xl border-2 border-indigo-500/60 dark:border-cyan-400/60 shadow-md">
                  <img
                    src={personalInfo.avatar}
                    alt="Meng Minea"
                    className="w-14 h-14 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                    Meng Minea
                  </h3>
                  <span className="text-xs text-indigo-600 dark:text-cyan-400 font-mono font-semibold">
                    Candidate Snapshot &amp; Status
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {aboutData.infoCards.map((info, idx) => (
                  <div key={idx} className="flex flex-col pb-3 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0 last:pb-0">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 font-medium">
                      {info.label}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {info.value}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {info.detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 size={14} />
                  Verified Student &amp; Scholar
                </span>
                <span>Cambodia (UTC+7)</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Areas of Interest & Engineering Pillars - Staggered Animated Grid */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-400 font-bold">
              Core Engineering Focus Areas
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {aboutData.interests.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="p-5 rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-cyan-400/50 transition-colors duration-300 group shadow-sm hover:shadow-xl dark:shadow-none cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  {getInterestIcon(item.title)}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
