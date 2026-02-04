import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const RevealOnScroll = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? 'none' : 'translateY(20px)',
                opacity: isInView ? 1 : 0,
                transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
