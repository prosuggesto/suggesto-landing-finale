import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { v4 as uuidv4 } from 'uuid';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(() => {
        // Restaurer les messages depuis localStorage
        const savedMessages = localStorage.getItem('chatbot_messages');
        return savedMessages ? JSON.parse(savedMessages) : [];
    });
    const [inputValue, setInputValue] = useState('');
    const [hasAutoOpened, setHasAutoOpened] = useState(() => {
        // Vérifier si le chatbot a déjà été auto-ouvert dans cette session
        return localStorage.getItem('chatbot_auto_opened') === 'true';
    });
    const [audioReady, setAudioReady] = useState(false);
    const [sessionId] = useState(() => {
        // Récupérer ou créer un sessionId persistent
        let id = localStorage.getItem('chatbot_session_id');
        if (!id) {
            id = uuidv4();
            localStorage.setItem('chatbot_session_id', id);
        }
        return id;
    });
    const messagesEndRef = useRef(null);
    const audioContextRef = useRef(null);

    // Initialiser le contexte audio dès le montage
    useEffect(() => {
        // Créer le contexte audio immédiatement
        try {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            console.log('Audio not supported');
        }

        // Fonction pour activer l'audio au premier clic
        const enableAudio = async () => {
            if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                await audioContextRef.current.resume();
                setAudioReady(true);
            } else {
                setAudioReady(true);
            }
        };

        // Écouter le premier clic/toucher pour activer l'audio
        const events = ['click', 'touchstart', 'keydown'];
        events.forEach(event => {
            document.addEventListener(event, enableAudio, { once: true });
        });

        return () => {
            events.forEach(event => {
                document.removeEventListener(event, enableAudio);
            });
        };
    }, []);

    // Sauvegarder les messages dans localStorage à chaque changement
    useEffect(() => {
        localStorage.setItem('chatbot_messages', JSON.stringify(messages));
    }, [messages]);

    // Fonction pour jouer un son de notification (ouverture)
    const playNotificationSound = () => {
        if (!audioReady || !audioContextRef.current) return;

        try {
            const ctx = audioContextRef.current;

            // S'assurer que le contexte est actif
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            // Son agréable (deux notes montantes)
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.1);

            // Deuxième note plus haute
            setTimeout(() => {
                const osc2 = ctx.createOscillator();
                const gain2 = ctx.createGain();
                osc2.connect(gain2);
                gain2.connect(ctx.destination);
                osc2.frequency.value = 1000;
                gain2.gain.setValueAtTime(0.3, ctx.currentTime);
                gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                osc2.start(ctx.currentTime);
                osc2.stop(ctx.currentTime + 0.1);
            }, 100);
        } catch (error) {
            console.log('Audio playback failed');
        }
    };

    // Fonction pour jouer un son de fermeture
    const playCloseSound = () => {
        if (!audioReady || !audioContextRef.current) return;

        try {
            const ctx = audioContextRef.current;

            // S'assurer que le contexte est actif
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            // Son descendant pour la fermeture (plus lent et doux)
            oscillator.frequency.value = 600;
            gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.2);
        } catch (error) {
            console.log('Audio playback failed');
        }
    };

    // Auto-ouverture après 5 secondes (SANS son car navigateur bloque l'audio avant interaction)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasAutoOpened) {
                setIsOpen(true);
                setHasAutoOpened(true);
                localStorage.setItem('chatbot_auto_opened', 'true');
                // PAS de son ici - les navigateurs bloquent l'audio avant interaction utilisateur

                // Message de bienvenue seulement s'il n'y a pas de messages sauvegardés
                setMessages(prev => {
                    if (prev.length === 0) {
                        return [{
                            id: Date.now(),
                            type: 'bot',
                            text: 'Salut ! 👋 Comment puis-je vous aider ?',
                            timestamp: new Date()
                        }];
                    }
                    return prev;
                });
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [hasAutoOpened]);

    // Scroll automatique vers le bas
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const toggleChat = () => {
        if (!isOpen) {
            // Ouverture du chat
            playNotificationSound();
            setIsOpen(true);
            if (messages.length === 0) {
                // Si on ouvre manuellement et qu'il n'y a pas de messages
                setMessages([{
                    id: Date.now(),
                    type: 'bot',
                    text: 'Salut ! 👋 Comment puis-je vous aider ?',
                    timestamp: new Date()
                }]);
            }
        } else {
            // Fermeture du chat - jouer le son puis fermer
            playCloseSound();
            // Attendre que le son se termine avant de fermer (250ms pour le son de 200ms + marge)
            setTimeout(() => {
                setIsOpen(false);
            }, 250);
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            type: 'user',
            text: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const messageText = inputValue;
        setInputValue('');

        // Ajouter un message de chargement
        const loadingId = Date.now() + 1;
        setMessages(prev => [...prev, {
            id: loadingId,
            type: 'bot',
            text: '...',
            isLoading: true,
            timestamp: new Date()
        }]);

        try {

            const response = await fetch('https://n8n.srv862127.hstgr.cloud/webhook/suggesto_assistant_web', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'suggesto.01': 'suggesto.assistant.01'
                },
                body: JSON.stringify({
                    text: messageText,
                    sessionId: sessionId
                })
            });


            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Retirer le message de chargement
            setMessages(prev => prev.filter(msg => msg.id !== loadingId));

            // Vérifier que data.texte existe
            if (!data.texte) {
                console.error('Pas de champ texte dans la réponse:', data);
                throw new Error('Réponse invalide du serveur');
            }

            const botMessage = {
                id: Date.now() + 2,
                type: 'bot',
                text: data.texte,
                isMarkdown: true,
                timestamp: new Date()
            };


            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);

            // Retirer le message de chargement
            setMessages(prev => prev.filter(msg => msg.id !== loadingId));

            // Message d'erreur
            const errorMessage = {
                id: Date.now() + 2,
                type: 'bot',
                text: `Erreur: ${error.message}\n\nVeuillez réessayer.`,
                isMarkdown: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        }
    };

    return (
        <>
            {/* Widget fermé - Bulle hexagonale */}
            {!isOpen && (
                <div className="chatbot-bubble" onClick={toggleChat}>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <line x1="9" y1="10" x2="15" y2="10" />
                        <line x1="9" y1="14" x2="13" y2="14" />
                    </svg>
                </div>
            )}

            {/* Fenêtre de chat ouverte */}
            {isOpen && (
                <div className="chatbot-window">
                    {/* Header */}
                    <div className="chatbot-header">
                        <div className="chatbot-header-content">
                            <div className="chatbot-avatar">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                </svg>
                            </div>
                            <div className="chatbot-title">
                                <h3>Suggesto</h3>
                                <span className="chatbot-status">En ligne</span>
                            </div>
                        </div>
                        <button className="chatbot-close" onClick={toggleChat}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="chatbot-messages">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`chatbot-message ${message.type === 'user' ? 'user-message' : 'bot-message'} ${message.isLoading ? 'loading-message' : ''}`}
                            >
                                <div className="message-bubble">
                                    {message.isLoading ? (
                                        <span className="loading-dots">...</span>
                                    ) : message.isMarkdown && message.text ? (
                                        <div className="markdown-content">
                                            <ReactMarkdown>
                                                {String(message.text)}
                                            </ReactMarkdown>
                                        </div>
                                    ) : (
                                        <div style={{ whiteSpace: 'pre-wrap' }}>
                                            {message.text || ''}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form className="chatbot-input-container" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            className="chatbot-input"
                            placeholder="Écrivez votre message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="chatbot-send-button">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatbotWidget;
