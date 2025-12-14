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

                <ul className="flex items-center gap-12">
                    {navItems.map((n, i) => (
                        <li key={i} className="inline-flex items-center gap-2 group cursor-pointer">
                            <span className="text-lg font-medium relative text-[#141414] opacity-80 group-hover:opacity-100 transition-opacity">
                                {n.title}
                            </span>
                            {n.dropdownItems && (
                                <BiChevronDown className="text-xl text-[#141414] opacity-80" />
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