import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "", onClick, href, target, disabled = false, type = "button" }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        if (disabled) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const MotionComponent = href ? motion.a : motion.button;

    return (
        <MotionComponent
            ref={ref}
            className={`relative z-10 ${className}`}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: disabled ? 0 : position.x, y: disabled ? 0 : position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onClick={onClick}
            href={href}
            target={target}
            disabled={disabled}
            type={type}
        >
            {children}
        </MotionComponent>
    );
};

export default MagneticButton;
