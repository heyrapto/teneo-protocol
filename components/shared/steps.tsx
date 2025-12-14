import Link from "next/link";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { steps } from "@/constants";

export const Steps = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:overflow-x-auto lg:w-screen lg:ml-[calc(50%-50vw)] lg:pl-[calc(50vw-50%)] border-t border-white/10 no-scrollbar">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={`
            relative group p-10 flex flex-col justify-between transition-all duration-300 bg-black
            w-full lg:min-w-[800px] min-h-[180px]
            border-b border-white/10 lg:border-b-0
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
  );
};