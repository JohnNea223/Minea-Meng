import React from 'react';
import { motion } from 'framer-motion';
import { educationTimeline } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 mb-2 font-bold">
              <span className="w-6 h-[2px] bg-indigo-600 dark:bg-cyan-400"></span>
              04 / Education &amp; Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Academic Foundation &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 dark:from-indigo-400 dark:via-sky-400 dark:to-cyan-300">Scholarship Journey.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xs sm:text-right">
            Rigorous university computer science coupled with specialized scholarship training.
          </p>
        </div>

        {/* Timeline Cards with Framer Motion hover & press */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12"
        >
          {educationTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-[#070a13] border-4 border-indigo-600 dark:border-cyan-400 shadow-md group-hover:scale-125 transition-transform duration-200"></div>

              {/* Content Card with lift & scale */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-none hover:border-indigo-500/50 dark:hover:border-cyan-400/50 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-500/30">
                      {idx === 0 ? <GraduationCap size={18} /> : idx === 1 ? <Award size={18} /> : <Sparkles size={18} />}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm font-bold text-indigo-600 dark:text-cyan-400">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#080c14] px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 w-fit font-bold">
                    <Calendar size={13} className="text-indigo-600 dark:text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Highlights */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 font-bold block mb-2">
                    Key Focus Areas &amp; Accomplishments:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
