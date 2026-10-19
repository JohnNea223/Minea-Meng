import React from 'react';
import { motion } from 'framer-motion';
import { githubActivityData } from '../data/portfolioData';
import { Star, GitFork, ExternalLink, Code2, GitCommit, FolderGit2 } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

export default function GithubActivity() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="activity" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 mb-2 font-bold">
              <span className="w-6 h-[2px] bg-indigo-600 dark:bg-cyan-400"></span>
              05 / Open Source &amp; Git Hygiene
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Code Activity &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 dark:from-indigo-400 dark:via-sky-400 dark:to-cyan-300">Repositories.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xs sm:text-right">
            Consistent commit habits, structured branching, and clean documentation.
          </p>
        </div>

        {/* GitHub Metrics Overview Card with Framer Motion hover & press */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-none hover:border-indigo-500/50 dark:hover:border-cyan-400/50 transition-colors duration-300 mb-8 cursor-pointer"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-cyan-400">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>github.com/{githubActivityData.username}</span>
                  <a
                    href={githubActivityData.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {githubActivityData.bio}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-center">
              <div>
                <span className="block text-2xl font-extrabold text-slate-900 dark:text-white">
                  {githubActivityData.publicRepos}
                </span>
                <span className="block text-xs font-mono text-slate-500 dark:text-slate-400">
                  Public Repos
                </span>
              </div>
              <div className="w-[1px] h-8 bg-slate-200 dark:border-slate-800"></div>
              <div>
                <span className="block text-2xl font-extrabold text-indigo-600 dark:text-cyan-400">
                  {githubActivityData.totalContributions}+
                </span>
                <span className="block text-xs font-mono text-slate-500 dark:text-slate-400">
                  Contributions
                </span>
              </div>
            </div>
          </div>

          {/* Language Breakdown Bar */}
          <div className="pt-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-2 font-medium">
              <span>Codebase Language Breakdown</span>
              <span>Primary focus: Full-Stack &amp; SQL</span>
            </div>

            {/* Stacked Percentage Bar */}
            <div className="h-3 rounded-full overflow-hidden flex bg-slate-100 dark:bg-slate-800 mb-4">
              {githubActivityData.primaryLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percent}%`}
                  className="h-full transition-all hover:opacity-85"
                ></div>
              ))}
            </div>

            {/* Language Legend */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              {githubActivityData.primaryLanguages.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }}></span>
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-slate-400 dark:text-slate-400 font-normal">({lang.percent}%)</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pinned Repositories Grid with Framer Motion hover & press */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {githubActivityData.repos.map((repo, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="p-5 rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-cyan-400/50 transition-colors duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl dark:shadow-none cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FolderGit2 size={16} className="text-indigo-600 dark:text-cyan-400" />
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                      <a href={`https://github.com/${githubActivityData.username}/${repo.name}`} target="_blank" rel="noreferrer">
                        {repo.name}
                      </a>
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400">
                    {repo.updated}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }}></span>
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-amber-500" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={13} className="text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
