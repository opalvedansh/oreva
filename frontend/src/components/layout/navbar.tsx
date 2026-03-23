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

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileMenuOpen]);

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
                    <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1">
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
                            className={cn(
                                "md:hidden p-3 rounded-full transition-colors z-50 relative",
                                mobileMenuOpen ? "bg-white/10 text-white hover:bg-white/20" : "hover:bg-gray-100 text-black"
                            )}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-8"
                    >
                        <div className="flex flex-col gap-8">
                            <nav aria-label="Mobile Navigation" className="contents">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 40, rotateX: -20 }}
                                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-5xl font-black tracking-tighter text-white hover:text-[#B6E87A] transition-colors inline-block"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}.
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-16 w-full"
                        >
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full h-16 text-xl rounded-full bg-[#B6E87A] text-black hover:bg-white transition-colors duration-500 font-bold shadow-[0_0_40px_rgba(182,232,122,0.2)]">
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
