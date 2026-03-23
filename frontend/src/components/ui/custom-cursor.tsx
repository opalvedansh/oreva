"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Only activate custom cursor on devices that have a fine pointer (mouse/trackpad)
        const mediaQuery = window.matchMedia("(pointer: fine)");
        setIsDesktop(mediaQuery.matches);

        const handlePointerChange = (e: MediaQueryListEvent) => {
            setIsDesktop(e.matches);
        };

        mediaQuery.addEventListener("change", handlePointerChange);

        if (mediaQuery.matches) {
            document.body.style.cursor = "none";
        }

        return () => {
            mediaQuery.removeEventListener("change", handlePointerChange);
            document.body.style.cursor = "";
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.getAttribute("role") === "button" ||
                target.classList.contains("cursor-pointer")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isDesktop]);

    // Don't render on touch/mobile devices
    if (!isDesktop) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#AADD44] pointer-events-none z-[9999] mix-blend-difference"
            animate={{
                x: mousePosition.x - 8,
                y: mousePosition.y - 8,
                scale: isHovering ? 2.5 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 700,
                damping: 40,
                mass: 0.1
            }}
        />
    );
}
