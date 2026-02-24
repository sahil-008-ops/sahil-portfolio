import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="pt-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8 text-center md:text-left"
            >
                <div className="space-y-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400"
                    >
                        Hi, I'm Sahil Kochar
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
                    >
                        AI, Product & Operations <span className="text-gradient">Enthusiast</span> <br />
                        Data-Driven Problem Solver
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 font-light"
                    >
                        Building intelligent systems • Optimizing operations • Driving impact
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                >
                    <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group">
                        View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="/resume.pdf" download="Sahil_Kochar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 rounded-full glass hover:bg-gray-100 dark:hover:bg-white/5 font-medium transition-all flex items-center justify-center gap-2 group">
                        Download Resume <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="flex-1 w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[360px] xl:max-w-[400px] mx-auto md:mx-0 md:ml-auto"
            >
                <div className="relative aspect-[4/5] sm:aspect-square w-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2.5rem] rotate-6 opacity-30 blur-xl dark:opacity-20 transition-all duration-700 group-hover:rotate-12 group-hover:scale-105 group-hover:opacity-40"></div>
                    <div className="glass-card absolute inset-0 rounded-[2.5rem] overflow-hidden p-2">
                        <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gray-200 dark:bg-[#1a1a1a] relative group">
                            <img
                                src="/profile.png"
                                srcSet="/profile.png 1x"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading="lazy"
                                decoding="async"
                                alt="Sahil Kochar"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    e.target.src = 'https://ui-avatars.com/api/?name=Sahil+Kochar&size=512&background=random';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <div>
                                    <h3 className="text-white text-xl font-bold">Sahil Kochar</h3>
                                    <span className="text-gray-300 font-medium text-sm">Final Semester MCA AI/ML</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
