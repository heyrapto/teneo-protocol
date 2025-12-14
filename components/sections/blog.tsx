import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { Stripes } from "../layout/stripes";
import { blogPosts } from "@/constants";

export const BlogSection = () => {
    return (
        <section className="relative w-full bg-[#09090A] py-32 overflow-hidden">
            <Stripes variant="dark" />

            <div className="w-full max-w-[1920px] mx-auto px-8 lg:px-16 relative z-10">
                {/* Header */}
                <div className="flex justify-between items-end mb-16 px-8 border-l border-[#222]">
                    <h2 className="text-[3.5rem] leading-none font-normal text-white">
                        Blog
                    </h2>
                    <Link href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                        <span className="text-sm">View all blogs</span>
                        <BsArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#222]">
                    {blogPosts.map((post, i) => (
                        <div key={i} className="border-r border-b border-[#222] bg-[#09090A] group cursor-pointer">
                            {/* Image */}
                            <div className="relative w-full aspect-[16/9] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="mb-4">
                                    <span className="bg-[#1F5CFF] text-white text-[10px] font-medium px-2 py-1 rounded-sm uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-normal text-white mb-4 leading-tight group-hover:text-[#1F5CFF] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-xs leading-relaxed mb-8 line-clamp-3">
                                    {post.description}
                                </p>

                                <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors text-xs">
                                    <span>Read more</span>
                                    <BsArrowUpRight />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};