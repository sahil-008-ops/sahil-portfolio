import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
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

            <div className="relative pl-8 md:pl-0 max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-blue-500 to-transparent transform -translate-x-1/2 opacity-20 dark:opacity-40"></div>
                <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-blue-500 to-transparent opacity-20 dark:opacity-40"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative md:w-1/2 md:pr-16 md:ml-auto md:pl-16 ml-4 mt-8"
                >
                    {/* Timeline Dot */}
                    <div className="absolute top-8 -left-12 md:left-0 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-emerald-500 flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20">
                        <Briefcase size={16} className="text-emerald-500" />
                    </div>

                    <div className="glass-card p-8 rounded-[2rem] hover:border-emerald-500/30 transition-all duration-300 group relative overflow-hidden shadow-xl shadow-emerald-500/5">
                        <div className="absolute top-0 right-0 p-16 opacity-0 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 bg-gradient-to-bl from-emerald-500 to-transparent rounded-full pointer-events-none"></div>

                        <div className="flex flex-col mb-6 gap-3">
                            <span className="text-sm font-bold tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-1.5 rounded-full w-fit">
                                Scaler
                            </span>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                                Operations Management / QA Intern
                            </h3>
                            <p className="text-gray-500 text-sm font-medium">Present</p>
                        </div>

                        <ul className="space-y-4">
                            {[
                                'Led QA reviewers to ensure high accuracy data evaluation',
                                'Audited AI data pipelines ensuring top-tier quality standards',
                                'Reduced turnaround time significantly by streamlining operations',
                                'Standardized review flows across cross-functional teams',
                                'Tracked SLAs & KPIs to measure and boost overall productivity'
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    className="flex items-start gap-4 text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base"
                                >
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                                    <span className="leading-relaxed">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
