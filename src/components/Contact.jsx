import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-400 mb-2 font-bold">
              <span className="w-6 h-[2px] bg-indigo-600 dark:bg-cyan-400"></span>
              06 / Opportunities &amp; Contact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Ready to Build Together? <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 dark:from-indigo-400 dark:via-sky-400 dark:to-cyan-300">Let's Connect.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xs sm:text-right">
            Open for junior software developer roles, internships, and collaborative builds.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards & Snapshot */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Profile Tag with hover & press */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-2xl p-6 bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-none hover:border-indigo-500/50 dark:hover:border-cyan-400/50 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="overflow-hidden rounded-2xl border-2 border-indigo-500/70 dark:border-cyan-400/70 shadow-md">
                  <img
                    src={personalInfo.avatar}
                    alt="Meng Minea"
                    className="w-16 h-16 object-cover object-top transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-cyan-400 font-mono font-semibold">
                    Web Developer &bull; CSE Student
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Based in Phnom Penh, Cambodia
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I am actively seeking junior full-stack or backend engineering positions where I can apply my skills in React, Node.js, Express, and MySQL while contributing to production systems.
              </p>
            </motion.div>

            {/* Email Card with One-Click Copy */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 flex items-center justify-between gap-4 shadow-sm hover:shadow-md dark:shadow-none transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-cyan-400">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 block font-bold">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1.5 text-xs font-mono font-semibold shadow-sm"
                title="Copy email"
              >
                {copiedType === 'email' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copiedType === 'email' ? 'Copied' : 'Copy'}</span>
              </motion.button>
            </motion.div>

            {/* Phone Card with One-Click Copy */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 flex items-center justify-between gap-4 shadow-sm hover:shadow-md dark:shadow-none transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 block font-bold">
                    Phone &amp; Telegram
                  </span>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1.5 text-xs font-mono font-semibold shadow-sm"
                title="Copy phone"
              >
                {copiedType === 'phone' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copiedType === 'phone' ? 'Copied' : 'Copy'}</span>
              </motion.button>
            </motion.div>

            {/* Social Links Bar */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 flex items-center justify-between shadow-sm dark:shadow-none">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                Professional Profiles
              </span>
              <div className="flex items-center gap-2">
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                  aria-label="Email"
                >
                  <Mail size={17} />
                </motion.a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none"
            >
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Fill in your project or opportunity details below. I respond within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-3">
                    <Check size={24} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Your default email client was opened with your message. Thank you for reaching out!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080c14] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-bold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080c14] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Junior Web Developer Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080c14] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-bold">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Meng Minea, I came across your portfolio and would love to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080c14] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white shadow-lg shadow-indigo-500/25 transition-all"
                  >
                    <Send size={16} />
                    <span>Send Inquiry Message</span>
                  </motion.button>
                </form>
              )}

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
