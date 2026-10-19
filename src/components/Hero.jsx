import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Code2, 
  Sparkles,
  Server,
  Layers,
  Database,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

export default function Hero({ onOpenCv }) {
  const [activeCodeTab, setActiveCodeTab] = useState('developer');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const codeSnippets = {
    developer: [
      { line: '01', content: <><span className="text-indigo-400">const</span> <span className="text-amber-300">developer</span> = {'{'}</> },
      { line: '02', content: <>&nbsp;&nbsp;<span className="text-slate-400">name:</span> <span className="text-emerald-400">"{personalInfo.name}"</span>,</> },
      { line: '03', content: <>&nbsp;&nbsp;<span className="text-slate-400">role:</span> <span className="text-emerald-400">"Web Developer"</span>,</> },
      { line: '04', content: <>&nbsp;&nbsp;<span className="text-slate-400">university:</span> <span className="text-emerald-400">"RUPP (Year 4 CS & Engineering)"</span>,</> },
      { line: '05', content: <>&nbsp;&nbsp;<span className="text-slate-400">scholarship:</span> <span className="text-emerald-400">"ANT Training & Technology"</span>,</> },
      { line: '06', content: <>&nbsp;&nbsp;<span className="text-slate-400">coreStack:</span> [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Vue"</span>, <span className="text-cyan-300">"Node.js"</span>, <span className="text-cyan-300">"MySQL"</span>],</> },
      { line: '07', content: <>&nbsp;&nbsp;<span className="text-slate-400">securityMindset:</span> <span className="text-indigo-400">true</span>,</> },
      { line: '08', content: <>&nbsp;&nbsp;<span className="text-slate-400">availableForHire:</span> <span className="text-indigo-400">true</span></> },
      { line: '09', content: <>{'}'};</> },
      { line: '10', content: <><span className="text-slate-500">// Engineering clean, secure, dependable web systems</span></> }
    ],
    api: [
      { line: '01', content: <><span className="text-indigo-400">import</span> express <span className="text-indigo-400">from</span> <span className="text-emerald-400">'express'</span>;</> },
      { line: '02', content: <><span className="text-indigo-400">import</span> {'{'} verifyJWT, hashPassword {'}'} <span className="text-indigo-400">from</span> <span className="text-emerald-400">'./auth'</span>;</> },
      { line: '03', content: <><span className="text-indigo-400">const</span> router = express.Router();</> },
      { line: '04', content: <></> },
      { line: '05', content: <><span className="text-slate-500">// Protected SkillHire recruitment endpoint</span></> },
      { line: '06', content: <><span className="text-amber-300">router</span>.post(<span className="text-emerald-400">'/api/jobs/apply'</span>, verifyJWT, <span className="text-indigo-400">async</span> (req, res) =&gt; {'{'}</> },
      { line: '07', content: <>&nbsp;&nbsp;<span className="text-indigo-400">const</span> {'{'} jobId, candidateId {'}'} = req.body;</> },
      { line: '08', content: <>&nbsp;&nbsp;<span className="text-indigo-400">await</span> db.query(<span className="text-emerald-400">'INSERT INTO applications...'</span>);</> },
      { line: '09', content: <>&nbsp;&nbsp;res.status(<span className="text-amber-300">201</span>).json({'{'} status: <span className="text-emerald-400">'SUCCESS'</span> {'}'});</> },
      { line: '10', content: <>{'}'});</> }
    ],
    database: [
      { line: '01', content: <><span className="text-indigo-400">CREATE TABLE</span> <span className="text-amber-300">candidates</span> ({'('}</> },
      { line: '02', content: <>&nbsp;&nbsp;<span className="text-slate-300">candidate_id</span> <span className="text-indigo-400">INT AUTO_INCREMENT PRIMARY KEY</span>,</> },
      { line: '03', content: <>&nbsp;&nbsp;<span className="text-slate-300">email</span> <span className="text-indigo-400">VARCHAR(255) UNIQUE NOT NULL</span>,</> },
      { line: '04', content: <>&nbsp;&nbsp;<span className="text-slate-300">password_hash</span> <span className="text-indigo-400">CHAR(60) NOT NULL</span>,</> },
      { line: '05', content: <>&nbsp;&nbsp;<span className="text-slate-300">created_at</span> <span className="text-indigo-400">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span></> },
      { line: '06', content: <>{')'} <span className="text-indigo-400">ENGINE=InnoDB DEFAULT CHARSET=utf8mb4</span>;</> },
      { line: '07', content: <></> },
      { line: '08', content: <><span className="text-slate-500">// Normalized relations with strict foreign key integrity</span></> },
      { line: '09', content: <><span className="text-indigo-400">ALTER TABLE</span> <span className="text-amber-300">applications</span></> },
      { line: '10', content: <>&nbsp;&nbsp;<span className="text-indigo-400">ADD CONSTRAINT</span> fk_candidate <span className="text-indigo-400">FOREIGN KEY</span>...</> }
    ]
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Bio, Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status & Location Pill */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0d1322]/80 text-xs text-slate-700 dark:text-slate-300 mb-6 backdrop-blur-sm shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Available for Opportunities</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <MapPin size={12} className="text-indigo-500 dark:text-cyan-400" />
                {personalInfo.location}
              </span>
            </motion.div>

            {/* Subtitle / Role Badge */}
            <motion.div variants={itemVariants} className="mb-3">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 font-bold flex items-center gap-2">
                <span className="w-5 h-[2px] bg-indigo-600 dark:bg-cyan-400 inline-block"></span>
                Web Developer &amp; Computer Science Student
              </span>
            </motion.div>

            {/* Compelling Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6"
            >
              Building Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 dark:from-indigo-400 dark:via-sky-400 dark:to-cyan-300">Web Experiences</span>, One Line of Code at a Time.
            </motion.h1>

            {/* Intro Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              Hello! I'm <strong className="text-slate-900 dark:text-white font-bold">{personalInfo.name}</strong>, a fourth-year Computer Science &amp; Engineering student at the Royal University of Phnom Penh and a Web Development Scholarship recipient at ANT Training. I specialize in crafting reactive frontend applications, secure RESTful APIs, and reliable MySQL databases.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <motion.button
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white shadow-lg shadow-indigo-500/25 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={onOpenCv}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0d1322] text-slate-800 dark:text-slate-200 hover:border-indigo-500 dark:hover:border-cyan-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all shadow-sm"
              >
                <Download size={16} className="text-indigo-600 dark:text-cyan-400" />
                <span>Download My CV</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50 transition-all"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </motion.button>
            </motion.div>

            {/* Social Links & Trust Badges */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-800 w-full">
              <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1322] text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-400 dark:hover:border-cyan-400 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1322] text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-400 dark:hover:border-cyan-400 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1322] text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-400 dark:hover:border-cyan-400 transition-all shadow-sm"
                  aria-label="Direct Email"
                  title="Send Email"
                >
                  <Mail size={18} />
                </motion.a>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <ShieldCheck size={15} className="text-emerald-500" />
                <span>Security by Default</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Meng Minea's Portrait & Interactive Code Studio */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Portrait Card with Framer Motion hover & press */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative rounded-2xl p-1 bg-gradient-to-b from-indigo-500/20 via-sky-500/10 to-transparent dark:from-indigo-500/30 dark:via-cyan-500/20 dark:to-transparent shadow-xl group cursor-pointer transition-colors duration-300 hover:border-indigo-500/50"
            >
              <div className="relative rounded-xl overflow-hidden bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-sm">
                
                {/* Photo & Identity Row */}
                <div className="flex items-center gap-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-indigo-500/70 dark:border-cyan-400/70 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={personalInfo.avatar}
                        alt="Meng Minea"
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    {/* Live indicator dot on avatar */}
                    <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0d1322] shadow"></span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-500/30 mb-1.5">
                      <Sparkles size={11} />
                      Full-Stack Mindset
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white truncate">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">
                      RUPP Year 4 CS &bull; ANT Scholarship
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 flex-wrap">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        React &amp; Vue
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        Node &amp; Express
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        MySQL
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick stats mini-bar */}
                <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#070a13] border border-slate-100 dark:border-slate-800/80">
                    <span className="block text-base sm:text-lg font-extrabold text-indigo-600 dark:text-cyan-400">4+</span>
                    <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400">Projects</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#070a13] border border-slate-100 dark:border-slate-800/80">
                    <span className="block text-base sm:text-lg font-extrabold text-emerald-600 dark:text-emerald-400">100+</span>
                    <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400">APIs Tested</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#070a13] border border-slate-100 dark:border-slate-800/80">
                    <span className="block text-base sm:text-lg font-extrabold text-amber-500 dark:text-amber-400">4th Yr</span>
                    <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400">CS at RUPP</span>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Interactive Code IDE Visual */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="relative rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-xl overflow-hidden backdrop-blur-xl"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080c14] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">meng-minea.dev</span>
                </div>
                
                {/* File Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveCodeTab('developer')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeCodeTab === 'developer'
                        ? 'bg-slate-800 text-cyan-300 font-semibold shadow-inner'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Developer.js
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('api')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeCodeTab === 'api'
                        ? 'bg-slate-800 text-cyan-300 font-semibold shadow-inner'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    routes.js
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('database')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeCodeTab === 'database'
                        ? 'bg-slate-800 text-cyan-300 font-semibold shadow-inner'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    schema.sql
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 font-mono text-xs leading-relaxed text-slate-200 overflow-x-auto min-h-[220px]">
                {codeSnippets[activeCodeTab].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start hover:bg-slate-800/40 -mx-2 px-2 py-0.5 rounded">
                    <span className="text-slate-600 select-none text-right w-5 flex-shrink-0 text-[11px]">
                      {item.line}
                    </span>
                    <span className="flex-1 whitespace-pre font-mono">
                      {item.content}
                    </span>
                  </div>
                ))}
              </div>

              {/* Window Footer Status */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#080c14] border-t border-slate-800 text-[10px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>SYSTEM READY • Vite + React</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span>ES6 / MySQL</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Ticker / Strengths Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              FRONTEND: React.js &amp; Vue.js
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              BACKEND: Node.js &amp; Express.js
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              DATABASE: MySQL &amp; Relational Schemas
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              SECURITY: JWT, bcrypt &amp; Defensive Logic
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              SCHOLARSHIP: ANT Training 2025
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
