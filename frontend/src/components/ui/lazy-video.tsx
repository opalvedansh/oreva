"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps {
    src: string;
    className?: string;
}

export function LazyVideo({ src, className }: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin: "200px" }
        );
        observer.observe(el);
        return () => observer.unobserve(el);
    }, []);

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;

        if (isVisible) {
            // Set src imperatively to avoid React rendering src=""
            if (!el.getAttribute("src")) {
                el.setAttribute("src", src);
                el.load();
            }
            el.play().catch(() => {});
        } else {
            el.pause();
        }
    }, [isVisible, src]);

    // No src prop — we set it imperatively to avoid the empty-string warning
    return (
        <video
            ref={videoRef}
            preload="none"
            muted
            loop
            playsInline
            className={cn(className)}
        />
    );
}
