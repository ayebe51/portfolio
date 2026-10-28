import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiX, FiMaximize2, FiMinimize2, FiChevronRight } from 'react-icons/fi';
import { useSound } from '../../context/SoundContext';

const INITIAL_WELCOME = [
    "AHMAD AYUB NU'MAN // KERNEL DIAGNOSTIC CONSOLE v2.4",
    "TARGET: PRODUCTION DISTRIBUTED SYSTEMS & ARCHITECTURAL SPECS",
    "Type 'help' for diagnostics, 'test' to run 1,842 tests, or 'ddl simmaci' for schema.",
    "--------------------------------------------------------------------------------"
];

const DevConsole = ({ isOpen, onClose }) => {
    const { playKeystroke, playClick, playRelay, playPing } = useSound();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState(INITIAL_WELCOME);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isMaximized, setIsMaximized] = useState(false);
    
    const terminalEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen) {
            playRelay();
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen, playRelay]);

    // Scroll to bottom on output change
    useEffect(() => {
        if (isOpen && terminalEndRef.current) {
            terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input.trim());
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length === 0) return;
            const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
            setHistoryIndex(nextIdx);
            setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const nextIdx = historyIndex - 1;
                setHistoryIndex(nextIdx);
                setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
            playKeystroke();
        }
    };

    const handleCommand = (rawCmd) => {
        const cmd = rawCmd.toLowerCase();
        playClick();

        if (rawCmd) {
            setCommandHistory(prev => [...prev, rawCmd]);
            setHistoryIndex(-1);
        }

        const newLines = [`> ${rawCmd}`];

        switch (cmd) {
            case '':
                break;

            case 'help':
            case '?':
                newLines.push(
                    "AVAILABLE DIAGNOSTIC PROTOCOLS:",
                    "  help                 - Display this diagnostic guide",
                    "  test                 - Execute 1,842 automated test suite (Unit, Int, E2E)",
                    "  status               - Telemetry & microservices operational status",
                    "  ddl <system>         - Inspect DDL schema: 'simmaci', 'koneksi', or 'kiro'",
                    "  top                  - Live process thread pool & memory telemetry",
                    "  whoami               - Engineer cryptographic profile & contact details",
                    "  sudo hire            - Request priority contact protocol (mailto)",
                    "  clear                - Flush terminal console buffer",
                    "  exit                 - Close diagnostic drawer"
                );
                break;

            case 'test':
            case 'npm test':
            case 'pnpm test':
                playPing();
                newLines.push(
                    "INITIALIZING SUITE: 1,842 Automated Test Cases (PostgreSQL isolation, NestJS, React 19)...",
                    "[ PASS ] src/tests/ledger-serializable.spec.ts (412 tests) [42ms]",
                    "[ PASS ] src/tests/multi-tenant-isolation.spec.ts (628 tests) [68ms]",
                    "[ PASS ] src/tests/batch-docxtemplater.spec.ts (380 tests) [51ms]",
                    "[ PASS ] src/tests/maker-checker-rbac.spec.ts (422 tests) [39ms]",
                    "--------------------------------------------------------------------------------",
                    "✓ 1,800 tests passed, 36,000 assertions, 0 failures (1.42s).",
                    "TEST SUITES: 4 passed, 4 total (100% CI pass rate)",
                    "ASSERTIONS:  36,840 verified with 0 flakiness",
                    "DURATION:    1.42s // ALL CHECKS GREEN ✓"
                );
                break;

            case 'status':
                newLines.push(
                    "PRODUCTION INFRASTRUCTURE TELEMETRY:",
                    "  [SIMMACI]        STATUS: HEALTHY | TENANTS: 271 | ACTIVE USERS: 17,420 | P99: 48ms",
                    "  [KONEKSI SANTRI] STATUS: HEALTHY | GATE QR: ONLINE | SYNC: WEBSOCKET ACK (12ms)",
                    "  [KIRO ERP/POS]   STATUS: HEALTHY | LEDGER: 0 DISCREPANCY | REDIS CACHE: 94.2% HIT",
                    "  [CIRCUIT BREAKER] STATE: CLOSED (NOMINAL) | ERROR RATE: 0.00%"
                );
                break;

            case 'ddl simmaci':
                newLines.push(
                    "-- SIMMACI: Multi-Tenant Tenant Isolation & Dynamic Decrees Schema",
                    "CREATE TABLE madrasah_tenants (",
                    "    tenant_id BIGSERIAL PRIMARY KEY,",
                    "    institution_code VARCHAR(32) UNIQUE NOT NULL,",
                    "    name VARCHAR(255) NOT NULL,",
                    "    created_at TIMESTAMPTZ DEFAULT NOW()",
                    ");",
                    "CREATE TABLE student_decrees (",
                    "    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),",
                    "    tenant_id BIGINT REFERENCES madrasah_tenants(tenant_id) ON DELETE RESTRICT,",
                    "    decree_number VARCHAR(64) NOT NULL,",
                    "    payload JSONB NOT NULL,",
                    "    rendered_hash CHAR(64) NOT NULL,",
                    "    created_at TIMESTAMPTZ DEFAULT NOW(),",
                    "    CONSTRAINT uq_decree_tenant UNIQUE(tenant_id, decree_number)",
                    ");",
                    "CREATE INDEX idx_decrees_tenant_perf ON student_decrees (tenant_id, created_at DESC);"
                );
                break;

            case 'ddl koneksi':
                newLines.push(
                    "-- KONEKSI SANTRI: Double-Entry Closed-Loop Financial Ledger",
                    "CREATE TABLE santri_wallets (",
                    "    wallet_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),",
                    "    santri_id BIGINT NOT NULL,",
                    "    balance NUMERIC(14, 2) NOT NULL DEFAULT 0.00 CHECK (balance >= 0.00),",
                    "    locked_at TIMESTAMPTZ NULL,",
                    "    updated_at TIMESTAMPTZ DEFAULT NOW()",
                    ");",
                    "CREATE TABLE ledger_transactions (",
                    "    tx_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),",
                    "    source_wallet_id UUID REFERENCES santri_wallets(wallet_id),",
                    "    target_merchant_id UUID NOT NULL,",
                    "    amount NUMERIC(14, 2) NOT NULL CHECK (amount > 0),",
                    "    status VARCHAR(20) DEFAULT 'COMMITTED',",
                    "    created_at TIMESTAMPTZ DEFAULT NOW()",
                    ");",
                    "-- Audited with SELECT ... FOR UPDATE pessimistic row-locks."
                );
                break;

            case 'ddl kiro':
                newLines.push(
                    "-- KIRO POS / ERP: Append-Only Stock Movements & Inventory Ledger",
                    "CREATE TABLE inventory_movements (",
                    "    movement_id BIGSERIAL PRIMARY KEY,",
                    "    item_id BIGINT NOT NULL,",
                    "    qty_change INT NOT NULL,",
                    "    cost_per_unit NUMERIC(12, 2) NOT NULL,",
                    "    valuation_method VARCHAR(10) DEFAULT 'WAC',",
                    "    tx_ref VARCHAR(64) NOT NULL,",
                    "    created_at TIMESTAMPTZ DEFAULT NOW()",
                    ");",
                    "CREATE INDEX idx_item_movement_time ON inventory_movements (item_id, created_at ASC);"
                );
                break;

            case 'top':
            case 'ps':
                newLines.push(
                    "PID   USER    CPU%   MEM%    EVENT_LOOP_LAG  STATE    COMMAND",
                    "1024  ayub    1.2    4.1     0.8ms           ACTIVE   nestjs-gateway (port 4000)",
                    "1025  ayub    0.4    2.2     0.2ms           ACTIVE   redis-broker (port 6379)",
                    "1026  ayub    2.8    6.5     1.1ms           ACTIVE   postgres-16-pool (conn 85)",
                    "1027  ayub    0.1    1.8     0.1ms           SLEEP    docxtemplater-batch-worker",
                    "Total System Memory: 148MB / 512MB (Efficient footprint)"
                );
                break;

            case 'whoami':
                newLines.push(
                    "IDENTITY: Ahmad Ayub Nu'man",
                    "ROLE:     Distributed Backend Engineer & High-Craft Front-End Developer",
                    "LOCATION: Jakarta, Indonesia (WIB / UTC+7)",
                    "ETHOS:    Rigorous Data Consistency, Zero-Flake Test Suites, Sub-Second Latency",
                    "CONTACT:  ahmadayub51@gmail.com | github.com/ayebe51 | linkedin.com/in/ahmad-ayub"
                );
                break;

            case 'sudo hire':
                playPing();
                newLines.push(
                    "================================================================================",
                    "  _    _ _____ _____  ______ _____  _ ",
                    " | |  | |_   _|  __ \\|  ____|  __ \\| |",
                    " | |__| | | | | |__) | |__  | |  | | |",
                    " |  __  | | | |  _  /|  __| | |  | |_|",
                    " | |  | |_| |_| | \\ \\| |____| |__| (_)",
                    " |_|  |_|_____|_|  \\_\\______|_____/(_)",
                    "                                      ",
                    " [ROOT PERMISSION GRANTED: OFFER EXTENDED // HTTP 200 OK]",
                    " CANDIDATE: AHMAD AYUB NU'MAN [STATUS: HIRED // MISSION-CRITICAL READY]",
                    " Dispatching email client handshake to ahmadayub51@gmail.com...",
                    "================================================================================"
                );
                setTimeout(() => {
                    window.location.href = "mailto:ahmadayub51@gmail.com?subject=Engineering%20Opportunity%20-%20Ahmad%20Ayub";
                }, 1000);
                break;

            case 'clear':
                setHistory([]);
                setInput('');
                return;

            case 'exit':
            case 'quit':
                onClose();
                setInput('');
                return;

            default:
                newLines.push(
                    `bash: command not found: '${rawCmd}'. Type 'help' for valid diagnostic commands.`
                );
                break;
        }

        setHistory(prev => [...prev, ...newLines]);
        setInput('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-x-0 top-0 z-[100] flex justify-center">
                    
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-ink/60 backdrop-blur-xs"
                    />

                    {/* Console Drawer */}
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        className={`relative w-full max-w-5xl bg-[#0C0D10] text-[#00FF66] border-b-4 border-x-2 border-ink shadow-brutal-xl font-mono text-xs flex flex-col z-10 ${
                            isMaximized ? 'h-[92vh]' : 'h-[62vh] max-h-[560px]'
                        }`}
                        data-lenis-prevent
                    >
                        {/* Terminal Title Bar */}
                        <div className="bg-[#18191E] px-4 py-2.5 border-b-2 border-ink flex items-center justify-between text-[#E5E7EB] select-none">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-pulse"></span>
                                <span className="font-bold text-xs tracking-wider flex items-center gap-1.5">
                                    <FiTerminal className="text-[#00FF66]" />
                                    <span>AYN // KERNEL_CLI_v2.4 [TTY_1]</span>
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="hidden sm:inline text-[10px] text-stone-400 font-bold px-2 py-0.5 bg-ink border border-stone-700">
                                    SHORTCUT: [`~`] TO TOGGLE
                                </span>

                                <button
                                    type="button"
                                    onClick={() => setIsMaximized(prev => !prev)}
                                    className="p-1 hover:bg-stone-800 text-stone-300 border border-stone-700"
                                    title="Toggle Size"
                                >
                                    {isMaximized ? <FiMinimize2 /> : <FiMaximize2 />}
                                </button>

                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="p-1 hover:bg-red-700 hover:text-white text-stone-300 border border-stone-700"
                                    title="Close Terminal (ESC)"
                                >
                                    <FiX />
                                </button>
                            </div>
                        </div>

                        {/* CRT Scanline & Output Scroll Area */}
                        <div 
                            className="p-4 sm:p-6 overflow-y-auto flex-grow space-y-1 relative"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((line, idx) => (
                                <div 
                                    key={idx} 
                                    className={`leading-relaxed whitespace-pre-wrap ${
                                        line.startsWith('>') 
                                            ? 'text-white font-bold' 
                                            : line.includes('[ PASS ]') 
                                                ? 'text-[#00FF66] font-bold' 
                                                : line.includes('STATUS:') || line.includes('TEST SUITES:') 
                                                    ? 'text-[#FACC15]' 
                                                    : line.includes('bash:') 
                                                        ? 'text-red-400' 
                                                        : line.includes('--') || line.includes('CREATE') 
                                                            ? 'text-[#38BDF8]' 
                                                            : 'text-[#86EFAC]'
                                    }`}
                                >
                                    {line}
                                </div>
                            ))}
                            <div ref={terminalEndRef} />
                        </div>

                        {/* Prompt Input Line */}
                        <div className="bg-[#14151A] px-4 py-3 border-t-2 border-stone-800 flex items-center gap-2 text-white">
                            <span className="text-[#00FF66] font-black flex items-center">
                                <span>ayub@distributed-node</span>
                                <FiChevronRight className="inline ml-1" />
                            </span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type 'help', 'test', 'status', 'ddl simmaci'..."
                                className="w-full bg-transparent outline-none font-mono text-xs text-white placeholder-stone-600 caret-[#00FF66]"
                                autoFocus
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DevConsole;

