"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { use } from "react";

const servicesData = {
    "web-development": {
        title: "Web Development",
        description: "High-performance websites and web applications built with modern frameworks. We prioritize speed, accessibility, and flawless execution for ambitious brands.",
        color: "#B6E87A",
        features: ["Custom React & Next.js Builds", "Headless CMS Integration", "Performance Optimization", "Advanced Animations"],
        overview: "In today's digital landscape, your website is your most valuable asset. We engineer blazing-fast, highly interactive web experiences that captivate users and drive measurable results. Our approach combines cutting-edge technology with meticulous attention to detail."
    },
    "app-development": {
        title: "App Development",
        description: "Cross-platform mobile applications that offer native-like performance and exceptional user experiences.",
        color: "#F472B6",
        features: ["React Native & Flutter", "Cross-Platform Consistency", "Robust API Integrations", "Offline Capabilities"],
        overview: "We build mobile applications that live flawlessly in your users' pockets. By utilizing modern cross-platform frameworks, we deliver seamless, high-performance apps that feel truly native on both iOS and Android, minimizing development time without compromising quality."
    },
    "ios-development": {
        title: "iOS Development",
        description: "Custom, native iOS applications designed specifically for the Apple ecosystem to guarantee premium performance.",
        color: "#3B82F6",
        features: ["Swift & Objective-C", "Strict Human Interface Guidelines", "Native Device Feature Access", "App Store Optimization"],
        overview: "Our iOS development team crafts exclusive, premium applications tailored specifically for Apple's ecosystem. We strictly adhere to Apple's design principles to ensure your application not only functions flawlessly but provides the intuitive, elegant experience iOS users demand."
    },
    "seo-management": {
        title: "SEO Management",
        description: "Data-driven strategies to increase your visibility and drive organic traffic. We focus on sustainable, long-term engineering for search engines.",
        color: "#FACC15",
        features: ["Technical SEO Audits", "Keyword Architecture", "Core Web Vitals Optimization", "Content Strategy"],
        overview: "Visibility is everything. Our technical SEO management goes beyond basic keywords; we engineer your digital presence to dominate search rankings. Through rigorous technical audits and strategic content structuring, we build sustainable, organic growth engines."
    },
    "figma-to-website": {
        title: "Figma to Website",
        description: "Pixel-perfect translation from Figma design files to fully functional, responsive, and animated websites.",
        color: "#A855F7",
        features: ["Pixel-Perfect Accuracy", "Complex Micro-interactions", "Responsive Breakpoint Management", "Clean, Semantic Code"],
        overview: "Great design deserves flawless execution. We bridge the gap between Figma and the browser with absolute precision. Every animation, layout, and shadow is translated into clean, maintainable code, ensuring the final product matches the original vision down to the last pixel."
    },
    "brand-management": {
        title: "Brand Management",
        description: "Comprehensive brand systems that communicate your core values and establish a visual language that speaks volumes.",
        color: "#EF4444",
        features: ["Visual Identity Systems", "Brand Guidelines", "Tone & Voice Strategy", "Market Positioning"],
        overview: "A brand is more than a logo; it's a feeling. We develop comprehensive brand architectures that communicate your core values with clarity and impact. From typography and color theory to strategic positioning, we build brands that command attention and foster loyalty."
    },
    "design-implementation": {
        title: "Design Implementation",
        description: "Bridging the gap between design and engineering to ensure that every visual detail is accurately brought to life.",
        color: "#10B981",
        features: ["Design System creation", "Component Libraries", "Storybook Integration", "UI/UX Audits"],
        overview: "We turn static designs into dynamic, living systems. Our design implementation services focus on creating scalable, reusable component libraries that ensure visual consistency across your entire product ecosystem, bridging the gap between design and engineering teams."
    },
    "e-commerce-website-development": {
        title: "E-Commerce Website Development",
        description: "Scalable, secure, and highly optimized online storefronts designed to maximize conversion rates and revenue.",
        color: "#F97316",
        features: ["Headless Shopify Solutions", "Custom Cart Experiences", "Payment Gateway Integrations", "Conversion Rate Optimization"],
        overview: "We build digital storefronts that sell. By deeply understanding user behavior and purchasing psychology, we architect scalable e-commerce platforms that are highly optimized for conversions, blazing fast, and integrated seamlessly with your operational backend."
    },
    "debugging": {
        title: "Debugging",
        description: "Advanced code auditing, troubleshooting, and bug fixing to ensure the reliability and stability of your applications.",
        color: "#6366F1",
        features: ["Performance Profiling", "Memory Leak Resolution", "Security Vulnerability Patching", "Legacy Code Refactoring"],
        overview: "When systems fail, we step in. Our advanced debugging services provide deep, surgical troubleshooting of complex codebases. We identify logical flaws, resolve performance bottlenecks, and stabilize critical infrastructure to ensure your applications run without interruption."
    },
    "website-management": {
        title: "Website Management",
        description: "Continuous monitoring, updates, and optimization services to keep your digital assets secure, fast, and relevant.",
        color: "#14B8A6",
        features: ["24/7 Uptime Monitoring", "Security Patching", "Content Updates", "Performance Audits"],
        overview: "Your digital presence requires constant vigilance. We offer comprehensive website management that acts as your dedicated digital operations team. From proactive security patching to continuous performance optimization, we ensure your platform remains pristine and powerful."
    },
    "full-stack-developer": {
        title: "Full Stack Developer",
        description: "End-to-end development combining robust backend architectures with dynamic, interactive frontend interfaces.",
        color: "#EC4899",
        features: ["Scalable Backend Architectures", "Custom Database Design", "Third-Party API Integrations", "Real-Time Systems"],
        overview: "We provide end-to-end engineering excellence. Our full-stack development approach ensures perfect harmony between your database architecture, server logic, and user interface. We build comprehensive, robust systems designed to scale from day one."
    }
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    // Type assertion to ensure we only access valid keys
    const service = servicesData[slug as keyof typeof servicesData];

    if (!service) {
        return (
            <main className="min-h-screen bg-[#FEFCF8] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-gray-500 hover:text-gray-900 transition-colors">
                        ← Back to Services
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#FEFCF8] selection:bg-[#B6E87A] selection:text-gray-900">
            <Navbar />

            {/* Ambient Background Glow matched to service color */}
            <div
                className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] pointer-events-none opacity-20"
                style={{ backgroundColor: service.color }}
            />

            <section className="pt-40 md:pt-56 pb-24 px-6 w-full max-w-[100vw] overflow-hidden relative z-10">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <Link href="/services" className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors duration-300">
                            ← Back to Services
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-16 md:mb-24"
                    >
                        <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.85] tracking-tight text-gray-900 uppercase mb-8">
                            {service.title}.
                        </h1>
                        <p className="text-2xl md:text-4xl font-medium text-gray-500 max-w-4xl leading-snug">
                            {service.description}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 border-t-2 border-gray-100 pt-16 md:pt-24">

                        {/* Main Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-8 space-y-8"
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">The Approach</h2>
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                                {service.overview}
                            </p>
                        </motion.div>

                        {/* Deliverables / Details Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-4 lg:pl-12"
                        >
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-8">What's Included</h3>
                                <ul className="space-y-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" style={{ color: service.color !== "#FEFCF8" ? service.color : "#0D0D0D" }} />
                                            <span className="text-lg font-medium text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-32 pt-24 border-t-2 border-gray-100 text-center flex flex-col items-center"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8">Ready to start?</h2>
                        <p className="text-xl text-gray-500 font-medium max-w-2xl mb-12">
                            Elevate your brand with our premium {service.title.toLowerCase()} services. Let's discuss how we can engineer growth for your business.
                        </p>
                        <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-5 bg-gray-900 text-white overflow-hidden rounded-full font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105 active:scale-95">
                            <span className="absolute inset-0 bg-[#B6E87A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                            <span className="relative z-10 flex items-center gap-3 group-hover:text-gray-900 transition-colors duration-500">
                                Start a Project <ArrowRight className="w-5 h-5" />
                            </span>
                        </Link>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
