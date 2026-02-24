import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'PulmoScan',
        subtitle: 'Lung Cancer Classification',
        problem: 'Early detection of lung cancer is challenging and prone to human error.',
        approach: 'Built a deep learning model to classify lung CT scans with high accuracy.',
        tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
        outcome: 'Achieved 95% accuracy in classifying benign vs malignant nodules.',
        image: '/pulmoscan.png',
        color: 'from-blue-500 to-indigo-500',
        github: 'https://github.com/sahil-008-ops/PULMO-SCAN'
    },
    {
        title: 'Foody Go',
        subtitle: 'MERN Platform',
        problem: 'Inefficient food delivery ordering systems lacking real-time tracking.',
        approach: 'Developed a full-stack platform with user, vendor, and rider dashboards.',
        tech: ['MongoDB', 'Express', 'React', 'Node.js'],
        outcome: 'Streamlined order lifecycle, reducing average wait time tracking errors.',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
        color: 'from-orange-500 to-red-500'
    },
    {
        title: 'AI in SCM',
        subtitle: 'Demand Forecasting',
        problem: 'Supply chain inefficiencies leading to overstock and stockouts.',
        approach: 'Implemented time-series forecasting models using historical sales data.',
        tech: ['Python', 'Pandas', 'Scikit-Learn', 'Power BI'],
        outcome: 'Optimized inventory levels, projected to save 15% in carrying costs.',
        image: '/Ai Driven SCM.png',
        color: 'from-emerald-500 to-teal-500'
    },
    {
        title: 'CodeGuardian-AI',
        subtitle: 'AI-Powered Code Review & Quality Analysis',
        problem: 'Manual code reviews are time-consuming and often miss bugs, security issues, and code quality problems, leading to slower development and technical debt.',
        approach: 'Built an AI-powered tool that analyzes source code using static analysis and intelligent pattern detection to automatically identify issues and generate structured improvement suggestions.',
        tech: ['Python', 'AI / ML', 'Static Analysis', 'NLP'],
        outcome: 'Improved code quality consistency, reduced manual review effort, and enabled earlier detection of potential bugs and security risks.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
        color: 'from-purple-500 to-pink-500',
        github: 'https://github.com/sahil-008-ops/CodeGuardian-AI'
    },
    {
        title: 'EchoSense-AI',
        subtitle: 'AI-Based Audio Event Detection & Recognition',
        problem: 'Detecting and classifying meaningful audio events (e.g., alarms, speech, environmental sounds) manually or with traditional methods is inefficient and error-prone, especially across varied sound environments.',
        approach: 'Built EchoSense-AI, an AI-driven audio event detection system using signal processing and machine learning models to analyze audio input, identify key sound events, and classify them accurately in real time.',
        tech: ['Python', 'Signal Processing', 'Machine Learning', 'Audio Analysis'],
        outcome: 'Achieved reliable detection and classification of key audio events, improving accuracy over baseline methods and enabling potential integrations for monitoring systems, smart assistants, and sound analytics workflows.',
        image: '/Echosense.png',
        color: 'from-blue-400 to-cyan-500',
        github: 'https://github.com/sahil-008-ops/EchoSense-AI'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full dark:text-orange-400 dark:bg-orange-900/30">
                    Portfolio
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-full relative"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    {projects.map((project, idx) => (
                        <div key={idx} className="glass-card flex flex-col h-full rounded-[2.5rem] overflow-hidden group hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 relative">
                            <div className="h-56 md:h-64 overflow-hidden relative p-4 shrink-0">
                                <div className="absolute inset-0 bg-gray-100 dark:bg-[#1a1a1a]"></div>
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-multiply dark:mix-blend-screen z-10 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 relative z-0" />
                            </div>

                            <div className="p-8 md:p-10 flex-1 flex flex-col relative z-20 bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-md">
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl font-extrabold mb-1.5 text-gray-900 dark:text-white tracking-tight">{project.title}</h3>
                                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{project.subtitle}</p>
                                </div>

                                <div className="space-y-6 flex-1 mb-8">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">Problem</span>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{project.problem}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">Approach</span>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{project.approach}</p>
                                    </div>
                                    <div className="p-5 bg-gray-50/80 dark:bg-[#111111]/80 rounded-2xl border border-gray-100 dark:border-white/5 backdrop-blur-sm">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2 block">Outcome</span>
                                        <p className="text-sm font-bold text-gray-800 dark:text-gray-100 leading-relaxed">{project.outcome}</p>
                                    </div>
                                </div>

                                <div className="mt-auto flex flex-col gap-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(tech => (
                                            <span key={tech} className="px-3.5 py-1.5 text-xs font-bold bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-white/10 shadow-sm text-gray-700 dark:text-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-3 pt-6 border-t border-gray-100 dark:border-white/10">
                                        <a
                                            href={project.link || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm ${project.link ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/20 hover:shadow-blue-500/40' : 'bg-gray-100 dark:bg-gray-800/80 text-gray-400 dark:text-gray-600 cursor-not-allowed border border-gray-200 dark:border-gray-800'}`}
                                            onClick={(e) => !project.link && e.preventDefault()}
                                        >
                                            <ExternalLink size={18} /> View Project
                                        </a>
                                        <a
                                            href={project.github || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center gap-2 flex-1 py-3.5 rounded-xl font-bold text-sm transition-all border ${project.github ? 'glass hover:bg-white dark:hover:bg-[#1a1a1a] text-gray-900 dark:text-white border-gray-200 dark:border-white/20 shadow-sm hover:shadow-md' : 'bg-transparent text-gray-400 border-gray-200 dark:border-gray-800 cursor-not-allowed'}`}
                                            onClick={(e) => !project.github && e.preventDefault()}
                                        >
                                            <Github size={18} /> GitHub Repo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
