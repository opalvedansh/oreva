"use client";

import { useState } from 'react';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from "@/lib/utils";

const projects = [
    {
        id: "01",
        slug: 'eraya-wellness',
        title: "Eraya Wellness",
        category: "Web Development",
        image: "/eraya-wellness.png", // Updated to the new PNG file
        link: "https://erayawellness.com", // External Link
        tags: ["Wellness", "Travel", "Booking"]
    },
    {
        id: "02",
        slug: 'doree-clothing',
        title: "Doree Clothing",
        category: "E-Commerce",
        video: "/videos/doree-clothing-animation.mp4",
        link: "https://doreeclothing.com", // Adjust if needed
        tags: ["E-Commerce", "Fashion", "Shopify"]
    },
    {
        id: "03",
        slug: 'furnimart',
        title: "Furnimart",
        category: "E-Commerce",
        image: "/images/projects/furnimart.png",
        tags: ["E-Commerce", "Furniture"]
    },
    {
        id: "04",
        slug: 'marcella',
        title: "Marcella",
        category: "Fashion",
        image: "/images/projects/marcella.png",
        tags: ["E-Commerce", "Fashion"]
    },
];

const categories = ["All", "Web Development", "App Design", "Branding"];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <main className="min-h-screen bg-[#FEFCF8] selection:bg-[#B6E87A] selection:text-gray-900">
            <Navbar />

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#B6E87A]/15 rounded-full blur-[120px] pointer-events-none z-0" />

            <section className="pt-40 md:pt-56 pb-24 px-6 w-full max-w-[100vw] overflow-hidden relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Hero Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-16 md:mb-24"
                    >
                        <h1 className="text-[14vw] md:text-[11vw] font-black leading-[0.85] tracking-tight text-gray-900 uppercase">
                            Selected <br className="hidden md:block" />
                            Work.
                        </h1>
                    </motion.div>

                    <div className="border-t-4 border-gray-900 pt-12 pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-2xl md:text-3xl lg:text-5xl font-black text-gray-900 leading-tight max-w-2xl"
                        >
                            A showcase of platforms engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6E87A] to-green-500">impact</span>.
                        </motion.h2>

                        {/* Minimalist Filter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-3 w-full md:w-auto"
                        >
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={cn(
                                        "px-6 py-3 rounded-full text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 border-2",
                                        filter === cat
                                            ? "bg-gray-900 text-white border-gray-900 shadow-md transform scale-105"
                                            : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-900 hover:text-gray-900"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Editorial Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 mt-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className={cn(
                                        "group block",
                                        index % 2 !== 0 ? "md:mt-32" : "" // Staggered layout for masonry feel
                                    )}
                                >
                                    <Link
                                        href={project.link || `/portfolio/${project.slug}`}
                                        target={project.link ? "_blank" : undefined}
                                        rel={project.link ? "noopener noreferrer" : undefined}
                                    >
                                        <div className="relative overflow-hidden mb-8 border-4 border-gray-900 rounded-3xl bg-white shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] group-hover:-translate-y-2 group-hover:shadow-[16px_16px_0px_0px_rgba(17,24,39,1)] group-hover:border-[#B6E87A] transition-all duration-500 z-10 group-hover:z-20">
                                            <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden relative">
                                                {/* Image / Video Media */}
                                                {(project as any).video ? (
                                                    <video
                                                        src={(project as any).video}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-500" />

                                                {/* Hover Action Button */}
                                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 scale-90 group-hover:scale-100">
                                                    <div className="w-16 h-16 bg-[#B6E87A] border-4 border-gray-900 rounded-full flex items-center justify-center text-gray-900 shadow-lg">
                                                        <ArrowUpRight className="w-8 h-8" strokeWidth={2.5} />
                                                    </div>
                                                </div>

                                                {/* Number / ID */}
                                                <div className="absolute bottom-6 left-6 mix-blend-difference text-white opacity-50 font-black text-4xl pointer-events-none">
                                                    {project.id}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 group-hover:text-[#AADD44] transition-colors duration-300 tracking-tight leading-none uppercase">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <span className="text-sm font-black px-4 py-2 border-2 border-gray-200 rounded-full text-gray-500 uppercase tracking-widest bg-white">
                                                    {project.category}
                                                </span>
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>
            </section>
            <Footer />
        </main>
    );
}
