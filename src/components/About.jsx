import { motion } from 'framer-motion';
import { Target, TrendingUp, Cpu } from 'lucide-react';

const highlightedPoints = [
    { icon: <Cpu className="text-blue-500" size={24} />, title: 'MCA AI/ML', desc: 'Final-semester student with a strong engineering and analytical mindset.' },
    { icon: <TrendingUp className="text-purple-500" size={24} />, title: 'Analytics + Ops', desc: 'Current Intern at Scaler, experienced in KPI tracking and process optimization.' },
    { icon: <Target className="text-green-500" size={24} />, title: 'Ownership Mindset', desc: 'Cross-functional execution combining AI, analytics, and operations.' }
];

export default function About() {
    return (
        <section id="about" className="scroll-mt-32">
            <div className="space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left w-full"
                >
                    <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:text-blue-400 dark:bg-blue-900/30">
                        About Me
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Bridging the gap safely between <br className="hidden md:block" /> <span className="text-gradient">Engineering & Operations</span></h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed text-lg lg:text-xl font-light">
                        Detail-oriented professional with hands-on experience in analytics, AI quality operations, and product workflows. I enjoy improving workflows, managing quality pipelines, analyzing data, and building AI-powered systems that deliver measurable business impact.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {highlightedPoints.map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-white/5 group-hover:scale-110 transition-transform">
                                {point.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
