import Image from "next/image"
import { Button } from "../ui/button"
import { navItems } from "@/constants"
import { BiChevronDown } from "react-icons/bi"

export const Navbar = () => {
    return (
        <nav className="absolute top-0 flex justify-between items-center w-full h-fit z-50 border-b border-b-gray-400">
            <div className="flex items-center gap-16 pl-20">
                <Image
                    src="./images/logo.svg"
                    alt="Logo"
                    width={95}
                    height={28}
                />

                <ul className="flex items-center gap-12 h-full">
                    {navItems.map((n, i) => (
                        <li key={i} className="inline-flex items-center gap-2 group cursor-pointer h-full relative">
                            <span className="text-lg font-medium relative text-[#141414] opacity-80 group-hover:opacity-100 transition-opacity">
                                {n.title}
                            </span>
                            {n.dropdownItems && (
                                <BiChevronDown className="text-xl text-[#141414] opacity-80 group-hover:rotate-180 transition-transform" />
                            )}

                            {/* Dropdown Menu */}
                            {n.dropdownItems && (
                                <div className="absolute top-full left-0 pt-4 w-max invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
                                    <div className="bg-[#B4CCD1]/90 backdrop-blur-md border border-white/20 shadow-xl p-4 min-w-[280px]">
                                        <div className={`grid ${n.hasSocials ? 'grid-cols-2 divide-x divide-black/10' : 'grid-cols-1'}`}>
                                            {/* Main Items */}
                                            <div className="flex flex-col gap-2 p-2">
                                                {n.dropdownItems.map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-4 p-3 hover:bg-black/5 rounded-md transition-colors cursor-pointer group/item">
                                                        <div className="w-8 h-8 text-[#141414] group-hover/item:text-[#1F5CFF] transition-colors">
                                                            {item.icon && <item.icon />}
                                                        </div>
                                                        <span className="text-[#141414] font-medium text-sm whitespace-nowrap">{item.title}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Socials Column (if present) */}
                                            {n.hasSocials && n.socialIcons && (
                                                <div className="flex flex-col gap-2 p-2 pl-4">
                                                    {n.socialIcons.map((social, idx) => (
                                                        <div key={idx} className="flex items-center gap-4 p-3 hover:bg-black/5 rounded-md transition-colors cursor-pointer group/item">
                                                            <div className="w-6 h-6 text-[#141414] group-hover/item:text-[#1F5CFF] transition-colors">
                                                                {social.icon && <social.icon />}
                                                            </div>
                                                            <span className="text-[#141414] font-medium text-sm whitespace-nowrap">{social.title}</span>
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
        </nav>
    )
}