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
                    className="fixed inset-0 z-[40] bg-[#09090A] h-fit flex flex-col pt-[88px] overflow-y-auto"
                >
                    {/* Menu Content */}
                    <div className="flex flex-col p-8 w-full">
                        <div className="flex flex-col gap-6 w-full">
                            <Link href="#" className="text-xl text-white font-normal hover:text-[#1F5CFF] transition-colors border-b border-white/10 pb-6">Home</Link>

                            {navItems.filter(n => n.title !== "Home").map((item) => (
                                <div key={item.title} className="flex flex-col border-b border-white/10 pb-6">
                                    <button
                                        onClick={() => toggleAccordion(item.title)}
                                        className="flex items-center justify-between text-xl text-white font-normal hover:text-[#1F5CFF] transition-colors w-full"
                                    >
                                        {item.title}
                                        <BiChevronDown className={`text-2xl transition-transform duration-300 ${openAccordion === item.title ? "rotate-180" : "text-[#1F5CFF]"}`} />
                                    </button>

                                    <AnimatePresence>
                                        {openAccordion === item.title && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex flex-col gap-2 pt-6">
                                                    {/* Dropdown Items (e.g. Learn > Blog) */}
                                                    {item.dropdownItems && item.dropdownItems.map((subItem, idx) => (
                                                        <Link key={idx} href="#" className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-colors">
                                                            <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-white group-hover:bg-[#1F5CFF] transition-colors shrink-0">
                                                                {subItem.icon && <subItem.icon />}
                                                            </div>
                                                            <span className="text-white text-base">{subItem.title}</span>
                                                        </Link>
                                                    ))}

                                                    {/* Join Section Extras (Ambassador, Career, etc) - manually mapped for Join */}
                                                    {item.title === "Join" && (
                                                        <>

                                                            {/* Socials Grid */}
                                                            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
                                                                {[
                                                                    { title: "X", icon: BsTwitter },
                                                                    { title: "Discord", icon: FaDiscord },
                                                                    { title: "YouTube", icon: FaYoutube },
                                                                    { title: "Linkedin", icon: FaLinkedinIn },
                                                                    { title: "Telegram", icon: FaTelegramPlane }
                                                                ].map((social, i) => (
                                                                    <Link key={social.title} href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                                                        {social.icon && <social.icon className="text-lg" />}
                                                                        <span className="text-base">{social.title}</span>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
