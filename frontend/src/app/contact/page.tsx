"use client";

import { useState, useEffect } from 'react';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { services } from "@/lib/data/services";

const servicesList = [
    ...services.map(s => s.name),
    "Other"
];

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Mouse position state for parallax glows
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Parallax transformations for background orbs (opposite directions for depth)
    const orb1X = useTransform(smoothX, [-1000, 1000], [50, -50]);
    const orb1Y = useTransform(smoothY, [-1000, 1000], [50, -50]);

    const orb2X = useTransform(smoothX, [-1000, 1000], [-30, 30]);
    const orb2Y = useTransform(smoothY, [-1000, 1000], [-30, 30]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.message || 'Something went wrong');

            setSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-[#FEFCF8] selection:bg-[#B6E87A] selection:text-gray-900 relative overflow-hidden">
            <Navbar />

            {/* Interactive Ambient Background Glows */}
            <motion.div
                style={{ x: orb1X, y: orb1Y }}
                className="absolute top-[0%] right-[0%] w-[60vw] h-[60vw] bg-[#B6E87A]/15 rounded-full blur-[120px] pointer-events-none z-0"
            />
            <motion.div
                style={{ x: orb2X, y: orb2Y }}
                className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#9DD43B]/10 rounded-full blur-[100px] pointer-events-none z-0"
            />

            <section className="pt-40 md:pt-56 pb-32 px-6 w-full max-w-[100vw] relative z-10">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* Header & Copy Left Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col relative"
                        >
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 block">
                                Inquiries & Collaboration
                            </span>

                            {/* Staggered Heading Text */}
                            <h1 className="text-[14vw] lg:text-[7vw] font-black leading-[0.85] tracking-tight text-gray-900 uppercase mb-8 flex flex-col">
                                <motion.span
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="block relative overflow-hidden pb-2"
                                >
                                    Let's
                                </motion.span>
                                <motion.span
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="block relative overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600"
                                >
                                    Talk.
                                </motion.span>
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="text-xl md:text-2xl text-gray-500 font-medium max-w-md leading-relaxed mb-12"
                            >
                                Ready to build something extraordinary? Drop us a line and let's discuss how we can engineer absolute growth for your business.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="space-y-6 pt-12 border-t-2 border-gray-100 mt-auto"
                            >
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Direct Email</h4>
                                    <a href="mailto:oreva3685@gmail.com" className="group inline-flex items-center text-xl font-bold text-gray-900 transition-colors">
                                        <span className="relative overflow-hidden">
                                            <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1]">oreva3685@gmail.com</span>
                                            <span className="absolute top-0 left-0 text-[#B6E87A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">oreva3685@gmail.com</span>
                                        </span>
                                        <ArrowRight className="w-5 h-5 ml-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#B6E87A]" />
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Direct Phone</h4>
                                    <div className="flex flex-col gap-2">
                                        <a href="tel:+917761865075" className="group inline-flex items-center text-xl font-bold text-gray-900 transition-colors w-fit">
                                            <span className="relative overflow-hidden">
                                                <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1]">+91 77618 65075</span>
                                                <span className="absolute top-0 left-0 text-[#B6E87A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">+91 77618 65075</span>
                                            </span>
                                            <ArrowRight className="w-5 h-5 ml-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#B6E87A]" />
                                        </a>
                                        <a href="tel:+917570033209" className="group inline-flex items-center text-xl font-bold text-gray-900 transition-colors w-fit">
                                            <span className="relative overflow-hidden">
                                                <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1]">+91 75700 33209</span>
                                                <span className="absolute top-0 left-0 text-[#B6E87A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">+91 75700 33209</span>
                                            </span>
                                            <ArrowRight className="w-5 h-5 ml-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#B6E87A]" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Response Time</h4>
                                    <p className="text-xl font-bold text-gray-900">Within 24 Hours</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Form Right Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full bg-white p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] shadow-xl shadow-black/5 border border-gray-100 relative group overflow-hidden"
                        >
                            {/* Interactive Form Glow */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#B6E87A]/0 via-transparent to-[#B6E87A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                            {success ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20 flex flex-col items-center relative z-10"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                        className="w-24 h-24 bg-[#B6E87A]/20 rounded-full flex items-center justify-center mb-8"
                                    >
                                        <CheckCircle2 className="w-12 h-12 text-[#9DD43B]" />
                                    </motion.div>
                                    <h3 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Message Received.</h3>
                                    <p className="text-xl text-gray-500 font-medium max-w-sm mb-12">
                                        Thank you for reaching out. Our team is reviewing your inquiry and will be in touch shortly.
                                    </p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="group inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors"
                                    >
                                        Send another message <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8 flex flex-col relative z-10">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <motion.div whileHover={{ y: -2 }} className="space-y-3 cursor-text">
                                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                                            <motion.input
                                                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #111111" }}
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent outline-none transition-all duration-300 font-medium text-gray-900 placeholder:text-gray-300 shadow-inner"
                                                placeholder="John Doe"
                                            />
                                        </motion.div>
                                        <motion.div whileHover={{ y: -2 }} className="space-y-3 cursor-text">
                                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                                            <motion.input
                                                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #111111" }}
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent outline-none transition-all duration-300 font-medium text-gray-900 placeholder:text-gray-300 shadow-inner"
                                                placeholder="john@company.com"
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div whileHover={{ y: -2 }} className="space-y-3 cursor-pointer">
                                        <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 cursor-pointer">Primary Interest</label>
                                        <div className="relative">
                                            <motion.select
                                                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #111111" }}
                                                id="service"
                                                name="service"
                                                className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent outline-none transition-all duration-300 font-medium text-gray-900 appearance-none cursor-pointer shadow-inner"
                                            >
                                                {servicesList.map((svc) => (
                                                    <option key={svc} value={svc}>{svc}</option>
                                                ))}
                                            </motion.select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div whileHover={{ y: -2 }} className="space-y-3 cursor-text">
                                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Project Details</label>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #111111" }}
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent outline-none transition-all duration-300 font-medium text-gray-900 placeholder:text-gray-300 resize-none shadow-inner"
                                            placeholder="Tell us about your goals, timeline, and vision..."
                                        ></motion.textarea>
                                    </motion.div>

                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 rounded-xl bg-red-50 text-red-600 font-medium text-sm flex items-center"
                                        >
                                            <svg className="w-5 h-5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            {error}
                                        </motion.div>
                                    )}

                                    <div className="pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={loading}
                                            className="group relative w-full inline-flex items-center justify-center px-8 py-5 bg-gray-900 text-white overflow-hidden rounded-2xl font-bold uppercase tracking-widest text-sm transition-shadow hover:shadow-2xl hover:shadow-[#B6E87A]/20 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <span className="absolute inset-0 bg-[#B6E87A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                                            <span className="relative z-10 flex items-center gap-3 group-hover:text-gray-900 transition-colors duration-500">
                                                {loading ? (
                                                    <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                                                ) : (
                                                    <><span className="relative overflow-hidden block">
                                                        <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1]">Submit Inquiry</span>
                                                        <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">Submit Inquiry</span>
                                                    </span>
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /></>
                                                )}
                                            </span>
                                        </motion.button>
                                    </div>

                                </form>
                            )}
                        </motion.div>

                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
