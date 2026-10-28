const itemsYellow = [
    "MISSION-CRITICAL SYSTEMS",
    "270+ INSTITUTIONS MANAGED",
    "1,800+ AUTOMATED TESTS",
    "ZERO FINANCIAL GAP",
    "100% CI/CD RELIABILITY",
    "SUB-SECOND POS TRANSACTIONS",
    "MULTI-TENANT ISOLATION"
];

const itemsBlack = [
    "REACT 19 SPA",
    "NESTJS MICROSERVICES",
    "POSTGRESQL 16 ACID",
    "FLUTTER MOBILE WALLET",
    "DYNAMIC DOCX BATCH ENGINE",
    "APACHE ECHARTS",
    "DOMAIN-DRIVEN DESIGN",
    "ROW-LEVEL LOCKING"
];

const ConveyorTape = () => {
    const repeatedYellow = [...itemsYellow, ...itemsYellow, ...itemsYellow, ...itemsYellow];
    const repeatedBlack = [...itemsBlack, ...itemsBlack, ...itemsBlack, ...itemsBlack];

    return (
        <div className="w-full overflow-hidden select-none border-y-2 border-ink bg-canvas my-10 sm:my-16">
            
            {/* Ribbon 1: Safety Yellow Conveyor (Scrolling Left) */}
            <div className="bg-safety border-b-2 border-ink py-2.5 sm:py-3 overflow-hidden flex items-center">
                <div className="animate-marquee-left">
                    {repeatedYellow.map((item, idx) => (
                        <div key={idx} className="flex items-center mx-4 sm:mx-6 font-mono text-xs sm:text-sm font-black text-ink uppercase tracking-wider whitespace-nowrap">
                            <span className="text-ink mr-3 select-none font-bold">{'///'}</span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ribbon 2: Architectural Ink Conveyor (Scrolling Right) */}
            <div className="bg-ink py-2.5 sm:py-3 overflow-hidden flex items-center text-canvas-card">
                <div className="animate-marquee-right">
                    {repeatedBlack.map((item, idx) => (
                        <div key={idx} className="flex items-center mx-4 sm:mx-6 font-mono text-xs sm:text-sm font-bold text-canvas uppercase tracking-wider whitespace-nowrap">
                            <span className="w-2 h-2 bg-blueprint mr-3 flex-shrink-0"></span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ConveyorTape;
