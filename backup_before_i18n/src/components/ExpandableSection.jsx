import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ExpandableSection = ({
    title,
    children,
    defaultExpanded = false,
    className = "",
    titleClassName = "",
    color = "brand-cyan"
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <motion.div
            className={`relative rounded-2xl overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Gradient background blur */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 via-transparent to-${color}/5 blur-xl`} />

            <div className="relative border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/[0.02]">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-white/[0.03] to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] transition-all duration-500 group relative overflow-hidden ${titleClassName}`}
                >
                    {/* Animated gradient line */}
                    <motion.div
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-${color} to-transparent`}
                        initial={{ width: 0 }}
                        animate={{ width: isExpanded ? "100%" : "0%" }}
                        transition={{ duration: 0.5 }}
                    />

                    <h4 className="text-white font-semibold text-left flex items-center gap-3">
                        <motion.span
                            className={`w-2 h-2 rounded-full bg-gradient-to-br from-${color} to-${color}/50`}
                            animate={{
                                scale: isExpanded ? [1, 1.3, 1] : 1,
                                boxShadow: isExpanded
                                    ? [`0 0 0 0 rgba(56, 189, 248, 0.4)`, `0 0 0 10px rgba(56, 189, 248, 0)`, `0 0 0 0 rgba(56, 189, 248, 0)`]
                                    : `0 0 0 0 rgba(56, 189, 248, 0)`
                            }}
                            transition={{ duration: 2, repeat: isExpanded ? Infinity : 0 }}
                        />
                        {title}
                    </h4>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <ChevronDown className={`w-5 h-5 text-${color} group-hover:scale-125 transition-transform duration-300`} />
                    </motion.div>
                </button>

                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                        >
                            <motion.div
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                exit={{ y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="px-6 py-6 bg-gradient-to-br from-white/[0.01] to-transparent relative"
                            >
                                {/* Decorative gradient corner */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${color}/10 to-transparent rounded-full blur-2xl`} />

                                <div className="relative z-10">
                                    {children}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ExpandableSection;
