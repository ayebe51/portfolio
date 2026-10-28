import { useState, useEffect, useRef } from 'react';

const CadCrosshairCursor = () => {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
    const [targetTag, setTargetTag] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const rafId = useRef(null);

    useEffect(() => {
        // Only run on desktop devices with a precision pointer (mouse/trackpad)
        if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
            return;
        }

        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            if (rafId.current) cancelAnimationFrame(rafId.current);

            rafId.current = requestAnimationFrame(() => {
                setMousePos({ x: e.clientX, y: e.clientY });

                // Detect if hovering over clickable or card elements
                const target = e.target?.closest('button, a, input, textarea, .brutal-card, .brutal-btn, [role="button"]');
                if (target) {
                    setIsHoveringInteractive(true);
                    const tag = target.getAttribute('aria-label') || target.innerText?.slice(0, 16) || target.tagName;
                    setTargetTag(tag ? String(tag).trim().toUpperCase() : 'TARGET');
                } else {
                    setIsHoveringInteractive(false);
                    setTargetTag('');
                }
            });
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div 
            className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden lg:block"
            aria-hidden="true"
        >
            <div 
                className="absolute transition-transform duration-75 ease-out"
                style={{
                    transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
                    left: 0,
                    top: 0
                }}
            >
                {/* Precision Crosshair (+) */}
                <div className="relative -left-3 -top-3 w-6 h-6 flex items-center justify-center">
                    <span className={`absolute w-3 h-[1.5px] ${isHoveringInteractive ? 'bg-blueprint' : 'bg-ink'}`}></span>
                    <span className={`absolute h-3 w-[1.5px] ${isHoveringInteractive ? 'bg-blueprint' : 'bg-ink'}`}></span>
                </div>

                {/* Corner Caliper Brackets: ┌ ┐ └ ┘ */}
                <div className={`absolute transition-all duration-150 ease-out ${
                    isHoveringInteractive 
                        ? '-left-6 -top-6 w-12 h-12 scale-110' 
                        : '-left-4 -top-4 w-8 h-8 scale-90 opacity-60'
                }`}>
                    {/* Top-Left: ┌ */}
                    <span className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${
                        isHoveringInteractive ? 'border-blueprint' : 'border-ink'
                    }`}></span>

                    {/* Top-Right: ┐ */}
                    <span className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${
                        isHoveringInteractive ? 'border-blueprint' : 'border-ink'
                    }`}></span>

                    {/* Bottom-Left: └ */}
                    <span className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${
                        isHoveringInteractive ? 'border-blueprint' : 'border-ink'
                    }`}></span>

                    {/* Bottom-Right: ┘ */}
                    <span className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${
                        isHoveringInteractive ? 'border-blueprint' : 'border-ink'
                    }`}></span>
                </div>

                {/* Target Caliper HUD Tag */}
                {isHoveringInteractive && targetTag && (
                    <div className="absolute left-6 top-2 font-mono text-[9px] font-black tracking-wider bg-ink text-white px-1.5 py-0.5 border border-blueprint shadow-[1px_1px_0px_#2563EB] whitespace-nowrap">
                        [{targetTag}]
                    </div>
                )}
            </div>
        </div>
    );
};

export default CadCrosshairCursor;

