"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-[#F5F4EE] flex flex-col items-center justify-center text-center px-6 selection:bg-[#F43F5E] selection:text-white">
            <span className="text-black/40 font-medium tracking-widest uppercase text-xs block mb-6">
                500 Internal Error
            </span>
            <h1 className="text-[13vw] sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-gray-900 mb-8">
                Something went <span className="text-[#F43F5E] underline decoration-[#F43F5E]/30 underline-offset-8">wrong</span>.
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 max-w-xl leading-relaxed font-medium mb-12">
                We encountered an unexpected error while loading this page.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button
                    onClick={() => reset()}
                    size="lg"
                    className="rounded-full px-8 py-6 text-base font-bold shadow-xl bg-[#0D0D0D] hover:bg-gray-800 text-white transition-all duration-300 hover:scale-[1.03]"
                >
                    Try again
                </Button>
                <Link href="/" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#0D0D0D] border-b border-black/20 pb-1 hover:border-black transition-colors">
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
