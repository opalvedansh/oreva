"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Components ---

function ProcessSection() {
    const steps = [
        { number: "01", title: "Discovery", description: "Market research, user interviews, and strategic planning." },
        { number: "02", title: "Design", description: "Wireframing, prototyping, and high-fidelity UI/UX design." },
        { number: "03", title: "Build", description: "Clean code, responsive development, and rigorous testing." },
        { number: "04", title: "Launch", description: "Deployment, optimization, and post-launch support." },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <Tag label="Our Process" className="mb-6" />
                    <h2 className="text-4xl md:text-5xl font-black">How We Work.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="text-6xl font-black text-gray-100 mb-6 group-hover:text-[#B6E87A]/20 transition duration-500">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {step.description}
                            </p>
                            {i !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 right-0 w-full h-[1px] bg-gray-100 -mr-4 z-[-1]" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialsSection() {
    return (
        <section className="py-24 bg-[#F3F1EB] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <Tag label="Testimonials" className="mb-6" />
                    <h2 className="text-4xl md:text-5xl font-black">Client Love.</h2>
                </div>
                <div className="hidden md:flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full">←</Button>
                    <Button variant="outline" size="icon" className="rounded-full">→</Button>
                </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 px-6 no-scrollbar -mx-6 md:mx-auto max-w-7xl">
                {[
                    { name: "Sarah Jenkins", role: "CEO, TechFlow", quote: "Oréva transformed our digital presence. The attention to detail is unmatched." },
                    { name: "David Chen", role: "Founder, GreenSpace", quote: "Professional, creative, and incredibly talented. They understood our vision perfectly." },
                    { name: "Elena Rodriguez", role: "Marketing Director, LuxStay", quote: "The ROI we've seen since launching the new site has been incredible. Highly recommend." },
                ].map((t, i) => (
                    <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                        <div className="flex gap-1 mb-6 text-[#B6E87A]">
                            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" stroke="none" size={16} />)}
                        </div>
                        <p className="text-lg font-medium leading-relaxed mb-6">"{t.quote}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full" />
                            <div>
                                <div className="font-bold text-sm">{t.name}</div>
                                <div className="text-xs text-gray-500">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function FinalCTA() {
    return (
        <section className="py-32 bg-black text-white text-center px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                    Ready to build something <span className="text-[#B6E87A]">extraordinary?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    We take on a limited number of clients each year to ensure maximum attention to detail.
                </p>
                <Link href="/contact">
                    <Button className="h-16 px-10 rounded-full text-lg bg-[#B6E87A] text-black hover:bg-white hover:scale-105">
                        Start a Project <ArrowRight className="ml-2" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}

// --- Combined Sections Export if needed, but for now I'll just export them ---
export { ProcessSection, TestimonialsSection, FinalCTA };
