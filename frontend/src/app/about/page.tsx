"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data/stats";

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const journeySteps = [
        {
            year: "2018",
            title: "The Spark",
            desc: "It started in a small studio with a shared belief: the web was becoming cluttered. We wanted to build digital spaces that breathed."
        },
        {
            year: "2020",
            title: "Global Reach",
            desc: "As the world shifted online, we partnered with international brands, turning complex operational needs into elegant, frictionless interfaces."
        },
        {
            year: "2022",
            title: "Structural Shift",
            desc: "We expanded from pure design into heavy engineering, building a team capable of architecting enterprise-grade platforms without sacrificing aesthetics."
        },
        {
            year: "Today",
            title: "Refined Execution",
            desc: "Now, as Oréva, we stand as a boutique powerhouse. We don't just build websites; we craft lasting competitive advantages."
        }
    ];

    return (
        <main className="min-h-screen bg-[#FEFCF8] selection:bg-[#B6E87A] selection:text-gray-900">
            <Navbar />

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#B6E87A]/15 rounded-full blur-[120px] pointer-events-none" />

            {/* Hero Section */}
            <section className="pt-40 md:pt-56 pb-24 px-6 w-full max-w-[100vw] overflow-hidden relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-16 md:mb-24"
                    >
                        <h1 className="text-[14vw] md:text-[11vw] font-black leading-[0.85] tracking-tight text-gray-900 uppercase">
                            Digital <br />
                            Craftsmanship.
                        </h1>
                    </motion.div>

                    <div className="border-t-4 border-gray-900 pt-12 pb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-2xl md:text-3xl lg:text-5xl font-black text-gray-900 leading-tight max-w-2xl"
                        >
                            We are driven by a singular emotion: the pursuit of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6E87A] to-green-500">perfection</span> in an imperfect digital world.
                        </motion.h2>
                    </div>
                </div>
            </section>

            {/* The Journey Section */}
            <section className="py-32 bg-gray-900 text-white relative border-y-4 border-gray-900" ref={containerRef}>
                <div className="max-w-7xl mx-auto px-6 w-full">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mb-32"
                    >
                        <span className="text-[#B6E87A] font-bold tracking-widest uppercase text-xs block mb-4">
                            Our Story
                        </span>
                        <h3 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase">
                            The Evolution of Oréva.
                        </h3>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <motion.div
                            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 hidden md:block"
                            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
                        />

                        <div className="space-y-24 md:space-y-48">
                            {journeySteps.map((step, i) => (
                                <div key={i} className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Content side */}
                                    <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24 text-left md:text-right'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div className="text-[#B6E87A] font-black text-2xl mb-4">{step.year}</div>
                                            <h4 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">{step.title}</h4>
                                            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Image/Visual side */}
                                    <div className="w-full md:w-1/2 flex items-center justify-center relative">
                                        {/* Connecting Line (Mobile) */}
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 md:hidden" />

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="w-full aspect-square bg-[#1A1A1A] border-4 border-gray-800 rounded-3xl flex items-center justify-center relative overflow-hidden group hover:border-[#B6E87A] transition-colors duration-500"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#B6E87A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            <span className="text-[15vw] md:text-[8vw] font-black text-gray-800 group-hover:text-white transition-colors duration-500 select-none">
                                                '{step.year.slice(-2)}
                                            </span>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats section */}
            <section className="bg-[#F5F4EE] py-24 sm:py-32">
                <div className="max-w-[100vw] mx-auto px-6 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-black/10 border-y border-black/10 w-full py-16">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col items-center justify-center text-center px-8 md:px-16 lg:px-24 py-12 md:py-0 group"
                            >
                                <div className="text-5xl md:text-6xl lg:text-7xl font-light text-[#0D0D0D] mb-4 tracking-tight group-hover:scale-105 transition-transform duration-500">
                                    {stat.value}
                                </div>
                                <div className="text-[#0D0D0D]/40 font-medium tracking-[0.2em] uppercase text-[10px] md:text-xs">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
