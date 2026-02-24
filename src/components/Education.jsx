import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const educations = [
    {
        degree: 'MCA in Artificial Intelligence & Machine Learning',
        institution: 'Jain (Deemed-to-be University)',
        location: 'Bangalore',
        duration: 'Aug 2024 – Present',
        status: 'Final Semester',
        yearNode: '2024 - Present',
        active: true,
        focusAreas: ['Machine Learning', 'Deep Learning', 'NLP', 'Data Analytics', 'Programming'],
        learnings: [
            'Built real-world applications and intelligent systems',
            'Strengthened analytical and system thinking logic',
            'Applied AI concepts practically in scalable environments',
            'Developed a product and operations mindset'
        ],
        highlights: {
            projects: 'PulmoScan, AI Demand Forecasting',
            tools: 'Python, TensorFlow, Hugging Face, Power BI',
        }
    },
    {
        degree: 'Bachelor of Computer Applications',
        institution: 'Maharaja Ganga Singh University',
        location: 'Bikaner',
        duration: 'Aug 2021 – May 2024',
        status: 'Graduated',
        yearNode: '2021 - 2024',
        active: false,
        focusAreas: ['Programming', 'Data Structures', 'Web Development', 'Algorithms'],
        learnings: [
            'Mastered foundational programming concepts and engineering',
            'Developed full-stack web applications and platforms',
            'Collaborated effectively on team-based tech projects',
            'Built strong problem-solving logic and algorithm skills'
        ],
        highlights: {
            projects: 'Foody Go (MERN)',
            tools: 'C++, Java, React, MongoDB',
        }
    }
];

export default function Education() {
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <section id="education" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center md:text-left"
            >
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-pink-600 bg-pink-100 rounded-full dark:text-pink-400 dark:bg-pink-900/30">
                    Academics
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">Educational <span className="text-gradient hover:from-pink-500 hover:to-orange-500 transition-colors">Background</span></h2>
            </motion.div>

            <div className="max-w-5xl mx-auto relative">
                {/* Desktop Timeline Line */}
                <div className="hidden md:block absolute left-[30%] top-8 bottom-0 w-px bg-gradient-to-b from-pink-500 via-purple-500 to-transparent opacity-20 dark:opacity-40 z-0 transform -translate-x-1/2"></div>
                {/* Mobile Timeline Line */}
                <div className="md:hidden absolute left-8 top-8 bottom-0 w-px bg-gradient-to-b from-pink-500 via-purple-500 to-transparent opacity-20 dark:opacity-40 z-0"></div>

                <div className="space-y-12 md:space-y-16">
                    {educations.map((edu, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row relative z-10 group">

                            {/* Left Side: Timeline Node (30% Width) */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="md:w-[30%] shrink-0 flex items-center md:items-start md:justify-end pl-4 md:pl-0 pt-6"
                            >
                                {/* Mobile Timeline Dot */}
                                <div className={`
                                    md:hidden w-8 h-8 rounded-full border-4 flex items-center justify-center shrink-0 shadow-lg z-10 bg-white dark:bg-[#0a0a0a] transition-colors duration-300
                                    ${edu.active ? 'border-pink-500 shadow-pink-500/20' : 'border-gray-200 dark:border-gray-800'}
                                `}>
                                    <div className={`w-2 h-2 rounded-full ${edu.active ? 'bg-pink-500' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
                                </div>

                                {/* Mobile Year Text */}
                                <div className={`md:hidden ml-6 font-bold tracking-wide ${edu.active ? 'text-pink-500' : 'text-gray-500'}`}>
                                    {edu.yearNode}
                                </div>

                                {/* Desktop Timeline Node */}
                                <div className={`
                                    hidden md:flex absolute left-[30%] transform -translate-x-1/2 px-5 py-2 rounded-full border-2 bg-white dark:bg-[#0a0a0a] font-bold text-sm items-center justify-center shadow-lg transition-all duration-300 z-10
                                    ${edu.active ? 'border-pink-500 text-pink-600 dark:text-pink-400 shadow-pink-500/20 shadow-xl group-hover:scale-105' : 'border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 group-hover:border-gray-300 dark:group-hover:border-gray-600'}
                                `}>
                                    {edu.yearNode}
                                </div>
                            </motion.div>

                            {/* Right Side: Detailed Card (70% Width) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 + 0.1 }}
                                className="md:w-[70%] md:pl-16 pl-16 mt-4 md:mt-0"
                            >
                                <div className={`glass-card p-6 md:p-8 rounded-[2rem] border-2 transition-all duration-300 hover:-translate-y-1 ${edu.active ? 'border-pink-500/30 shadow-2xl shadow-pink-500/10 dark:shadow-pink-500/5' : 'border-transparent hover:border-gray-200 dark:hover:border-white/10'}`}>

                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 text-gray-900 dark:text-white">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300">
                                                {edu.institution} <span className="text-gray-400 font-normal hidden sm:inline-block">— {edu.location}</span>
                                            </p>
                                            <p className="sm:hidden text-gray-400 font-medium text-sm mt-1">{edu.location}</p>
                                        </div>
                                        <div className="shrink-0">
                                            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold ${edu.active ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                                                {edu.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4 text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                        <span>{edu.duration}</span>
                                    </div>

                                    {/* Focus Areas Chips */}
                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {edu.focusAreas.map(area => (
                                            <span key={area} className="px-3 py-1.5 bg-gray-50 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg border border-gray-100 dark:border-white/5 shadow-sm group-hover:border-pink-500/20 transition-colors">
                                                {area}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setExpandedIndex(expandedIndex === idx ? -1 : idx)}
                                        className="mt-8 flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-pink-500 transition-colors"
                                    >
                                        {expandedIndex === idx ? 'Hide course details' : 'View coursework details'}
                                        <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedIndex === idx ? 'rotate-180 text-pink-500' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {expandedIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/5 space-y-6">
                                                    <div>
                                                        <h4 className="text-xs font-bold uppercase tracking-widest text-pink-500 shrink-0 mb-4">What I Learned</h4>
                                                        <ul className="space-y-3 mt-3">
                                                            {edu.learnings.map((l, lIdx) => (
                                                                <li key={lIdx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
                                                                    <CheckCircle2 size={16} className="text-pink-500 shrink-0 mt-0.5 opacity-80" />
                                                                    <span className="leading-relaxed">{l}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {edu.highlights && (
                                                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                                                            {edu.highlights.projects && (
                                                                <div className="bg-gray-50 dark:bg-[#111111] p-4 rounded-xl border border-gray-100 dark:border-white/5">
                                                                    <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1.5">Key Projects</span>
                                                                    <span className="block text-sm font-bold text-gray-800 dark:text-gray-200">{edu.highlights.projects}</span>
                                                                </div>
                                                            )}
                                                            {edu.highlights.tools && (
                                                                <div className="bg-gray-50 dark:bg-[#111111] p-4 rounded-xl border border-gray-100 dark:border-white/5">
                                                                    <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1.5">Core Tech Stack</span>
                                                                    <span className="block text-sm font-bold text-gray-800 dark:text-gray-200">{edu.highlights.tools}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
