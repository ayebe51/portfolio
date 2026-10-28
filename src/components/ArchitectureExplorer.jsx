import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiLayers, 
    FiServer, 
    FiDatabase, 
    FiCheckCircle, 
    FiCpu, 
    FiActivity, 
    FiShield, 
    FiArrowRight, 
    FiTerminal,
    FiRadio,
    FiPlay,
    FiRefreshCw
} from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

const ArchitectureExplorer = () => {
    const { language } = useLanguage();
    const t = translations[language].architecture;
    const sim = t.simulator || {
        triggerBtn: "RUN TRANSACTION SIMULATION",
        runningBtn: "TRANSMITTING DATA PACKET...",
        step1Badge: "Node 01 // Payload Built (+12ms)",
        step2Badge: "Node 02 // Tenant & JWT Verified (+24ms)",
        step3Badge: "Node 03 // PostgreSQL Row-Lock Committed (+18ms)",
        stepComplete: "Roundtrip Complete: 54ms // HTTP 200 OK",
        terminalTitle: "LIVE DISTRIBUTED TRANSACTION STREAM // DDL & AUDIT LOG",
        clearBtn: "Reset Simulation"
    };

    const { playClick, playPing, playRelay } = useSound();
    const [activeNodeId, setActiveNodeId] = useState('gateway');
    const [isSimulating, setIsSimulating] = useState(false);
    const [simStep, setSimStep] = useState(0); // 0: idle, 1: client, 2: gateway, 3: ledger, 4: complete
    const [logs, setLogs] = useState([]);
    const terminalRef = useRef(null);
    const timeoutIds = useRef([]);

    const nodeIcons = {
        client: FiLayers,
        gateway: FiServer,
        ledger: FiDatabase
    };

    const activeNode = t.nodes[activeNodeId] || t.nodes.gateway;
    const ActiveIcon = nodeIcons[activeNodeId] || FiServer;

    const clearTimeouts = () => {
        timeoutIds.current.forEach(id => clearTimeout(id));
        timeoutIds.current = [];
    };

    useEffect(() => {
        return () => clearTimeouts();
    }, []);

    // Auto-scroll terminal log
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [logs]);

    const runSimulation = () => {
        if (isSimulating) return;
        playRelay();
        clearTimeouts();
        setIsSimulating(true);
        setSimStep(1);
        setActiveNodeId('client');
        setLogs([
            `[00:00.012] POST /api/v1/ledger/batch-decrees HTTP/1.1 (Client SPA: React 19 / Docxtemplater)`,
            `[00:00.012] CLIENT: Dynamic payload compiled, client-side cryptographic checksum calculated.`
        ]);

        // Step 2: Gateway
        const t1 = setTimeout(() => {
            setSimStep(2);
            setActiveNodeId('gateway');
            playClick();
            setLogs(prev => [
                ...prev,
                `[00:00.036] GATEWAY: Ingress received at NestJS gateway. Rate limit status: 0ms throttled.`,
                `[00:00.036] GATEWAY: Tenant verified [tenant_id=madrasah_271], RBAC Maker-Checker policy: APPROVED.`
            ]);
        }, 750);

        // Step 3: Database & Ledger (Relay click + Ping)
        const t2 = setTimeout(() => {
            setSimStep(3);
            setActiveNodeId('ledger');
            playRelay();
            playPing();
            setLogs(prev => [
                ...prev,
                `[00:00.054] POSTGRESQL 16: BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;`,
                `[00:00.054] DB: SELECT * FROM ledger_balances WHERE tenant_id=271 FOR UPDATE; [Row Lock Acquired]`,
                `[00:00.054] DB: INSERT INTO audit_events (...) VALUES (...); COMMIT; [0 Discrepancy Verified]`
            ]);
        }, 1500);

        // Step 4: Roundtrip Complete
        const t3 = setTimeout(() => {
            setSimStep(4);
            setIsSimulating(false);
            setLogs(prev => [
                ...prev,
                `[00:00.054] RESPONSE: HTTP/1.1 200 OK (Roundtrip: 54ms, Data Integrity: 100%, State: COMMITTED ✓)`
            ]);
        }, 2250);

        timeoutIds.current = [t1, t2, t3];
    };

    const resetSimulation = () => {
        playClick();
        clearTimeouts();
        setIsSimulating(false);
        setSimStep(0);
        setLogs([]);
    };

    return (
        <section id="architecture" className="py-14 sm:py-20 border-t-2 border-ink bg-canvas relative overflow-x-clip">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-6 border-b-2 border-ink">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blueprint text-white font-mono text-xs font-black uppercase border border-ink shadow-[2px_2px_0px_#18181B]">
                            <FiActivity className="text-xs animate-pulse" />
                            <span>[ {t.badge} ]</span>
                        </div>
                        <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink">
                            {t.title}
                        </h2>
                        <p className="font-sans text-sm sm:text-base text-ink-muted max-w-2xl">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
                        {/* Simulation Trigger Button */}
                        <button
                            type="button"
                            onClick={runSimulation}
                            disabled={isSimulating}
                            className={`brutal-btn !py-2 !px-4 text-xs font-mono font-black ${
                                isSimulating 
                                    ? 'bg-safety text-ink animate-pulse cursor-wait' 
                                    : 'bg-blueprint text-white hover:bg-blueprint-hover'
                            }`}
                        >
                            <FiPlay className={isSimulating ? 'animate-spin' : ''} />
                            <span>{isSimulating ? sim.runningBtn : sim.triggerBtn}</span>
                        </button>

                        {logs.length > 0 && (
                            <button
                                type="button"
                                onClick={resetSimulation}
                                className="brutal-btn-white !py-2 !px-3 text-xs font-mono"
                                title={sim.clearBtn}
                            >
                                <FiRefreshCw className="text-xs" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Industrial Schematic Wiring Bus Header */}
                <div className="hidden lg:flex items-center justify-between mb-4 font-mono text-[10px] font-black uppercase tracking-wider text-ink-muted px-2 border-x-2 border-t-2 border-ink/30 pt-1.5 pb-1 bg-canvas">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blueprint"></span>
                        <span>BUS_CH_01: CLIENT_INGRESS (TX)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-safety"></span>
                        <span>BUS_CH_02: RPC_GATEWAY (ISOLATION)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-telemetry"></span>
                        <span>BUS_CH_03: SERIALIZABLE_LEDGER (PERSIST)</span>
                    </div>
                </div>

                {/* 3-Node Architecture Pipeline with Schematic Circuit Wiring */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-8">
                    
                    {/* Schematic Circuit Wiring Diagram Traces (Desktop) */}
                    <div className="hidden md:block absolute top-[48%] left-[20%] right-[20%] pointer-events-none z-0">
                        {/* Multi-Wire Bus Traces */}
                        <div className="relative h-6 w-full flex flex-col justify-between">
                            {/* Trace 1: Clock Bus */}
                            <div className="h-[2px] w-full bg-ink/25 relative">
                                <span className="absolute -left-2 -top-1 w-2 h-2 rounded-full border border-ink bg-white"></span>
                                <span className="absolute -right-2 -top-1 w-2 h-2 rounded-full border border-ink bg-white"></span>
                            </div>

                            {/* Trace 2: Data Bus with Solder Joints & Active Marching Digital Pulses */}
                            <div className="h-[2px] w-full bg-ink relative">
                                {isSimulating && (
                                    <motion.div
                                        initial={{ left: '0%' }}
                                        animate={{ 
                                            left: simStep === 1 ? '15%' : simStep === 2 ? '50%' : '88%' 
                                        }}
                                        transition={{ duration: 0.6, ease: "linear" }}
                                        className="absolute -top-1.5 flex items-center gap-1 z-20"
                                    >
                                        <span className="w-3 h-3 bg-safety border border-ink font-mono text-[8px] font-black flex items-center justify-center text-ink shadow-[1px_1px_0px_#18181B]">
                                            ■
                                        </span>
                                        <span className="w-2 h-2 bg-blueprint border border-ink"></span>
                                    </motion.div>
                                )}
                            </div>

                            {/* Trace 3: Return ACK Bus */}
                            <div className="h-[2px] w-full bg-ink/25 relative">
                                <span className="absolute left-1/2 -top-1 w-2 h-2 rounded-full border border-ink bg-white"></span>
                            </div>
                        </div>
                    </div>

                    {Object.values(t.nodes).map((node, idx) => {
                        const isSelected = activeNodeId === node.id;
                        const isNodeSimulating = isSimulating && (
                            (idx === 0 && simStep === 1) ||
                            (idx === 1 && simStep === 2) ||
                            (idx === 2 && simStep === 3)
                        );
                        const IconComponent = nodeIcons[node.id];

                        return (
                            <button
                                key={node.id}
                                type="button"
                                onClick={() => {
                                    playClick();
                                    setActiveNodeId(node.id);
                                }}
                                className={`text-left w-full brutal-card p-5 sm:p-6 transition-all duration-150 relative z-10 cursor-pointer ${
                                    isNodeSimulating
                                        ? 'bg-canvas-card !shadow-brutal-xl ring-4 ring-safety border-2 !border-ink'
                                        : isSelected 
                                            ? 'bg-canvas-card !shadow-brutal-lg ring-4 ring-blueprint/30 border-2 !border-blueprint' 
                                            : 'bg-white hover:bg-stone-50 !shadow-brutal-sm sm:!shadow-brutal'
                                }`}
                            >
                                {/* Schematic Pin Labels on Card Header */}
                                <div className="flex items-center justify-between mb-3 border-b border-ink/20 pb-2">
                                    <span className="font-mono text-[10px] font-bold text-ink-muted">
                                        {idx === 0 ? 'TERMINAL: PIN_01 [TX]' : idx === 1 ? 'TERMINAL: PIN_02 [ROUTER]' : 'TERMINAL: PIN_03 [ACID]'}
                                    </span>
                                    <span className="font-mono text-[10px] text-blueprint font-black">
                                        {idx === 0 ? 'VCC: 3.3V' : idx === 1 ? 'BUS: 64-BIT' : 'LOCK: SERIALIZABLE'}
                                    </span>
                                </div>

                                {/* Top Tag & Status */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`font-mono text-[11px] font-black uppercase px-2 py-0.5 border border-ink ${
                                        isNodeSimulating 
                                            ? 'bg-safety text-ink animate-bounce'
                                            : isSelected 
                                                ? 'bg-blueprint text-white' 
                                                : 'bg-canvas text-ink'
                                    }`}>
                                        {node.step}
                                    </span>

                                    <div className="flex items-center gap-1.5">
                                        <span className={`w-2 h-2 rounded-full ${
                                            isNodeSimulating 
                                                ? 'bg-safety animate-ping' 
                                                : isSelected 
                                                    ? 'bg-telemetry animate-ping' 
                                                    : 'bg-ink/30'
                                        }`}></span>
                                        <span className="font-mono text-[10px] uppercase font-bold text-ink-muted">
                                            {isNodeSimulating ? 'TRANSMITTING' : isSelected ? 'INSPECTING' : 'READY'}
                                        </span>
                                    </div>
                                </div>

                                {/* Node Icon & Title */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-10 h-10 border-2 border-ink flex items-center justify-center font-bold text-lg shadow-[2px_2px_0px_#18181B] ${
                                        isNodeSimulating ? 'bg-safety text-ink' : isSelected ? 'bg-safety text-ink' : 'bg-canvas text-ink'
                                    }`}>
                                        <IconComponent />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-black text-lg sm:text-xl text-ink uppercase tracking-tight">
                                            {node.name}
                                        </h3>
                                        <p className="font-mono text-[11px] font-bold text-blueprint">
                                            {node.tag}
                                        </p>
                                    </div>
                                </div>

                                {/* Dynamic Latency Badge during simulation */}
                                {simStep >= idx + 1 && (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mb-3 px-2 py-1 bg-telemetry-light border border-ink font-mono text-[11px] font-black text-telemetry-dark flex items-center gap-1.5"
                                    >
                                        <FiCheckCircle className="text-xs" />
                                        <span>
                                            {idx === 0 ? sim.step1Badge : idx === 1 ? sim.step2Badge : sim.step3Badge}
                                        </span>
                                    </motion.div>
                                )}

                                {/* Tech Stacks */}
                                <div className="bg-canvas border border-ink p-2 mb-3 font-mono text-xs font-semibold text-ink">
                                    {node.tech}
                                </div>

                                <p className="font-sans text-xs text-ink-muted leading-relaxed line-clamp-2 mb-4">
                                    {node.desc}
                                </p>

                                {/* Bottom Status */}
                                <div className="pt-3 border-t border-ink/20 flex items-center justify-between text-[11px] font-mono font-bold text-ink">
                                    <span className="text-telemetry flex items-center gap-1">
                                        <FiCheckCircle className="text-xs" />
                                        <span>ACTIVE SPEC</span>
                                    </span>
                                    <span className="text-blueprint flex items-center gap-1">
                                        <span>INSPECT</span>
                                        <FiArrowRight />
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Live Streaming Terminal Emulator */}
                {logs.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 brutal-card bg-[#121316] text-[#F6F5F0] border-2 border-ink shadow-brutal-lg overflow-hidden"
                    >
                        <div className="bg-ink px-4 py-2 border-b-2 border-ink flex items-center justify-between font-mono text-xs font-bold text-canvas-card">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-safety animate-pulse"></span>
                                <span>{sim.terminalTitle}</span>
                            </div>
                            <span className="text-[10px] text-telemetry font-mono font-black">
                                {isSimulating ? 'STREAMING PACKETS...' : 'COMMITTED // HTTP 200'}
                            </span>
                        </div>

                        <div 
                            ref={terminalRef}
                            data-lenis-prevent
                            className="p-4 font-mono text-xs max-h-48 overflow-y-auto space-y-1.5 leading-relaxed selection:bg-safety selection:text-ink"
                        >
                            {logs.map((log, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <span className="text-blueprint select-none font-black">&gt;</span>
                                    <span className={
                                        log.includes('RESPONSE') 
                                            ? 'text-telemetry font-black' 
                                            : log.includes('DB:') 
                                                ? 'text-safety font-bold' 
                                                : 'text-stone-300'
                                    }>
                                        {log}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Live Node Specification Inspector Drawer */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeNode.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2 }}
                        className="brutal-card bg-canvas-card p-6 sm:p-8 border-2 border-ink shadow-brutal-lg"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 mb-6 border-b-2 border-ink gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-ink text-white flex items-center justify-center text-xl font-bold border-2 border-ink shadow-[2px_2px_0px_#2563EB]">
                                    <ActiveIcon />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-xs font-bold bg-safety text-ink px-2 py-0.5 border border-ink">
                                            {`${activeNode.step} // ${activeNode.tag}`}
                                        </span>
                                        <span className="font-mono text-xs text-telemetry font-black">
                                            ● LIVE TELEMETRY
                                        </span>
                                    </div>
                                    <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight mt-1">
                                        {activeNode.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="font-mono text-xs bg-canvas px-3 py-2 border-2 border-ink text-ink font-bold flex items-center gap-2">
                                <FiCpu className="text-blueprint text-sm" />
                                <span>Throughput: {activeNode.throughput}</span>
                            </div>
                        </div>

                        {/* Detailed Specs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            
                            <div className="space-y-2">
                                <h4 className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                                    <FiLayers className="text-blueprint" />
                                    <span>Engine & Architecture</span>
                                </h4>
                                <div className="p-3 bg-canvas border-2 border-ink text-xs font-mono font-bold text-ink">
                                    {activeNode.tech}
                                </div>
                                <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    {activeNode.desc}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                                    <FiShield className="text-telemetry" />
                                    <span>Architectural Patterns</span>
                                </h4>
                                <div className="p-3 bg-canvas border-2 border-ink text-xs font-mono text-ink leading-relaxed">
                                    {activeNode.patterns}
                                </div>
                                <p className="font-sans text-xs text-ink-muted">
                                    Strict isolation policies guaranteeing data consistency, security, and sub-second feedback under heavy concurrency.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                                    <FiRadio className="text-safety-dark" />
                                    <span>Operational Metrics</span>
                                </h4>
                                <div className="p-3 bg-canvas border-2 border-ink font-mono text-xs font-bold text-telemetry-dark">
                                    {activeNode.metrics}
                                </div>
                                <div className="p-3 bg-white border border-ink text-xs font-mono flex items-center gap-2 text-ink">
                                    <FiTerminal className="text-xs text-ink-muted" />
                                    <span>Audit: 100% CI pass rate verified</span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
};

export default ArchitectureExplorer;
