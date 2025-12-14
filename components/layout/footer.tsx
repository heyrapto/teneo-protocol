import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaLinkedinIn, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { BsX } from "react-icons/bs"; // Using BsX for 'X' logo if preferred, or custom SVG
import { Stripes } from "../layout/stripes";

export const Footer = () => {
    return (
        <footer className="relative w-full bg-[#09090A] pt-32 pb-12 overflow-hidden border-t border-[#222]">
            <Stripes variant="dark" />
            <div className="absolute right-0 top-0 h-full w-[600px] pointer-events-none opacity-50">
                <Image
                    src="/images/footer-img.png"
                    alt="Footer Background"
                    fill
                    className="object-contain object-right"
                />
            </div>

            {/* Use Stripes for grid lines */}
            <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none grid grid-cols-7 mx-auto max-w-[1920px] opacity-10 z-0">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="h-full w-full border-r border-white/30"></div>
                ))}
            </div>

            <div className="container mx-auto px-8 lg:px-16 relative z-10 flex flex-col min-h-[400px] justify-between">
                {/* Top Section */}
                <div className="grid grid-cols-12 gap-8 mb-24">
                    <div className="col-span-12 lg:col-span-6">
                        <h2 className="text-[3rem] leading-tight font-normal text-white max-w-[600px] mb-12">
                            Creating the Future with Decentralized Data
                        </h2>
                        <div className="flex items-center gap-2 mb-8">
                            <Image src="./images/logo.svg" alt="Teneo" width={120} height={40} className="brightness-0 invert" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-12 gap-8 items-end border-t border-[#333] pt-12">
                    {/* Socials & Copyright */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="flex items-center gap-4 mb-8">
                            {[
                                { icon: <BsX className="text-lg" />, href: "#" },
                                { icon: <FaDiscord className="text-lg" />, href: "#" },
                                { icon: <FaYoutube className="text-lg" />, href: "#" },
                                { icon: <FaLinkedinIn className="text-lg" />, href: "#" },
                                { icon: <FaTelegramPlane className="text-lg" />, href: "#" },
                            ].map((social, i) => (
                                <Link key={i} href={social.href} className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm hover:bg-[#1F5CFF] hover:text-white transition-colors">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                        <p className="text-gray-500 text-xs">
                            © 2025 ELDODP Foundation. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Column 1 - Pages */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-gray-500 text-sm mb-2">Pages</h4>
                            <Link href="#" className="text-white text-sm hover:text-[#1F5CFF]">Home</Link>
                            <Link href="#" className="text-white text-sm hover:text-[#1F5CFF] flex items-center gap-1">Install Now <span className="text-[10px]">↗</span></Link>
                            <Link href="#" className="text-white text-sm hover:text-[#1F5CFF] flex items-center gap-1">Dashboard <span className="text-[10px]">↗</span></Link>
                        </div>

                        {/* Column 2 - Legal */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-gray-500 text-sm mb-2">Legal</h4>
                            <Link href="#" className="text-white text-sm hover:text-[#1F5CFF]">Imprint</Link>
                            <Link href="#" className="text-white text-sm hover:text-[#1F5CFF]">Privacy & Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};