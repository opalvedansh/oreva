import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import dynamic from "next/dynamic";

// Lazy load all below-fold sections to reduce initial JS bundle
const SocialProof = dynamic(() => import("@/components/sections/social-proof").then(m => ({ default: m.SocialProof })));
const Services = dynamic(() => import("@/components/sections/services").then(m => ({ default: m.Services })));
const Portfolio = dynamic(() => import("@/components/sections/portfolio").then(m => ({ default: m.Portfolio })));
const Process = dynamic(() => import("@/components/sections/process").then(m => ({ default: m.Process })));
const Footer = dynamic(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F4EE] selection:bg-[#AADD44] selection:text-[#0D0D0D]">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <Portfolio />
      <Process />
      <Footer />
    </main>
  );
}

