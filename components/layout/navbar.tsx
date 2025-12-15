
"use client";

import Image from "next/image"
import { Button } from "../ui/button"
import { navItems } from "@/constants"
import { BiChevronDown } from "react-icons/bi"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import Link from "next/link"
import { FaDiscord, FaYoutube, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    delay: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute top-0 flex justify-between items-center w-full h-fit z-50 border-b border-b-gray-400 bg-[#B4CCD1] lg:bg-transparent"
            >
                <div className="flex items-center gap-16 pl-6 lg:pl-20 py-4 lg:py-0">
                    <Image
                        src="./images/logo.svg"
                        alt="Logo"
                        width={95}
                        height={28}
                        className="w-[80px] lg:w-[95px]"
                    />

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center gap-12 h-full">
                        {navItems.map((n, i) => (
                            <li
                                key={i}
                                className="inline-flex items-center gap-2 group/nav cursor-pointer h-full relative "
                            >
                                {/* Nav Label */}
                                <span
                                    className={`
text-lg font-medium relative opacity-80
transition-all
          ${n.dropdownItems
                                            ? "group-hover/nav:text-blue-500 group-hover/nav:opacity-100"
                                            : "text-[#141414]"
                                        }
`}
                                >
                                    {n.title}
                                </span>

                                {/* Chevron */}
                                {n.dropdownItems && (
                                    <BiChevronDown
                                        className="
            text-xl opacity-80 text-[#141414]
            transition-all
            group-hover/nav:rotate-180
            group-hover/nav:text-blue-500
          "
                                    />
                                )}

                                {/* Dropdown */}
                                {n.dropdownItems && (
                                    <div className="
          absolute top-full left-0 pt-0 w-max
          invisible opacity-0 translate-y-4
          group-hover/nav:visible
          group-hover/nav:opacity-100
          group-hover/nav:translate-y-0
          transition-all duration-300 z-50
        ">
                                        <div className="bg-[#B4CCD1] border border-white/20 min-w-fit">
                                            <div
                                                className={`grid ${n.hasSocials
                                                    ? "grid-cols-2 divide-x divide-black/10"
                                                    : "grid-cols-1"
                                                    } `}
                                            >
                                                {/* Main Items */}
                                                <div className="flex flex-col p-2">
                                                    {n.dropdownItems.map((item, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="
                      group/item flex items-center gap-4 p-3 rounded-md
                      cursor-pointer transition-colors
                      hover:bg-[#1F5CFF]
                    "
                                                        >
                                                            {/* Icon */}
                                                            <div
                                                                className="
                        w-8 h-8 flex items-center justify-center
                        text-[#141414]
                        transition-colors
                        group-hover/item:text-white
                      "
                                                            >
                                                                {item.icon && <item.icon />}
                                                            </div>

                                                            {/* Text */}
                                                            <span
                                                                className="
                        font-medium text-sm whitespace-nowrap
                        text-[#141414]
                        transition-colors
                        group-hover/item:text-white
                      "
                                                            >
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Socials (already correct) */}
                                                {n.hasSocials && n.socialIcons && (
                                                    <div className="flex flex-col p-2 pl-4">
                                                        {n.socialIcons.map((social, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="
                        group/item flex items-center gap-4 p-1 rounded-md
                        cursor-pointer transition-colors
                      "
                                                            >
                                                                <div
                                                                    className="
                          w-6 h-6 text-[#141414]
                          transition-colors
                          group-hover/item:text-[#1F5CFF]
                        "
                                                                >
                                                                    {social.icon && <social.icon />}
                                                                </div>

                                                                <span className="text-[#141414] font-medium text-sm whitespace-nowrap">
                                                                    {social.title}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center h-full">
                    {/* Buttons - Hidden on Mobile except Open Dashboard? */}
                    <div className="hidden lg:flex items-center h-full">
                        <Button icon="chevronDown" variant="primary">Install Now</Button>
                    </div>

                    {/* Open Dashboard - Visible on Mobile but resized */}
                    <Button
                        icon="chevronUpRight"
                        variant="secondary"
                    >
                        Open Dashboard
                    </Button>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden h-full px-6 flex items-center justify-center border-l border-black/10"
                    >
                        <RxHamburgerMenu className="text-2xl text-[#141414]" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[60] bg-[#09090A] flex flex-col pt-[70px] overflow-y-auto"
                    >
                        {/* Mobile Header (Absolute) */}
                        <div className="absolute top-0 left-0 right-0 flex justify-between items-center bg-[#B4CCD1] border-b border-black/10">
                            <div className="pl-6 py-4">
                                <Image
                                    src="./images/logo.svg"
                                    alt="Logo"
                                    width={80}
                                    height={24}
                                />
                            </div>
                            <div className="flex items-center h-full">
                                <Button
                                    icon="chevronUpRight"
                                    variant="secondary"
                                    className="rounded-none h-full py-4 px-6 text-sm font-medium bg-[#1F5CFF] text-white hover:bg-[#1F5CFF]/90 border-l border-white/10"
                                >
                                    Open Dashboard
                                </Button>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="h-full px-6 flex items-center justify-center border-l border-black/10 bg-[#09090A] text-white"
                                >
                                    <RxCross2 className="text-2xl" />
                                </button>
                            </div>
                        </div>

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
                                                <BiChevronDown className={`transition - transform duration - 300 ${openAccordion === item.title ? "rotate-180" : ""} `} />
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
                                            { title: "Ambassador Program", icon: null }, // Add proper icons if available
                                            { title: "Career", icon: null },
                                            { title: "Media Room", icon: null }
                                        ].map((link, i) => (
                                            <Link key={i} href="#" className="flex items-center gap-4 group">
                                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#1F5CFF] transition-colors">
                                                    {/* Icon placeholder or general icon */}
                                                    <div className="w-4 h-4 bg-white/50 group-hover:bg-white" />
                                                </div>
                                                <span className="text-white text-lg">{link.title}</span>
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        {[
                                            { title: "X", icon: BsTwitter }, // Using Twitter as X
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
        </>
    )
}