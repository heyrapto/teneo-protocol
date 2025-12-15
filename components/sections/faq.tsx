"use client";

import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
import { Stripes } from "../layout/stripes";
import { faqs } from "@/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
                            <button
                                onClick={() => toggleFaq(i)}
                                className="w-full flex items-center justify-between p-8 cursor-pointer select-none text-left"
                            >
                                <h3 className="text-lg text-white font-normal transition-colors">
                                    {faq.question}
                                </h3>
                                <div className={`text-white/50 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>
                                    <BsChevronDown />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8">
                                            <p className="text-gray-400 text-sm leading-relaxed max-w-[800px]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};