"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Custom Cherry Icon Component
function CherryIcon({ className }: { className?: string }) {
    return (
        <motion.svg
            initial={{ opacity: 0, y: -50, rotate: -20 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring", bounce: 0.5 }}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Stem */}
            <path d="M50 20 C 60 10, 80 5, 80 15" stroke="#5D4037" strokeWidth="4" strokeLinecap="round" />
            {/* Cherry */}
            <circle cx="50" cy="55" r="28" fill="#F43F5E" />
            {/* Gloss/Highlight */}
            <path d="M40 40 Q 50 35 60 45 Q 50 45 40 40" fill="white" fillOpacity="0.4" />
        </motion.svg>
    );
}

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FEFCF8]">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[#B6E87A]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-2 md:px-6 w-full grid grid-cols-2 gap-2 md:gap-16 lg:gap-24 items-center relative z-10 overflow-visible">

                {/* LEFT COLUMN */}
                <div className="space-y-4 md:space-y-10 scale-[0.7] transform-gpu origin-left sm:scale-100">
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-7xl lg:text-[4.5rem] font-black leading-[1.1] tracking-tight text-gray-900"
                        >
                            Digital Experiences <br className="hidden md:block" />
                            <span className="relative inline-block mt-2 md:mt-0">
                                Engineered
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-4 md:h-6 bg-[#B6E87A]/40 -z-10 origin-left rounded-full"
                                />
                            </span><br />
                            for Growth
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed font-medium"
                        >
                            From websites and mobile apps to SEO and brand systems — Oréva helps modern businesses launch, scale, and dominate online.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
                    >
                        <Button size="lg" className="rounded-full px-4 py-3 sm:px-5 sm:py-4 md:px-10 md:py-8 text-xs sm:text-sm md:text-lg font-bold shadow-xl shadow-[#B6E87A]/20 bg-[#B6E87A] hover:bg-[#a5d66f] text-black transition-all duration-300 hover:scale-[1.03] md:hover:scale-105 hover:shadow-2xl hover:shadow-[#B6E87A]/40 group h-auto flex items-center justify-center whitespace-nowrap overflow-hidden">
                            <span className="hidden md:inline">Let’s Build Something Powerful</span>
                            <span className="md:hidden">Let’s Build</span>
                            <ArrowRight className="ml-1.5 md:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                                        className="w-14 h-14 rounded-full border-4 border-[#FEFCF8] bg-gray-200 overflow-hidden relative shadow-md"
                                    >
                                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Student" className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="text-sm font-medium text-gray-500 leading-snug">
                                <span className="block font-black text-gray-900 text-lg">100+ happy</span>
                                students
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN - The "Tree" Stack */}
                <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center lg:justify-end mt-0 scale-[0.55] transform-gpu origin-right sm:scale-[0.8] lg:scale-100">
                    <div className="relative w-full max-w-lg h-[550px]">

                        {/* Cherry on Top */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-50">
                            <CherryIcon className="w-32 h-32 drop-shadow-2xl" />
                        </div>

                        {/* Row 1 */}
                        <CustomTag label="debugging" color="#B6E87A" className="top-16 left-0 md:left-[15%] -rotate-6 z-10" delay={0.1} />
                        <CustomTag label="ios development" color="#F472B6" textColor="white" className="top-20 right-0 md:right-[15%] rotate-6 z-10" delay={0.2} />

                        {/* Row 2 */}
                        <CustomTag label="website management" color="#8B5CF6" textColor="white" className="top-32 left-[10%] md:left-[25%] -rotate-3 z-20" delay={0.3} yOffset={-8} />

                        {/* Row 3 */}
                        <CustomTag label="Figma to website" color="#3B82F6" textColor="white" className="top-[180px] -left-4 md:left-[5%] -rotate-12 z-10" delay={0.4} />
                        <CustomTag label="brand management" color="#FACC15" className="top-[190px] right-0 md:right-[12%] -rotate-3 z-10" delay={0.5} yOffset={-6} />

                        {/* Row 4 */}
                        <CustomTag label="design implementation" color="#B6E87A" className="top-[250px] left-2 md:left-[8%] rotate-2 z-20" delay={0.6} />
                        <CustomTag label="SEO management" color="#FB923C" textColor="white" className="top-[280px] right-2 md:right-[5%] rotate-6 z-10" delay={0.7} yOffset={-7} />

                        {/* Row 5 */}
                        <CustomTag label="e-commerce website development" color="#F472B6" textColor="white" className="top-[340px] left-4 md:left-[10%] -rotate-2 z-30" delay={0.8} />

                        {/* Row 6 */}
                        <CustomTag label="web development" color="#8B5CF6" textColor="white" className="top-[410px] -left-6 md:left-[0%] -rotate-3 z-20" delay={0.9} />
                        <CustomTag label="app development" color="#3B82F6" textColor="white" className="top-[420px] -right-2 md:right-[5%] rotate-3 z-10" delay={1.0} yOffset={-8} />

                        {/* Bottom Large Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.1, type: "spring", bounce: 0.4 }}
                            className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 w-[110%] md:w-[120%] flex justify-center z-40"
                        >
                            <Link href="/services/full-stack-developer">
                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                    className="bg-[#B6E87A] text-gray-900 px-8 py-4 md:px-12 md:py-6 rounded-full text-xl md:text-3xl font-black shadow-2xl shadow-[#B6E87A]/40 whitespace-nowrap border-4 border-white backdrop-blur-md hover:scale-105 transition-transform cursor-pointer"
                                    style={{ transform: 'rotate(-1deg)' }}
                                >
                                    full stack developer
                                </motion.div>
                            </Link>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}

function CustomTag({ label, color, textColor = "black", className, delay = 0, yOffset = -5 }: { label: string, color: string, textColor?: string, className?: string, delay?: number, yOffset?: number }) {
    const slug = label.toLowerCase().replace(/ /g, '-');
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: delay,
                type: "spring",
                bounce: 0.5
            }}
            className={cn("absolute", className)}
        >
            <Link href={`/services/${slug}`}>
                <motion.div
                    animate={{ y: [0, yOffset, 0] }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: delay
                    }}
                    className="px-5 py-2 md:px-8 md:py-4 rounded-full shadow-lg hover:shadow-2xl text-[1.1rem] md:text-xl font-bold whitespace-nowrap border-2 border-white backdrop-blur-md cursor-pointer transition-all hover:scale-105"
                    style={{ backgroundColor: color, color: textColor }}
                >
                    {label}
                </motion.div>
            </Link>
        </motion.div>
    );
}
