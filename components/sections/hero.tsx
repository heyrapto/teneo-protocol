"use client";

import Image from "next/image";
import { Stripes } from "../layout/stripes";
import { marqueeItems } from "@/constants";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaLinkedinIn, FaYoutube, FaInstagram, FaRedditAlien, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { BsX, BsMeta } from "react-icons/bs";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#B4CCD1] pt-[88px] pb-20 overflow-hidden flex flex-col justify-between">
            <Stripes variant="light" />

            {/* Hero Content */}
            <div className="container mx-auto px-6 lg:px-16 pt-12 lg:pt-20 pb-20 lg:pb-32">
                {/* Hero Text */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 lg:mb-16">
                    <div className="col-span-1 lg:col-span-6 relative z-10">
                        {/* Mobile Hexagon (mimic design if needed, or rely on desktop one being hidden/shown) */}
                        {/* For now, just focus on text sizing */}

                        <h1 className="text-[3.5rem] lg:text-[5.5rem] leading-[1] lg:leading-[0.9] -tracking-[0.04em] font-normal text-[#141414] mb-8 lg:mb-12 relative w-fit overflow-hidden">
                            {/* Text */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1, delay: 1 }}
                            >
                                AI Starts With You.
                            </motion.span>

                            {/* Black Background Reveal */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.8, // Starts after onboarding
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                className="absolute inset-0 bg-[#09090A] z-20"
                            />
                        </h1>
                        <p className="text-lg lg:text-xl font-normal leading-[1.4] text-[#141414] opacity-80 max-w-[500px] mb-8 lg:mb-12">
                            Be Part of a Decentralized and Permissionless Agent Network fueling AI with Real-Time Data
                        </p>
                        <div className="flex items-center gap-2 group cursor-pointer w-fit">
                            <span className="text-black text-lg font-medium border-l-[3px] border-[#1F5CFF] pl-4 h-6 flex items-center transition-colors group-hover:text-[#1F5CFF]">
                                Join now and get your share
                            </span>
                            {/* Arrow icon could go here if needed */}
                        </div>
                    </div>

                    {/* 3D Elements - Desktop Only or Stacked? keeping visible but maybe smaller/hidden if needed */}
                    <div className="col-span-1 lg:col-span-6 relative h-[200px] lg:h-[400px] hidden lg:block">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Image
                                src="/images/hero_image.svg"
                                alt="Teneo 3D Elements"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Infinite Marquee */}
            <div className="w-full relative z-10 overflow-hidden">
                <div className="flex gap-4 lg:gap-10 animate-marquee w-fit">
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] shrink-0 group overflow-hidden"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-contain object-top"
                            />

                            {/* Social Icons Overlay for Global Data Card */}
                            {item.src === "/images/data.png" && (
                                <div className="absolute top-6 lg:top-12 left-0 w-full flex flex-col gap-3 lg:gap-6 overflow-hidden">
                                    {/* Row 1 - Right (Reverse) */}
                                    <div className="flex gap-4 lg:gap-8 animate-marquee-reverse w-max">
                                        {[...Array(6)].flatMap(() => [
                                            <FaTelegramPlane key="tg" className="text-2xl lg:text-4xl text-black" />,
                                            <div key="dots" className="flex gap-1 items-center"><div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-black rounded-full"></div><div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-black rounded-full"></div></div>,
                                            <BsMeta key="meta" className="text-2xl lg:text-4xl text-black" />,
                                            <FaInstagram key="ig" className="text-2xl lg:text-4xl text-black" />,
                                            <BsX key="x" className="text-2xl lg:text-4xl text-black" />,
                                        ]).map((icon, i) => (
                                            <div key={i} className="shrink-0">{icon}</div>
                                        ))}
                                    </div>
                                    {/* Row 2 - Left */}
                                    <div className="flex gap-4 lg:gap-8 animate-marquee w-max">
                                        {[...Array(6)].flatMap(() => [
                                            <FaLinkedinIn key="li" className="text-2xl lg:text-4xl text-black" />,
                                            <FaRedditAlien key="rd" className="text-2xl lg:text-4xl text-black" />,
                                            <FaYoutube key="yt" className="text-2xl lg:text-4xl text-black" />,
                                            <FaWhatsapp key="wa" className="text-2xl lg:text-4xl text-black" />,
                                            <FaTiktok key="tt" className="text-2xl lg:text-4xl text-black" />,
                                        ]).map((icon, i) => (
                                            <div key={i} className="shrink-0">{icon}</div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Video overlay only for rewards */}
                            {item.type === "video" && (
                                <div className="absolute right-5 bottom-28 w-[100px] h-[100px] lg:right-10 lg:bottom-52 lg:w-[200px] lg:h-[200px] transition-transform rotate-90 duration-500">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover mix-blend-screen"
                                    >
                                        <source src="/videos/rewards-video.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};