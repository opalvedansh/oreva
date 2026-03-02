"use client";

import { motion } from "framer-motion";

export function SocialProof() {
    const stats = [
        { label: "Clients Worldwide", value: "50+" },
        { label: "Years Experience", value: "3+" },
        { label: "Projects Shipped", value: "50+" },
        { label: "Client Retention", value: "98%" },
    ];

    return (
        <section className="bg-[#000000] py-20 border-y border-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 divide-x-0 md:divide-x divide-[#1A1A1A]">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                            className="flex flex-col items-center text-center px-4"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-3 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-gray-500 font-medium tracking-widest text-xs uppercase">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
