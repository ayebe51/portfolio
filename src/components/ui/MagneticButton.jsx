import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ 
    children, 
    className = "", 
    onClick, 
    href, 
    target, 
    rel,
    disabled = false, 
    type = "button",
    "aria-label": ariaLabel,
    onMouseMove: userOnMouseMove,
    onMouseLeave: userOnMouseLeave,
    onBlur: userOnBlur,
    ...rest 
}) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        if (disabled) return;
        if (typeof window !== 'undefined') {
            // Respect reduced motion preference
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            // Disable magnetic displacement on touch-first / non-hover pointer devices
            if (window.matchMedia('(hover: none)').matches) return;
        }

        const { clientX, clientY } = e;
        if (!ref.current) return;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
        userOnMouseMove?.(e);
    };

    const reset = (e) => {
        setPosition({ x: 0, y: 0 });
        if (e?.type === 'mouseleave') userOnMouseLeave?.(e);
        if (e?.type === 'blur') userOnBlur?.(e);
    };

    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    };

    const computedRel = rel || (target === '_blank' ? 'noopener noreferrer' : undefined);
    const MotionComponent = href ? motion.a : motion.button;

    return (
        <MotionComponent
            ref={ref}
            className={`relative z-10 ${className}`}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onBlur={reset}
            animate={{ x: disabled ? 0 : position.x, y: disabled ? 0 : position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onClick={handleClick}
            href={href}
            target={href ? target : undefined}
            rel={href ? computedRel : undefined}
            disabled={href ? undefined : disabled}
            aria-disabled={href && disabled ? true : undefined}
            tabIndex={href && disabled ? -1 : undefined}
            type={href ? undefined : type}
            aria-label={ariaLabel}
            {...rest}
        >
            {children}
        </MotionComponent>
    );
};

export default MagneticButton;
