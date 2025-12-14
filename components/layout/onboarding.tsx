"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Onboarding = () => {
    const [show, setShow] = useState(true);
    const [showBlack, setShowBlack] = useState(true);

    useEffect(() => {
        // remove black BEFORE animation starts
        const blackTimer = setTimeout(() => {
            setShowBlack(false);
        }, 120); // ~1–2 frames

        // remove component after animation
        const endTimer = setTimeout(() => {
            setShow(false);
        }, 2200);

        return () => {
            clearTimeout(blackTimer);
            clearTimeout(endTimer);
        };
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* BLACK ONLY BEFORE ANIMATION */}
            {showBlack && <div className="absolute inset-0 bg-black" />}

            {/* BARS */}
            <div className="absolute inset-0 grid grid-cols-6 h-full w-full">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        transition={{
                            duration: 2,
                            delay: i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="w-full h-full bg-[#B4CCD1]"
                        style={{ transformOrigin: "bottom" }}
                    />
                ))}
            </div>
        </div>
    );
};