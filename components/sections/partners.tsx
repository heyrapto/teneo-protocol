import { Stripes } from "../layout/stripes";
import Image from "next/image";
import { partners } from "@/constants";

export const PartnersSection = () => {
    return (
        <section className="relative w-full bg-[#1F5CFF] py-32 overflow-hidden">
            <Stripes variant="light" />
            {/* Use transparent stripes for the blue background */}
            <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none grid grid-cols-7 mx-auto max-w-[1920px] opacity-10">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="h-full w-full border-r border-white/30"></div>
                ))}
            </div>

            <div className="container mx-auto px-8 lg:px-16 flex items-center relative z-10 h-full min-h-[400px]">
                <div className="grid grid-cols-12 w-full gap-8">
                    {/* Title */}
                    <div className="col-span-12 lg:col-span-3">
                        <h2 className="text-[3.5rem] leading-none font-normal text-white">
                            Partners
                        </h2>
                    </div>

                    {/* Partners Grid */}
                    <div className="col-span-12 lg:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 items-center">
                        {partners.map((partner, i) => (
                            <div key={i} className="flex items-center justify-center relative h-12 w-full">
                                <Image
                                    src={partner.src}
                                    alt={partner.name}
                                    fill
                                    className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};