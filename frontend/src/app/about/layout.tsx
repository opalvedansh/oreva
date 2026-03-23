import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us — Oréva Digital Agency",
    description: "Learn about Oréva's story — a boutique digital powerhouse combining design excellence and engineering precision to craft digital experiences that define the future.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
