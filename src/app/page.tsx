import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MarqueeTicker from "@/components/marquee-ticker";
import Footer from "@/components/footer";

// Below-the-fold sections: dynamic import for code-splitting, SSR enabled for SEO
const About = dynamic(() => import("@/components/about"));
const Services = dynamic(() => import("@/components/services"));
const Industries = dynamic(() => import("@/components/industries"));
const Process = dynamic(() => import("@/components/process"));
const Trust = dynamic(() => import("@/components/trust"));
const Pricing = dynamic(() => import("@/components/pricing"));
const FAQ = dynamic(() => import("@/components/faq"));

// Interactive client-only widgets: no SSR needed
const Contact = dynamic(() => import("@/components/contact"), {
  ssr: false,
  loading: () => <div className="min-h-[600px] bg-primary animate-pulse rounded-3xl" />,
});
const FloatingChat = dynamic(() => import("@/components/floating-chat"), {
  ssr: false,
});

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
