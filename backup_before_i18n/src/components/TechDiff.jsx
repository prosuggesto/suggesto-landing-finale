import React from 'react';
import { ShieldCheck, Server, Zap, Lock } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const TechDiff = () => {
    return (
        <section id="tech" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">La Différence Technique</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            L'IA ne doit pas être une simple couche superficielle. Voici ce qui sépare mes interventions des solutions génériques.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Server,
                            title: "Souveraineté & Clé en Main",
                            text: "Votre technologie vous appartient. Déploiement complet sur votre infrastructure cloud (VPS) propriétaire.",
                            sub: ["Propriété Totale", "Maintenance incluse"]
                        },
                        {
                            icon: Zap,
                            title: "Architecture Optimisée",
                            text: "Système hybride minimisant les appels API. Latence réduite et coûts de tokens maîtrisés.",
                            sub: ["Latence < 500ms", "Coûts réduits"]
                        },
                        {
                            icon: ShieldCheck,
                            title: "Sécurité & Confidentialité",
                            text: "Protection multicouches niveau entreprise. Guardrails anti-injection & Politiques RLS au niveau base de données.",
                            sub: ["Guardrails IA", "Pare-feu VPS"]
                        }
                    ].map((item, idx) => (
                        <RevealOnScroll key={idx} delay={idx * 100}>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-cyan/20 transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-lg bg-brand-cyan/10 flex items-center justify-center mb-6 text-brand-cyan">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{item.text}</p>
                                <div className="flex gap-4">
                                    {item.sub.map((s, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechDiff;
