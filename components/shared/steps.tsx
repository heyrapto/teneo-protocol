"use client";

import Link from "next/link";
import { BsArrowUpRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { steps } from "@/constants";
import { useRef, useState, useEffect } from "react";

export const Steps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // buffer
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 600; // card width approx ? 800 but we scroll a bit less or equal
      const targetScroll =
        containerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);

      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group/steps">
      <div
        ref={containerRef}
        onScroll={checkScroll}
        className="flex flex-col gap-4 lg:flex-row lg:overflow-x-auto w-screen lg:ml-[calc(50%-50vw)] lg:pl-[calc(50vw-50%)] border-t border-white/10 no-scrollbar"
      >
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`
            relative group p-10 flex flex-col justify-between transition-all duration-300 bg-black
            w-full lg:min-w-[800px] min-h-[180px]
            border-b border-white/10 lg:border-b-0
            ${index !== steps.length - 1 ? "lg:border-r lg:border-r-white/10" : ""}
            hover:bg-[#1F5CFF] hover:border-[#1F5CFF] hover:z-10 hover:border-r-transparent!
          `}
          >
            {/* Dots Decoration */}
            <div className="absolute top-8 right-8 grid grid-cols-3 gap-1.5 opacity-0 group-hover:opacity-40 transition-opacity">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
              ))}
            </div>

            <div>
              <div className="flex gap-4 items-center mb-8">
                <div className="text-white text-2xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-normal text-white uppercase tracking-wide">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-white transition-colors max-w-full">
                {step.description}
              </p>
            </div>

            <div className="mt-8">
              {step.showLink ? (
                <Link
                  href={step.linkHref!}
                  className="flex items-center gap-3 text-white group-hover:text-white transition-colors w-fit"
                >
                  <span className="text-sm font-medium border-l-[3px] border-[#1F5CFF] pl-4 py-0.5 group-hover:border-white transition-colors">
                    {step.linkText}
                  </span>
                  <BsArrowUpRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div className="h-[26px]"></div>
              )}
            </div>
          </div>
        ))}

        {/* Spacer for right scrolling padding */}
        <div className="hidden lg:block min-w-[calc(50vw-50%+4rem)]"></div>
      </div>

      {/* Scroll Buttons */}
      <div className="hidden lg:flex pointer-events-none absolute inset-0 items-center justify-between px-8 z-20 w-screen ml-[calc(50%-50vw)]">
        <div className="pointer-events-auto">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-[#D3F372] flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg cursor-pointor"
            >
              <BsChevronLeft className="text-xl" />
            </button>
          )}
        </div>
        <div className="pointer-events-auto pr-16">
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-[#D3F372] flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg cursor-pointor"
            >
              <BsChevronRight className="text-xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};