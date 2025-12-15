import { Steps } from "../shared/steps";
import { Stripes } from "../layout/stripes";
import Image from "next/image";

export const VisionSection = () => {
    return (
        <section className="relative w-full bg-[#09090A] overflow-hidden">
            <Stripes variant="dark" />

            <div className="container mx-auto px-8 lg:px-16 py-32 relative z-10">
                {/* Top Content */}
                <div className="grid grid-cols-12 gap-8 mb-32 items-center">
                    {/* Left Text */}
                    <div className="col-span-12 lg:col-span-5">
                        <h2 className="text-[3rem] leading-[1.1] font-normal text-white mb-8">
                            Let&apos;s Transform<br />
                            the Open Web Together.
                        </h2>
                        <p className="text-sm lg:text-xs text-white mb-6 leading-relaxed">
                            At Teneo Protocol, we believe data should be open, accessible, and fairly distributed. Right now, real-time data and digital trends are locked behind expensive APIs or platform restrictions – while people generating this data get nothing in return.
                        </p>
                        <p className="text-sm lg:text-xs text-white mb-6 leading-relaxed">
                            Worse, they&apos;re left without the means to build on it, learn from it, or benefit from it at all.
                        </p>
                        <p className="text-sm lg:text-xs text-white leading-relaxed">
                            We&apos;re changing that – by building a decentralized, community-powered AI Agent network where you&apos;re in control, your contributions fuel the future of AI and you earn your fair share of the value created.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="col-span-12 lg:col-span-7 flex justify-end">
                        <div className="relative w-full max-w-[700px] aspect-16/10">
                            <Image
                                src="/images/vision-dashboard.png"
                                alt="Vision Dashboard"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Header */}
                <div className="mb-12">
                    <h3 className="text-[2rem] font-normal text-white flex items-center gap-3">
                        Start Earning Rewards in
                        <span className="bg-[#1F5CFF] text-white text-3xl font-medium tracking-wide">
                            3 Steps
                        </span>
                    </h3>
                </div>

                {/* Steps Component */}
                <Steps />
            </div>
        </section>
    );
};