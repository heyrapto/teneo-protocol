import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaLinkedinIn, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import { Stripes } from "../layout/stripes";

export const Footer = () => {
    return (
        <footer className="relative w-full bg-[#000000] pt-40 pb-12 overflow-hidden border-t border-[#111]">
            <Stripes variant="dark" />

            <div className="container mx-auto px-8 lg:px-16 relative z-10 flex flex-col justify-between h-full">
                <div className="grid grid-cols-6 h-full">
                    {/* Top Section: Text & Cubes */}
                    <div className="col-span-6 lg:col-span-3 flex flex-col justify-start pt-10">
                        <h2 className="text-[3.5rem] leading-[1.1] font-normal text-white mb-8 tracking-tight">
                            Creating the Future with Decentralized Data
                        </h2>

                        <div className="text-white text-3xl font-medium tracking-tight mb-20 flex items-center gap-2">
                            <div className="grid grid-cols-2 gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                            </div>
                            teneo
                        </div>
                    </div>

                    {/* Cubes Graphics (CSS approximation) */}
                    <div className="col-span-6 lg:col-span-3 relative h-[400px] flex items-center justify-center">
                        <div className="relative w-[600px] h-[500px]">
                            <Image
                                src="/images/footer-img.png"
                                alt="Footer Background"
                                fill
                                className="object-contain object-right"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Footer Links */}
                <div className="grid grid-cols-6 mt-20 pt-10 items-start">
                    {/* Column 1: Logo & Socials & Copyright */}
                    <div className="col-span-6 lg:col-span-2 flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <div className="grid grid-cols-2 gap-1">
                                <span className="w-1 h-1 rounded-full bg-white"></span>
                                <span className="w-1 h-1 rounded-full bg-white/50"></span>
                                <span className="w-1 h-1 rounded-full bg-white"></span>
                                <span className="w-1 h-1 rounded-full bg-white"></span>
                            </div>
                            <span className="text-white font-medium text-lg">teneo</span>
                        </div>

                        <div className="flex items-center gap-4">
                            {[
                                { icon: <BsX />, href: "#" },
                                { icon: <FaDiscord />, href: "#" },
                                { icon: <FaYoutube />, href: "#" },
                                { icon: <FaLinkedinIn />, href: "#" },
                                { icon: <FaTelegramPlane />, href: "#" },
                            ].map((social, i) => (
                                <Link key={i} href={social.href} className="text-white/60 hover:text-white transition-colors text-lg">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>

                        <p className="text-white/40 text-xs mt-2">
                            © 2025 ELOOP Foundation. All rights reserved.
                        </p>
                    </div>

                    {/* Spacers */}
                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Column 4: Pages */}
                    <div className="col-span-6 lg:col-span-1 flex flex-col gap-4">
                        <h4 className="text-white/40 text-sm mb-2">Pages</h4>
                        <Link href="#" className="text-white text-sm hover:text-white/80">Home</Link>
                        <Link href="#" className="text-white text-sm hover:text-white/80 flex items-center gap-1">Install Now <span className="text-[10px] opacity-70">↗</span></Link>
                        <Link href="#" className="text-white text-sm hover:text-white/80 flex items-center gap-1">Dashboard <span className="text-[10px] opacity-70">↗</span></Link>
                    </div>

                    {/* Column 5: Legal */}
                    <div className="col-span-6 lg:col-span-1 flex flex-col gap-4">
                        <h4 className="text-white/40 text-sm mb-2">Legal</h4>
                        <Link href="#" className="text-white text-sm hover:text-white/80">Imprint</Link>
                        <Link href="#" className="text-white text-sm hover:text-white/80">Privacy & Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};