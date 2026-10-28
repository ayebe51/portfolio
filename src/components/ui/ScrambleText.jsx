import { useState, useEffect, useRef, useCallback } from 'react';

const CHARS = '01X_#%*[]<>/';

const ScrambleText = ({ text, className = '', scrambleOnHover = true, delay = 0 }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    const scramble = useCallback(() => {
        // Respect prefers-reduced-motion
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplayText(text);
            return;
        }

        let iteration = 0;
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(
                text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ' || char === '\n') return char;
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join('')
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
                setDisplayText(text);
            }

            iteration += 1 / 2;
        }, 30);
    }, [text]);

    useEffect(() => {
        if (delay > 0) {
            timeoutRef.current = setTimeout(scramble, delay);
        } else {
            scramble();
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [scramble, delay]);

    const handleMouseEnter = () => {
        if (scrambleOnHover) {
            scramble();
        }
    };

    return (
        <span 
            className={`inline-block select-none cursor-default ${className}`}
            onMouseEnter={handleMouseEnter}
        >
            {displayText}
        </span>
    );
};

export default ScrambleText;

