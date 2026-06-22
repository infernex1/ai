"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bot } from "lucide-react";

const terminalLines = [
  { text: "> Initializing Infernex AI System...", type: "normal" },
  { text: "> Connected to Iron Peak Fitness ✓", type: "success" },
  { text: "> Monitoring phone line: +1 (216) 477 8502", type: "normal" },
  { text: "> ", type: "normal" },
  { text: "[9:47 PM] Incoming call detected...", type: "normal" },
  { text: "[9:47 PM] AI Receptionist: \"Thank you for", type: "normal" },
  { text: "          calling Iron Peak Fitness! How can", type: "normal" },
  { text: "          I help you today?\"", type: "normal" },
  { text: "[9:47 PM] Caller: \"I want to join the gym\"", type: "normal" },
  { text: "[9:48 PM] AI: \"I'd love to help! Can I get", type: "normal" },
  { text: "          your name and number?\"", type: "normal" },
  { text: "[9:48 PM] Lead captured: John Smith ✓", type: "success" },
  { text: "[9:48 PM] Appointment booked: Monday 10am ✓", type: "success" },
  { text: "[9:48 PM] SMS sent to +1 555 234 5678 ✓", type: "success" },
  { text: "[9:48 PM] Email alert sent to owner ✓", type: "success" },
  { text: "[9:48 PM] Lead saved to dashboard ✓", type: "success" },
  { text: "> ", type: "normal" },
  { text: "Leads captured tonight: 7", type: "normal" },
  { text: "Calls handled: 12", type: "normal" },
  { text: "Trials booked: 5", type: "normal" },
];

function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; type: string }[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      setIsTyping(false);
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    if (!isTyping) return;

    const currentFullLine = terminalLines[currentLineIndex].text;

    if (currentCharIndex < currentFullLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines[currentLineIndex]) {
            newLines[currentLineIndex].text = currentFullLine.slice(0, currentCharIndex + 1);
          } else {
            newLines.push({ text: currentFullLine[0], type: terminalLines[currentLineIndex].type });
          }
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 30); // 30ms typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 150); // delay between lines
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, isTyping]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 rounded-xl overflow-hidden border border-card-border bg-card/80 backdrop-blur-xl shadow-2xl relative z-10">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-secondary/50 border-b border-card-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs font-mono text-text-secondary">infernex-ai — live demo</div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-4 md:p-6 font-mono text-sm md:text-base h-[350px] overflow-y-auto text-left flex flex-col gap-1">
        {displayedLines.map((line, i) => (
          <div
            key={i}
            className={`${
              line.type === "success" ? "text-green-500 dark:text-green-400" : "text-text-primary"
            }`}
          >
            {line.text}
            {i === currentLineIndex && isTyping && (
              <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse"></span>
            )}
          </div>
        ))}
        {!isTyping && (
          <div>
            <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const headlineWords = "We Automate The Work.".split(" ");

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background elements (CSS Grid Pattern) */}
      <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:linear-gradient(180deg,white,transparent)] opacity-40"></div>
      
      {/* Animated Orbs (CSS GPU Accelerated) */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0 animate-orb-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF6B6B]/10 rounded-full blur-[150px] pointer-events-none z-0 animate-orb-2" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10 mt-10 md:mt-0">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/5 backdrop-blur-sm mb-8 shadow-[0_0_15px_rgba(196,30,58,0.15)] animate-[pulse_3s_ease-in-out_infinite]"
        >
          <Bot size={14} className="text-accent shrink-0" />
          <span className="text-sm font-medium text-text-primary">Now Accepting Founding Partners — Limited Spots</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-space-grotesk font-bold text-[clamp(32px,6vw,80px)] leading-[1.1] tracking-tight mb-6 flex flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center gap-[clamp(8px,1vw,16px)] text-black dark:text-white">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="bg-accent-gradient bg-clip-text text-transparent pb-2"
          >
            You Get The Results.
          </motion.div>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-[clamp(14px,2vw,18px)] text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Infernex builds AI agents, stunning websites, and
          powerful automation systems that work 24/7 —
          so you can focus on growing your business.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#process"
            className="flex items-center justify-center h-[52px] px-8 rounded-full bg-accent-gradient text-white font-semibold shadow-[0_0_20px_rgba(196,30,58,0.4)] hover:shadow-[0_0_30px_rgba(196,30,58,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            See How It Works
          </Link>
          <Link
            href="#services"
            className="flex items-center justify-center h-[52px] px-8 rounded-full border border-accent/50 text-text-primary hover:bg-accent/5 transition-all duration-300 font-semibold w-full sm:w-auto"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Terminal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="w-full"
        >
          <Terminal />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="text-xs md:text-sm text-text-secondary mt-4"
          >
            This is running right now, 24/7
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
