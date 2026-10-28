import { useState, useEffect, useRef } from 'react';

const KineticCounter = ({ value, duration = 1500, className = '' }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const containerRef = useRef(null);
    const hasAnimated = useRef(false);
    const rafRef = useRef(null);

    useEffect(() => {
        // Extract numeric part and prefix/suffix
        const match = value.match(/([^\d]*)([\d,]+)([^\d]*)/);
        if (!match) {
            setDisplayValue(value);
            return;
        }

        const prefix = match[1] || '';
        const rawNumberStr = match[2].replace(/,/g, '');
        const targetNumber = parseInt(rawNumberStr, 10);
        const suffix = match[3] || '';
        const hasCommas = match[2].includes(',');

        if (isNaN(targetNumber)) {
            setDisplayValue(value);
            return;
        }

        // Respect prefers-reduced-motion
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplayValue(value);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease-out Quart
                        const easedProgress = 1 - Math.pow(1 - progress, 4);
                        const currentVal = Math.floor(easedProgress * targetNumber);

                        const formattedNumber = hasCommas 
                            ? currentVal.toLocaleString('en-US') 
                            : currentVal.toString();

                        setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

                        if (progress < 1) {
                            rafRef.current = requestAnimationFrame(animate);
                        } else {
                            setDisplayValue(value);
                        }
                    };

                    rafRef.current = requestAnimationFrame(animate);
                }
            },
            { threshold: 0.2 }
        );

        const currentElem = containerRef.current;
        if (currentElem) {
            observer.observe(currentElem);
        }

        return () => {
            if (currentElem) observer.unobserve(currentElem);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [value, duration]);

    return (
        <span ref={containerRef} className={`inline-block ${className}`}>
            {displayValue}
        </span>
    );
};

export default KineticCounter;

