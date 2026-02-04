import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingBag, TrendingUp, Users, Headphones, BarChart3, Package } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OfferRetailPage = () => {
    const [activePhase, setActivePhase] = React.useState('A');

    const phases = {
        A: {
            title: 'Phase A : Recommandation Dynamique',
            icon: Users,
            color: 'purple',
            content: 'Agit comme un vendeur expert : analyse les besoins et propose les produits adaptés avec les bénéfices spécifiques.'
        },
        B: {
            title: 'Phase B : Support Post-Achat',
            icon: Headphones,
            color: 'blue',
            features: [
                { label: 'Suivi Commande', desc: 'Statut de livraison instantané' },
                { label: 'Gestion Retours', desc: 'Guide fluide de la politique de retour' },
                { label: 'FAQ Intelligente', desc: 'Réponses précises et immédiates' }
            ]
        },
        C: {
            title: 'Phase C : Escalade Structurée',
            icon: TrendingUp,
            color: 'green',
            content: 'Fiche de Liaison Automatique : titre du problème, niveau d\'urgence, synthèse du dossier pour une résolution immédiate.'
        },
        D: {
            title: 'Phase D : Dashboard sur mesure',
            icon: BarChart3,
            color: 'cyan',
            content: 'Analytics des recommandations, transparence sur les critères de sélection, gestion de l\'inventaire par IA, mise à jour des politiques instantanée.'
        }
    };

    const whyRetailOS = [
        {
            title: 'Augmentation du Panier Moyen',
            desc: 'Suggestions intelligentes de produits selon les besoins réels.',
            icon: TrendingUp
        },
        {
            title: 'Réduction Charge Support',
            desc: 'Automatisation des questions répétitives (suivi, retours, FAQ) sans perte de qualité.',
            icon: Headphones
        },
        {
            title: 'Escalade Humaine Intelligente',
            desc: 'Qualification et transfert avec fiche de synthèse complète.',
            icon: Users
        }
    ];

    const benefits = {
        entreprise: [
            { label: 'Impact Mesurable', value: 'Augmentation de la conversion et du panier moyen' },
            { label: 'Productivité', value: 'Équipes concentrées sur les tâches à haute valeur ajoutée' },
            { label: 'Contrôle Total', value: 'La main sur ce que l\'IA sait et dit' }
        ],
        client: [
            { label: 'Zéro Attente', value: 'Réponses en temps réel, 24h/24' },
            { label: 'Conseil Personnalisé', value: 'Expérience assistée avec la proximité d\'un magasin' },
            { label: 'Transition Fluide', value: 'L\'humain connaît déjà tout le dossier' }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans relative">
            <AnimatedBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex p-4 rounded-2xl bg-purple-50 mb-6">
                            <ShoppingBag className="w-12 h-12 text-purple-500" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-black mb-6">
                            Retail OS
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Infrastructure agentique transformant votre service client e-commerce en levier de croissance.
                            Un expert qui connaît votre catalogue, conseille vos clients et automatise la gestion des commandes.
                        </p>
                    </motion.div>

                    {/* Why Retail OS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black text-black mb-8 text-center">Pourquoi le Retail OS est le futur du E-commerce</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {whyRetailOS.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100"
                                >
                                    {React.createElement(item.icon, { className: 'w-10 h-10 text-purple-500 mb-4' })}
                                    <h3 className="font-black text-black mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Workflow Interactive */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black text-black mb-8 text-center">Fonctionnement : De la Découverte au Suivi</h2>

                        {/* Phase Selector */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {Object.entries(phases).map(([key, phase]) => (
                                <button
                                    key={key}
                                    onClick={() => setActivePhase(key)}
                                    className={`px-6 py-3 rounded-xl font-bold transition-all ${activePhase === key
                                        ? 'bg-purple-500 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    Phase {key}
                                </button>
                            ))}
                        </div>

                        {/* Phase Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePhase}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl border-2 border-purple-200 p-8 md:p-12"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    {React.createElement(phases[activePhase].icon, { className: 'w-10 h-10 text-purple-500' })}
                                    <h3 className="text-2xl font-black text-black">{phases[activePhase].title}</h3>
                                </div>

                                {phases[activePhase].content && (
                                    <p className="text-gray-700 text-lg">{phases[activePhase].content}</p>
                                )}

                                {phases[activePhase].features && (
                                    <div className="space-y-4">
                                        {phases[activePhase].features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="bg-purple-50 rounded-xl p-4"
                                            >
                                                <h4 className="font-bold text-black mb-2">{feature.label}</h4>
                                                <p className="text-gray-600 text-sm">{feature.desc}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Bénéfices Double-Impact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black text-black mb-8 text-center">Bénéfices Double-Impact</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Pour l'Entreprise */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8"
                            >
                                <h3 className="text-2xl font-black text-black mb-6">Pour l'Entreprise</h3>
                                <div className="space-y-4">
                                    {benefits.entreprise.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-bold text-black">{benefit.label}</p>
                                                <p className="text-sm text-gray-600">{benefit.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Pour le Client Final */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8"
                            >
                                <h3 className="text-2xl font-black text-black mb-6">Pour le Client Final</h3>
                                <div className="space-y-4">
                                    {benefits.client.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-bold text-black">{benefit.label}</p>
                                                <p className="text-sm text-gray-600">{benefit.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-center"
                    >
                        <a
                            href="https://tally.so/r/vGPl4X"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-600 transition-all hover:scale-105"
                        >
                            Transformez votre e-commerce →
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OfferRetailPage;
