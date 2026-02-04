import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Minimum loading time for better UX
        const minLoadingTime = new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const formData = new FormData(e.target);
            const data = {
                nom: formData.get('name'),
                email: formData.get('email'),
                entreprise: formData.get('company') || '',
                message: formData.get('message')
            };

            const [response] = await Promise.all([
                fetch("https://n8n.srv862127.hstgr.cloud/webhook/message_web", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'web.message': 'web.message.01'
                    },
                    body: JSON.stringify(data)
                }),
                minLoadingTime
            ]);

            if (response.ok) {
                setIsSuccess(true);
                e.target.reset();
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                throw new Error('Erreur serveur');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setError("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 mb-6"
                    >
                        <span className="text-xs font-medium text-gray-700">Contact</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black text-black mb-4"
                    >
                        Parlons de votre projet
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        Réservez votre audit gratuit ou envoyez-moi un message
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Info + Booking */}
                    <div className="space-y-8">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                                <div className="p-3 bg-brand-cyan/10 rounded-lg">
                                    <Mail className="w-6 h-6 text-brand-cyan" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                                    <p className="text-black font-semibold">pro.suggesto.ai@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                                <div className="p-3 bg-brand-purple/10 rounded-lg">
                                    <Phone className="w-6 h-6 text-brand-purple" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Téléphone</p>
                                    <p className="text-black font-semibold">07 67 56 92 24</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                                <div className="p-3 bg-brand-green/10 rounded-lg">
                                    <MapPin className="w-6 h-6 text-brand-green" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Bureaux</p>
                                    <p className="text-black font-semibold">374 route du bedat<br />47450 Colayrac-Saint-Cirq</p>
                                </div>
                            </div>
                        </div>

                        {/* Booking Card */}
                        <div className="bg-black text-white rounded-2xl p-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-4 bg-white/10 rounded-xl">
                                    <Calendar className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black mb-2">Appel Découverte</h3>
                                    <p className="text-white/70">30 minutes pour évaluer votre besoin et définir la solution adaptée</p>
                                </div>
                            </div>
                            <a
                                href="https://tally.so/r/vGPl4X"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-gray-100 transition-all"
                            >
                                Réserver un créneau →
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div>
                        {isSuccess ? (
                            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 text-center">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-black text-black mb-3">Message envoyé !</h3>
                                <p className="text-gray-600 mb-8">Nous vous répondrons dans les plus brefs délais.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input type="hidden" name="access_key" value="2e5ecd43-add1-4807-bead-beb32b428c6d" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                                            Nom *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:border-black focus:bg-white outline-none transition-all"
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:border-black focus:bg-white outline-none transition-all"
                                            placeholder="email@pro.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                                        Entreprise
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:border-black focus:bg-white outline-none transition-all"
                                        placeholder="Votre société"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:border-black focus:bg-white outline-none resize-none transition-all"
                                        placeholder="Décrivez votre besoin, votre projet..."
                                    />
                                </div>

                                {error && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm font-semibold">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Envoyer le message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
