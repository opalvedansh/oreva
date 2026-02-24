"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Work', href: '/portfolio' },
        { name: 'About', href: '/about' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none",
                    scrolled ? "pt-4" : "pt-6"
                )}
            >
                <div
                    className={cn(
                        "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out backdrop-blur-xl border border-white/20 shadow-sm",
                        scrolled
                            ? "w-[90%] md:w-[600px] rounded-full bg-white/80 py-3 px-6 shadow-lg"
                            : "w-full max-w-7xl bg-transparent py-4 px-6 border-transparent shadow-none"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition flex items-center gap-1 z-50">
                        Oréva<span className="text-[#B6E87A]">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition group overflow-hidden rounded-full hover:bg-gray-100/50"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-2">
                        <Link href="/contact" className="hidden sm:block">
                            <Button size="sm" className={cn("rounded-full font-bold", scrolled ? "h-9" : "h-10")}>
                                Let's Talk
                            </Button>
                        </Link>

                        <button
                            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col items-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-4xl font-black tracking-tight"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 w-full max-w-xs"
                        >
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full h-14 text-lg bg-[#B6E87A] text-black hover:bg-[#a5d66f]">
                                    Start a Project
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
