import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Crown, Lock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, points, colorConfig, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white border-2 border-gray-200 rounded-3xl p-10 hover:border-gray-900 hover:shadow-2xl transition-all duration-300 group"
    >
        {/* Icon with gradient background */}
        <div className={`inline-flex p-5 rounded-2xl ${colorConfig.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-10 h-10 ${colorConfig.iconText}`} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black text-black mb-3 leading-tight">{title}</h3>

        {/* Description */}
        {description && (
            <p className="text-base text-gray-600 mb-6 leading-relaxed font-medium">
                {description}
            </p>
        )}

        {/* Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-gray-900 to-gray-400 mb-6 rounded-full"></div>

        {/* Points List */}
        <ul className="space-y-4">
            {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className={`${colorConfig.bullet} mt-1 font-black text-base`}>→</span>
                    <span className="flex-1">{point}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const TechnicalDifference = () => {
    const features = [
        {
            icon: Crown,
            title: "Souveraineté & Clé en Main",
            description: "Votre technologie vous appartient. Je déploie l'intégralité de la solution sur vos propres comptes.",
            colorConfig: {
                iconBg: 'bg-cyan-100',
                iconText: 'text-cyan-600',
                bullet: 'text-cyan-600'
            },
            points: [
                "Propriété Totale : Vous restez l'unique propriétaire de la technologie, des données et des outils.",
                "Accompagnement Long Terme : Maintenance technique, gestion erreurs, optimisation continue (contrat 12 mois minimum).",
                "Aucun abonnement récurrent démesuré : Pas de location SaaS, vous possédez votre infrastructure."
            ]
        },
        {
            icon: Zap,
            title: "Architecture Optimisée",
            description: "Performance par l'ingénierie hybride. Utilisation chirurgicale de l'IA uniquement quand strictement nécessaire.",
            colorConfig: {
                iconBg: 'bg-purple-100',
                iconText: 'text-purple-600',
                bullet: 'text-purple-600'
            },
            points: [
                "Utilisation Chirurgicale : Sollicitation IA uniquement quand strictement nécessaire au workflow.",
                "Latence Réduite : Minimisation appels API inutiles = réponses plus rapides et fluides.",
                "Coûts Maîtrisés : Frais de fonctionnement (tokens) réduits au strict minimum pour rentabilité immédiate et durable."
            ]
        },
        {
            icon: Shield,
            title: "Sécurité & Confidentialité",
            description: "Protection multicouche de niveau entreprise avec triple barrière de sécurité.",
            colorConfig: {
                iconBg: 'bg-green-100',
                iconText: 'text-green-600',
                bullet: 'text-green-600'
            },
            points: [
                "Guardrails : Nettoyage automatique données sensibles + prévention active contre prompt injection.",
                "Pare-feu VPS : Protection réseau rigoureuse limitant drastiquement tentatives d'intrusion.",
                "Politiques RLS Strictes : Stockage avec Row Level Security garantissant isolation parfaite des données.",
                "Gestion Éthique : Historique conversations conservé 1h maximum (variable selon besoins projet)."
            ]
        }
    ];

    return (
        <section id="expertise" className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-full border-2 border-gray-900 bg-white mb-8"
                    >
                        <span className="text-xs font-black text-gray-900 uppercase tracking-wider">Différence Technique</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-black mb-6 leading-tight"
                    >
                        Pourquoi choisir<br />mon architecture ?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        L'IA ne doit pas être une couche superficielle, mais un <strong className="text-black">véritable moteur d'efficacité</strong>.<br />
                        Voici ce qui sépare mes interventions des solutions génériques du marché.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} index={index} />
                    ))}
                </div>

                {/* Philosophy Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-12 md:p-16 text-center max-w-5xl mx-auto shadow-2xl"
                >
                    <div className="inline-flex p-5 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
                        <Lock className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                        Philosophie de Travail
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto">
                        « L'intelligence artificielle ne doit pas être une dépense technologique, mais un <strong className="text-white">levier d'efficacité opérationnelle</strong>.
                        Mon approche repose sur une architecture agentique rigoureuse : minimiser la latence, sécuriser chaque échange et n'utiliser l'IA
                        que là où elle génère une <strong className="text-white">valeur ajoutée mesurable</strong> pour votre business. »
                    </p>
                    <div className="pt-8 border-t border-white/20">
                        <p className="text-sm font-bold text-gray-300 mb-6 uppercase tracking-wider">
                            Prêt à déployer une IA qui travaille vraiment pour vous ?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-xl font-black text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                        >
                            Réserver mon Audit Technique
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechnicalDifference;
