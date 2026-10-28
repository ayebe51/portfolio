import { useState, useEffect, useRef } from 'react';

const CoordinateHud = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        // Only run on desktop pointer fine devices
        if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
            return;
        }

        const handleMouseMove = (e) => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            rafId.current = requestAnimationFrame(() => {
                setCoords({ x: e.clientX, y: e.clientY });
            });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    const formatCoord = (val) => String(val).padStart(4, '0');

    return (
        <div className="fixed bottom-4 left-4 z-30 hidden lg:block pointer-events-none select-none">
            <div className="brutal-card !shadow-brutal-sm bg-canvas-card px-3 py-1.5 font-mono text-[11px] text-ink flex items-center gap-2 border-2 border-ink">
                <span className="w-2 h-2 rounded-full bg-blueprint animate-pulse"></span>
                <span className="font-bold text-ink">CAD:</span>
                <span className="text-blueprint font-black">X_{formatCoord(coords.x)}</span>
                <span className="text-ink-muted">|</span>
                <span className="text-blueprint font-black">Y_{formatCoord(coords.y)}</span>
                <span className="text-ink-muted hidden xl:inline">{'//'} GRID: 24PX</span>
            </div>
        </div>
    );
};

export default CoordinateHud;
