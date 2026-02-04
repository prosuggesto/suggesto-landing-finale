import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-white">
            {/* Minimal gradient overlay - barely visible */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30" />

            {/* Ultra-subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px'
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
