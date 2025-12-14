"use client";

import Image from "next/image";
import { Stripes } from "../layout/stripes";
import { marqueeItems } from "@/constants";
import { motion } from "framer-motion";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-(--brand--teal-1) pt-[88px] pb-20 overflow-hidden flex flex-col justify-between">
            <Stripes variant="light" />

            {/* Hero Content */}
            <div className="container mx-auto px-8 lg:px-16 pt-20 pb-32">
                {/* Hero Text */}
                <div className="grid grid-cols-12 gap-8 mb-16">
                    <div className="col-span-12 lg:col-span-6 relative z-10">
                        <h1 className="text-[5.5rem] leading-[0.9] -tracking-[0.04em] font-normal text-[#141414] mb-12 relative w-fit overflow-hidden">
                            {/* Text */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1, delay: 2.4 }}
                            >
                                AI Starts With You.
                            </motion.span>

                            {/* Black Background Reveal */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 1.2,
                                    delay: 2, // Starts after onboarding
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                className="absolute inset-0 bg-[#09090A] z-20"
                            />
                        </h1>
                        <p className="text-xl font-normal leading-[1.4] text-[#141414] opacity-80 max-w-[500px] mb-12">
                            Be Part of a Decentralized and Permissionless Agent Network fueling AI with Real-Time Data
                        </p>
                        <div className="flex items-center gap-2 group cursor-pointer w-fit">
                            <span className="text-black text-lg font-medium border-l-[3px] border-[#1F5CFF] pl-4 h-6 flex items-center">
                                Join now and get your share
                            </span>
                        </div>
                    </div>

                    {/* 3D Elements - Placeholder/Image */}
                    <div className="col-span-12 lg:col-span-6 relative h-[400px]">
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
                <div className="flex gap-10 animate-marquee">
                    {[...marqueeItems, ...marqueeItems].map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[600px] h-[600px] shrink-0 group"
                        >
                            {/* Image */}
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-contain object-top"
                            />

                            {/* Video overlay only for rewards */}
                            {item.type === "video" && (
                                <div className="absolute right-0 bottom-52 w-[200px] h-[200px] transition-transform duration-500">
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