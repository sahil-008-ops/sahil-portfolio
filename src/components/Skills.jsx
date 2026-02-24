import { motion } from 'framer-motion';
import { Code2, BarChart3, Settings, Wrench } from 'lucide-react';

const skillCategories = [
    {
        title: 'Technical Skills',
        icon: <Code2 size={24} className="text-blue-500" />,
        skills: ['Python', 'SQL', 'TensorFlow', 'Hugging Face', 'Flask']
    },
    {
        title: 'Data & Analytics',
        icon: <BarChart3 size={24} className="text-purple-500" />,
        skills: ['Power BI', 'Advanced Excel', 'KPI Tracking', 'Dashboards']
    },
    {
        title: 'Product & Operations',
        icon: <Settings size={24} className="text-green-500" />,
        skills: ['Process Improvement', 'QA Pipelines', 'Stakeholder Management']
    },
    {
        title: 'Tools & Ecosystem',
        icon: <Wrench size={24} className="text-orange-500" />,
        skills: ['Git', 'Postman', 'Jupyter', 'n8n']
    }
];

export default function Skills() {
    const allSkills = [...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)];

    return (
        <section id="skills" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left mb-12"
            >
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-purple-600 bg-purple-100 rounded-full dark:text-purple-400 dark:bg-purple-900/30">
                    Superpowers
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">Core <span className="text-gradient">Competencies</span></h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-6 rounded-[2rem] relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                    >
                        <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 bg-gradient-to-br from-gray-500 to-transparent rounded-full"></div>

                        <div className="mb-6 flex items-center gap-4">
                            <div className="p-3 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm border border-gray-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-bold">{category.title}</h3>
                        </div>

                        <ul className="space-y-3">
                            {category.skills.map(skill => (
                                <li key={skill} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-16 overflow-hidden relative w-full glass rounded-[2rem] py-6 px-8 border border-gray-200/50 dark:border-white/5"
            >
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafafa] dark:from-[#0a0a0a] to-transparent z-10 hidden sm:block pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafafa] dark:from-[#0a0a0a] to-transparent z-10 hidden sm:block pointer-events-none" />

                <div className="flex w-max animate-marquee space-x-12 shrink-0 items-center hover:[animation-play-state:paused] cursor-pointer" style={{ animation: 'marquee 40s linear infinite' }}>
                    {allSkills.map((skill, idx) => (
                        <div key={idx} className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300">
                            {skill}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
