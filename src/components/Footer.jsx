import React, { useState } from 'react';
import { X } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/20 bg-white/5">
                    <h2 className="text-2xl font-black text-white drop-shadow-lg">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm"
                    >
                        <X className="w-6 h-6 text-white drop-shadow-md" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)] text-white">
                    {content}
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    const [openModal, setOpenModal] = useState(null);

    const legalContent = {
        mentions: (
            <div className="prose prose-sm max-w-none">
                <h3 className="text-xl font-bold mb-4">Éditeur du site</h3>
                <p className="mb-4">
                    <strong>Raison sociale :</strong> Suggesto<br />
                    <strong>Forme juridique :</strong> Entreprise individuelle<br />
                    <strong>Siège social :</strong> France<br />
                    <strong>Email :</strong> contact@suggesto.ai
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Hébergement</h3>
                <p className="mb-4">
                    Le site est hébergé par :<br />
                    <strong>Vercel Inc.</strong><br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789, USA
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Propriété intellectuelle</h3>
                <p className="mb-4">
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de Suggesto,
                    sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
                    même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Suggesto.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Responsabilité</h3>
                <p className="mb-4">
                    Suggesto s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site.
                    Toutefois, Suggesto ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à
                    disposition sur ce site et décline toute responsabilité pour toute imprécision, inexactitude ou omission portant
                    sur des informations disponibles sur ce site.
                </p>
            </div>
        ),
        confidentialite: (
            <div className="prose prose-sm max-w-none">
                <h3 className="text-xl font-bold mb-4">1. Collecte des données personnelles</h3>
                <p className="mb-4">
                    Nous collectons les données personnelles suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Raison sociale de l'entreprise</li>
                    <li>Informations fournies via les formulaires de contact</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">2. Finalité de la collecte</h3>
                <p className="mb-4">
                    Les données personnelles collectées sont utilisées exclusivement pour :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Répondre à vos demandes de contact</li>
                    <li>Gérer les prises de rendez-vous</li>
                    <li>Fournir nos services d'architecture agentique</li>
                    <li>Vous envoyer des informations relatives à nos offres (avec votre consentement)</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">3. Conservation des données</h3>
                <p className="mb-4">
                    Vos données personnelles sont conservées pour une durée maximale de 3 ans à compter de notre dernier contact,
                    sauf obligation légale de conservation plus longue.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">4. Vos droits</h3>
                <p className="mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Droit d'accès :</strong> vous pouvez demander une copie de vos données personnelles</li>
                    <li><strong>Droit de rectification :</strong> vous pouvez demander la correction de données inexactes</li>
                    <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> vous pouvez demander le transfert de vos données</li>
                    <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données</li>
                </ul>
                <p className="mb-4">
                    Pour exercer ces droits, contactez-nous à : <strong>contact@suggesto.ai</strong>
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">5. Sécurité</h3>
                <p className="mb-4">
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
                    personnelles contre tout accès non autorisé, perte, destruction ou altération.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">6. Cookies</h3>
                <p className="mb-4">
                    Notre site utilise des cookies strictement nécessaires au fonctionnement du site. Aucun cookie de tracking
                    ou publicitaire n'est utilisé sans votre consentement explicite.
                </p>
            </div>
        ),
        cgv: (
            <div className="prose prose-sm max-w-none">
                <h3 className="text-xl font-bold mb-4">Article 1 - Objet</h3>
                <p className="mb-4">
                    Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Suggesto
                    (ci-après "le Prestataire") et toute personne physique ou morale (ci-après "le Client") souhaitant bénéficier
                    des services d'architecture agentique proposés.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 2 - Services proposés</h3>
                <p className="mb-4">
                    Suggesto propose les services suivants :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Système d'Acquisition Automatisé (SAA) :</strong> Agent IA pour Instagram et Web</li>
                    <li><strong>Retail OS :</strong> Infrastructure agentique pour e-commerce Shopify</li>
                    <li><strong>Conception sur Mesure :</strong> Solutions personnalisées selon les besoins du client</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 3 - Devis et acceptation</h3>
                <p className="mb-4">
                    Tout projet débute par un audit technique et l'établissement d'un devis détaillé. Le devis est valable 30 jours
                    à compter de sa date d'émission. L'acceptation du devis par le Client vaut acceptation des présentes CGV.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 4 - Prix</h3>
                <p className="mb-4">
                    Les prix sont indiqués en euros (€) hors taxes. Ils sont fermes et définitifs pour la durée mentionnée dans le devis.
                    Le Prestataire se réserve le droit de modifier ses tarifs à tout moment pour les nouveaux contrats.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 5 - Modalités de paiement</h3>
                <p className="mb-4">
                    Sauf mention contraire sur le devis, les modalités de paiement sont les suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>30% à la signature du contrat (acompte)</li>
                    <li>40% à la livraison de la solution</li>
                    <li>30% à la mise en production validée</li>
                </ul>
                <p className="mb-4">
                    Le paiement s'effectue par virement bancaire sous 30 jours à compter de la date de facturation.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 6 - Délais de réalisation</h3>
                <p className="mb-4">
                    Les délais de réalisation sont indiqués à titre indicatif dans le devis. Le Prestataire s'engage à respecter
                    au mieux ces délais, mais ne saurait être tenu responsable en cas de retard dû à des causes extérieures,
                    des modifications de périmètre demandées par le Client, ou un manque de réactivité du Client.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 7 - Obligations du Client</h3>
                <p className="mb-4">
                    Le Client s'engage à :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Fournir toutes les informations nécessaires à la réalisation du projet</li>
                    <li>Mettre à disposition les accès requis (comptes, API, serveurs)</li>
                    <li>Valider les livrables dans les délais convenus</li>
                    <li>Régler les factures aux échéances prévues</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 8 - Propriété intellectuelle & Souveraineté</h3>
                <p className="mb-4">
                    <strong>Principe fondamental de souveraineté :</strong> Une fois le paiement intégral effectué, le Client devient
                    propriétaire exclusif de la solution développée et de l'ensemble du code source associé. L'infrastructure est
                    déployée sur les comptes personnels du Client (n8n, Supabase, VPS, etc.).
                </p>
                <p className="mb-4">
                    Le Prestataire conserve uniquement un droit d'utilisation anonymisé à des fins de démonstration commerciale,
                    sans divulgation de données sensibles du Client.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 9 - Maintenance et accompagnement</h3>
                <p className="mb-4">
                    Bien que l'infrastructure appartienne au Client, le Prestataire propose un contrat d'accompagnement
                    (12 mois minimum) incluant :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Maintenance technique et correction d'erreurs</li>
                    <li>Optimisation continue des prompts et workflows</li>
                    <li>Support prioritaire</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 10 - Confidentialité</h3>
                <p className="mb-4">
                    Le Prestataire s'engage à respecter la confidentialité de toutes les informations communiquées par le Client
                    dans le cadre de la prestation. Cette obligation de confidentialité reste applicable après la fin du contrat.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 11 - Responsabilité</h3>
                <p className="mb-4">
                    Le Prestataire met en œuvre tous les moyens nécessaires pour garantir la qualité de ses services.
                    Sa responsabilité est limitée au montant total du contrat. Le Prestataire ne saurait être tenu responsable
                    des dommages indirects (perte d'exploitation, perte de données, etc.).
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 12 - Résiliation</h3>
                <p className="mb-4">
                    En cas de manquement grave de l'une des parties à ses obligations, le contrat pourra être résilié de plein droit
                    15 jours après mise en demeure restée sans effet. Les sommes déjà versées resteront acquises au Prestataire
                    pour les travaux déjà réalisés.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 13 - Litiges</h3>
                <p className="mb-4">
                    En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
                    À défaut, le litige sera porté devant les tribunaux compétents français.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 14 - Droit applicable</h3>
                <p className="mb-4">
                    Les présentes CGV sont soumises au droit français.
                </p>
            </div>
        )
    };

    return (
        <>
            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Main Footer Content */}
                    <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img src="/logo-suggesto.png" alt="Suggesto" className="h-8 w-auto" />
                            <span className="font-black text-lg tracking-tight text-black">SUGGESTO</span>
                        </div>
                    </div>

                    {/* Bottom Bar - Copyright & Policies */}
                    <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                        <div>
                            © {new Date().getFullYear()} Suggesto. Tous droits réservés.
                        </div>
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => setOpenModal('mentions')}
                                className="hover:text-black transition-colors cursor-pointer"
                            >
                                Mentions légales
                            </button>
                            <button
                                onClick={() => setOpenModal('confidentialite')}
                                className="hover:text-black transition-colors cursor-pointer"
                            >
                                Politique de confidentialité
                            </button>
                            <button
                                onClick={() => setOpenModal('cgv')}
                                className="hover:text-black transition-colors cursor-pointer"
                            >
                                CGV
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Modals */}
            <LegalModal
                isOpen={openModal === 'mentions'}
                onClose={() => setOpenModal(null)}
                title="Mentions légales"
                content={legalContent.mentions}
            />
            <LegalModal
                isOpen={openModal === 'confidentialite'}
                onClose={() => setOpenModal(null)}
                title="Politique de confidentialité"
                content={legalContent.confidentialite}
            />
            <LegalModal
                isOpen={openModal === 'cgv'}
                onClose={() => setOpenModal(null)}
                title="Conditions Générales de Vente"
                content={legalContent.cgv}
            />
        </>
    );
};

export default Footer;
