import { Stripes } from "../layout/stripes";

export const PrivacySection = () => {
    return (
        <section className="relative w-full bg-[#1F5CFF] py-32 overflow-hidden">
            <Stripes variant="light" />
            <div className="w-full max-w-[1920px] mx-auto px-8 lg:px-16 flex items-center justify-between text-center">

                {/* Grid Lock Icon */}
                <div className="mb-12 relative w-24 h-24 grid grid-cols-5 gap-2">
                    {/* We can construct a lock shape using dots */}
                    {/* Row 1 */}
                    <div className="col-start-2 bg-white/20 rounded-sm"></div>
                    <div className="col-start-3 bg-white/20 rounded-sm"></div>
                    <div className="col-start-4 bg-white/20 rounded-sm"></div>

                    {/* Row 2 */}
                    <div className="col-start-2 bg-white/20 rounded-sm"></div>
                    <div className="col-start-4 bg-white/20 rounded-sm"></div>

                    {/* Row 3 - Body starts */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={`r3-${i}`} className="bg-white rounded-sm"></div>
                    ))}
                    {/* Row 4 */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={`r4-${i}`} className="bg-white rounded-sm"></div>
                    ))}
                    {/* Row 5 */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={`r5-${i}`} className="bg-white rounded-sm"></div>
                    ))}
                </div>

                <div className="flex flex-col items-start text-start">
                    <h2 className="text-[3.5rem] leading-tight font-normal text-white mb-6">
                        Your privacy is our top priority
                    </h2>

                    <p className="text-white/80 max-w-[800px] text-lg leading-relaxed">
                        The Teneo Protocol AI Agent only connects public data streams, never private messages or personal activities. What your agent processes stays on your device unless you choose to share it and contribute to a decentralized future. With Teneo Protocol, you&apos;re in control. Always.
                    </p>
                </div>

                {/* Grid Lines Overlay */}
                <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none grid grid-cols-7 mx-auto max-w-[1920px] opacity-10">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="h-full w-full border-r border-white"></div>
                    ))}
                </div>
            </div>
        </section>
    );
};