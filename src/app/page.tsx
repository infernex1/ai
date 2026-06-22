import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MarqueeTicker from "@/components/marquee-ticker";
import About from "@/components/about";
import Services from "@/components/services";
import Industries from "@/components/industries";
import Process from "@/components/process";
import Trust from "@/components/trust";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

const FloatingChat = dynamic(() => import("@/components/floating-chat"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <About />
      <Services />
      <Industries />
      <Process />
      <Trust />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
      <FloatingChat />
    </main>
  );
}
