"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <footer className="bg-[#050505] text-white pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden border-t border-white/5 relative">

            {/* Ambient Base Glow */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#AADD44]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-start justify-between mb-24 md:mb-32 gap-10 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col w-full md:w-auto"
                    >
                        <h2 className="text-[12vw] sm:text-6xl md:text-7xl font-light tracking-tighter leading-[1.1] md:leading-tight mb-6">
                            Let's build<br />
                            something<br className="md:hidden" />
                            <span className="font-serif italic text-white/40 md:ml-4">extraordinary.</span>
                        </h2>
                        <p className="text-white/40 text-base md:text-xl font-light max-w-sm md:max-w-md leading-relaxed">
                            We partner with visionary companies to craft digital experiences that define the future.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-auto mt-4 md:mt-0 lg:mt-8"
                    >
                        <Link href="/contact" className="block w-full">
                            <button className="w-full md:w-auto bg-white text-[#0D0D0D] rounded-full px-8 py-5 md:px-10 md:py-5 flex items-center justify-between md:justify-center text-lg md:text-xl font-bold md:font-medium hover:scale-105 hover:bg-[#AADD44] transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] group">
                                <span>Start a Conversation</span>
                                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-500">→</span>
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-8 md:mb-12"></div>

                {/* Bottom Links Grid (Mobile optimized) */}
                <div className="grid grid-cols-1 md:flex md:flex-row justify-between items-start md:items-center gap-12 md:gap-8">

                    {/* Logo & Copyright */}
                    <div className="flex flex-col gap-2 order-3 md:order-1">
                        <Link href="/" className="text-4xl md:text-3xl font-normal tracking-tight hover:text-white/70 transition-colors inline-block w-fit">
                            Oréva<span className="text-[#AADD44]">.</span>
                        </Link>
                        <span className="text-[10px] md:text-xs text-white/30 font-light tracking-wider uppercase mt-2">
                            © {new Date().getFullYear()} Oréva Agency. Crafted with precision.
                        </span>
                    </div>

                    {/* Nav Links */}
                    <nav className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-x-8 gap-y-4 md:gap-10 text-xs md:text-sm font-bold md:font-light tracking-widest uppercase md:normal-case md:tracking-normal text-white/50 order-1 md:order-2 w-full md:w-auto">
                        {[
                            { name: 'Services', href: '/services' },
                            { name: 'Work', href: '/#work' },
                            { name: 'Process', href: '/#process' },
                        ].map((item) => (
                            <Link key={item.name} href={item.href} className="hover:text-white transition-colors duration-300">
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center gap-6 md:gap-6 text-sm font-light text-white/50 order-2 md:order-3 pt-8 border-t border-white/5 md:border-t-0 md:pt-0 w-full md:w-auto">
                        <a
                            href="https://www.linkedin.com/company/or%C3%A9va/?viewAsMember=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
