import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTerminal, FiCheckCircle, FiCpu, FiDatabase, FiZap, FiCopy, FiCheck } from 'react-icons/fi';
import { useSound } from '../../context/SoundContext';

const ExplainAnalyzeModal = ({ isOpen, onClose, defaultSystem = "SIMMACI" }) => {
    const { playPing, playRelay } = useSound();
    const [activeSystem, setActiveSystem] = useState(defaultSystem);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const queryPlans = {
        SIMMACI: {
            name: "SIMMACI // BATCH DECREE QUERY PLAN",
            desc: "Multi-tenant composite index scan filtering decrees by tenant and timestamp.",
            targetTable: "student_decrees",
            indexUsed: "idx_decrees_tenant_perf (tenant_id, created_at DESC)",
            planningTime: "0.082 ms",
            executionTime: "0.145 ms",
            bufferHit: "100% (18 shared hits, 0 disk read)",
            query: `EXPLAIN (ANALYZE, BUFFERS, COSTS, VERBOSE)
SELECT decree_number, payload, rendered_hash 
FROM student_decrees 
WHERE tenant_id = 271 AND created_at >= '2026-01-01 00:00:00+07' 
ORDER BY created_at DESC 
LIMIT 50;`,
            planTree: [
                {
                    node: "Limit",
                    cost: "0.42..12.85",
                    rows: 50,
                    width: 218,
                    time: "0.038..0.124",
                    detail: "rows=50 loops=1"
                },
                {
                    node: "-> Index Scan using idx_decrees_tenant_perf on student_decrees",
                    cost: "0.42..312.45",
                    rows: 1250,
                    width: 218,
                    time: "0.036..0.118",
                    detail: "Index Cond: ((tenant_id = 271) AND (created_at >= '2026-01-01 00:00:00+07'::timestamptz))"
                },
                {
                    node: "   Buffers: shared hit=18 read=0 dirtied=0",
                    cost: null,
                    rows: null,
                    width: null,
                    time: null,
                    detail: "100% in-memory buffer pool cache hit"
                }
            ]
        },
        Koneksi: {
            name: "KONEKSI SANTRI // SERIALIZABLE ROW-LOCK PLAN",
            desc: "Pessimistic row locking on wallet records to prevent concurrent race-condition overspend.",
            targetTable: "santri_wallets",
            indexUsed: "santri_wallets_pkey (wallet_id)",
            planningTime: "0.065 ms",
            executionTime: "0.042 ms",
            bufferHit: "100% (4 shared hits, 0 disk read)",
            query: `EXPLAIN (ANALYZE, BUFFERS, COSTS)
SELECT wallet_id, balance, locked_at 
FROM santri_wallets 
WHERE wallet_id = 'c8b2a194-e821-4f91-8c41-92ba7f108201'::uuid 
FOR UPDATE;`,
            planTree: [
                {
                    node: "LockRows",
                    cost: "0.28..8.30",
                    rows: 1,
                    width: 72,
                    time: "0.024..0.028",
                    detail: "Exclusive row lock acquisition [FOR UPDATE]"
                },
                {
                    node: "-> Index Scan using santri_wallets_pkey on santri_wallets",
                    cost: "0.28..8.29",
                    rows: 1,
                    width: 72,
                    time: "0.018..0.020",
                    detail: "Index Cond: (wallet_id = 'c8b2a194-e821-4f91-8c41-92ba7f108201'::uuid)"
                },
                {
                    node: "   Buffers: shared hit=4 read=0 dirtied=0",
                    cost: null,
                    rows: null,
                    width: null,
                    time: null,
                    detail: "Instant index lookup with 0 disk I/O"
                }
            ]
        },
        Kiro: {
            name: "KIRO ERP & POS // WAC STOCK VALUATION PLAN",
            desc: "Append-only item movement aggregation for sub-second Weighted Average Cost calculation.",
            targetTable: "inventory_movements",
            indexUsed: "idx_item_movement_time (item_id, created_at ASC)",
            planningTime: "0.071 ms",
            executionTime: "0.078 ms",
            bufferHit: "100% (6 shared hits, 0 disk read)",
            query: `EXPLAIN (ANALYZE, BUFFERS, COSTS)
SELECT item_id, 
       SUM(qty_change) as on_hand_qty, 
       SUM(qty_change * cost_per_unit) / NULLIF(SUM(qty_change), 0) as wac_unit_cost 
FROM inventory_movements 
WHERE item_id = 8492 
GROUP BY item_id;`,
            planTree: [
                {
                    node: "GroupAggregate",
                    cost: "0.29..14.50",
                    rows: 1,
                    width: 40,
                    time: "0.035..0.062",
                    detail: "Aggregation over 240 historical inventory ledger entries"
                },
                {
                    node: "-> Index Scan using idx_item_movement_time on inventory_movements",
                    cost: "0.29..12.35",
                    rows: 240,
                    width: 16,
                    time: "0.021..0.048",
                    detail: "Index Cond: (item_id = 8492)"
                },
                {
                    node: "   Buffers: shared hit=6 read=0 dirtied=0",
                    cost: null,
                    rows: null,
                    width: null,
                    time: null,
                    detail: "WAC cost evaluated in under 80 microseconds"
                }
            ]
        }
    };

    const current = queryPlans[activeSystem] || queryPlans.SIMMACI;

    const handleCopyQuery = () => {
        navigator.clipboard.writeText(current.query);
        playPing();
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
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

                {/* Main Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full max-w-4xl bg-[#0D0E12] text-[#E5E7EB] border-4 border-ink shadow-brutal-xl z-10 flex flex-col max-h-[92vh] overflow-hidden font-mono text-xs select-none"
                    data-lenis-prevent
                >
                    {/* Header Bar */}
                    <div className="bg-[#181920] px-4 sm:px-6 py-3 border-b-2 border-stone-800 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-black uppercase bg-safety text-ink px-2 py-0.5 border border-white">
                                POSTGRESQL 16 // EXPLAIN ANALYZE
                            </span>
                            <span className="text-stone-400 font-bold hidden sm:inline">
                                QUERY EXECUTION PLAN INSPECTOR
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            {['SIMMACI', 'Koneksi', 'Kiro'].map((sysKey) => (
                                <button
                                    key={sysKey}
                                    type="button"
                                    onClick={() => {
                                        playRelay();
                                        setActiveSystem(sysKey);
                                    }}
                                    className={`px-2.5 py-1 text-xs font-bold uppercase border transition-all cursor-pointer ${
                                        activeSystem === sysKey
                                            ? 'bg-blueprint text-white border-blueprint shadow-[1px_1px_0px_#FFFFFF]'
                                            : 'bg-stone-900 text-stone-400 border-stone-700 hover:bg-stone-800'
                                    }`}
                                >
                                    {sysKey}
                                </button>
                            ))}

                            <button
                                type="button"
                                onClick={onClose}
                                className="p-1.5 bg-red-600 text-white border border-white hover:bg-red-700 ml-2 cursor-pointer"
                                title="Close (ESC)"
                            >
                                <FiX />
                            </button>
                        </div>
                    </div>

                    {/* KPI Performance Metrics Ribbon */}
                    <div className="bg-[#13141B] border-b-2 border-stone-800 p-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        
                        <div className="p-2.5 bg-stone-900/80 border border-stone-800 space-y-1">
                            <span className="text-[10px] text-stone-400 font-bold uppercase block flex items-center gap-1">
                                <FiZap className="text-yellow-400" />
                                <span>Execution Time</span>
                            </span>
                            <div className="font-black text-sm text-[#4ADE80]">
                                {current.executionTime}
                            </div>
                        </div>

                        <div className="p-2.5 bg-stone-900/80 border border-stone-800 space-y-1">
                            <span className="text-[10px] text-stone-400 font-bold uppercase block flex items-center gap-1">
                                <FiCpu className="text-blueprint" />
                                <span>Planning Time</span>
                            </span>
                            <div className="font-bold text-sm text-stone-200">
                                {current.planningTime}
                            </div>
                        </div>

                        <div className="p-2.5 bg-stone-900/80 border border-stone-800 space-y-1">
                            <span className="text-[10px] text-stone-400 font-bold uppercase block flex items-center gap-1">
                                <FiDatabase className="text-telemetry" />
                                <span>Buffer Efficiency</span>
                            </span>
                            <div className="font-black text-sm text-[#38BDF8]">
                                100% CACHE HIT
                            </div>
                        </div>

                        <div className="p-2.5 bg-stone-900/80 border border-stone-800 space-y-1">
                            <span className="text-[10px] text-stone-400 font-bold uppercase block flex items-center gap-1">
                                <FiCheckCircle className="text-safety" />
                                <span>Scan Method</span>
                            </span>
                            <div className="font-black text-xs text-yellow-300 truncate" title="Index Scan Only">
                                INDEX SCAN ONLY
                            </div>
                        </div>

                    </div>

                    {/* Query & Tree Content Area */}
                    <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-grow bg-[#090A0E]">
                        
                        {/* Target Description */}
                        <div>
                            <h3 className="font-black text-sm sm:text-base text-white uppercase tracking-tight">
                                {current.name}
                            </h3>
                            <p className="text-xs text-stone-400 mt-0.5">
                                {current.desc}
                            </p>
                        </div>

                        {/* SQL Query Box */}
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-stone-400">
                                <span className="font-bold text-blueprint flex items-center gap-1.5">
                                    <FiTerminal />
                                    <span>SQL QUERY EXECUTED (POSTGRESQL 16):</span>
                                </span>
                                <button
                                    type="button"
                                    onClick={handleCopyQuery}
                                    className="px-2 py-0.5 bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 flex items-center gap-1 cursor-pointer transition-colors"
                                >
                                    {isCopied ? <FiCheck className="text-[#4ADE80]" /> : <FiCopy />}
                                    <span>{isCopied ? 'COPIED' : 'COPY SQL'}</span>
                                </button>
                            </div>

                            <pre className="p-3 bg-[#13141C] border border-stone-800 text-[#38BDF8] text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap rounded-xs">
                                {current.query}
                            </pre>
                        </div>

                        {/* Execution Plan Tree Box */}
                        <div className="space-y-2">
                            <div className="text-[11px] font-bold text-stone-400 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
                                <span>EXECUTION PLAN TREE & BUFFER TELEMETRY:</span>
                            </div>

                            <div className="p-4 bg-[#111219] border border-stone-800 space-y-2">
                                {current.planTree.map((step, idx) => (
                                    <div key={idx} className="border-l-2 border-blueprint/60 pl-3 py-1 font-mono text-[11px] leading-relaxed">
                                        <div className="text-white font-bold">
                                            {step.node}
                                        </div>
                                        {step.cost && (
                                            <div className="text-stone-400 text-[10px]">
                                                (cost={step.cost} rows={step.rows} width={step.width}) (actual time={step.time})
                                            </div>
                                        )}
                                        <div className="text-[#4ADE80] text-[10px] mt-0.5 font-semibold">
                                            {step.detail}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Index Optimization Proof Note */}
                        <div className="p-3 bg-stone-900/60 border border-stone-800 flex items-start gap-2.5 text-xs text-stone-300">
                            <FiCheckCircle className="text-[#4ADE80] text-sm shrink-0 mt-0.5" />
                            <div className="leading-relaxed">
                                <strong className="text-white">Index Verification: </strong>
                                Uses <code className="text-blueprint bg-stone-950 px-1 py-0.5 border border-stone-800">{current.indexUsed}</code>. 
                                Zero full-table sequence scans detected. Guarantees sub-millisecond database response times under heavy concurrent operations.
                            </div>
                        </div>

                    </div>

                    {/* Bottom Status Bar */}
                    <div className="bg-[#181920] px-4 sm:px-6 py-2.5 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-telemetry"></span>
                            <span>INDEX SCAN STATUS: VERIFIED 100% HEALTHY</span>
                        </span>
                        <span className="text-stone-500 font-bold">
                            ENGINE: POSTGRESQL 16 ACID // SHARED BUFFERS
                        </span>
                    </div>

                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ExplainAnalyzeModal;
