"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Onboarding = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2200); // 2s animation + buffer
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] grid grid-cols-7 h-screen w-full pointer-events-none">
            {[...Array(7)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: i * 0.1, // Left to Right stagger (Bottom-Left to Top-Right reveal)
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full h-full bg-[#B4CCD1]"
                    style={{
                        transformOrigin: "top", // Shrink towards top, revealing bottom first
                    }}
                />
            ))}
        </div>
    );
};
