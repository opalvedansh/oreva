import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#F5F4EE] flex flex-col items-center justify-center text-center px-6 selection:bg-[#AADD44] selection:text-[#0D0D0D]">
            <span className="text-black/40 font-medium tracking-widest uppercase text-xs block mb-6">
                Error 404
            </span>
            <h1 className="text-[15vw] sm:text-9xl font-black leading-none tracking-tighter text-gray-900 mb-8">
                Lost<span className="text-[#B6E87A]">.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 max-w-xl leading-relaxed font-medium mb-12">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link href="/">
                    <Button size="lg" className="rounded-full px-8 py-6 text-base font-bold shadow-xl bg-[#0D0D0D] hover:bg-gray-800 text-white transition-all duration-300 hover:scale-[1.03]">
                        Back to Home
                    </Button>
                </Link>
                <Link href="/contact" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#0D0D0D] border-b border-black/20 pb-1 hover:border-black transition-colors">
                    Contact Us
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </main>
    );
}
