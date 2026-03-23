"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
}

export function LazyVideo({ src, className, ...props }: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [shouldPlay, setShouldPlay] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldPlay(true);
                } else {
                    setShouldPlay(false);
                }
            },
            { rootMargin: "200px" } // Start loading slightly before it enters the viewport
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, []);

    useEffect(() => {
        if (!videoRef.current) return;
        if (shouldPlay) {
            videoRef.current.play().catch((e) => console.log("Video auto-play prevented:", e));
        } else {
            videoRef.current.pause();
        }
    }, [shouldPlay]);

    return (
        <video
            ref={videoRef}
            src={shouldPlay ? src : ""} // Only set src when it should play/buffer
            preload="none"
            className={cn(className)}
            muted
            loop
            playsInline
            {...props}
        />
    );
}
