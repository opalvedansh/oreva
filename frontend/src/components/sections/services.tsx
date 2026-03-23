"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { services } from "@/lib/data/services";

export function Services() {
    return (
        <section className="bg-[#F5F4EE] py-24 md:py-32 text-[#0D0D0D] border-b border-black/10 relative transition-colors duration-1000">
            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-black/40 font-medium tracking-widest uppercase text-xs block mb-4 md:mb-6">
                            Capabilities
                        </span>
                        <h2 className="text-4xl md:text-7xl font-normal tracking-tight">
                            What we do.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-md text-black/50 text-base md:text-xl font-light leading-relaxed"
                    >
                        We combine strategic thinking with engineering excellence to build digital products that leave a lasting impression.
                    </motion.div>
                </div>

                {/* UNIFIED VIEW - Sticky Cards for Desktop & Mobile */}
                <div className="w-full pb-12 md:pb-24">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            className="sticky w-full max-w-5xl mx-auto mb-4 md:mb-8"
                            style={{
                                top: `calc(10vh + ${i * 20}px)`,
                                zIndex: i * 10
                            }}
                        >
                            <Link href={`/services/${service.slug}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className={cn(
                                        "w-full rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[400px] md:min-h-[500px] shadow-2xl relative overflow-hidden group",
                                        service.bgCard
                                    )}
                                >
                                    {/* Glass reflection effect */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-white/20"></div>
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Top Area */}
                                    <div className="flex justify-between items-start z-10">
                                        <span className={cn(
                                            "font-serif italic text-2xl md:text-3xl font-light",
                                            service.textColor === "text-white" ? "text-white/40" : service.textColor
                                        )}>
                                            {service.id}
                                        </span>
                                        <div className={cn(
                                            "flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all",
                                            service.textColor
                                        )}>
                                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    {/* Bottom Area */}
                                    <div className="mt-auto space-y-4 md:space-y-6 z-10 pt-16 md:pt-24 w-full md:w-3/4">
                                        <h3 className={cn(
                                            "text-4xl md:text-6xl font-light tracking-tight leading-[1.1]",
                                            service.textColor
                                        )}>
                                            {service.name}
                                        </h3>
                                        <p className={cn(
                                            "text-sm md:text-lg font-light leading-relaxed opacity-70",
                                            service.textColor
                                        )}>
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Ambient Glows */}
                                    <div className="absolute -bottom-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
                                </motion.div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
