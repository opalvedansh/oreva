"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Portfolio() {
    const projects = [
        {
            title: "Eraya Wellness",
            category: "Web Development",
            widthClass: "col-span-12",
            image: "/eraya-wellness.webp",
            bgClass: "bg-black",
            description: "Discover wellness in the Himalayas. A complete destination platform for spiritual mapping and retreat bookings.",
            link: "https://erayawellness.com",
        },
        {
            title: "Doree Clothing",
            category: "E-Commerce",
            widthClass: "col-span-12 md:col-span-7",
            image: "/doree-clothing-v2.png",
            link: "https://doreeclothing.com", // Adjust if needed
            bgClass: "bg-[#1A0B12]", // Dark burgundy
            description: "A premium headless e-commerce experience for a fast-growing fashion brand."
        },
        {
            title: "Zep wash",
            category: "Service",
            widthClass: "col-span-12 md:col-span-5",
            image: "/images/projects/zep-wash.png",
            bgClass: "bg-[#0B0F1A]", // Deep indigo
            description: "Premium vehicle wash and detailing service."
        },
        {
            title: "Marcella",
            category: "Fashion",
            widthClass: "col-span-12",
            image: "/images/projects/marcella.png",
            bgClass: "bg-[#111111]", // Near black
            description: "High-end fashion brand e-commerce experience."
        },
    ];

    return (
        <section className="bg-[#F5F4EE] pt-12 pb-32">

            {/* SVG Noise Filter Definition */}
            <svg className="hidden">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                </filter>
            </svg>

            <div className="max-w-[100vw] px-6 md:px-12 w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 flex flex-col items-start"
                >
                    <span className="text-black/40 font-medium tracking-widest uppercase text-xs block mb-6">
                        Selected Work
                    </span>
                    <h2 className="text-5xl md:text-7xl font-normal tracking-tight text-[#0D0D0D]">
                        <span className="font-serif italic text-black/30 mr-4">Featured</span>Projects
                    </h2>
                </motion.div>

                {/* Broken Grid Layout */}
                <div className="grid grid-cols-12 gap-6 md:gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={cn(
                                "group relative overflow-hidden flex flex-col p-8 md:p-12 min-h-[500px] md:min-h-[600px] cursor-pointer",
                                project.widthClass,
                                project.bgClass
                            )}
                        >
                            {/* Clickable Overlay for Link */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-30"
                                    aria-label={`Visit ${project.title}`}
                                />
                            )}

                            {/* Background Image (If present) */}
                            {project.image && (
                                <>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 z-0"
                                    />
                                    {/* Dark overlay for text readability */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500 z-0"></div>
                                </>
                            )}

                            {/* SVG Noise Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-10" style={{ filter: "url(#noiseFilter)" }}></div>

                            {/* Content */}
                            <div className="relative z-20 mt-auto flex flex-col justify-end h-full pointer-events-none">

                                {/* Animated Category Pill */}
                                <div className="mb-4 transform transition-all duration-700 ease-[0.16,1,0.3,1] translate-y-4 group-hover:-translate-y-2 opacity-80 group-hover:opacity-100">
                                    <span className="inline-block px-4 py-2 bg-[#AADD44] text-[#0D0D0D] text-xs font-bold uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Animated Title & Description Container */}
                                <div className="relative pt-2">
                                    <div className="transform transition-all duration-700 ease-[0.16,1,0.3,1] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Default state title (visible when not hovered, pushed up on hover) */}
                                    <h3 className="absolute top-2 left-0 w-full text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none transform transition-all duration-700 ease-[0.16,1,0.3,1] translate-y-0 opacity-100 group-hover:-translate-y-8 group-hover:opacity-0 pointer-events-none">
                                        {project.title}
                                    </h3>
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
                    className="mt-16 md:mt-24"
                >
                    <a href="/portfolio" className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-[#0D0D0D] w-fit">
                        <span className="relative">
                            View All Work
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#AADD44] transition-all duration-500 ease-out group-hover:w-full"></span>
                        </span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
