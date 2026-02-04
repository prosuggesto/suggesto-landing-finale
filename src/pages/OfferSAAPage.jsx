import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Zap, Shield, Target, Database, Sparkles } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OfferSAAPage = () => {
    const [activePhase, setActivePhase] = React.useState('A');
    const [activeTab, setActiveTab] = React.useState('technique');

    const phases = {
        A: {
            title: 'Phase A : Capture Multi-Canaux',
            icon: Target,
            color: 'cyan',
            details: [
                { label: 'Instagram', desc: 'Surveille posts, réels, stories. Détecte les mots-clés stratégiques et envoie un DM instantané.' },
                { label: 'Web', desc: 'Widget intelligent capturant l\'intent dès la première seconde de navigation.' }
            ]
        },
        B: {
            title: 'Phase B : Qualification Neuro-Linguistique',
            icon: Sparkles,
            color: 'purple',
            details: [
                { label: 'Diagnostic', desc: 'Conversation identifiant le niveau de maturité, les pain points, le budget et l\'urgence.' },
                { label: 'Adéquation', desc: 'Évaluation automatique de l\'adéquation avec vos offres.' }
            ]
        },
        C: {
            title: 'Phase C : Action à Haute Valeur',
            icon: Zap,
            color: 'green',
            details: [
                { label: 'Profil "Chaud"', desc: 'Proposition de rendez-vous directe (Calendly/TidyCal)' },
                { label: 'Profil "Warm"', desc: 'Envoi de ressource gratuite (VSL, PDF)' },
                { label: 'Profil "Hors-Cible"', desc: 'Clôture polie et professionnelle' }
            ]
        },
        D: {
            title: 'Phase D : Pilotage par la Donnée',
            icon: Database,
            color: 'blue',
            details: [
                { label: 'Analytics', desc: 'Dashboard personnalisé avec volume de conversations et taux de qualification.' },
                { label: 'Optimisation', desc: 'Rendez-vous proposés, suivi en temps réel des performances.' }
            ]
        }
    };

    const technicalFeatures = [
        {
            title: 'Création d\'une mémoire personnalisée',
            desc: 'Contrôle total du flux (entrée et sortie) avec intégration Supabase pour une gestion précise. L\'agent ne se perd jamais.',
            icon: Database
        },
        {
            title: 'Rapidité d\'exécution',
            desc: 'Fluidité optimale, zéro temps de réflexion inutile. Réponses instantanées.',
            icon: Zap
        },
        {
            title: 'Qualité Supérieure',
            desc: 'RAG maîtrisé, réduction drastique des hallucinations, réponses précises et cohérentes.',
            icon: Sparkles
        },
        {
            title: 'Sécurité & Guardrails',
            desc: 'Filtres nettoyant les données entrantes et blocage de la prompt injection.',
            icon: Shield
        }
    ];

    const benefits = [
        'La fin du "Lead Decay" : Réponse avec une rapidité optimale',
        'Scalabilité Infinie : Qualité identique de 10 à 10 000 messages/jour',
        'Suppression du Bruit : Filtre les touristes, ne garde que les profils à haut potentiel',
        'Souveraineté totale : Migration sur vos propres comptes',
        'Maintenance préventive : Je contrôle l\'efficacité et la gestion des erreurs',
        'Optimisation continue : Affinement régulier des prompts pour augmenter la conversion'
    ];

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
                        <div className="inline-flex p-4 rounded-2xl bg-cyan-50 mb-6">
                            <Database className="w-12 h-12 text-cyan-500" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-black mb-6">
                            Système d'Acquisition<br />Automatisé (SAA)
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Un Agent Setter IA de nouvelle génération qui fusionne le marketing conversationnel
                            et l'ingénierie agentique pour convertir l'attention en opportunités business, 24h/24.
                        </p>
                    </motion.div>

                    {/* Why SAA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16"
                    >
                        <h2 className="text-3xl font-black text-black mb-8">Pourquoi le SAA est vital pour votre croissance</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <Check className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                                    <p className="text-gray-700">{benefit}</p>
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
                        <h2 className="text-3xl font-black text-black mb-8 text-center">Workflow de Conversion (A→Z)</h2>

                        {/* Phase Selector */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {Object.entries(phases).map(([key, phase]) => (
                                <button
                                    key={key}
                                    onClick={() => setActivePhase(key)}
                                    className={`px-6 py-3 rounded-xl font-bold transition-all ${activePhase === key
                                        ? 'bg-black text-white shadow-lg scale-105'
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
                                className="bg-white rounded-3xl border-2 border-gray-200 p-8 md:p-12"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    {React.createElement(phases[activePhase].icon, { className: 'w-10 h-10 text-cyan-500' })}
                                    <h3 className="text-2xl font-black text-black">{phases[activePhase].title}</h3>
                                </div>
                                <div className="space-y-4">
                                    {phases[activePhase].details.map((detail, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="bg-gray-50 rounded-xl p-4"
                                        >
                                            <h4 className="font-bold text-black mb-2">{detail.label}</h4>
                                            <p className="text-gray-600 text-sm">{detail.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Technical Excellence */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black text-black mb-8 text-center">Maîtrise Technique & Performance</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {technicalFeatures.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + idx * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:border-cyan-300 transition-all"
                                >
                                    {React.createElement(feature.icon, { className: 'w-8 h-8 text-cyan-500 mb-4' })}
                                    <h3 className="font-black text-black mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-center"
                    >
                        <a
                            href="https://tally.so/r/vGPl4X"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all hover:scale-105"
                        >
                            Discutons de votre projet →
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OfferSAAPage;
