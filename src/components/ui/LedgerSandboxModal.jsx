import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlay, FiRefreshCw, FiShield, FiAlertTriangle, FiCheckCircle, FiLock } from 'react-icons/fi';
import { useSound } from '../../context/SoundContext';

const LedgerSandboxModal = ({ isOpen, onClose }) => {
    const { playClick, playPing, playLock, playChaos, playRelay } = useSound();
    
    // Mode: 'locked' (Ahmad's Implementation) | 'unlocked' (Naive race condition)
    const [mode, setMode] = useState('locked');
    const [isRunning, setIsRunning] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [santriBalance, setSantriBalance] = useState(50000);
    const [canteenBalance, setCanteenBalance] = useState(0);
    const [auditLog, setAuditLog] = useState([]);
    
    const timeoutIds = useRef([]);

    const clearAllTimeouts = () => {
        timeoutIds.current.forEach(id => clearTimeout(id));
        timeoutIds.current = [];
    };

    useEffect(() => {
        return () => clearAllTimeouts();
    }, []);

    if (!isOpen) return null;

    const resetSandbox = () => {
        clearAllTimeouts();
        setIsRunning(false);
        setSantriBalance(50000);
        setCanteenBalance(0);
        setTransactions([]);
        setAuditLog([]);
        playClick();
    };

    const runSimulation = () => {
        if (isRunning) return;
        clearAllTimeouts();
        setIsRunning(true);
        playRelay();

        // Initial setup: 5 concurrent transactions of Rp 15.000
        const initialTx = [
            { id: 1, amount: 15000, state: 'QUEUED', latency: '4ms' },
            { id: 2, amount: 15000, state: 'QUEUED', latency: '8ms' },
            { id: 3, amount: 15000, state: 'QUEUED', latency: '12ms' },
            { id: 4, amount: 15000, state: 'QUEUED', latency: '16ms' },
            { id: 5, amount: 15000, state: 'QUEUED', latency: '21ms' }
        ];
        setTransactions(initialTx);
        setSantriBalance(50000);
        setCanteenBalance(0);
        setAuditLog([
            `[00:00.000] INGRESS: 5 concurrent checkout requests (Rp 15.000 ea) received at same millisecond.`,
            `[00:00.000] INITIAL WALLET: Rp 50.000 | DEMANDED: Rp 75.000 | ISOLATION: ${mode === 'locked' ? 'SERIALIZABLE (ROW LOCK)' : 'READ COMMITTED (NO LOCK)'}`
        ]);

        if (mode === 'locked') {
            // Step-by-step pessimistic row locking sequence
            // TX 1
            const t1 = setTimeout(() => {
                playLock();
                setTransactions(prev => prev.map(t => t.id === 1 ? { ...t, state: 'COMMITTED' } : t));
                setSantriBalance(35000);
                setCanteenBalance(15000);
                setAuditLog(prev => [...prev, `[00:00.012] TX #1: Acquired 'FOR UPDATE' row lock -> Balance 50k - 15k = 35k -> COMMITTED ✓`]);
            }, 600);

            // TX 2
            const t2 = setTimeout(() => {
                playLock();
                setTransactions(prev => prev.map(t => t.id === 2 ? { ...t, state: 'COMMITTED' } : t));
                setSantriBalance(20000);
                setCanteenBalance(30000);
                setAuditLog(prev => [...prev, `[00:00.024] TX #2: Acquired lock -> Balance 35k - 15k = 20k -> COMMITTED ✓`]);
            }, 1200);

            // TX 3
            const t3 = setTimeout(() => {
                playLock();
                setTransactions(prev => prev.map(t => t.id === 3 ? { ...t, state: 'COMMITTED' } : t));
                setSantriBalance(5000);
                setCanteenBalance(45000);
                setAuditLog(prev => [...prev, `[00:00.036] TX #3: Acquired lock -> Balance 20k - 15k = 5k -> COMMITTED ✓`]);
            }, 1800);

            // TX 4
            const t4 = setTimeout(() => {
                playClick();
                setTransactions(prev => prev.map(t => t.id === 4 ? { ...t, state: 'ROLLBACK' } : t));
                setAuditLog(prev => [...prev, `[00:00.048] TX #4: Acquired lock -> Insufficient funds (5k < 15k) -> ROLLBACK ✗ [INTEGRITY PRESERVED]`]);
            }, 2400);

            // TX 5
            const t5 = setTimeout(() => {
                playPing();
                setTransactions(prev => prev.map(t => t.id === 5 ? { ...t, state: 'ROLLBACK' } : t));
                setIsRunning(false);
                setAuditLog(prev => [
                    ...prev, 
                    `[00:00.060] TX #5: Acquired lock -> Insufficient funds (5k < 15k) -> ROLLBACK ✗ [INTEGRITY PRESERVED]`,
                    `[00:00.062] AUDIT SUMMARY: System Funds: Rp 50.000 | Discrepancy: Rp 0.0000 (0 GAP VERIFIED) ✓`
                ]);
            }, 3000);

            timeoutIds.current = [t1, t2, t3, t4, t5];
        } else {
            // Naive race condition bug: all read 50k at once and all commit
            const t1 = setTimeout(() => {
                playChaos();
                setTransactions(prev => prev.map(t => ({ ...t, state: 'COMMITTED' })));
                setSantriBalance(-25000);
                setCanteenBalance(75000);
                setIsRunning(false);
                setAuditLog(prev => [
                    ...prev,
                    `[00:00.015] PHANTOM READ: All 5 workers read initial balance = Rp 50.000 simultaneously!`,
                    `[00:00.030] RACE CONDITION: All 5 deduct without serializable lock!`,
                    `[00:00.045] ⚠️ CRITICAL FAILURE: Wallet balance drops to -Rp 25.000!`,
                    `[00:00.050] FINANCIAL LEAKAGE DETECTED: -Rp 25.000 phantom credit created!`
                ]);
            }, 1000);

            timeoutIds.current = [t1];
        }
    };

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

                {/* Sandbox Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full max-w-4xl bg-canvas border-4 border-ink shadow-brutal-xl z-10 flex flex-col max-h-[92vh] overflow-hidden"
                    data-lenis-prevent
                >
                    {/* Header Bar */}
                    <div className="bg-ink text-white px-4 sm:px-6 py-3 border-b-2 border-ink flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-black uppercase bg-safety text-ink px-2 py-0.5 border border-white">
                                LAB // CONCURRENCY & LEDGER AUDIT
                            </span>
                            <span className="hidden sm:inline font-mono text-xs font-bold text-stone-300">
                                POSTGRESQL 16 ROW LOCK SIMULATOR
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="font-mono text-xs font-black px-2 py-1 bg-red-600 text-white border border-white hover:bg-red-700"
                            title="Close (ESC)"
                        >
                            <FiX />
                        </button>
                    </div>

                    {/* Mode Toggle & Control Bar */}
                    <div className="bg-canvas-card border-b-2 border-ink p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="space-y-1">
                            <div className="font-mono text-xs font-black uppercase text-ink">
                                EXECUTION ISOLATION ENGINE:
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        playClick();
                                        setMode('locked');
                                        resetSandbox();
                                    }}
                                    disabled={isRunning}
                                    className={`px-3 py-1.5 font-mono text-xs font-bold border-2 border-ink flex items-center gap-1.5 transition-all ${
                                        mode === 'locked' 
                                            ? 'bg-telemetry text-white shadow-brutal-sm' 
                                            : 'bg-white text-ink hover:bg-stone-50'
                                    }`}
                                >
                                    <FiShield />
                                    <span>AHMAD'S SERIALIZABLE ROW-LOCK (SAFE)</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        playClick();
                                        setMode('unlocked');
                                        resetSandbox();
                                    }}
                                    disabled={isRunning}
                                    className={`px-3 py-1.5 font-mono text-xs font-bold border-2 border-ink flex items-center gap-1.5 transition-all ${
                                        mode === 'unlocked' 
                                            ? 'bg-red-600 text-white shadow-brutal-sm' 
                                            : 'bg-white text-ink hover:bg-stone-50'
                                    }`}
                                >
                                    <FiAlertTriangle />
                                    <span>NAIVE RACE CONDITION (VULNERABLE)</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <button
                                type="button"
                                onClick={runSimulation}
                                disabled={isRunning}
                                className={`brutal-btn flex-1 sm:flex-initial !py-2 !px-4 text-xs font-mono font-black ${
                                    isRunning 
                                        ? 'bg-safety text-ink animate-pulse cursor-wait' 
                                        : 'bg-blueprint text-white hover:bg-blueprint-hover'
                                }`}
                            >
                                <FiPlay className={isRunning ? 'animate-spin' : ''} />
                                <span>{isRunning ? 'EXECUTING LOCKS...' : 'FIRE 5 CONCURRENT TX'}</span>
                            </button>

                            {transactions.length > 0 && (
                                <button
                                    type="button"
                                    onClick={resetSandbox}
                                    className="brutal-btn-white !py-2 !px-3 text-xs"
                                    title="Reset"
                                >
                                    <FiRefreshCw />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Simulation Balances Display */}
                    <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
                        
                        {/* Two Dual Ledger Accounts */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            {/* Account A */}
                            <div className="p-4 bg-white border-2 border-ink shadow-brutal-sm">
                                <div className="flex items-center justify-between font-mono text-xs font-bold text-ink-muted mb-2">
                                    <span>ACCOUNT_A // SANTRI WALLET</span>
                                    <span className="text-blueprint font-black">ID: #W-SANTRI-402</span>
                                </div>
                                <div className="font-display font-black text-2xl sm:text-3xl text-ink">
                                    Rp {santriBalance.toLocaleString('id-ID')}
                                </div>
                                <div className="font-mono text-[11px] text-ink-muted mt-1">
                                    Initial: Rp 50.000 // Subject to concurrent debit
                                </div>
                            </div>

                            {/* Account B */}
                            <div className="p-4 bg-white border-2 border-ink shadow-brutal-sm">
                                <div className="flex items-center justify-between font-mono text-xs font-bold text-ink-muted mb-2">
                                    <span>ACCOUNT_B // CANTEEN POS REGISTER</span>
                                    <span className="text-telemetry font-black">ID: #M-POS-101</span>
                                </div>
                                <div className="font-display font-black text-2xl sm:text-3xl text-ink">
                                    Rp {canteenBalance.toLocaleString('id-ID')}
                                </div>
                                <div className="font-mono text-[11px] text-ink-muted mt-1">
                                    Received: Sum of committed checkouts
                                </div>
                            </div>

                        </div>

                        {/* 5 Concurrent Transaction Slots */}
                        <div className="space-y-2">
                            <div className="font-mono text-xs font-black uppercase text-ink flex items-center justify-between">
                                <span>5 CONCURRENT MUTATION INGRESS SLOTS (Rp 15.000 EACH):</span>
                                <span className="text-ink-muted">TOTAL DEMAND: Rp 75.000</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                                {[1, 2, 3, 4, 5].map((id) => {
                                    const tx = transactions.find(t => t.id === id);
                                    const state = tx?.state || 'IDLE';

                                    return (
                                        <div 
                                            key={id}
                                            className={`p-3 border-2 border-ink font-mono text-xs transition-all ${
                                                state === 'COMMITTED' 
                                                    ? 'bg-telemetry-light border-telemetry-dark text-telemetry-dark font-black' 
                                                    : state === 'ROLLBACK' 
                                                        ? 'bg-red-50 border-red-700 text-red-700 font-black' 
                                                        : state === 'QUEUED' 
                                                            ? 'bg-safety text-ink animate-pulse font-bold' 
                                                            : 'bg-white text-ink-muted'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between mb-1 text-[10px]">
                                                <span>TX #{id}</span>
                                                {state === 'COMMITTED' && <FiCheckCircle />}
                                                {state === 'ROLLBACK' && <FiAlertTriangle />}
                                                {state === 'QUEUED' && <FiLock className="animate-spin" />}
                                            </div>
                                            <div className="font-bold text-sm">
                                                Rp 15.000
                                            </div>
                                            <div className="text-[10px] mt-1 font-black">
                                                [{state}]
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Live Audit Stream */}
                        <div className="bg-[#121316] text-[#F6F5F0] border-2 border-ink p-4 font-mono text-xs max-h-48 overflow-y-auto space-y-1">
                            <div className="text-blueprint font-black mb-2 flex items-center gap-2 border-b border-stone-800 pb-1">
                                <span className="w-2 h-2 rounded-full bg-safety animate-pulse"></span>
                                <span>POSTGRESQL LOCK MANAGER AUDIT STREAM:</span>
                            </div>
                            {auditLog.length === 0 ? (
                                <div className="text-stone-500">
                                    Click "FIRE 5 CONCURRENT TX" to start interactive load simulation...
                                </div>
                            ) : (
                                auditLog.map((log, i) => (
                                    <div key={i} className={`leading-relaxed ${
                                        log.includes('COMMITTED') 
                                            ? 'text-telemetry font-bold' 
                                            : log.includes('ROLLBACK') 
                                                ? 'text-[#FACC15] font-bold' 
                                                : log.includes('CRITICAL') 
                                                    ? 'text-red-400 font-black' 
                                                    : 'text-stone-300'
                                    }`}>
                                        {log}
                                    </div>
                                ))
                            )}
                        </div>

                    </div>

                    {/* Bottom Status & Double Entry Verification */}
                    <div className="bg-white border-t-2 border-ink p-4 font-mono text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <span className="font-black uppercase text-ink">DOUBLE-ENTRY EQUATION:</span>
                            <span className="px-2 py-0.5 bg-canvas border border-ink text-ink font-bold">
                                {`Σ Debits (${canteenBalance}) == Σ Credits (${50000 - santriBalance})`}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-1 font-black border border-ink ${
                                santriBalance + canteenBalance === 50000 
                                    ? 'bg-telemetry text-white' 
                                    : 'bg-red-600 text-white animate-bounce'
                            }`}>
                                {santriBalance + canteenBalance === 50000 
                                    ? 'DISCREPANCY: 0 GAP (AUDIT PASS ✓)' 
                                    : 'DISCREPANCY: FINANCIAL LEAK DETECTED ✗'}
                            </span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default LedgerSandboxModal;

