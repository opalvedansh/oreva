import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services — Oréva Digital Agency",
    description: "From custom web & app development to UI/UX design, SEO engineering, and AI visibility optimization — explore every service Oréva offers to help your business grow.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
