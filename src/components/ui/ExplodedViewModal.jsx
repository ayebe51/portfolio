import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiLayers, FiServer, FiDatabase, FiSliders, FiCheckCircle } from 'react-icons/fi';
import { useSound } from '../../context/SoundContext';

const ExplodedViewModal = ({ isOpen, onClose, defaultSystem = "SIMMACI" }) => {
    const { playClick, playRelay } = useSound();
    const [system, setSystem] = useState(defaultSystem);
    const [explosionFactor, setExplosionFactor] = useState(75); // 0 to 100
    const [selectedLayer, setSelectedLayer] = useState(null);

    if (!isOpen) return null;

    const systemData = {
        SIMMACI: {
            title: "SIMMACI // MULTI-TENANT MADRASAH GOVERNANCE",
            desc: "Batch student decree generator across 270+ institutions with 1,842 automated tests.",
            l1: {
                title: "LAYER 01: PRESENTATION & CLIENT ENGINE",
                tech: "React 19 • Vite PWA • Docxtemplater • Virtualized Tables",
                detail: "Client-side batch generation of thousands of decrees without server memory leaks. Optimistic UI updates with <100ms feedback.",
                metric: "17,000+ Active Users"
            },
            l2: {
                title: "LAYER 02: TENANT ISOLATION GATEWAY",
                tech: "NestJS • RBAC Maker-Checker • JWT Auth • Rate Limiting",
                detail: "Granular multi-tenant query routing ensuring zero cross-school data leakage. Maker-checker dual authorization for sensitive actions.",
                metric: "Zero Leakage Verified"
            },
            l3: {
                title: "LAYER 03: PERSISTENCE & AUDIT LEDGER",
                tech: "PostgreSQL 16 • Multi-Tenant Schemas • Prisma ORM • Redis",
                detail: "1,842 automated test suites (Unit, Integration, E2E) with 36,000+ assertions ensuring 100% data integrity on every commit.",
                metric: "1,842 Tests Passed (100%)"
            }
        },
        Koneksi: {
            title: "KONEKSI SANTRI // ERP & MOBILE WALLET ECOSYSTEM",
            desc: "Double-entry closed-loop ledger for Islamic boarding schools with Smart Gate QR.",
            l1: {
                title: "LAYER 01: DUAL CLIENT INTERFACES",
                tech: "Flutter Mobile App (Wali Santri) • Next.js 14 Superadmin",
                detail: "Sub-second biometric balance checks, push notifications, and high-frequency attendance scanning interface.",
                metric: "Sub-Second QR Scanning"
            },
            l2: {
                title: "LAYER 02: REAL-TIME EVENT BROKER",
                tech: "NestJS Microservices • Redis Pub/Sub • WebSockets",
                detail: "Instant transaction broadcast to guardian mobile devices with guaranteed message delivery and retry queues.",
                metric: "Sub-50ms Event Broadcast"
            },
            l3: {
                title: "LAYER 03: SERIALIZABLE ROW-LOCK LEDGER",
                tech: "PostgreSQL 16 • Row Locks (FOR UPDATE) • Double-Entry Ledger",
                detail: "Prevents race-condition double spending across simultaneous POS checkouts. Strict zero-sum balance balance guarantees.",
                metric: "0 Discrepancy Verified"
            }
        },
        Kiro: {
            title: "KIRO ERP & POS // RETAIL INVENTORY LEDGER",
            desc: "High-speed cashier POS and append-only inventory movement ledger.",
            l1: {
                title: "LAYER 01: HIGH-CRAFT CASHIER FRONT-END",
                tech: "React 19 • Apache ECharts • Tailwind CSS • Keyboard Shortcuts",
                detail: "Keyboard-first checkout under 500ms per transaction. Dynamic financial charts with 60fps animations.",
                metric: "Sub-500ms Checkout"
            },
            l2: {
                title: "LAYER 02: ORCHESTRATION & DOMAIN LOGIC",
                tech: "NestJS • Domain-Driven Design (DDD) • Token Bucket",
                detail: "Validates inventory state transitions and orchestrates price tier overrides with granular cashier permissions.",
                metric: "DDD Domain Separation"
            },
            l3: {
                title: "LAYER 03: APPEND-ONLY STOCK VALUATION",
                tech: "PostgreSQL • WAC / FIFO Valuation • TimescaleDB",
                detail: "Immutable audit trail of every stock in/out movement. No destructive updates, enabling exact point-in-time reconstruction.",
                metric: "100% Append-Only History"
            }
        }
    };

    const current = systemData[system] || systemData.SIMMACI;

    // Calculate 3D Z offsets based on explosion factor
    const zOffsetL1 = (explosionFactor / 100) * 110;
    const zOffsetL2 = 0;
    const zOffsetL3 = -(explosionFactor / 100) * 110;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
                
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-ink/75 backdrop-blur-xs"
                />

                {/* Main CAD Blueprint Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full max-w-5xl bg-[#F6F5F0] border-4 border-ink shadow-brutal-xl z-10 flex flex-col max-h-[92vh] overflow-hidden"
                    data-lenis-prevent
                >
                    {/* CAD Drawing Board Header */}
                    <div className="bg-[#18181B] text-white px-4 sm:px-6 py-3 border-b-2 border-ink flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-black uppercase bg-safety text-ink px-2 py-0.5 border border-white">
                                CAD_DWG // ISOMETRIC 3D EXPLODED
                            </span>
                            <span className="font-mono text-xs font-bold text-stone-300">
                                SCALE: 1:1 // TRUE ISOMETRIC STACK
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* System Selectors */}
                            {['SIMMACI', 'Koneksi', 'Kiro'].map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => {
                                        playClick();
                                        setSystem(s);
                                    }}
                                    className={`font-mono text-xs font-bold uppercase px-2.5 py-1 border transition-all ${
                                        system === s 
                                            ? 'bg-blueprint text-white border-white' 
                                            : 'bg-stone-800 text-stone-300 border-stone-600 hover:bg-stone-700'
                                    }`}
                                >
                                    {s}
                                </button>
                            ))}

                            <button
                                type="button"
                                onClick={onClose}
                                className="font-mono text-xs font-black px-2 py-1 bg-red-600 text-white border border-white hover:bg-red-700 ml-2"
                                title="Close CAD View (ESC)"
                            >
                                <FiX />
                            </button>
                        </div>
                    </div>

                    {/* Interactive Slider Bar */}
                    <div className="bg-canvas border-b-2 border-ink px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <FiSliders className="text-blueprint text-sm" />
                            <span className="font-mono text-xs font-black uppercase text-ink">
                                EXPLOSION SEPARATION FACTOR:
                            </span>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={explosionFactor}
                                onChange={(e) => {
                                    setExplosionFactor(Number(e.target.value));
                                }}
                                className="w-32 sm:w-48 accent-blueprint cursor-pointer"
                            />
                            <span className="font-mono text-xs font-black text-blueprint">
                                {explosionFactor}%
                            </span>
                        </div>

                        <div className="font-mono text-[11px] text-ink-muted">
                            [ HOVER ANY LAYER TO HIGHLIGHT CONTRACT & SPECS ]
                        </div>
                    </div>

                    {/* 3D Isometric CAD Canvas Area */}
                    <div className="p-6 sm:p-8 overflow-y-auto flex-grow flex flex-col items-center justify-center bg-drafting-grid relative min-h-[380px]">
                        
                        {/* Title Subheader */}
                        <div className="text-center mb-6">
                            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-ink">
                                {current.title}
                            </h3>
                            <p className="font-sans text-xs sm:text-sm text-ink-muted">
                                {current.desc}
                            </p>
                        </div>

                        {/* 3D Perspective Stage */}
                        <div 
                            className="w-full max-w-xl py-8 relative flex items-center justify-center"
                            style={{
                                perspective: '1200px'
                            }}
                        >
                            <div 
                                className="w-full transition-transform duration-300"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: 'rotateX(52deg) rotateZ(-36deg)'
                                }}
                            >
                                
                                {/* Layer 1: Client Edge */}
                                <motion.div
                                    onMouseEnter={() => {
                                        playClick();
                                        setSelectedLayer(1);
                                    }}
                                    onMouseLeave={() => setSelectedLayer(null)}
                                    style={{
                                        transform: `translateZ(${zOffsetL1}px)`,
                                        transformStyle: 'preserve-3d'
                                    }}
                                    className={`w-full p-4 sm:p-5 bg-white border-2 border-ink shadow-brutal transition-all duration-200 cursor-pointer relative ${
                                        selectedLayer === 1 ? 'ring-4 ring-blueprint scale-105' : 'hover:border-blueprint'
                                    }`}
                                >
                                    <div className="flex items-center justify-between border-b border-ink/20 pb-2 mb-2 font-mono text-[10px] font-bold">
                                        <span className="flex items-center gap-1.5 text-blueprint font-black">
                                            <FiLayers />
                                            <span>PLANE_01 // EDGE CLIENT</span>
                                        </span>
                                        <span className="px-1.5 py-0.5 bg-blueprint text-white text-[9px] font-black">
                                            {current.l1.metric}
                                        </span>
                                    </div>
                                    <h4 className="font-display font-black text-sm uppercase text-ink">
                                        {current.l1.title}
                                    </h4>
                                    <p className="font-mono text-[11px] text-ink font-semibold mt-1">
                                        {current.l1.tech}
                                    </p>
                                    <p className="font-sans text-[11px] text-ink-muted mt-1 leading-snug">
                                        {current.l1.detail}
                                    </p>
                                </motion.div>

                                {/* Dashed Plumb Connector Lines */}
                                <div 
                                    className="h-10 sm:h-14 w-full flex justify-around pointer-events-none"
                                    style={{
                                        transform: `translateZ(${zOffsetL1 / 2}px)`
                                    }}
                                >
                                    <div className="w-0.5 h-full border-r-2 border-dashed border-blueprint/60"></div>
                                    <div className="w-0.5 h-full border-r-2 border-dashed border-safety/60"></div>
                                    <div className="w-0.5 h-full border-r-2 border-dashed border-telemetry/60"></div>
                                </div>

                                {/* Layer 2: API Gateway Core */}
                                <motion.div
                                    onMouseEnter={() => {
                                        playClick();
                                        setSelectedLayer(2);
                                    }}
                                    onMouseLeave={() => setSelectedLayer(null)}
                                    style={{
                                        transform: `translateZ(${zOffsetL2}px)`,
                                        transformStyle: 'preserve-3d'
                                    }}
                                    className={`w-full p-4 sm:p-5 bg-canvas-card border-2 border-ink shadow-brutal transition-all duration-200 cursor-pointer relative ${
                                        selectedLayer === 2 ? 'ring-4 ring-safety scale-105' : 'hover:border-safety'
                                    }`}
                                >
                                    <div className="flex items-center justify-between border-b border-ink/20 pb-2 mb-2 font-mono text-[10px] font-bold">
                                        <span className="flex items-center gap-1.5 text-ink font-black">
                                            <FiServer />
                                            <span>PLANE_02 // DOMAIN CORE & ROUTING</span>
                                        </span>
                                        <span className="px-1.5 py-0.5 bg-safety text-ink text-[9px] font-black">
                                            {current.l2.metric}
                                        </span>
                                    </div>
                                    <h4 className="font-display font-black text-sm uppercase text-ink">
                                        {current.l2.title}
                                    </h4>
                                    <p className="font-mono text-[11px] text-ink font-semibold mt-1">
                                        {current.l2.tech}
                                    </p>
                                    <p className="font-sans text-[11px] text-ink-muted mt-1 leading-snug">
                                        {current.l2.detail}
                                    </p>
                                </motion.div>

                                {/* Dashed Plumb Connector Lines */}
                                <div 
                                    className="h-10 sm:h-14 w-full flex justify-around pointer-events-none"
                                    style={{
                                        transform: `translateZ(${zOffsetL3 / 2}px)`
                                    }}
                                >
                                    <div className="w-0.5 h-full border-r-2 border-dashed border-blueprint/60"></div>
                                    <div className="w-0.5 h-full border-r-2 border-dashed border-safety/60"></div>
                                    <div className="w-0.5 h-full border-r-2 border-dashed border-telemetry/60"></div>
                                </div>

                                {/* Layer 3: Persistence & Ledger */}
                                <motion.div
                                    onMouseEnter={() => {
                                        playRelay();
                                        setSelectedLayer(3);
                                    }}
                                    onMouseLeave={() => setSelectedLayer(null)}
                                    style={{
                                        transform: `translateZ(${zOffsetL3}px)`,
                                        transformStyle: 'preserve-3d'
                                    }}
                                    className={`w-full p-4 sm:p-5 bg-[#121316] text-white border-2 border-ink shadow-brutal transition-all duration-200 cursor-pointer relative ${
                                        selectedLayer === 3 ? 'ring-4 ring-telemetry scale-105' : 'hover:border-telemetry'
                                    }`}
                                >
                                    <div className="flex items-center justify-between border-b border-stone-700 pb-2 mb-2 font-mono text-[10px] font-bold">
                                        <span className="flex items-center gap-1.5 text-telemetry font-black">
                                            <FiDatabase />
                                            <span>PLANE_03 // SERIALIZABLE PERSISTENCE</span>
                                        </span>
                                        <span className="px-1.5 py-0.5 bg-telemetry text-ink text-[9px] font-black">
                                            {current.l3.metric}
                                        </span>
                                    </div>
                                    <h4 className="font-display font-black text-sm uppercase text-white">
                                        {current.l3.title}
                                    </h4>
                                    <p className="font-mono text-[11px] text-stone-300 font-semibold mt-1">
                                        {current.l3.tech}
                                    </p>
                                    <p className="font-sans text-[11px] text-stone-400 mt-1 leading-snug">
                                        {current.l3.detail}
                                    </p>
                                </motion.div>

                            </div>
                        </div>

                    </div>

                    {/* Bottom Inspector Spec Card */}
                    <div className="bg-white border-t-2 border-ink p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-telemetry border border-ink flex-shrink-0 animate-pulse"></span>
                            <div className="text-ink font-semibold">
                                {selectedLayer === 1 ? (
                                    <span>HIGHLIGHT: Client optimistic state rendering (<strong className="text-blueprint">React 19 / Flutter</strong>)</span>
                                ) : selectedLayer === 2 ? (
                                    <span>HIGHLIGHT: Token-bucket rate limiter & multi-tenant isolation (<strong className="text-safety-dark">NestJS Gateway</strong>)</span>
                                ) : selectedLayer === 3 ? (
                                    <span>HIGHLIGHT: Append-only ledger & row-level serializable locks (<strong className="text-telemetry-dark">PostgreSQL 16</strong>)</span>
                                ) : (
                                    <span>Hover any architectural plane above to inspect its real-time telemetry and data contract.</span>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 bg-canvas border border-ink font-bold flex items-center gap-1.5 text-ink">
                                <FiCheckCircle className="text-telemetry" />
                                <span>100% CI VERIFIED</span>
                            </span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ExplodedViewModal;

