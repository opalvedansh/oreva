"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

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
            <path d="M50 20 C 60 10, 80 5, 80 15" stroke="#5D4037" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="55" r="28" fill="#F43F5E" />
            <path d="M40 40 Q 50 35 60 45 Q 50 45 40 40" fill="white" fillOpacity="0.4" />
        </motion.svg>
    );
}

// Mobile Tag Cake Centerpiece (Mobile)
function MobileTagCake() {
    return (
        <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center gap-[8px] w-full max-w-[280px] mx-auto py-2"
        >
            {/* Top Cherry */}
            <motion.div
                initial={{ opacity: 0, y: -40, rotate: -20 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.8 }}
                className="z-40 mb-1"
            >
                <CherryIcon className="w-10 h-10 drop-shadow-md" />
            </motion.div>

            {/* Layer 1 (Top) */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="flex gap-[8px] z-30"
            >
                <MobileTag label="debugging" bg="#B6E87A" color="black" rotate={-2} />
                <MobileTag label="ios development" bg="#F472B6" color="white" rotate={3} />
            </motion.div>

            {/* Layer 2 (Middle) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="flex gap-[8px] z-20"
            >
                <MobileTag label="website management" bg="#8B5CF6" color="white" rotate={2} />
                <MobileTag label="brand management" bg="#FACC15" color="black" rotate={-1} />
            </motion.div>

            {/* Layer 3 (Base) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                className="flex flex-wrap justify-center gap-[8px] z-10"
            >
                <MobileTag label="web development" bg="#3B82F6" color="white" rotate={-2} />
                <MobileTag label="app development" bg="#FB923C" color="white" rotate={1} />
                <MobileTag label="e-commerce website dev" bg="#ffffff" color="#111827" rotate={0} />
            </motion.div>
        </motion.div>
    );
}

function MobileTag({ label, bg, color, rotate }: { label: string, bg: string, color: string, rotate: number }) {
    return (
        <div
            className="rounded-full px-[14px] py-[8px] text-[11px] font-bold leading-none shadow-sm flex items-center justify-center border border-black/5"
            style={{
                backgroundColor: bg,
                color: color,
                transform: `rotate(${rotate}deg)`,
                height: '36px'
            }}
        >
            {label}
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex flex-col md:flex-row justify-center md:items-center pt-32 pb-16 md:pb-20 overflow-hidden bg-[#FEFCF8] selection:bg-[#B6E87A] selection:text-gray-900">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[#B6E87A]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 relative z-10">

                {/* LEFT COLUMN - Text Content */}
                <div className="space-y-8 md:space-y-10 order-1 flex flex-col justify-center">
                    <div className="space-y-4 md:space-y-6 text-center md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[13vw] sm:text-6xl md:text-6xl lg:text-[4.5rem] font-black leading-[0.9] md:leading-[1.1] tracking-tighter text-gray-900"
                        >
                            Digital Experiences <br className="hidden md:block" />
                            <span className="relative inline-block mt-1 md:mt-0">
                                Engineered
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 sm:h-4 md:h-6 bg-[#B6E87A]/40 -z-10 origin-left rounded-full"
                                />
                            </span><br />
                            for Growth
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg md:text-2xl text-gray-600 max-w-xl leading-relaxed font-medium mx-auto md:mx-0"
                        >
                            From websites and mobile apps to SEO and brand systems — Oréva helps modern businesses launch, scale, and dominate online.
                        </motion.p>
                    </div>

                    {/* Mobile Tag Cake Centerpiece (Hidden on Desktop) */}
                    <div className="md:hidden w-full flex justify-center pb-2 relative z-30">
                        <MobileTagCake />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 justify-center md:justify-start w-full relative z-20"
                    >
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto rounded-full px-6 py-7 md:px-10 md:py-8 text-base md:text-lg font-bold shadow-xl shadow-[#B6E87A]/20 bg-[#B6E87A] hover:bg-[#a5d66f] text-black transition-all duration-300 hover:scale-[1.03] md:hover:scale-105 hover:shadow-2xl hover:shadow-[#B6E87A]/40 group flex flex-row items-center justify-center">
                                <span>Let's Build Something Powerful</span>
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>

                        <div className="flex flex-row items-center gap-4">
                            <div className="flex flex-row -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-[#FEFCF8] bg-gray-200 overflow-hidden relative shadow-md"
                                    >
                                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Student" className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="text-sm font-medium text-gray-500 leading-snug text-left">
                                <span className="block font-black text-gray-900 text-base md:text-lg">100+ happy</span>
                                clients
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN - The "Tree" Stack (Desktop Only) */}
                <div className="order-2 relative w-full hidden md:flex items-center justify-end min-h-[600px] max-w-lg lg:max-w-none mx-auto lg:mr-0 z-10">
                    <div className="relative w-full h-[600px] max-w-lg flex items-center justify-center transform-gpu mx-auto lg:mr-0">
                        {/* Cherry on Top */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-50">
                            <CherryIcon className="w-32 h-32 drop-shadow-2xl" />
                        </div>

                        {/* Row 1 */}
                        <CustomTag label="debugging" color="#B6E87A" className="top-16 left-[15%] -rotate-6 z-10" delay={0.1} />
                        <CustomTag label="ios development" color="#F472B6" textColor="white" className="top-20 right-[15%] rotate-6 z-10" delay={0.2} />

                        {/* Row 2 */}
                        <CustomTag label="website management" color="#8B5CF6" textColor="white" className="top-32 left-[25%] -rotate-3 z-20" delay={0.3} yOffset={-8} />

                        {/* Row 3 */}
                        <CustomTag label="Figma to website" color="#3B82F6" textColor="white" className="top-[180px] left-[5%] -rotate-12 z-10" delay={0.4} />
                        <CustomTag label="brand management" color="#FACC15" className="top-[190px] right-[12%] -rotate-3 z-10" delay={0.5} yOffset={-6} />

                        {/* Row 4 */}
                        <CustomTag label="design implementation" color="#B6E87A" className="top-[250px] left-[8%] rotate-2 z-20" delay={0.6} />
                        <CustomTag label="SEO management" color="#FB923C" textColor="white" className="top-[280px] right-[5%] rotate-6 z-10" delay={0.7} yOffset={-7} />

                        {/* Row 5 */}
                        <CustomTag label="e-commerce website development" color="#F472B6" textColor="white" className="top-[340px] left-[10%] -rotate-2 z-30" delay={0.8} />

                        {/* Row 6 */}
                        <CustomTag label="web development" color="#8B5CF6" textColor="white" className="top-[410px] left-[0%] -rotate-3 z-20" delay={0.9} />
                        <CustomTag label="app development" color="#3B82F6" textColor="white" className="top-[420px] right-[5%] rotate-3 z-10" delay={1.0} yOffset={-8} />

                        {/* Bottom Large Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.1, type: "spring", bounce: 0.4 }}
                            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[120%] flex justify-center z-40"
                        >
                            <Link href="/services/full-stack-developer">
                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                    className="bg-[#B6E87A] text-gray-900 px-12 py-6 rounded-full text-3xl font-black shadow-2xl shadow-[#B6E87A]/40 whitespace-nowrap border-4 border-white backdrop-blur-md hover:scale-105 transition-transform cursor-pointer"
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
            transition={{ duration: 0.7, delay: delay, type: "spring", bounce: 0.5 }}
            className={cn("absolute", className)}
        >
            <Link href={`/services/${slug}`}>
                <motion.div
                    animate={{ y: [0, yOffset, 0] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: delay }}
                    className="px-8 py-4 rounded-full shadow-lg hover:shadow-2xl text-xl font-bold whitespace-nowrap border-2 border-white backdrop-blur-md cursor-pointer transition-all hover:scale-105"
                    style={{ backgroundColor: color, color: textColor }}
                >
                    {label}
                </motion.div>
            </Link>
        </motion.div>
    );
}
