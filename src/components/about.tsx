"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, duration = 1.5, suffix = "", inView }: { from: number; to: number; duration?: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 12 }
  }
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-primary relative overflow-hidden" ref={containerRef}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6"
      >
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <span className="text-accent font-bold tracking-[0.15em] text-sm uppercase block mb-4">ABOUT US</span>
          <h2 className="font-space-grotesk font-bold text-[clamp(24px,4vw,56px)] leading-tight text-text-primary">
            Built Different. Built For Results.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 text-[clamp(14px,2vw,18px)] text-text-secondary leading-relaxed">
            <p>
              Infernex is a next-generation AI agency founded to help businesses grow through intelligent automation. We combine cutting-edge AI technology with beautiful design to deliver systems that work 24/7 — fully done for you.
            </p>
            <p>
              From AI voice receptionists to full website development and business automation, we handle everything so you can focus on what matters: growing your business.
            </p>
          </motion.div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05, boxShadow: "0px 15px 30px rgba(196, 30, 58, 0.18)" }}
              className="bg-card border border-card-border p-6 rounded-2xl hover:border-accent transition-[transform,border-color,box-shadow] duration-300 group relative overflow-hidden"
            >
              {/* Premium Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              <div className="relative z-10">
                <div className="font-space-grotesk text-4xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  <Counter from={1} to={50} duration={1.5} suffix="+" inView={isInView} />
                </div>
                <div className="text-sm text-text-secondary">Projects In Development</div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05, boxShadow: "0px 15px 30px rgba(196, 30, 58, 0.18)" }}
              className="bg-card border border-card-border p-6 rounded-2xl hover:border-accent transition-[transform,border-color,box-shadow] duration-300 group relative overflow-hidden"
            >
              {/* Premium Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              <div className="relative z-10">
                <div className="font-space-grotesk text-4xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  24/7
                </div>
                <div className="text-sm text-text-secondary">AI System Uptime</div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05, boxShadow: "0px 15px 30px rgba(196, 30, 58, 0.18)" }}
              className="bg-card border border-card-border p-6 rounded-2xl hover:border-accent transition-[transform,border-color,box-shadow] duration-300 group relative overflow-hidden"
            >
              {/* Premium Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              <div className="relative z-10">
                <div className="font-space-grotesk text-4xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  <Counter from={1} to={48} duration={1.5} suffix="hr" inView={isInView} />
                </div>
                <div className="text-sm text-text-secondary">Average Setup Time</div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05, boxShadow: "0px 15px 30px rgba(196, 30, 58, 0.18)" }}
              className="bg-card border border-card-border p-6 rounded-2xl hover:border-accent transition-[transform,border-color,box-shadow] duration-300 group relative overflow-hidden"
            >
              {/* Premium Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              <div className="relative z-10">
                <div className="font-space-grotesk text-4xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  <Counter from={1} to={100} duration={1.5} suffix="%" inView={isInView} />
                </div>
                <div className="text-sm text-text-secondary">Done For You</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
