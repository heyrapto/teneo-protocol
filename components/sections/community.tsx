import { Button } from "../ui/button";
import Image from "next/image";
import { Stripes } from "../layout/stripes";
import { BsArrowUpRight } from "react-icons/bs";

export const CommunitySection = () => {
    return (
        <section className="relative w-full bg-[#B4CCD1] overflow-hidden">
            <Stripes variant="light" />

            <div className="container mx-auto px-8 lg:px-16 pt-32 pb-32 relative z-10">
                {/* Header */}
                <h2 className="text-[3.5rem] leading-none font-normal text-[#141414] text-center mb-24">
                    Teneo Protocol Community Node
                </h2>

                {/* Two Column Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 border border-gray-400 mb-0">
                    {/* Left: AI Agent */}
                    <div className="border-r border-gray-400 p-12 flex flex-col h-full bg-[#B4CCD1]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
                                <div className="w-2 h-2 bg-black rounded-sm"></div>
                            </div>
                            <h3 className="text-2xl font-normal text-[#141414]">AI Agent</h3>
                        </div>
                        <p className="text-[#141414]/70 text-base leading-relaxed mb-8 min-h-[80px]">
                            The Teneo Protocol Community Node is an AI agent that anyone can run directly in their browser. The agent collects and structures real-time data from across the web. Operating in a fully permissionless system, the agent responds directly to your defined tasks, not centralized control.
                        </p>
                        <div className="mb-12">
                            <Button variant="secondary" className="w-fit px-8 py-3 text-sm">
                                Install Now <span className="ml-2">↓</span>
                            </Button>
                        </div>
                        <div className="mt-auto relative w-full aspect-16/10 rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/images/community/1.png"
                                alt="AI Agent Interface"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Dashboard */}
                    <div className="p-12 flex flex-col h-full bg-[#B4CCD1]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-6 h-6 rounded-full border border-[#1F5CFF] flex items-center justify-center">
                                <div className="w-2 h-2 bg-[#1F5CFF] rounded-full"></div>
                            </div>
                            <h3 className="text-2xl font-normal text-[#141414]">Dashboard</h3>
                        </div>
                        <p className="text-[#141414]/70 text-base leading-relaxed mb-8 min-h-[80px]">
                            The Teneo Protocol Dashboard is your all-in-one platform to manage activities, track rewards, and access essential tools within the Teneo Protocol ecosystem. Designed with an intuitive interface and user-friendly features, the dashboard helps users track progress, maximize rewards, and stay connected with the community.
                        </p>
                        <div className="mb-12">
                            <Button variant="secondary" icon="chevronUpRight" className="w-fit px-8 py-3 text-sm">
                                Open Dashboard
                            </Button>
                        </div>
                        <div className="mt-auto relative w-full aspect-16/10 rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/images/community/2.png"
                                alt="Dashboard Interface"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Invite Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left: Content */}
                    <div className="p-16 border-r border-[#141414]/10 flex flex-col justify-center">
                        <h3 className="text-[2.5rem] leading-tight font-normal text-[#141414] mb-8">
                            Invite your friends and Boost your Rewards.
                        </h3>

                        <div className="inline-block bg-[#D3F372] px-2 py-1 mb-8 w-fit text-sm font-medium">
                            How-To-Description:
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Invite friends using your unique referral code.",
                                "Your friends receive 1,000 Points when signing up.",
                                "Claim 2,000 Points once your invited friend has at least 100 heartbeats and a wallet connected.",
                                "Simply track your referrals in the Dashboard."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#141414]/80 text-sm">
                                    <span className="mt-1.5 w-1 h-1 bg-black rounded-full block shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Invite Card */}
                    <div className="p-16 flex items-center justify-center">
                        <div className="w-[250px] aspect-3/4 flex flex-col relative group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                            <Image
                                src="/images/invite.avif"
                                alt="Invite Card"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};