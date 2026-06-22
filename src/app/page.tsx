import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MarqueeTicker from "@/components/marquee-ticker";

// Dynamically import below-the-fold sections to optimize initial page load speed
const About = dynamic(() => import("@/components/about"), { ssr: false });
const Services = dynamic(() => import("@/components/services"), { ssr: false });
const Industries = dynamic(() => import("@/components/industries"), { ssr: false });
const Process = dynamic(() => import("@/components/process"), { ssr: false });
const Trust = dynamic(() => import("@/components/trust"), { ssr: false });
const Pricing = dynamic(() => import("@/components/pricing"), { ssr: false });
const Contact = dynamic(() => import("@/components/contact"), { ssr: false });
const FAQ = dynamic(() => import("@/components/faq"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
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
