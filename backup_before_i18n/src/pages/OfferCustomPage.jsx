import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Lightbulb, Rocket, Users, Sparkles, Code, Shield } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OfferCustomPage = () => {
    const [hoveredStep, setHoveredStep] = React.useState(null);

    const processSteps = [
        {
            number: '01',
            title: 'Évaluer la faisabilité',
            desc: 'Analyse technique approfondie de votre idée pour identifier les opportunités et les défis.',
            icon: Rocket
        },
        {
            number: '02',
            title: 'Définir le potentiel d\'impact',
            desc: 'Estimation du ROI et de l\'impact sur votre activité avec des métriques claires.',
            icon: Users
        },
        {
            number: '03',
            title: 'Tracer le chemin',
            desc: 'Roadmap détaillée du concept à la mise en production avec jalons mesurables.',
            icon: Code
        }
    ];

    const examples = [
        {
            title: 'Agent de Diagnostic Sectoriel',
            desc: 'Capacités uniques adaptées à votre industrie pour identifier les besoins spécifiques.',
            icon: Sparkles,
            color: 'from-green-50 to-emerald-50'
        },
        {
            title: 'Service Interactif Social',
            desc: 'Nouveau service pour votre communauté sur les réseaux sociaux.',
            icon: Users,
            color: 'from-blue-50 to-cyan-50'
        },
        {
            title: 'Innovation Disruptive',
            desc: 'Concept totalement nouveau n\'existant pas encore sur le marché.',
            icon: Rocket,
            color: 'from-purple-50 to-pink-50'
        }
    ];

    const advantages = [
        'Solution qui s\'adapte à vous, pas l\'inverse',
        'De l\'idée à la réalité avec accompagnement complet',
        'Souveraineté totale : ce que nous créons vous appartient',
        'Architecture sur-mesure pour vos besoins uniques',
        'Innovation sans compromis',
        'Support dédié tout au long du projet'
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
                        <div className="inline-flex p-4 rounded-2xl bg-green-50 mb-6">
                            <Lightbulb className="w-12 h-12 text-green-500" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-black mb-6">
                            Conception sur Mesure
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Votre idée mérite une architecture dédiée. Une solution entièrement personnalisée
                            pour répondre à vos besoins business uniques, sans tordre votre vision pour qu'elle rentre dans une case.
                        </p>
                    </motion.div>

                    {/* Why Contact Me */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 mb-16"
                    >
                        <h2 className="text-3xl font-black text-black mb-8 text-center">Pourquoi me contacter pour votre projet</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {advantages.map((advantage, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <p className="text-gray-700">{advantage}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Examples */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black text-black mb-8 text-center">Exemples de réalisations possibles</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {examples.map((example, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    whileHover={{ scale: 1.05, rotate: 1 }}
                                    className={`bg-gradient-to-br ${example.color} rounded-2xl p-8 border-2 border-green-100`}
                                >
                                    {React.createElement(example.icon, { className: 'w-10 h-10 text-green-500 mb-4' })}
                                    <h3 className="font-black text-black mb-2">{example.title}</h3>
                                    <p className="text-sm text-gray-600">{example.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Process */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black text-black mb-8 text-center">Processus de collaboration</h2>
                        <p className="text-center text-gray-600 mb-12 text-lg">
                            Un échange simple pour transformer votre idée en projet concret
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + idx * 0.1 }}
                                    onMouseEnter={() => setHoveredStep(idx)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                    className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${hoveredStep === idx
                                        ? 'border-green-500 shadow-2xl scale-105'
                                        : 'border-gray-200 shadow-lg'
                                        }`}
                                >
                                    <div className="text-6xl font-black text-green-100 mb-4">{step.number}</div>
                                    {React.createElement(step.icon, {
                                        className: `w-12 h-12 text-green-500 mb-4 transition-transform ${hoveredStep === idx ? 'scale-110' : ''
                                            }`
                                    })}
                                    <h3 className="text-xl font-black text-black mb-3">{step.title}</h3>
                                    <p className="text-gray-600">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-8 p-6 bg-green-50 rounded-2xl border-2 border-green-200"
                        >
                            <p className="text-center text-green-900 font-semibold">
                                💡 Une idée ne demande qu'à être discutée pour devenir réelle.
                                Ne laissez pas vos concepts dormir par manque de bras techniques.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="text-center"
                    >
                        <a
                            href="https://tally.so/r/vGPl4X"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all hover:scale-105"
                        >
                            Donnons vie à votre idée →
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OfferCustomPage;
