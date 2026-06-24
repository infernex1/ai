"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Flame } from "lucide-react";

const techStack = [
  "Claude AI (Anthropic)",
  "Vapi Voice AI",
  "Twilio",
  "n8n Automation",
  "Google Cloud",
  "OpenAI"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Trust() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-10%" });

  return (
    <section 
      ref={sectionRef}
      id="trust" 
      className={`py-24 bg-primary relative overflow-hidden border-y border-border ${
        isInView ? "section-in-view" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-bold tracking-[0.15em] text-sm uppercase block mb-4">WHY TRUST US</span>
          <h2 className="font-space-grotesk font-bold text-[clamp(24px,4vw,56px)] leading-tight text-text-primary">
            Enterprise Technology. Startup Speed.
          </h2>
        </motion.div>

        {/* Part A: Powered By */}
        <div className="mb-20">
          <p className="text-center text-text-secondary text-sm mb-8 uppercase tracking-widest">Built with industry-leading tools</p>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex overflow-x-auto pb-4 hide-scrollbar gap-4 md:justify-center px-4 md:px-0"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="whitespace-nowrap px-6 py-3 rounded-full bg-card border border-card-border text-text-secondary text-sm font-medium shadow-sm hover:border-accent/30 transition-[transform,border-color] duration-200"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Part B: Founding Partner Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative rounded-3xl p-[2px] bg-accent-gradient overflow-hidden group">
            {/* Inner Content */}
            <div className="bg-card rounded-[22px] p-8 md:p-12 text-center relative z-10 h-full">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 animate-pulse">
                <Flame size={14} className="fill-accent" /> Founding Partner Program
              </span>
              <p className="text-xl md:text-2xl text-text-primary font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
                We are onboarding our first 5 gym partners at a special founding rate with direct access to our team. <span className="text-accent font-bold">Only 3 spots remaining.</span>
              </p>
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                Founding partners get: Priority setup, reduced pricing, direct WhatsApp support, and input on new features.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-accent-gradient text-white font-semibold shadow-[0_0_15px_rgba(196,30,58,0.4)] hover:shadow-[0_0_25px_rgba(196,30,58,0.6)] hover:scale-105 transition-[transform,box-shadow] duration-300"
              >
                Apply For Founding Partner Spot
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Part C: Demo Results */}
        <div className="text-center">
          <p className="text-text-secondary text-sm mb-8 uppercase tracking-widest font-bold">DEMO SYSTEM RESULTS</p>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            <motion.div
              variants={cardVariants}
              className="bg-card border border-card-border p-8 rounded-2xl"
            >
              <div className="font-space-grotesk text-4xl font-bold text-accent mb-2">23</div>
              <div className="text-text-primary font-medium">Leads captured</div>
              <div className="text-sm text-text-secondary">in 30-day demo</div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-card border border-card-border p-8 rounded-2xl"
            >
              <div className="font-space-grotesk text-4xl font-bold text-accent mb-2">12</div>
              <div className="text-text-primary font-medium">Trials booked</div>
              <div className="text-sm text-text-secondary">automatically</div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-card border border-card-border p-8 rounded-2xl"
            >
              <div className="font-space-grotesk text-4xl font-bold text-accent mb-2">$0</div>
              <div className="text-text-primary font-medium">Missed after-hours</div>
              <div className="text-sm text-text-secondary">all calls answered</div>
            </motion.div>
          </motion.div>
          <p className="text-xs text-text-secondary opacity-60">
            Results from our internal demo system. Real client results may vary.
          </p>
        </div>

      </div>
    </section>
  );
}
