"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Phone, Settings, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery Call",
    icon: Phone,
    description: "30-minute call to understand your business, goals, and what needs to be automated.",
  },
  {
    title: "We Build Everything",
    icon: Settings,
    description: "Our team sets up your complete system. Voice AI, integrations, dashboard — everything. You do absolutely nothing.",
  },
  {
    title: "Go Live & Grow",
    icon: Rocket,
    description: "Your AI goes live. Leads start coming in. You focus on your business while we handle the technology.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-10%" });

  useEffect(() => {
    if (!isInView || typeof window === "undefined") return;

    let animFrameId: number;
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress from when top of section enters center of viewport,
      // to when bottom of section reaches center of viewport.
      const start = rect.top - viewportHeight / 2;
      const end = rect.bottom - viewportHeight / 2;
      const total = end - start;

      // Calculate progress between 0 and 1
      let progress = 0;
      if (start < 0) {
        progress = Math.min(Math.max(-start / total, 0), 1);
      }

      // Update the CSS custom property on the section container directly (no React state updates!)
      section.style.setProperty("--scroll-progress", progress.toString());

      animFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animFrameId);
    };
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className={`py-24 bg-secondary relative overflow-hidden ${
        isInView ? "section-in-view" : ""
      }`}
      style={{ "--scroll-progress": "0" } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-accent font-bold tracking-[0.15em] text-sm uppercase block mb-4">THE PROCESS</span>
          <h2 className="font-space-grotesk font-bold text-[clamp(24px,4vw,56px)] leading-tight text-text-primary">
            From Zero to Automated in 48 Hours
          </h2>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* Animated Line (Desktop - Horizontal) */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-1 bg-card-border rounded-full overflow-hidden">
            <div 
              className="absolute top-0 bottom-0 left-0 bg-accent progress-line-horizontal-inner w-full" 
              style={{ transform: "scaleX(var(--scroll-progress, 0))" }}
            />
          </div>

          {/* Animated Line (Mobile - Vertical) */}
          <div className="md:hidden absolute top-10 bottom-10 left-[44px] w-1 bg-card-border rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 right-0 bg-accent progress-line-vertical-inner h-full" 
              style={{ transform: "scaleY(var(--scroll-progress, 0))" }}
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row gap-12 md:gap-6 relative z-10"
          >
            {steps.map((step) => (
              <motion.div 
                key={step.title}
                variants={itemVariants}
                className="flex-1 flex md:flex-col items-start md:items-center gap-6 md:gap-8 group"
              >
                
                {/* Icon Circle */}
                <div className="w-[88px] h-[88px] shrink-0 rounded-full bg-card border-2 border-card-border flex items-center justify-center shadow-lg relative group-hover:border-accent transition-colors duration-300">
                  {/* Pulsing glow based on scroll position */}
                  <div 
                    className="absolute inset-0 rounded-full border border-accent animate-pulse-ring"
                  />
                  <step.icon size={36} strokeWidth={1.5} className="text-accent" />
                </div>

                {/* Text Content */}
                <div className="md:text-center mt-2 md:mt-0">
                  <h3 className="font-space-grotesk font-bold text-xl md:text-2xl text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
