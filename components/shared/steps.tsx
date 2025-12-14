import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { steps } from "@/constants";

export const Steps = () => {
  return (
    <div className="grid grid-cols-12 border-t border-[rgba(255,255,255,0.1)]">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={`col-span-12 md:col-span-4 p-8 flex flex-col justify-between min-h-[300px] relative group
            ${index !== steps.length - 1 ? "border-r border-[rgba(255,255,255,0.1)]" : ""}
          `}
        >
          <div>
            <div className="w-8 h-8 text-white mb-6">{step.icon}</div>
            <h3 className="text-xl font-normal text-white mb-4">
              {step.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[250px]">
              {step.description}
            </p>
          </div>

          {step.showLink && (
            <div className="mt-8">
              <Link
                href={step.linkHref!}
                className="flex items-center gap-2 text-white hover:text-[#D3F372] transition-colors group relative z-10"
              >
                <span className="text-sm font-medium border-l-2 border-[#1F5CFF] pl-3">
                  {step.linkText}
                </span>
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}

          {step.hasCta && (
            <button className="absolute bottom-8 right-8 w-12 h-12 bg-[#D3F372] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer z-10">
              <BsArrowRight className="text-xl" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};