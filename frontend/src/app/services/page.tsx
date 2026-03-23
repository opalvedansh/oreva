"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data/services";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#FEFCF8] selection:bg-[#B6E87A] selection:text-gray-900">
            <Navbar />

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B6E87A]/10 rounded-full blur-[100px] pointer-events-none" />

            <section className="pt-40 md:pt-56 pb-24 px-6 w-full max-w-[100vw] overflow-hidden relative z-10">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-20"
                    >
                        <h1 className="text-[14vw] md:text-[11vw] font-black leading-[0.85] tracking-tight text-gray-900 uppercase">
                            Our <br className="hidden md:block" />
                            Services.
                        </h1>
                    </motion.div>

                    <div className="border-t-4 border-gray-900 pt-12 pb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight max-w-2xl"
                        >
                            We build digital experiences engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6E87A] to-green-500">massive growth</span>.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg text-gray-600 font-medium max-w-sm"
                        >
                            From complex web architectures to stunning brand identities, we deliver absolute excellence.
                        </motion.p>
                    </div>

                    {/* Bold Services Grid */}
                    <div className="grid border-t-4 border-gray-900">
                        {services.map((service, i) => (
                            <Link href={`/services/${service.slug}`} key={service.id} className="block group border-b-4 border-gray-900 overflow-hidden relative">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {/* Hover background expansion */}
                                    <div className="absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />

                                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 md:p-12 gap-8">

                                        {/* Left: Number and Title */}
                                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 w-full lg:w-1/2">
                                            <span className="text-4xl md:text-5xl font-black text-gray-300 group-hover:text-gray-600 transition-colors duration-500">
                                                {service.id}
                                            </span>
                                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 group-hover:text-white transition-colors duration-500">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Right: Description, Tags, and Arrow */}
                                        <div className="flex flex-col w-full lg:w-1/2 lg:pl-12">
                                            <p className="text-xl md:text-2xl text-gray-600 font-medium group-hover:text-gray-300 transition-colors duration-500 mb-8 leading-relaxed">
                                                {service.description}
                                            </p>

                                            <div className="flex flex-wrap items-center justify-between gap-6">
                                                <div className="flex flex-wrap gap-3">
                                                    {service.tags.map((tag, tagIdx) => (
                                                        <span
                                                            key={tag}
                                                            className="px-5 py-2 rounded-full border-2 border-gray-900 group-hover:border-transparent text-sm font-bold text-gray-900 uppercase tracking-widest transition-colors duration-500"
                                                            style={{
                                                                // Subtle hover color mapping based on service.color
                                                                backgroundColor: "transparent"
                                                            }}
                                                        >
                                                            <span className="group-hover:hidden">{tag}</span>
                                                            <span className="hidden group-hover:inline-block" style={{ color: service.color }}>{tag}</span>
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="w-16 h-16 rounded-full bg-gray-900 group-hover:bg-[#B6E87A] flex items-center justify-center shrink-0 transition-colors duration-500 group-hover:scale-110">
                                                    <ArrowRight className="w-8 h-8 text-white group-hover:text-gray-900 transition-colors duration-500" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
