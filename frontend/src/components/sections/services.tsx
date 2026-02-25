"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Services() {
    const services = [
        { id: "01", slug: "digital-platforms", name: "Digital Platforms (Web & App Development)", desc: "End-to-end web and mobile application development using modern frameworks." },
        { id: "02", slug: "experience-interface-design", name: "Experience & Interface Design (UI/UX)", desc: "Research-driven design that transforms ideas into intuitive, beautiful interfaces." },
        { id: "03", slug: "growth-visibility-engineering", name: "Growth & Visibility Engineering", desc: "Data-driven strategies to amplify your digital presence and drive organic growth." },
        { id: "04", slug: "ai-visibility-optimization", name: "AI Visibility Optimization (AIVO)", desc: "Future-proof your brand for the AI era with optimized visibility across AI search." },
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#F5F4EE] py-32 text-[#0D0D0D] border-b border-black/10">
            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-black/40 font-medium tracking-widest uppercase text-xs block mb-6">
                            Capabilities
                        </span>
                        <h2 className="text-5xl md:text-7xl font-normal tracking-tight">
                            What we do.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-md text-black/50 text-lg md:text-xl font-light"
                    >
                        We combine strategic thinking with engineering excellence to build digital products that leave a lasting impression.
                    </motion.div>
                </div>

                <div className="border-t border-black/10">
                    {services.map((service, i) => {
                        const isHovered = hoveredIndex === i;

                        return (
                            <Link href={`/services/${service.slug}`} key={service.id} className="block w-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-black/10 cursor-pointer transition-colors duration-500"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 w-full md:w-1/2">
                                        <span className={cn(
                                            "font-serif italic text-xl transition-colors duration-500 ease-out",
                                            isHovered ? "text-[#AADD44]" : "text-black/30"
                                        )}>
                                            {service.id}
                                        </span>
                                        <h3 className={cn(
                                            "text-4xl md:text-5xl lg:text-6xl font-light tracking-tight transition-all duration-500 ease-out",
                                            isHovered ? "text-[#0D0D0D] translate-x-4" : "text-black/40"
                                        )}>
                                            {service.name}
                                        </h3>
                                    </div>

                                    <div className="mt-8 md:mt-0 flex flex-row items-center justify-between w-full md:w-1/2 md:pl-12">
                                        <p className={cn(
                                            "text-sm md:text-base transition-colors duration-500 max-w-sm font-light leading-relaxed",
                                            isHovered ? "text-black/70" : "text-black/40"
                                        )}>
                                            {service.desc}
                                        </p>

                                        <div
                                            className={cn(
                                                "transition-all duration-500 ease-out transform",
                                                isHovered ? "text-[#000000] bg-[#AADD44] translate-x-0 scale-100" : "text-black/20 bg-transparent -translate-x-4 scale-90",
                                                "p-3 rounded-full flex items-center justify-center shrink-0"
                                            )}
                                        >
                                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
