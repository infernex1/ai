"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
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
  { text: "Trials booked: 5", type: "normal" }
];

function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const isTerminalInView = useInView(terminalRef, { margin: "-50px" });

  const [displayedLines, setDisplayedLines] = useState<{ text: string; type: string }[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTerminalInView) return; // Pause typing when off-screen to save CPU

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
  }, [currentLineIndex, currentCharIndex, isTyping, isTerminalInView]);

  return (
    <div
      ref={terminalRef}
      className="w-full max-w-2xl mx-auto mt-12 rounded-xl overflow-hidden border border-card-border bg-card/95 shadow-2xl relative z-10 text-left"
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-secondary/50 border-b border-card-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-text-secondary font-mono mx-auto">infernex-ai-system ~ zsh</span>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm h-[320px] overflow-y-auto bg-black/5 dark:bg-black/20 leading-relaxed text-text-primary">
        {displayedLines.map((line, i) => (
          <div
            key={i}
            className={line.type === "success" ? "text-green-500 font-semibold" : "text-text-primary"}
          >
            {line.text}
          </div>
        ))}
        {isTyping && (
          <span className="inline-block w-2 h-4 bg-accent animate-pulse ml-0.5 align-middle" />
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const headlineWords = "We Automate The Work.".split(" ");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-10%" });

  return (
    <section
      ref={containerRef}
      id="hero"
      className={`relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden ${
        isInView ? "section-in-view" : ""
      }`}
    >
      {/* Background elements (CSS Grid Pattern) */}
      <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:linear-gradient(180deg,white,transparent)] opacity-40"></div>
      
      {/* Animated Orbs (CSS GPU Accelerated) */}
      {isInView && (
        <>
          <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/20 rounded-full blur-[40px] md:blur-[60px] pointer-events-none z-0 animate-orb-1" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FF6B6B]/10 rounded-full blur-[50px] md:blur-[85px] pointer-events-none z-0 animate-orb-2" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10 mt-10 md:mt-0">
        
        {/* Badge */}
        <div
          className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 mb-8 shadow-[0_0_15px_rgba(196,30,58,0.15)] animate-[pulse_3s_ease-in-out_infinite]"
          style={{ animationDelay: "0.2s" }}
        >
          <Bot size={14} className="text-accent shrink-0" />
          <span className="text-sm font-medium text-text-primary">Now Accepting Founding Partners — Limited Spots</span>
        </div>

        {/* Headline */}
        <h1 className="font-space-grotesk font-bold text-[clamp(32px,6vw,80px)] leading-[1.1] tracking-tight mb-6 flex flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center gap-[clamp(8px,1vw,16px)] text-black dark:text-white">
            {headlineWords.map((word, i) => (
              <span
                key={i}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.4 + i * 0.08}s` }}
              >
                {word}
              </span>
            ))}
          </div>
          <div
            className="animate-fade-in-up bg-accent-gradient bg-clip-text text-transparent pb-2"
            style={{ animationDelay: "0.8s" }}
          >
            You Get The Results.
          </div>
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-in-up text-[clamp(14px,2vw,18px)] text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: "0.9s" }}
        >
          Infernex builds AI agents, stunning websites, and
          powerful automation systems that work 24/7 —
          so you can focus on growing your business.
        </p>

        {/* Buttons */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          style={{ animationDelay: "1s" }}
        >
          <Link
            href="#process"
            className="flex items-center justify-center h-[52px] px-8 rounded-full bg-accent-gradient text-white font-semibold shadow-[0_0_20px_rgba(196,30,58,0.4)] hover:shadow-[0_0_30px_rgba(196,30,58,0.6)] hover:scale-105 transition-[transform,box-shadow] duration-300 w-full sm:w-auto"
          >
            See How It Works
          </Link>
          <Link
            href="#services"
            className="flex items-center justify-center h-[52px] px-8 rounded-full border border-accent/50 text-text-primary hover:bg-accent/5 transition-[transform,background-color] duration-300 font-semibold w-full sm:w-auto"
          >
            Explore Services
          </Link>
        </div>

        {/* Terminal Animation */}
        <div
          className="animate-fade-in-up w-full"
          style={{ animationDelay: "1.2s" }}
        >
          <Terminal />
          <p 
            className="animate-fade-in-up text-xs md:text-sm text-text-secondary mt-4"
            style={{ animationDelay: "1.4s" }}
          >
            This is running right now, 24/7
          </p>
        </div>
      </div>
    </section>
  );
}
