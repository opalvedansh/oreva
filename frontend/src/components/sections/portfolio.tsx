"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Portfolio() {
    const projects = [
        {
            title: "Eraya Wellness",
            category: "Web Development",
            widthClass: "col-span-12",
            image: "/eraya-wellness.webp",
            bgClass: "bg-black",
            description: "Discover wellness in the Himalayas. A destination platform for spiritual mapping.",
            link: "https://erayawellness.com",
        },
        {
            title: "Doree Clothing",
            category: "E-Commerce",
            widthClass: "col-span-12 md:col-span-7",
            video: "/videos/doree-clothing-animation.mp4",
            link: "https://doreeclothing.com",
            bgClass: "bg-[#1A0B12]",
            description: "Headless e-commerce experience for a fast-growing fashion brand."
        },
        {
            title: "Furnimart",
            category: "E-Commerce",
            widthClass: "col-span-12 md:col-span-5",
            image: "/images/projects/furnimart.png",
            bgClass: "bg-[#0B0F1A]",
            description: "Modern e-commerce platform for premium furniture."
        },
        {
            title: "Marcella",
            category: "Fashion",
            widthClass: "col-span-12",
            image: "/images/projects/marcella.png",
            bgClass: "bg-[#111111]",
            description: "High-end fashion brand e-commerce experience."
        },
    ];

    return (
        <section className="bg-[#F5F4EE] pt-12 pb-24 md:pb-32">

            {/* SVG Noise Filter */}
            <svg className="hidden">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                </filter>
            </svg>

            <div className="max-w-[100vw] px-4 md:px-12 w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-24 flex flex-col items-start px-2 md:px-0"
                >
                    <span className="text-black/40 font-medium tracking-widest uppercase text-[10px] md:text-xs block mb-4 md:mb-6">
                        Selected Work
                    </span>
                    <h2 className="text-4xl md:text-7xl font-normal tracking-tight text-[#0D0D0D]">
                        <span className="font-serif italic text-black/30 mr-2 md:mr-4 block md:inline">Featured</span>Projects
                    </h2>
                </motion.div>

                {/* Broken Grid Layout */}
                <div className="grid grid-cols-12 gap-4 md:gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={cn(
                                "group relative overflow-hidden flex flex-col min-h-[450px] md:min-h-[600px] cursor-pointer rounded-3xl md:rounded-[2rem]",
                                project.widthClass,
                                project.bgClass
                            )}
                        >
                            {/* Clickable Overlay */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-30"
                                    aria-label={`Visit ${project.title}`}
                                />
                            )}

                            {/* Background Media */}
                            {project.video ? (
                                <>
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 z-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-500 z-0"></div>
                                </>
                            ) : project.image && (
                                <>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105 z-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-500 z-0"></div>
                                </>
                            )}

                            {/* SVG Noise Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-10" style={{ filter: "url(#noiseFilter)" }}></div>

                            {/* Unified Header (Always visible at top of card) */}
                            <div className="relative z-20 flex justify-between items-start p-6 md:p-10 w-full transition-transform duration-700 ease-out group-hover:-translate-y-1">
                                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                                    <ArrowRight className="w-4 h-4 md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </div>


                            {/* Content Block (Bottom) */}
                            <div className="relative z-20 mt-auto flex flex-col justify-end h-full pointer-events-none p-6 md:p-10 transition-transform duration-700 ease-out group-hover:translate-y-[-10px]">

                                {/* Title & Description */}
                                <div className="relative pt-2">
                                    {/* Default State (Always visible, stacked) */}
                                    <div className="flex flex-col gap-2 md:gap-4">
                                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm md:text-lg lg:text-xl font-medium leading-relaxed max-w-[90%] md:max-w-2xl">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-12 md:mt-24 px-2 md:px-0"
                >
                    <a href="/portfolio" className="group flex items-center justify-between md:justify-start gap-4 text-xs md:text-sm font-bold tracking-widest uppercase text-[#0D0D0D] w-full md:w-fit py-4 border-b border-black/10 md:border-none">
                        <span className="relative">
                            View All Work
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#AADD44] transition-all duration-500 ease-out group-hover:w-full hidden md:block"></span>
                        </span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-500 md:group-hover:translate-x-2" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
