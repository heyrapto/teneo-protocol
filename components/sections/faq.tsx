import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
import { Stripes } from "../layout/stripes";
import { faqs } from "@/constants";

export const FaqSection = () => {
    return (
        <section className="relative w-full bg-[#09090A] pt-32 pb-16 overflow-hidden">
            <Stripes variant="dark" />
            <div className="container mx-auto px-8 lg:px-16 relative z-10">
                {/* Header */}
                <div className="flex justify-between items-end mb-16 px-8 border-l border-[#222]">
                    <h2 className="text-[3.5rem] leading-none font-normal text-white">
                        FAQ
                    </h2>
                    <Link href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                        <span className="text-sm">Help Center</span>
                        <BsArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                {/* FAQ List */}
                <div className="border-t border-[#222]">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-[#222] group">
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-8 cursor-pointer select-none">
                                    <h3 className="text-lg text-white font-normal transition-colors">
                                        {faq.question}
                                    </h3>
                                    <span className="text-white/50 group-open:rotate-180 transition-transform duration-300">
                                        <BsChevronDown />
                                    </span>
                                </summary>
                                <div className="px-8 pb-8 transition-all duration-300">
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-[800px]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};