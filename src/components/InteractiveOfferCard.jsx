import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import ExpandableSection from './ExpandableSection';

const InteractiveOfferCard = ({
    title,
    subtitle,
    description,
    icon: Icon,
    color = "brand-cyan",
    accentColor = "brand-purple",
    detailedContent
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
        });
    };

    return (
        <motion.div
            className="relative rounded-3xl overflow-hidden group"
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* Multi-layer gradient backgrounds with blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl" />

            {/* Animated gradient orbs */}
            <motion.div
                className={`absolute w-96 h-96 bg-gradient-to-br from-${color}/30 via-${accentColor}/20 to-transparent rounded-full blur-[120px]`}
                style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: 'translate(-50%, -50%)'
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className={`absolute top-0 right-0 w-64 h-64 bg-${accentColor}/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3`} />
            <div className={`absolute bottom-0 left-0 w-80 h-80 bg-${color}/15 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3`} />

            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-white/20 via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 p-8 border border-white/10 rounded-3xl backdrop-blur-sm">
                {/* Header with floating sparkles */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mb-2"
                        >
                            <Sparkles className={`w-4 h-4 text-${color}`} />
                            <span className={`text-xs font-bold text-${color} tracking-widest uppercase`}>
                                {subtitle}
                            </span>
                        </motion.div>
                        <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-3">
                            {title}
                        </h3>
                    </div>
                    <motion.div
                        className={`relative p-4 rounded-2xl bg-gradient-to-br from-${color}/20 via-${accentColor}/15 to-${color}/10 backdrop-blur-md border border-white/10`}
                        whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        <Icon className={`w-8 h-8 text-${color}`} />
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-${color}/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </motion.div>
                </div>

                {/* Description with gradient text */}
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    {description}
                </p>

                {/* Enhanced Expand/Collapse Button */}
                <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`w-full mb-6 px-8 py-5 rounded-2xl bg-gradient-to-r from-${color}/15 via-${accentColor}/10 to-${color}/15 hover:from-${color}/25 hover:via-${accentColor}/20 hover:to-${color}/25 backdrop-blur-md border border-white/10 text-white font-semibold flex items-center justify-center gap-3 transition-all duration-500 relative overflow-hidden group/btn`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {/* Animated background shine */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                            x: ['-200%', '200%']
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    <span className="relative z-10 flex items-center gap-3">
                        {isExpanded ? (
                            <>
                                Masquer les détails
                                <ChevronUp className="w-5 h-5 group-hover/btn:translate-y-[-3px] transition-transform" />
                            </>
                        ) : (
                            <>
                                Découvrir tous les détails
                                <ChevronDown className="w-5 h-5 group-hover/btn:translate-y-[3px] transition-transform" />
                            </>
                        )}
                    </span>
                </motion.button>

                {/* Detailed Content */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                >
                    <div className="space-y-4 pt-4 border-t border-white/10">
                        {detailedContent}
                    </div>
                </motion.div>

                {/* Enhanced CTA */}
                {!isExpanded && (
                    <motion.a
                        href="#contact"
                        className={`group/cta inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-${color}/20 to-${accentColor}/20 hover:from-${color}/30 hover:to-${accentColor}/30 backdrop-blur-sm border border-white/10 text-${color} font-medium transition-all duration-300 mt-4`}
                        whileHover={{ x: 5, scale: 1.05 }}
                    >
                        <span>Démarrer l'intégration</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};

export default InteractiveOfferCard;
