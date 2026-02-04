import React from 'react';
import { Lightbulb, Rocket } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const CustomSection = () => {
    return (
        <section id="sur-mesure" className="py-24 bg-gradient-to-b from-transparent to-brand-blue/5">
            <div className="max-w-7xl mx-auto px-6">
                <RevealOnScroll>
                    <div className="bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 rounded-3xl p-1 md:p-1">
                        <div className="bg-background rounded-[22px] p-8 md:p-16 border border-white/5 relative overflow-hidden">
                            {/* Decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6">
                                        <Lightbulb className="w-4 h-4 text-brand-cyan" />
                                        <span className="text-xs font-bold text-brand-cyan uppercase">Sur Mesure</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                        Votre vision, <br />mon ingénierie.
                                    </h2>
                                    <p className="text-lg text-gray-400 mb-8 max-w-lg">
                                        On ne tord pas votre idée pour qu'elle rentre dans une case. On construit l'agent autour de vos besoins réels.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                                            Concepts inédits & nouveaux services
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                                            Interactions communautaires spécifiques
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                                            Souveraineté totale des données
                                        </li>
                                    </ul>
                                    <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                                        <Rocket className="w-4 h-4" />
                                        Réserver un appel découverte
                                    </a>
                                </div>
                                <div className="flex-1 w-full flex justify-center">
                                    {/* Abstract visual */}
                                    <div className="w-full max-w-sm aspect-square relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan to-brand-purple opacity-20 blur-3xl animate-pulse-slow"></div>
                                        <div className="relative border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl h-full flex items-center justify-center p-8 text-center">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">Du Concept à la Réalité</h3>
                                                <p className="text-gray-500 text-sm">Faisabilité technique & Impact Business</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default CustomSection;
