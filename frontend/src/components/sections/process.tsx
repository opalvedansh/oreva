"use client";

import { motion } from "framer-motion";

export function Process() {
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
        <section className="bg-white py-32 text-[#0D0D0D] border-t border-black/10" id="process">
            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative">

                    {/* Left Sticky Column */}
                    <div className="lg:col-span-4 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-32"
                        >
                            <span className="text-black/40 font-medium tracking-widest uppercase text-xs block mb-6">
                                How We Work
                            </span>
                            <h2 className="text-5xl md:text-7xl font-normal tracking-tight">
                                The Process.
                            </h2>
                            <p className="mt-8 text-black/50 text-lg font-light max-w-sm">
                                A refined execution strategy designed to create bulletproof digital experiences from concept to scale.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Scrolling Column */}
                    <div className="lg:col-span-8 flex flex-col lg:pl-16">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="group relative flex flex-col md:flex-row items-start gap-8 md:gap-16 py-16 lg:py-24 first:pt-0"
                            >
                                {/* Animated Top Border */}
                                {i !== 0 && (
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                        className="absolute top-0 left-0 h-px bg-black/10 transition-colors duration-500 group-hover:bg-[#AADD44]"
                                    />
                                )}

                                <div className="text-5xl md:text-7xl font-serif italic text-black/20 group-hover:text-[#AADD44] transition-colors duration-500 shrink-0">
                                    {step.num}
                                </div>

                                <div className="flex flex-col gap-4 mt-2">
                                    <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#0D0D0D] group-hover:translate-x-2 transition-transform duration-500">
                                        {step.title}
                                    </h3>
                                    <span className="text-black/40 italic font-serif text-lg md:text-xl block">
                                        {step.subline}
                                    </span>
                                    <p className="text-black/60 text-base md:text-lg max-w-md font-light leading-relaxed mt-2">
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
