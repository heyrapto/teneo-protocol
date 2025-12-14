import Link from "next/link";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { steps } from "@/constants";
import { Icons } from "../ui/icons";

export const Steps = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-white/10">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={`
            relative group p-10 min-h-[340px] flex flex-col justify-between transition-all duration-300
            border-b border-white/10 lg:border-b-0 bg-black
            ${index !== steps.length - 1 ? "lg:border-r lg:border-r-white/10" : ""}
            hover:bg-[#1F5CFF] hover:border-[#1F5CFF] hover:z-10 hover:!border-r-transparent
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

            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-white transition-colors max-w-[260px]">
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
    </div>
  );
};