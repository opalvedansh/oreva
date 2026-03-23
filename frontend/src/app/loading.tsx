import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F4EE]">
            <Loader2 className="w-12 h-12 text-[#B6E87A] animate-spin mb-4" />
            <div className="text-sm font-bold tracking-widest uppercase text-[#0D0D0D]/60 animate-pulse">
                Loading...
            </div>
        </div>
    );
}
