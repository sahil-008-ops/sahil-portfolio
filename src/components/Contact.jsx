import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';

const contactLinks = [
    {
        name: 'Email',
        value: 'sahilkochar08@gmail.com',
        icon: <Mail size={24} />,
        href: 'mailto:sahilkochar08@gmail.com',
        color: 'hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'
    },
    {
        name: 'LinkedIn',
        value: 'linkedin.com/in/sahilkochar08',
        icon: <Linkedin size={24} />,
        href: 'https://www.linkedin.com/in/sahilkochar08',
        color: 'hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400'
    },
    {
        name: 'GitHub',
        value: 'github.com/sahil-008-ops',
        icon: <Github size={24} />,
        href: 'https://github.com/sahil-008-ops',
        color: 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
    }
];

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-32">
            <div className="glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-full max-w-3xl space-y-8"
                >
                    <div className="inline-block px-4 py-1.5 mb-2 text-sm font-bold text-gray-900 dark:text-white bg-white/50 dark:bg-white/10 rounded-full backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm">
                        Let's connect
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Ready to drive <span className="text-gradient">impact?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                        I am currently open to new opportunities in Product, Operations, and AI domains. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4 md:gap-6 pt-8">
                        {contactLinks.map((link, idx) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group flex flex-col items-center p-6 md:p-8 rounded-[2rem] bg-white/50 dark:bg-[#1a1a1a]/50 border border-gray-100 dark:border-white/5 transition-all duration-300 ${link.color}`}
                            >
                                <div className="w-16 h-16 mb-4 rounded-2xl bg-white dark:bg-black/50 flex items-center justify-center shadow-sm border border-gray-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    {link.icon}
                                </div>
                                <h3 className="font-bold mb-1">{link.name}</h3>
                                <span className="text-xs font-medium text-gray-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Connect <ArrowUpRight size={12} />
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
