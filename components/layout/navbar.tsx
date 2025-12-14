import Image from "next/image"
import { Button } from "../ui/button"
import { navItems } from "@/constants"
import { BiChevronDown } from "react-icons/bi"

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-transparent border-b border-b-(--brand--teal-border) w-full h-fit">
            <div className="flex items-center justify-center gap-20 pl-20">
            <Image
            src="./images/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            />

            <ul className="flex items-center gap-16">
                {navItems.map((n, i) => (
                <li key={i} className="inline-flex items-center gap-2">
                    <a href="" className="text-lg">{n.title}</a>
                    {n.dropdownItems && (
                        <BiChevronDown className="text-2xl" />
                    )}
                </li>
                ))}
            </ul>
            </div>

            <div className="flex items-center">
            <Button icon="chevronDown" variant="primary">Install Now</Button>
            <Button icon="chevronUpRight" variant="secondary">Open Dashboard</Button>
            </div>
        </nav>
    )
}