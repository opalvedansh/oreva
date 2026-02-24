import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";


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
