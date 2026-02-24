"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <footer className="bg-[#050505] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-32 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col"
                    >
                        <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                            Let's build something <br className="hidden md:block" />
                            <span className="font-serif italic text-white/40">extraordinary.</span>
                        </h2>
                        <p className="text-white/40 text-lg md:text-xl font-light max-w-md">
                            We partner with visionary companies to craft digital experiences that define the future.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="shrink-0"
                    >
                        <Link href="/contact">
                            <button className="bg-white text-[#0D0D0D] rounded-full px-8 py-4 md:px-10 md:py-5 flex items-center justify-center text-lg font-medium hover:scale-105 hover:bg-[#AADD44] transition-all duration-500 shadow-2xl group">
                                Start a Conversation
                                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-500">→</span>
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-12"></div>

                {/* Bottom Links */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="text-3xl font-normal tracking-tight hover:text-white/70 transition-colors">
                            Oréva<span className="text-[#AADD44]">.</span>
                        </Link>
                        <span className="text-xs text-white/30 font-light">
                            © {new Date().getFullYear()} Oréva Agency. Crafted with precision.
                        </span>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-wrap items-center gap-6 md:gap-10 text-sm font-light text-white/50">
                        {['Services', 'Work', 'Process', 'Pricing'].map((item) => (
                            <Link key={item} href={`/#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center gap-6 text-sm font-light text-white/50">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
