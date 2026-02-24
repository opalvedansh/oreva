"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Custom Minimal SVG Checkmark
function CustomCheck({ className }: { className?: string }) {
    return (
        <svg width="24" height="24" viewBox="0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "$3,500",
            period: "/project",
            desc: "Perfect for early-stage startups needing a solid foundation.",
            features: [
                "Custom 5-page website",
                "Basic Brand Guidelines",
                "Mobile Responsive",
                "SEO Fundamentals",
                "1 Month Post-Launch Support"
            ],
            popular: false
        },
        {
            name: "Growth",
            price: "$9,500",
            period: "/project",
            desc: "Comprehensive solutions for scaling businesses.",
            features: [
                "Custom 10+ page Web App",
                "Full Brand Identity System",
                "Advanced Animations",
                "Technical SEO Strategy",
                "CMS Integration",
                "3 Months Priority Support"
            ],
            popular: true
        },
        {
            name: "Scale",
            price: "$18,000+",
            period: "/month",
            desc: "Ongoing partnership for enterprise-grade platforms.",
            features: [
                "Dedicated Engineering Team",
                "Cross-platform Mobile App",
                "Complex Architecture",
                "Growth & Conversion Audits",
                "Custom Dashboards",
                "24/7 Priority Support"
            ],
            popular: false
        }
    ];

    return (
        <section className="bg-[#F5F4EE] py-32 overflow-hidden border-t border-black/5" id="pricing">
            <div className="max-w-7xl mx-auto px-6 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col items-center text-center"
                >
                    <span className="text-black/40 font-medium tracking-widest uppercase text-xs block mb-6">
                        Transparent Pricing
                    </span>
                    <h2 className="text-5xl md:text-7xl font-normal tracking-tight text-[#0D0D0D]">
                        Scale with <span className="font-serif italic text-black/30">confidence.</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className={cn(
                                "rounded-[2rem] p-10 relative flex flex-col w-full lg:w-1/3 transition-all duration-500",
                                plan.popular
                                    ? "bg-[#0D0D0D] text-white shadow-2xl lg:-mt-4 lg:mb-4 border border-[#1A1A1A]"
                                    : "bg-white text-[#0D0D0D] border border-black/5 hover:border-black/20 hover:shadow-xl"
                            )}
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-10">
                                    <h3 className={cn("text-2xl font-light mb-3", plan.popular ? "text-white" : "text-[#0D0D0D]")}>
                                        {plan.name}
                                    </h3>
                                    <p className={cn("text-sm font-light leading-relaxed h-10", plan.popular ? "text-gray-400" : "text-black/50")}>
                                        {plan.desc}
                                    </p>
                                </div>

                                <div className="mb-10 flex items-baseline gap-2">
                                    <span className={cn("text-5xl font-normal tracking-tight", plan.popular ? "text-white" : "text-[#0D0D0D]")}>
                                        {plan.price}
                                    </span>
                                    <span className={cn("text-xs font-bold tracking-widest uppercase", plan.popular ? "text-[#AADD44]" : "text-black/30")}>
                                        {plan.period}
                                    </span>
                                </div>

                                <ul className="space-y-5 mb-12 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className={cn("mt-1 shrink-0", plan.popular ? "text-[#AADD44]" : "text-black/20")}>
                                                <CustomCheck className="w-5 h-5" />
                                            </div>
                                            <span className={cn("text-sm font-light leading-relaxed", plan.popular ? "text-gray-300" : "text-black/70")}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={cn(
                                        "w-full rounded-full py-6 text-base font-medium transition-all duration-300",
                                        plan.popular
                                            ? "bg-[#AADD44] text-[#0D0D0D] hover:bg-white hover:scale-105"
                                            : "bg-transparent border border-black/10 text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white"
                                    )}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Reassurance Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="font-serif italic text-lg text-black/40">
                        All projects include a 14-day revision window and a dedicated Slack channel.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
