"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
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

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="py-24 bg-secondary relative overflow-hidden" ref={containerRef}>
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
            <motion.div 
              className="absolute top-0 bottom-0 left-0 bg-accent origin-left"
              style={{ scaleX, width: "100%" }}
            />
          </div>

          {/* Animated Line (Mobile - Vertical) */}
          <div className="md:hidden absolute top-10 bottom-10 left-[44px] w-1 bg-card-border rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-accent origin-top"
              style={{ scaleY: scaleX, height: "100%" }}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={step.title} className="flex-1 flex md:flex-col items-start md:items-center gap-6 md:gap-8 group">
                
                {/* Icon Circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="w-[88px] h-[88px] shrink-0 rounded-full bg-card border-2 border-card-border flex items-center justify-center shadow-lg relative group-hover:border-accent transition-colors duration-300"
                >
                  {/* Pulsing glow based on scroll position */}
                  <div 
                    className="absolute inset-0 rounded-full border border-accent animate-pulse-ring"
                  />
                  <step.icon size={36} strokeWidth={1.5} className="text-accent" />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                  className="md:text-center mt-2 md:mt-0"
                >
                  <h3 className="font-space-grotesk font-bold text-xl md:text-2xl text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </motion.div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
