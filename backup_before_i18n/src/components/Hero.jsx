import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-gray-900 bg-white mb-10 shadow-lg"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <Sparkles className="w-4 h-4 text-gray-900" />
                    <span className="text-xs font-black text-gray-900 uppercase tracking-wider">
                        Solutions IA Agentiques
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 text-black leading-[0.95]"
                >
                    Je ne crée pas<br />
                    de simples chatbots.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-black mb-6 text-black"
                >
                    Je bâtis des architectures agentiques.
                </motion.p>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    Sécurité des données. Optimisation des coûts. Performance commerciale.<br />
                    Chaque solution est livrée "clé en main" et migrée sur votre propre infrastructure.
                </motion.p>

                {/* CTAs - Primary Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                >
                    <a
                        href="#contact"
                        className="group px-10 py-5 bg-black text-white rounded-xl font-black text-base hover:bg-gray-800 transition-all inline-flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-105"
                    >
                        <Calendar className="w-5 h-5" />
                        Prendre RDV
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#offres"
                        className="px-10 py-5 bg-white text-black border-2 border-gray-900 rounded-xl font-black text-base hover:bg-gray-50 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                    >
                        Découvrir mes offres
                    </a>
                </motion.div>

                {/* Feature Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 text-sm text-gray-700"
                >
                    <div className="px-5 py-3 bg-white rounded-full border-2 border-gray-200 font-semibold shadow-sm">
                        ✓ Souveraineté des données
                    </div>
                    <div className="px-5 py-3 bg-white rounded-full border-2 border-gray-200 font-semibold shadow-sm">
                        ✓ Agents autonomes
                    </div>
                    <div className="px-5 py-3 bg-white rounded-full border-2 border-gray-200 font-semibold shadow-sm">
                        ✓ Clé en main
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
