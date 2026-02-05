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
                    <strong>Email :</strong> pro.suggesto.ai@gmail.com<br />
                    <strong>Téléphone :</strong> 07 67 56 92 24
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Directeur de publication</h3>
                <p className="mb-4">
                    Le directeur de la publication du site est le représentant légal de Suggesto.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Hébergement</h3>
                <p className="mb-4">
                    Le site est hébergé par :<br />
                    <strong>Vercel Inc.</strong><br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789, USA<br />
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline">vercel.com</a>
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Propriété intellectuelle</h3>
                <p className="mb-4">
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, code source) est la propriété exclusive de Suggesto,
                    sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
                    même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Suggesto.
                </p>
                <p className="mb-4">
                    Les marques, logos et signes distinctifs reproduits sur ce site sont la propriété de Suggesto ou de tiers ayant autorisé leur utilisation.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Responsabilité et garanties</h3>
                <p className="mb-4">
                    Suggesto s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site.
                    Toutefois, Suggesto ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à
                    disposition sur ce site et décline toute responsabilité pour toute imprécision, inexactitude ou omission portant
                    sur des informations disponibles sur ce site.
                </p>
                <p className="mb-4">
                    Suggesto décline toute responsabilité quant aux éventuels dysfonctionnements pouvant survenir sur le site et entraîner
                    une perte de données ou une indisponibilité temporaire d'accès.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Liens hypertextes</h3>
                <p className="mb-4">
                    Le site peut contenir des liens vers d'autres sites internet. Suggesto ne saurait être tenu responsable du contenu
                    de ces sites tiers ni de l'utilisation qui pourrait en être faite.
                </p>
            </div>
        ),
        confidentialite: (
            <div className="prose prose-sm max-w-none">
                <h3 className="text-xl font-bold mb-4">Préambule</h3>
                <p className="mb-4">
                    Suggesto s'engage à protéger la confidentialité et la sécurité de vos données personnelles conformément au
                    Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">1. Responsable du traitement</h3>
                <p className="mb-4">
                    Le responsable du traitement des données est :<br />
                    <strong>Suggesto</strong><br />
                    Email : pro.suggesto.ai@gmail.com<br />
                    Téléphone : 07 67 56 92 24
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">2. Données collectées</h3>
                <p className="mb-4">
                    Nous collectons les données personnelles suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Via le formulaire de contact :</strong> nom, prénom, adresse email, nom de l'entreprise, message</li>
                    <li><strong>Via le chatbot IA :</strong> messages de conversation, identifiant de session, historique des échanges</li>
                    <li><strong>Via les demandes de rendez-vous :</strong> coordonnées de contact, disponibilités</li>
                    <li><strong>Données techniques :</strong> adresse IP, type de navigateur, pages visitées (uniquement pour le bon fonctionnement du site)</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">3. Finalités du traitement</h3>
                <p className="mb-4">
                    Vos données personnelles sont traitées pour les finalités suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Répondre à vos demandes d'information et demandes de contact</li>
                    <li>Gérer les prises de rendez-vous et audits techniques</li>
                    <li>Fournir nos services d'architecture agentique (SAA, Retail OS, Solutions sur Mesure)</li>
                    <li>Assurer le fonctionnement du chatbot IA et améliorer ses réponses</li>
                    <li>Vous envoyer des informations commerciales relatives à nos offres (uniquement avec votre consentement préalable)</li>
                    <li>Respecter nos obligations légales et comptables</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">4. Base légale du traitement</h3>
                <p className="mb-4">
                    Le traitement de vos données repose sur :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Votre consentement</strong> pour l'utilisation du chatbot et l'envoi d'informations commerciales</li>
                    <li><strong>L'exécution du contrat</strong> pour la fourniture de nos services</li>
                    <li><strong>Nos intérêts légitimes</strong> pour l'amélioration de nos services et la gestion de notre activité</li>
                    <li><strong>Obligations légales</strong> pour la conservation de documents comptables et fiscaux</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">5. Conservation des données</h3>
                <p className="mb-4">
                    Vos données personnelles sont conservées pour les durées suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
                    <li><strong>Conversations chatbot :</strong> conservées localement dans votre navigateur (localStorage) jusqu'à suppression manuelle ou effacement du cache</li>
                    <li><strong>Données clients :</strong> durée du contrat + 5 ans (obligations comptables)</li>
                    <li><strong>Données prospects :</strong> 3 ans en l'absence de nouveau contact</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">6. Destinataires des données</h3>
                <p className="mb-4">
                    Vos données peuvent être transmises aux destinataires suivants :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Personnel autorisé de Suggesto</li>
                    <li>Prestataires techniques (hébergement, outils de communication)</li>
                    <li>Autorités légales sur demande (obligation légale)</li>
                </ul>
                <p className="mb-4">
                    <strong>Important :</strong> Aucune donnée n'est vendue ou cédée à des tiers à des fins commerciales.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">7. Vos droits (RGPD)</h3>
                <p className="mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                    <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                    <li><strong>Droit à l'effacement ("droit à l'oubli") :</strong> demander la suppression de vos données</li>
                    <li><strong>Droit à la limitation :</strong> restreindre temporairement le traitement de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et transférable</li>
                    <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des raisons légitimes</li>
                    <li><strong>Droit de retirer votre consentement :</strong> à tout moment, pour les traitements basés sur le consentement</li>
                </ul>
                <p className="mb-4">
                    Pour exercer ces droits, contactez-nous à : <strong>pro.suggesto.ai@gmail.com</strong> ou par téléphone au <strong>07 67 56 92 24</strong>.
                    Nous traiterons votre demande dans un délai maximum de 1 mois.
                </p>
                <p className="mb-4">
                    Vous disposez également du droit d'introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) :
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline ml-1">www.cnil.fr</a>
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">8. Chatbot IA et traitement automatisé</h3>
                <p className="mb-4">
                    Notre site intègre un chatbot basé sur l'intelligence artificielle pour répondre à vos questions.
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Les conversations sont stockées localement dans votre navigateur via localStorage</li>
                    <li>Les messages peuvent être envoyés à notre serveur pour traitement par IA et amélioration du service</li>
                    <li>Aucun traitement automatisé produisant des effets juridiques n'est mis en œuvre</li>
                    <li>Vous pouvez à tout moment demander une nouvelle conversation ou supprimer l'historique</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">9. Sécurité</h3>
                <p className="mb-4">
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
                    personnelles contre tout accès non autorisé, perte, destruction, altération ou divulgation :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Chiffrement des communications (HTTPS)</li>
                    <li>Hébergement sécurisé</li>
                    <li>Accès restreint aux données</li>
                    <li>Sauvegarde régulière</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">10. Cookies et technologies similaires</h3>
                <p className="mb-4">
                    Notre site utilise uniquement des cookies strictement nécessaires au fonctionnement du site et du chatbot (stockage de session).
                    Aucun cookie de tracking, publicitaire ou analytique n'est utilisé sans votre consentement explicite.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">11. Transferts de données hors UE</h3>
                <p className="mb-4">
                    Vos données peuvent être hébergées sur des serveurs situés hors de l'Union Européenne (Vercel Inc., USA).
                    Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types de la Commission européenne).
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">12. Modifications de la politique</h3>
                <p className="mb-4">
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                    Toute modification sera publiée sur cette page avec mise à jour de la date de révision.
                </p>
                <p className="mb-4">
                    <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>
        ),
        cgv: (
            <div className="prose prose-sm max-w-none">
                <h3 className="text-xl font-bold mb-4">Article 1 - Objet et champ d'application</h3>
                <p className="mb-4">
                    Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations contractuelles entre
                    <strong> Suggesto</strong> (ci-après "le Prestataire") et toute personne physique ou morale (ci-après "le Client")
                    souhaitant bénéficier des services d'architecture agentique et d'intelligence artificielle proposés.
                </p>
                <p className="mb-4">
                    Toute commande implique l'acceptation pleine et entière des présentes CGV, qui prévalent sur tout autre document du Client,
                    sauf dérogation écrite signée par le Prestataire.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 2 - Services proposés</h3>
                <p className="mb-4">
                    Suggesto propose les services suivants dans le domaine de l'intelligence artificielle et de l'architecture agentique :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>Système d'Acquisition Automatisé (SAA) :</strong> Agent IA conversationnel multi-canal conçu pour automatiser
                        la prospection et la qualification de leads via Instagram, les réseaux sociaux et le Web. Intégration de chatbots intelligents,
                        workflows automatisés et tableaux de bord de suivi.
                    </li>
                    <li>
                        <strong>Retail OS :</strong> Infrastructure agentique complète pour e-commerce Shopify. Solution clé en main incluant
                        un agent IA commercial, gestion automatisée du catalogue produit, recommandations personnalisées, et support client intelligent.
                    </li>
                    <li>
                        <strong>Conception sur Mesure :</strong> Développement de solutions personnalisées d'intelligence artificielle selon
                        les besoins spécifiques du Client (automatisation de processus métier, agents IA sur mesure, intégrations complexes).
                    </li>
                </ul>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 3 - Devis, commande et acceptation</h3>
                <p className="mb-4">
                    <strong>3.1 Audit et devis :</strong> Tout projet débute par un audit technique gratuit de 30 minutes permettant d'évaluer
                    les besoins du Client et de définir la solution adaptée. Un devis détaillé est ensuite établi, précisant la nature des
                    prestations, les délais, le prix et les modalités de paiement.
                </p>
                <p className="mb-4">
                    <strong>3.2 Validité :</strong> Le devis est valable 30 jours à compter de sa date d'émission. Passé ce délai,
                    le Prestataire se réserve le droit de réviser les conditions.
                </p>
                <p className="mb-4">
                    <strong>3.3 Acceptation :</strong> L'acceptation du devis par le Client (signature électronique ou écrite, versement de l'acompte)
                    vaut acceptation pleine et entière des présentes CGV et marque le commencement du contrat.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 4 - Prix et révision tarifaire</h3>
                <p className="mb-4">
                    Les prix sont indiqués en euros (€) hors taxes (HT). La TVA applicable sera mentionnée séparément sur les factures,
                    conformément à la législation en vigueur.
                </p>
                <p className="mb-4">
                    Les prix sont fermes et définitifs pour la durée du projet mentionnée dans le devis. Pour les contrats d'accompagnement
                    récurrents, le Prestataire se réserve le droit de réviser ses tarifs annuellement, avec un préavis de 2 mois.
                </p>
                <p className="mb-4">
                    Les prix n'incluent pas les coûts d'infrastructure tiers (hébergement, API d'IA, services externes) qui restent à la charge du Client.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 5 - Modalités de paiement</h3>
                <p className="mb-4">
                    Sauf mention contraire sur le devis, les modalités de paiement standard sont les suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>30%</strong> à la signature du contrat (acompte non remboursable)</li>
                    <li><strong>40%</strong> à la livraison de la solution en environnement de test</li>
                    <li><strong>30%</strong> à la mise en production validée par le Client</li>
                </ul>
                <p className="mb-4">
                    Le paiement s'effectue par virement bancaire sous 30 jours à compter de la date de facturation. Les coordonnées bancaires
                    sont mentionnées sur chaque facture.
                </p>
                <p className="mb-4">
                    <strong>Retard de paiement :</strong> Tout retard de paiement entraîne de plein droit l'application de pénalités
                    de retard au taux de 3 fois le taux d'intérêt légal, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement,
                    conformément aux articles L.441-10 et D.441-5 du Code de commerce.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 6 - Délais de réalisation et livraison</h3>
                <p className="mb-4">
                    Les délais de réalisation sont indiqués à titre indicatif dans le devis et peuvent varier en fonction de la complexité du projet.
                    Le Prestataire s'engage à respecter au mieux ces délais.
                </p>
                <p className="mb-4">
                    Toutefois, le Prestataire ne saurait être tenu responsable en cas de retard dû à :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Des causes extérieures (force majeure, défaillance de prestataires tiers, pannes de services externes)</li>
                    <li>Des modifications de périmètre ou de spécifications demandées par le Client en cours de projet</li>
                    <li>Un manque de réactivité du Client (validation tardive, fourniture tardive d'informations ou d'accès)</li>
                </ul>
                <p className="mb-4">
                    La livraison s'effectue en plusieurs phases : livraison en environnement de test, phase de recette avec le Client,
                    puis mise en production après validation formelle.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 7 - Obligations du Client</h3>
                <p className="mb-4">
                    Le Client s'engage à :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Fournir toutes les informations, documents et spécifications nécessaires à la réalisation du projet</li>
                    <li>Mettre à disposition les accès requis (comptes API, serveurs, plateformes tierces, comptes réseaux sociaux)</li>
                    <li>Désigner un interlocuteur unique pour faciliter la communication et les validations</li>
                    <li>Valider les livrables dans les délais convenus (sous 7 jours ouvrés sauf mention contraire)</li>
                    <li>Régler les factures aux échéances prévues</li>
                    <li>Respecter les conditions d'utilisation des services d'IA tiers intégrés (OpenAI, Anthropic, etc.)</li>
                </ul>
                <p className="mb-4">
                    Le défaut de respect de ces obligations peut entraîner un allongement des délais de livraison sans que la responsabilité
                    du Prestataire puisse être engagée.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 8 - Propriété intellectuelle et souveraineté</h3>
                <p className="mb-4">
                    <strong>8.1 Principe fondamental de souveraineté :</strong> Une fois le paiement intégral effectué, le Client devient
                    propriétaire exclusif de la solution développée et de l'ensemble du code source associé (workflows, prompts, scripts, configurations).
                </p>
                <p className="mb-4">
                    <strong>8.2 Infrastructure souveraine :</strong> L'infrastructure est déployée sur les comptes personnels du Client
                    (n8n, Supabase, VPS, ou autres services choisis par le Client). Le Client conserve un contrôle total et une souveraineté
                    complète sur ses données et ses systèmes.
                </p>
                <p className="mb-4">
                    <strong>8.3 Droit d'utilisation du Prestataire :</strong> Le Prestataire conserve uniquement un droit d'utilisation
                    anonymisé à des fins de démonstration commerciale, de portfolio et de cas d'usage, sans divulgation de données sensibles,
                    confidentielles ou identifiantes du Client.
                </p>
                <p className="mb-4">
                    <strong>8.4 Composants tiers :</strong> Les solutions peuvent intégrer des composants tiers (bibliothèques open source,
                    API d'IA). Ces composants restent soumis à leurs licences respectives.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 9 - Maintenance, accompagnement et support</h3>
                <p className="mb-4">
                    <strong>9.1 Garantie initiale :</strong> Le Prestataire garantit le bon fonctionnement de la solution livrée pendant
                    une période de 30 jours à compter de la mise en production. Les corrections de bugs identifiés pendant cette période
                    sont incluses sans frais supplémentaires.
                </p>
                <p className="mb-4">
                    <strong>9.2 Contrat d'accompagnement (optionnel) :</strong> Bien que l'infrastructure appartienne au Client,
                    le Prestataire propose un contrat d'accompagnement mensuel (durée minimale de 12 mois) incluant :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Maintenance technique et correction d'erreurs</li>
                    <li>Optimisation continue des prompts et workflows IA</li>
                    <li>Mises à jour fonctionnelles et évolutions mineures</li>
                    <li>Support prioritaire (email et visioconférence)</li>
                    <li>Veille technologique et recommandations d'amélioration</li>
                </ul>
                <p className="mb-4">
                    Les tarifs du contrat d'accompagnement sont définis dans un document séparé.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 10 - Confidentialité et protection des données</h3>
                <p className="mb-4">
                    <strong>10.1 Obligation de confidentialité :</strong> Le Prestataire s'engage à respecter la confidentialité stricte
                    de toutes les informations communiquées par le Client dans le cadre de la prestation (données commerciales, techniques,
                    stratégiques). Cette obligation reste applicable sans limitation de durée après la fin du contrat.
                </p>
                <p className="mb-4">
                    <strong>10.2 RGPD et données personnelles :</strong> Le Prestataire s'engage à respecter le Règlement Général sur la
                    Protection des Données (RGPD). Les modalités de traitement des données personnelles sont détaillées dans un accord de
                    sous-traitance (DPA) si le Prestataire est amené à traiter des données personnelles pour le compte du Client.
                </p>
                <p className="mb-4">
                    <strong>10.3 Sécurité :</strong> Le Prestataire met en œuvre les meilleures pratiques de sécurité pour protéger les
                    données du Client (chiffrement, accès restreints, sauvegarde).
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 11 - Responsabilité et garanties</h3>
                <p className="mb-4">
                    <strong>11.1 Obligation de moyens :</strong> Le Prestataire est soumis à une obligation de moyens. Il met en œuvre
                    toutes les ressources nécessaires pour garantir la qualité de ses services et le respect des meilleures pratiques.
                </p>
                <p className="mb-4">
                    <strong>11.2 Limitation de responsabilité :</strong> La responsabilité du Prestataire est limitée au montant total
                    du contrat (hors contrats d'accompagnement récurrents : limite au montant annuel). Le Prestataire ne saurait être tenu
                    responsable des dommages indirects tels que :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Perte d'exploitation, de chiffre d'affaires ou de bénéfices</li>
                    <li>Perte de clientèle ou d'image de marque</li>
                    <li>Perte de données non imputable à une faute du Prestataire</li>
                    <li>Coûts liés à l'utilisation de services tiers (API d'IA, hébergement)</li>
                </ul>
                <p className="mb-4">
                    <strong>11.3 Force majeure :</strong> Le Prestataire ne pourra être tenu responsable en cas de force majeure
                    ou de circonstances indépendantes de sa volonté (panne de services tiers, cyberattaque, catastrophe naturelle).
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 12 - Résiliation et rupture du contrat</h3>
                <p className="mb-4">
                    <strong>12.1 Résiliation pour manquement :</strong> En cas de manquement grave de l'une des parties à ses obligations
                    contractuelles, le contrat pourra être résilié de plein droit 15 jours après l'envoi d'une mise en demeure
                    par lettre recommandée avec accusé de réception restée sans effet.
                </p>
                <p className="mb-4">
                    <strong>12.2 Conséquences de la résiliation :</strong> Les sommes déjà versées resteront acquises au Prestataire au titre
                    des travaux déjà réalisés. Le Client devra régler l'intégralité des prestations effectuées jusqu'à la date de résiliation.
                </p>
                <p className="mb-4">
                    <strong>12.3 Résiliation anticipée par le Client :</strong> Le Client peut résilier le contrat à tout moment moyennant
                    le paiement d'une indemnité forfaitaire correspondant à 50% du montant total restant dû.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 13 - Règlement des litiges</h3>
                <p className="mb-4">
                    <strong>13.1 Médiation amiable :</strong> En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGV,
                    les parties s'engagent à rechercher une solution amiable avant toute action contentieuse. Une phase de médiation de 30 jours
                    minimum sera respectée.
                </p>
                <p className="mb-4">
                    <strong>13.2 Juridiction compétente :</strong> À défaut d'accord amiable, le litige sera porté devant les tribunaux
                    compétents de la juridiction du siège social du Prestataire, sauf disposition légale contraire d'ordre public.
                </p>

                <h3 className="text-xl font-bold mb-4 mt-8">Article 14 - Droit applicable et clauses diverses</h3>
                <p className="mb-4">
                    <strong>14.1 Droit applicable :</strong> Les présentes CGV sont soumises au droit français.
                </p>
                <p className="mb-4">
                    <strong>14.2 Nullité partielle :</strong> Si une ou plusieurs stipulations des présentes CGV sont tenues pour non valides
                    ou déclarées telles en application d'une loi, d'un règlement ou d'une décision de justice, les autres stipulations
                    garderont toute leur force et leur portée.
                </p>
                <p className="mb-4">
                    <strong>14.3 Modifications :</strong> Le Prestataire se réserve le droit de modifier les présentes CGV à tout moment.
                    Les CGV applicables sont celles en vigueur à la date de signature du devis.
                </p>
                <p className="mb-4">
                    <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
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
