import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, ShoppingBag, Lightbulb, ArrowRight } from 'lucide-react';

const OfferCard = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-2xl"
        >
            {/* Header */}
            <div className={`inline-flex p-3 rounded-xl ${data.colorConfig.iconBg} mb-4`}>
                <data.icon className={`w-6 h-6 ${data.colorConfig.iconText}`} />
            </div>

            <h3 className="text-2xl font-black text-black mb-2">{data.title}</h3>
            <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">{data.subtitle}</p>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">{data.intro}</p>

            {/* Key Benefits - Only 3 */}
            <div className="space-y-3 mb-8">
                {data.keyPoints.map((point, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3"
                    >
                        <div className={`w-1.5 h-1.5 rounded-full ${data.colorConfig.iconBg} mt-2 flex-shrink-0`}></div>
                        <p className="text-sm text-gray-700 font-medium">{point}</p>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <Link
                to={data.detailPage}
                className={`inline-flex items-center gap-2 text-black font-bold text-sm hover:gap-3 transition-all group`}
            >
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
};

const Offers = () => {
    const offers = [
        {
            icon: Database,
            title: "Système d'Acquisition Automatisé (SAA)",
            subtitle: "Instagram & Web",
            intro: "Un Agent Setter IA de nouvelle génération qui fusionne le marketing conversationnel et l'ingénierie agentique pour convertir l'attention en opportunités business, 24h/24.",
            colorConfig: {
                iconBg: 'bg-cyan-50',
                iconText: 'text-cyan-500'
            },
            keyPoints: [
                "🚀 Capture et qualification automatique : Instagram + Web en temps réel",
                "📈 Augmentation de la conversion grâce à la réactivité instantanée et la fin du lead decay",
                "⚡ Mémoire personnalisée avec contrôle total du flux et sécurité renforcée"
            ],
            detailPage: "/offre-saa"
        },
        {
            icon: ShoppingBag,
            title: "Retail OS",
            subtitle: "E-Commerce / Shopify",
            intro: "Infrastructure agentique transformant votre service client e-commerce en levier de croissance. Un expert qui connaît votre catalogue, conseille vos clients et automatise votre support.",
            colorConfig: {
                iconBg: 'bg-purple-50',
                iconText: 'text-purple-500'
            },
            keyPoints: [
                "💰 Augmentation du panier moyen avec recommandations intelligentes",
                "⚡ Automation du support client (FAQ, questions commandes, etc.) avec escalade vers l'humain si besoin",
                "🎯 Double impact : ROI entreprise + expérience client premium"
            ],
            detailPage: "/offre-retail-os"
        },
        {
            icon: Lightbulb,
            title: "Conception sur Mesure",
            subtitle: "Votre vision, mon ingénierie",
            intro: "Votre idée mérite une architecture dédiée. Une solution entièrement personnalisée pour répondre à vos besoins business uniques, sans tordre votre vision pour qu'elle rentre dans une case.",
            colorConfig: {
                iconBg: 'bg-green-50',
                iconText: 'text-green-500'
            },
            keyPoints: [
                "🎨 Solution adaptée à vous, pas l'inverse : architecture 100% sur-mesure",
                "🚀 De l'idée à la réalité : accompagnement complet du concept à la production",
                "🔐 Souveraineté totale : ce que nous créons ensemble vous appartient"
            ],
            detailPage: "/offre-sur-mesure"
        }
    ];

    return (
        <section id="offres" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 mb-6"
                    >
                        <span className="text-xs font-medium text-gray-700">Mes Offres</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black text-black mb-4"
                    >
                        Solutions Agentiques
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Sécurité des données. Optimisation des coûts. Performance commerciale.<br />
                        Chaque solution livrée "clé en main" et migrée sur votre propre infrastructure.
                    </motion.p>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <OfferCard key={index} data={offer} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
