"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { use } from "react";

/* ─── Types ────────────────────────────────────────────────── */
interface ContentBlock {
    heading: string;
    intro?: string;
    bullets: string[];
    outcome?: string;
}

interface ServiceData {
    id: string;
    title: string;
    subtitle: string;
    heroStatement: string;
    heroSub: string;
    color: string;
    problemIntro?: string;
    problems?: string[];
    problemClosing?: string;
    sections: ContentBlock[];
    processTitle?: string;
    process?: string[];
    deliverables?: string[];
    whoTitle: string;
    whoList: string[];
    whoClosing: string;
    bottomLine: string;
    bottomLineSub?: string;
}

/* ─── Service Data ─────────────────────────────────────────── */
const servicesData: Record<string, ServiceData> = {

    /* ── SERVICE 01 ── */
    "digital-platforms": {
        id: "01",
        title: "Digital Platforms",
        subtitle: "Web & App Development",
        heroStatement: "We Build Digital Platforms That Are Engineered to Perform.",
        heroSub: "Websites and applications built for speed, scale, and measurable business outcomes.",
        color: "#B6E87A",
        sections: [
            {
                heading: "Custom Websites",
                intro: "We build business-focused websites that:",
                bullets: [
                    "Load under 2 seconds",
                    "Are fully responsive across devices",
                    "Follow structured SEO architecture",
                    "Are optimized for conversions",
                    "Integrate with CRM, analytics, and marketing tools"
                ],
                outcome: "Types: Corporate Websites · Startup Landing Pages · High-Conversion Marketing Sites · E-commerce Platforms. This is not template work. Everything is structured from scratch."
            },
            {
                heading: "Web Applications",
                intro: "For businesses that need functionality beyond a website. We build:",
                bullets: [
                    "Dashboards & Admin Panels",
                    "SaaS Platforms",
                    "Booking Systems & Internal Tools",
                    "Custom Portals",
                    "Authentication & role-based access control",
                    "API integrations & payment systems",
                    "Cloud deployment"
                ],
                outcome: "If it requires logic and backend systems — this is where we operate."
            },
            {
                heading: "Mobile Applications (iOS & Android)",
                intro: "We develop cross-platform or native applications built for:",
                bullets: [
                    "Performance & clean UX",
                    "App Store compliance",
                    "Backend integration & scalable infrastructure",
                    "UI integration & API connectivity",
                    "Push notifications",
                    "Deployment to App Store & Play Store"
                ],
                outcome: "Not experimental builds. Production-ready systems."
            },
            {
                heading: "Backend & Infrastructure",
                intro: "This is where most agencies are weak. We are not. We design:",
                bullets: [
                    "Scalable database structures",
                    "API architecture",
                    "Cloud hosting setup",
                    "Server optimization",
                    "Security configuration",
                    "CI/CD pipelines"
                ],
                outcome: "If your platform grows, the system holds."
            },
            {
                heading: "Performance Engineering",
                intro: "We optimize:",
                bullets: [
                    "Core Web Vitals",
                    "Load time & code efficiency",
                    "Image & asset compression",
                    "Caching systems",
                    "Server response time"
                ],
                outcome: "Because a slow platform kills conversions."
            }
        ],
        processTitle: "How We Work",
        process: [
            "Requirement Mapping",
            "Architecture Planning",
            "UX Structure Approval",
            "Development Sprint Execution",
            "Testing & Optimization",
            "Deployment & Monitoring"
        ],
        whoTitle: "Who This Is For",
        whoList: [
            "Startups building their first scalable product",
            "Businesses outgrowing their current website",
            "Founders launching SaaS products",
            "Companies needing custom digital infrastructure"
        ],
        whoClosing: "If your current system cannot handle growth — we rebuild it properly.",
        bottomLine: "No chaos. Structured delivery."
    },

    /* ── SERVICE 02 ── */
    "experience-interface-design": {
        id: "02",
        title: "Experience & Interface Design",
        subtitle: "UI/UX Design",
        heroStatement: "We Design Interfaces That Make Users Take Action.",
        heroSub: "Not just good-looking screens. Structured experiences built to guide users toward conversion.",
        color: "#F472B6",
        problemIntro: "Most products fail because:",
        problems: [
            "Users don't understand where to click",
            "Interfaces feel confusing",
            "Too many steps exist",
            "Flow breaks mid-journey",
            "Layout doesn't match user behavior"
        ],
        problemClosing: "Design isn't decoration. Design is decision architecture.",
        sections: [
            {
                heading: "UX Structure Planning",
                intro: "Before design, we map logic. We define:",
                bullets: [
                    "User journey paths",
                    "Screen hierarchy",
                    "Navigation logic",
                    "Interaction flow",
                    "Drop-off points"
                ],
                outcome: "Users move smoothly without thinking."
            },
            {
                heading: "Wireframes (Blueprint of Product)",
                intro: "We create layout structures before visuals. This shows:",
                bullets: [
                    "Page layout",
                    "Component placement",
                    "Feature logic",
                    "Content positioning"
                ],
                outcome: "No redesign later."
            },
            {
                heading: "UI Design (Final Interface)",
                intro: "We design production-ready screens. Includes:",
                bullets: [
                    "Typography system",
                    "Color system",
                    "Spacing rules",
                    "Component styles",
                    "Interaction states"
                ],
                outcome: "Developers build faster with zero guesswork."
            },
            {
                heading: "Conversion-Focused Design",
                intro: "We structure layouts specifically to:",
                bullets: [
                    "Increase signups",
                    "Improve engagement",
                    "Reduce bounce rate",
                    "Increase checkout completion",
                    "Guide user decisions"
                ],
                outcome: "Every button, section, and layout has a purpose."
            },
            {
                heading: "Design Systems (For Scaling Products)",
                intro: "For growing platforms, we create reusable UI systems. Includes:",
                bullets: [
                    "Component library",
                    "UI rules",
                    "Layout patterns",
                    "Design tokens",
                    "Interaction standards"
                ],
                outcome: "Future features stay consistent."
            }
        ],
        deliverables: [
            "Figma design files",
            "UI component library",
            "Developer handoff specs",
            "Responsive layouts",
            "Interaction notes"
        ],
        whoTitle: "Who This Is For",
        whoList: [
            "Startups launching new products",
            "Companies redesigning old platforms",
            "SaaS founders",
            "Businesses with low conversions",
            "Apps with poor usability"
        ],
        whoClosing: "If users feel confused using your product — you need this.",
        bottomLine: "Good design looks nice.",
        bottomLineSub: "Structured design performs."
    },

    /* ── SERVICE 03 ── */
    "growth-visibility-engineering": {
        id: "03",
        title: "Growth & Visibility Engineering",
        subtitle: "Growth Engineering",
        heroStatement: "We Build Systems That Bring You Customers.",
        heroSub: "Traffic without structure is waste. We engineer digital growth systems designed to attract, convert, and scale.",
        color: "#3B82F6",
        problemIntro: "Most businesses don't have a traffic problem. They have a system problem. Common issues we fix:",
        problems: [
            "Visitors don't convert",
            "Traffic drops suddenly",
            "Ads don't perform",
            "SEO doesn't rank",
            "Leads don't turn into customers"
        ],
        problemClosing: "Growth is not luck. It's infrastructure.",
        sections: [
            {
                heading: "Technical SEO Foundation",
                intro: "We fix what prevents you from ranking. Includes:",
                bullets: [
                    "Site structure optimization",
                    "Indexing fixes",
                    "Crawl path correction",
                    "Metadata architecture",
                    "Schema implementation",
                    "Page speed optimization"
                ],
                outcome: "Search engines rank structured systems. Not pretty pages."
            },
            {
                heading: "Conversion Optimization",
                intro: "We improve how many visitors turn into leads or customers. We analyze:",
                bullets: [
                    "Click behavior",
                    "Scroll depth",
                    "User flow",
                    "Friction points",
                    "CTA placement"
                ],
                outcome: "More results without more traffic."
            },
            {
                heading: "Analytics & Tracking Setup",
                intro: "If data isn't tracked, growth is guesswork. We implement:",
                bullets: [
                    "Event tracking",
                    "Funnel tracking",
                    "Conversion tracking",
                    "Behavioral analytics",
                    "Heatmaps"
                ],
                outcome: "You'll know exactly what works and what doesn't."
            },
            {
                heading: "Funnel Architecture",
                intro: "We design structured acquisition systems. Includes:",
                bullets: [
                    "Landing page logic",
                    "Lead capture flow",
                    "Follow-up path",
                    "Conversion steps"
                ],
                outcome: "Visitors don't wander. They move forward."
            },
            {
                heading: "Growth Strategy Blueprint",
                intro: "We map how your platform should grow. This includes:",
                bullets: [
                    "Acquisition channels",
                    "Content structure",
                    "Platform expansion",
                    "SEO roadmap",
                    "Conversion plan"
                ],
                outcome: "Not ideas. A documented execution plan."
            }
        ],
        deliverables: [
            "Growth audit document",
            "Optimization roadmap",
            "Analytics dashboard setup",
            "Conversion recommendations",
            "Tracking infrastructure"
        ],
        whoTitle: "Who This Is For",
        whoList: [
            "Businesses getting traffic but no leads",
            "Startups preparing for launch",
            "Companies scaling marketing",
            "Founders investing in ads",
            "Brands stuck at growth plateaus"
        ],
        whoClosing: "If growth feels random, this fixes it.",
        bottomLine: "We don't run campaigns.",
        bottomLineSub: "We build growth infrastructure."
    },

    /* ── SERVICE 04 ── */
    "ai-visibility-optimization": {
        id: "04",
        title: "AI Visibility Optimization",
        subtitle: "AIVO",
        heroStatement: "Be Recommended by AI When Customers Ask.",
        heroSub: "We position your brand so platforms like ChatGPT, Gemini, and Perplexity mention, cite, and recommend you when users search for solutions.",
        color: "#FACC15",
        problemIntro: "Search is changing. People no longer just Google things. They ask AI. AI chooses which brands to mention. Problems businesses don't realize they have yet:",
        problems: [
            "Your brand never appears in AI answers",
            "Competitors get recommended instead",
            "AI doesn't understand what your company does",
            "Your authority signals are weak",
            "Your content isn't structured for AI parsing"
        ],
        problemClosing: "This is not SEO. This is AI discoverability engineering.",
        sections: [
            {
                heading: "AI Entity Optimization",
                intro: "We structure your digital presence so AI models clearly understand:",
                bullets: [
                    "Who you are",
                    "What you do",
                    "Who you serve",
                    "What you specialize in"
                ],
                outcome: "This is how AI decides whether to recommend you."
            },
            {
                heading: "Structured Authority Signals",
                intro: "We strengthen signals that AI systems trust:",
                bullets: [
                    "Structured data",
                    "Citations",
                    "Brand consistency",
                    "Authoritative mentions",
                    "Semantic clarity"
                ],
                outcome: "AI platforms rely on structured authority, not marketing claims."
            },
            {
                heading: "AI-Readable Content Architecture",
                intro: "We restructure your content so AI can interpret it correctly. Includes:",
                bullets: [
                    "Semantic formatting",
                    "Topical hierarchy",
                    "Contextual linking",
                    "Entity reinforcement",
                    "Factual clarity"
                ],
                outcome: "If AI cannot interpret your content, it cannot recommend you."
            },
            {
                heading: "Recommendation Probability Optimization",
                intro: "We increase the likelihood that AI selects your brand. We optimize:",
                bullets: [
                    "Positioning language",
                    "Service clarity",
                    "Niche signals",
                    "Expertise indicators",
                    "Credibility markers"
                ],
                outcome: "Your brand becomes a logical answer."
            },
            {
                heading: "AI Monitoring & Visibility Tracking",
                intro: "We track how AI platforms reference your brand. You'll know:",
                bullets: [
                    "When AI mentions you",
                    "How often",
                    "In what context",
                    "Against which competitors"
                ],
                outcome: "No guessing. Only measurable visibility."
            }
        ],
        deliverables: [
            "AI visibility audit",
            "Optimization roadmap",
            "Structured content framework",
            "Authority signal checklist",
            "Recommendation improvement strategy"
        ],
        whoTitle: "Who This Is For",
        whoList: [
            "Founders who want early advantage",
            "Brands competing in crowded markets",
            "Companies relying on online discovery",
            "Agencies selling digital services",
            "Startups building authority"
        ],
        whoClosing: "If customers use AI to find solutions in your industry, you need this.",
        bottomLine: "If AI can't understand your brand, it can't recommend it."
    }
};

/* ─── Fade-in animation variants ───────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    })
};

/* ─── Component ────────────────────────────────────────────── */
export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;
    const service = servicesData[slug];

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

            {/* Ambient glow */}
            <div
                className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] pointer-events-none opacity-15"
                style={{ backgroundColor: service.color }}
            />

            <section className="pt-40 md:pt-56 pb-24 px-6 w-full max-w-[100vw] overflow-hidden relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* ── Back link ── */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
                        <Link href="/services" className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors duration-300">
                            ← Back to Services
                        </Link>
                    </motion.div>

                    {/* ── Hero ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-6"
                    >
                        <span className="text-sm font-bold tracking-widest uppercase mb-4 block" style={{ color: service.color }}>
                            Service {service.id} — {service.subtitle}
                        </span>
                        <h1 className="text-[11vw] md:text-[7vw] font-black leading-[0.88] tracking-tight text-gray-900 uppercase mb-8">
                            {service.title}.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-24 border-t-4 border-gray-900 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                            {service.heroStatement}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed self-end">
                            {service.heroSub}
                        </p>
                    </motion.div>

                    {/* ── Problem Block (if exists) ── */}
                    {service.problems && (
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                            className="mb-24 bg-[#1A1A1A] text-white p-10 md:p-16 rounded-[2rem] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-20" style={{ backgroundColor: service.color }} />
                            <motion.p variants={fadeUp} custom={0} className="text-lg md:text-xl text-gray-400 font-medium mb-8 max-w-2xl">
                                {service.problemIntro}
                            </motion.p>
                            <ul className="space-y-4 mb-8">
                                {service.problems.map((p, i) => (
                                    <motion.li key={i} variants={fadeUp} custom={i + 1} className="flex items-start gap-4">
                                        <span className="w-2 h-2 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: service.color }} />
                                        <span className="text-lg md:text-xl text-gray-200 font-medium">{p}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.p variants={fadeUp} custom={service.problems.length + 1} className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: service.color }}>
                                {service.problemClosing}
                            </motion.p>
                        </motion.div>
                    )}

                    {/* ── Main Sections ── */}
                    <div className="space-y-0 border-t-2 border-gray-200">
                        {service.sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                                className="border-b-2 border-gray-200 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12"
                            >
                                {/* Left — heading + number */}
                                <div className="lg:col-span-5 flex flex-col">
                                    <motion.span variants={fadeUp} custom={0} className="text-7xl md:text-8xl font-black leading-none mb-4" style={{ color: service.color, opacity: 0.25 }}>
                                        {String(i + 1).padStart(2, "0")}
                                    </motion.span>
                                    <motion.h3 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                                        {section.heading}
                                    </motion.h3>
                                    {section.intro && (
                                        <motion.p variants={fadeUp} custom={2} className="text-lg text-gray-500 font-medium mt-6 leading-relaxed">
                                            {section.intro}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Right — bullets + outcome */}
                                <div className="lg:col-span-7 lg:pl-8">
                                    <ul className="space-y-5 mb-8">
                                        {section.bullets.map((bullet, bi) => (
                                            <motion.li key={bi} variants={fadeUp} custom={bi + 2} className="flex items-start gap-4">
                                                <CheckCircle2 className="w-5 h-5 shrink-0 mt-1" style={{ color: service.color }} />
                                                <span className="text-lg md:text-xl text-gray-700 font-medium">{bullet}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    {section.outcome && (
                                        <motion.div variants={fadeUp} custom={section.bullets.length + 3} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                                            <p className="text-lg font-bold text-gray-900">{section.outcome}</p>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* ── Process (if exists) ── */}
                    {service.process && (
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                            className="my-24"
                        >
                            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-16">
                                {service.processTitle}
                            </motion.h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {service.process.map((step, i) => (
                                    <motion.div key={i} variants={fadeUp} custom={i + 1} className="bg-white border-2 border-gray-100 rounded-2xl p-8 flex items-start gap-6 hover:border-gray-900 transition-colors duration-300">
                                        <span className="text-3xl font-black shrink-0" style={{ color: service.color }}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-xl font-bold text-gray-900">{step}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* ── Deliverables (if exists) ── */}
                    {service.deliverables && (
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                            className="my-24 bg-white border-2 border-gray-100 rounded-[2rem] p-10 md:p-16"
                        >
                            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
                                Deliverables Clients Receive
                            </motion.h2>
                            <motion.p variants={fadeUp} custom={1} className="text-lg text-gray-500 font-medium mb-10">
                                No vague files. Only usable assets.
                            </motion.p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.deliverables.map((d, i) => (
                                    <motion.div key={i} variants={fadeUp} custom={i + 2} className="flex items-center gap-4 py-4 border-b border-gray-100">
                                        <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: service.color }} />
                                        <span className="text-lg font-bold text-gray-900">{d}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* ── Who This Is For ── */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                        className="my-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                    >
                        <div>
                            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
                                {service.whoTitle}
                            </motion.h2>
                            <motion.p variants={fadeUp} custom={1} className="text-xl text-gray-500 font-medium">
                                {service.whoClosing}
                            </motion.p>
                        </div>
                        <ul className="space-y-5">
                            {service.whoList.map((item, i) => (
                                <motion.li key={i} variants={fadeUp} custom={i + 2} className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-900 transition-colors duration-300">
                                    <ArrowRight className="w-5 h-5 shrink-0 mt-1" style={{ color: service.color }} />
                                    <span className="text-lg font-bold text-gray-800">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ── Bottom Positioning Line ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="my-24 bg-[#1A1A1A] rounded-[2rem] p-12 md:p-20 text-center"
                    >
                        <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                            {service.bottomLine}
                        </p>
                        {service.bottomLineSub && (
                            <p className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mt-2" style={{ color: service.color }}>
                                {service.bottomLineSub}
                            </p>
                        )}
                    </motion.div>

                    {/* ── CTA ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="pt-24 border-t-2 border-gray-100 text-center flex flex-col items-center"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8">Ready to start?</h2>
                        <p className="text-xl text-gray-500 font-medium max-w-2xl mb-12">
                            Elevate your brand with our premium {service.title.toLowerCase()} services. Let&apos;s discuss how we can engineer growth for your business.
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
