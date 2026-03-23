"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const steps = [
        {
            num: "01",
            title: "Discover",
            subline: "Mapping the terrain.",
            desc: "Uncovering insights, audience needs, and strategic direction to form a bulletproof foundation for growth."
        },
        {
            num: "02",
            title: "Design",
            subline: "Visualizing the future.",
            desc: "Crafting beautiful, intuitive interfaces and design systems that outlive fleeting trends."
        },
        {
            num: "03",
            title: "Develop",
            subline: "Engineering the engine.",
            desc: "Building robust, scalable architectures with modern tech to ensure flawless performance."
        },
        {
            num: "04",
            title: "Launch",
            subline: "Entering the market.",
            desc: "Deploying seamlessly and optimizing for maximum growth, conversion, and market dominance."
        },
    ];

    return (
        <section className="bg-white py-24 md:py-32 text-[#0D0D0D] border-t border-black/10 overflow-hidden" id="process">
            <div className="max-w-7xl mx-auto px-6 w-full" ref={containerRef}>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">

                    {/* Left Sticky Column */}
                    <div className="lg:col-span-4 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="static lg:sticky lg:top-32 mb-12 lg:mb-0"
                        >
                            <span className="text-black/40 font-medium tracking-widest uppercase text-xs block mb-4 md:mb-6">
                                How We Work
                            </span>
                            <h2 className="text-4xl md:text-7xl font-normal tracking-tight">
                                The Process.
                            </h2>
                            <p className="mt-6 md:mt-8 text-black/50 text-base md:text-lg font-light max-w-sm leading-relaxed">
                                A refined execution strategy designed to create bulletproof digital experiences from concept to scale.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Scrolling Column with Timeline for Mobile */}
                    <div className="lg:col-span-8 flex flex-col lg:pl-16 relative">
                        {/* Mobile Vertical Timeline Line */}
                        <div className="absolute left-[15px] top-6 bottom-6 w-px bg-black/5 md:hidden" />

                        {/* Animated progress line for mobile */}
                        <motion.div
                            className="absolute left-[15px] top-6 w-px bg-[#AADD44] origin-top md:hidden z-0"
                            style={{ scaleY: scrollYProgress, bottom: 24 }}
                        />

                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                                className="group relative flex flex-row items-start gap-6 md:gap-16 py-10 md:py-16 lg:py-24 first:pt-4 md:first:pt-0"
                            >
                                {/* Animated Top Border (Desktop only) */}
                                {i !== 0 && (
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                        className="hidden md:block absolute top-0 left-0 h-px bg-black/10 transition-colors duration-500 group-hover:bg-[#AADD44]"
                                    />
                                )}

                                {/* Mobile Timeline Node */}
                                <div className="md:hidden relative z-10 w-8 h-8 rounded-full bg-white border-[3px] border-black/10 flex items-center justify-center shrink-0 mt-3 transition-colors duration-700 group-hover:border-[#AADD44]">
                                    <div className="w-2 h-2 rounded-full bg-black/20 group-hover:bg-[#AADD44] transition-colors duration-700" />
                                </div>

                                {/* Desktop Number (Hidden on mobile) */}
                                <div className="hidden md:block text-5xl md:text-7xl font-serif italic text-black/20 group-hover:text-[#AADD44] transition-colors duration-500 shrink-0">
                                    {step.num}
                                </div>

                                <div className="flex flex-col gap-3 md:gap-4 flex-1">
                                    {/* Mobile Number beside title */}
                                    <h3 className="text-2xl md:text-5xl font-light tracking-tight text-[#0D0D0D] md:group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-4">
                                        <span className="md:hidden font-serif italic text-black/30 text-xl">{step.num}</span>
                                        {step.title}
                                    </h3>
                                    <span className="text-black/50 italic font-serif text-base md:text-xl block">
                                        {step.subline}
                                    </span>
                                    <p className="text-black/60 text-sm md:text-lg max-w-md font-light leading-relaxed mt-1 md:mt-2">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
