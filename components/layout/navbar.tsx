"use client";

import Image from "next/image"
import { Button } from "../ui/button"
import { navItems } from "@/constants"
import { BiChevronDown } from "react-icons/bi"
import { motion } from "framer-motion"

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1,
                delay: 1.2,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute top-0 flex justify-between items-center w-full h-fit z-50 border-b border-b-gray-400"
        >
            <div className="flex items-center gap-16 pl-20">
                <Image
                    src="./images/logo.svg"
                    alt="Logo"
                    width={95}
                    height={28}
                />

                <ul className="flex items-center gap-12 h-full">
                    {navItems.map((n, i) => (
                        <li
                            key={i}
                            className="inline-flex items-center gap-2 group/nav cursor-pointer h-full relative"
                        >
                            {/* Nav Label */}
                            <span
                                className={`
          text-lg font-medium relative opacity-80
          transition-all
          ${n.dropdownItems
                                        ? "group-hover/nav:text-blue-500 group-hover/nav:opacity-100"
                                        : "text-[#141414]"}
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
          absolute top-full left-0 pt-6 w-max
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
                                                }`}
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

            <div className="flex items-center">
                <Button icon="chevronDown" variant="primary" className="rounded-none h-full py-6 px-8 text-base font-medium">Install Now</Button>
                <Button icon="chevronUpRight" variant="secondary" className="rounded-none h-full py-6 px-8 text-base font-medium bg-[#1F5CFF] text-white hover:bg-[#1F5CFF]/90">Open Dashboard</Button>
            </div>
        </motion.nav>
    )
}