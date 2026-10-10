import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
    // Default the first experience to expanded (or index 0)
    const [expandedIndex, setExpandedIndex] = useState(0);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <section id="experience" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center md:text-left"
            >
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-emerald-600 bg-emerald-100 rounded-full dark:text-emerald-400 dark:bg-emerald-900/30">
                    Work Experience
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">Professional <span className="text-gradient">Journey</span></h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto space-y-8">
                {/* Vertical Timeline Bar */}
                <div className="absolute left-6 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500 opacity-20 dark:opacity-40"></div>

                {experiences.map((exp, expIdx) => {
                    const isExpanded = expandedIndex === expIdx;

                    return (
                        <motion.div
                            key={expIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: expIdx * 0.1 }}
                            className="relative pl-14 md:pl-20"
                        >
                            {/* Timeline Dot Icon */}
                            <div className="absolute left-1 md:left-3 top-6 w-10 h-10 rounded-full bg-white dark:bg-[#0a0a0a] border-2 border-emerald-500 flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20">
                                <Briefcase size={16} className="text-emerald-500" />
                            </div>

                            <div className="glass-card p-6 md:p-8 rounded-[2rem] hover:border-emerald-500/30 transition-all duration-300 group relative overflow-hidden shadow-xl shadow-emerald-500/5">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <span className="text-xs font-bold tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3.5 py-1 rounded-full">
                                                {exp.company}
                                            </span>
                                            <span className="text-xs font-bold text-gray-400 dark:text-gray-500">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                            {exp.role}
                                        </h3>
                                    </div>

                                    <button
                                        onClick={() => toggleExpand(expIdx)}
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 font-bold text-xs transition-all w-fit shrink-0 shadow-sm"
                                        aria-label="Toggle work experience details"
                                    >
                                        <span>{isExpanded ? 'Hide Details' : `View Details (${exp.points.length} points)`}</span>
                                        <ChevronDown size={16} className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/5 space-y-4">
                                                <ul className="space-y-3.5">
                                                    {exp.points.map((item, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className="flex items-start gap-3.5 text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base"
                                                        >
                                                            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                                            <span className="leading-relaxed">{item}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
