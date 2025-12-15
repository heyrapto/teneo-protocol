"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { navItems } from "@/constants";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { FaDiscord, FaYoutube, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-[40] bg-[#09090A] flex flex-col pt-[88px] overflow-y-auto"
                >
                    {/* Menu Content */}
                    <div className="flex flex-col lg:flex-row h-full">
                        {/* Left Column: Navigation */}
                        <div className="flex-1 p-8 border-b lg:border-r border-white/10">
                            <div className="flex flex-col gap-6">
                                <Link href="#" className="text-2xl text-white font-normal hover:text-[#1F5CFF] transition-colors">Home</Link>

                                {navItems.filter(n => n.title !== "Home").map((item) => (
                                    <div key={item.title} className="flex flex-col">
                                        <button
                                            onClick={() => toggleAccordion(item.title)}
                                            className="flex items-center justify-between text-2xl text-white font-normal hover:text-[#1F5CFF] transition-colors"
                                        >
                                            {item.title}
                                            <BiChevronDown className={`transition-transform duration-300 ${openAccordion === item.title ? "rotate-180" : ""}`} />
                                        </button>

                                        <AnimatePresence>
                                            {openAccordion === item.title && item.dropdownItems && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="flex flex-col gap-4 pl-4 pt-4 pb-2">
                                                        {item.dropdownItems.map((subItem, idx) => (
                                                            <Link key={idx} href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                                                {subItem.icon && <subItem.icon />}
                                                                <span className="text-base">{subItem.title}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Socials & Extra */}
                        <div className="flex-1 p-8 bg-[#0F0F10]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="flex flex-col gap-6">
                                    {[
                                        { title: "Ambassador Program", icon: null },
                                        { title: "Career", icon: null },
                                        { title: "Media Room", icon: null }
                                    ].map((link, i) => (
                                        <Link key={i} href="#" className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#1F5CFF] transition-colors">
                                                <div className="w-4 h-4 bg-white/50 group-hover:bg-white" />
                                            </div>
                                            <span className="text-white text-lg">{link.title}</span>
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-6">
                                    {[
                                        { title: "X", icon: BsTwitter },
                                        { title: "Discord", icon: FaDiscord },
                                        { title: "YouTube", icon: FaYoutube },
                                        { title: "Linkedin", icon: FaLinkedinIn },
                                        { title: "Telegram", icon: FaTelegramPlane }
                                    ].map((social, i) => (
                                        <Link key={i} href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                                            {social.icon && <social.icon className="text-xl" />}
                                            <span className="text-lg">{social.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
