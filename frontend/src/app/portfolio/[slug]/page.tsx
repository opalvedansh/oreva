import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function ProjectPage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen bg-[#F3F1EB]">
            <Navbar />
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black mb-8 transition">
                    ← Back to Work
                </Link>

                <h1 className="text-5xl md:text-7xl font-black mb-6 capitalize">{params.slug.replace('-', ' ')}</h1>
                <div className="w-full h-[50vh] bg-gray-200 rounded-3xl mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-gray-700">
                        <h2 className="text-2xl font-bold text-black">The Challenge</h2>
                        <p>
                            Every project begins with a unique set of challenges. For this client, the primary goal was to modernize their digital presence while maintaining their established brand heritage.
                        </p>
                        <h2 className="text-2xl font-bold text-black mt-8">The Solution</h2>
                        <p>
                            We approached this by first understanding the core values of the brand. Through iterative design and development, we crafted a solution that is both visually stunning and highly functional.
                        </p>
                    </div>

                    <div className="md:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="font-bold mb-4">Project Details</h3>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex justify-between border-b pb-2">
                                    <span>Client</span>
                                    <span className="font-medium text-black">Confidential</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span>Year</span>
                                    <span className="font-medium text-black">2024</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span>Services</span>
                                    <span className="font-medium text-black">Web Dev, UI/UX</span>
                                </li>
                            </ul>
                        </div>
                        <Button className="w-full">Visit Live Site</Button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
