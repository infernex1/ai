"use client";

import { motion } from "framer-motion";
import { Bot, Laptop, Zap, Smartphone } from "lucide-react";

const NeuralNetworkAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      
      <path d="M60 150 L140 100 L220 180 L320 120" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-90 dark:opacity-60" />
      <path d="M140 100 L200 40 L320 120" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-90 dark:opacity-60" />
      <path d="M60 150 L120 230 L220 180 L300 240" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-90 dark:opacity-60" />
      <path d="M140 100 L120 230" stroke="#C41E3A" strokeWidth="2" fill="none" className="opacity-65 dark:opacity-40" />
      <path d="M220 180 L200 40" stroke="#C41E3A" strokeWidth="2" fill="none" className="opacity-65 dark:opacity-40" />

      {[
        { cx: 60, cy: 150 },
        { cx: 140, cy: 100 },
        { cx: 200, cy: 40 },
        { cx: 220, cy: 180 },
        { cx: 320, cy: 120 },
        { cx: 120, cy: 230 },
        { cx: 300, cy: 240 },
      ].map((node, i) => (
        <circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r="5"
          fill="#C41E3A"
          className="opacity-100 dark:opacity-85 animate-svg-pulse-node"
          style={{ animationDuration: `${2 + (i % 3)}s` }}
        />
      ))}

      <circle r="4.5" fill="#fff">
        <animateMotion dur="4s" repeatCount="indefinite" path="M60 150 L140 100 L220 180 L320 120" />
      </circle>
      <circle r="4.5" fill="#fff">
        <animateMotion dur="5s" repeatCount="indefinite" path="M60 150 L120 230 L220 180 L300 240" />
      </circle>
    </svg>
  </div>
);

const WebsiteWireframeAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="50" y="40" width="300" height="220" rx="8"
        stroke="#C41E3A" strokeWidth="3" fill="none"
        className="opacity-90 dark:opacity-65 animate-svg-draw"
        strokeDasharray="1000"
      />
      <line x1="50" y1="65" x2="350" y2="65" stroke="#C41E3A" strokeWidth="2.5" className="opacity-80 dark:opacity-50" />
      <circle cx="65" cy="52.5" r="4.5" fill="#C41E3A" className="opacity-95 dark:opacity-70" />
      <circle cx="75" cy="52.5" r="4.5" fill="#C41E3A" className="opacity-95 dark:opacity-70" />
      <circle cx="85" cy="52.5" r="4.5" fill="#C41E3A" className="opacity-95 dark:opacity-70" />
      
      <rect
        x="70" y="85" width="260" height="60" rx="4"
        fill="#3B82F6" className="opacity-35 dark:opacity-20 animate-svg-fade-block"
        style={{ animationDelay: '0s' }}
      />
      <rect
        x="70" y="160" width="120" height="80" rx="4"
        fill="#C41E3A" className="opacity-30 dark:opacity-15 animate-svg-fade-block"
        style={{ animationDelay: '1s' }}
      />
      <rect
        x="210" y="160" width="120" height="80" rx="4"
        fill="#C41E3A" className="opacity-30 dark:opacity-15 animate-svg-fade-block"
        style={{ animationDelay: '2s' }}
      />
      
      <g stroke="#3B82F6" strokeWidth="2.5" className="opacity-50 dark:opacity-25">
        <line x1="130" y1="85" x2="130" y2="240" />
        <line x1="270" y1="85" x2="270" y2="240" />
      </g>
    </svg>
  </div>
);

const WorkflowAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">

      <path d="M80 150 L160 150 L200 100 L280 100" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-90 dark:opacity-60" strokeDasharray="4 4" />
      <path d="M160 150 L200 200 L280 200" stroke="#8B5CF6" strokeWidth="3" fill="none" className="opacity-90 dark:opacity-60" strokeDasharray="4 4" />
      <path d="M280 100 L320 150" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-90 dark:opacity-60" strokeDasharray="4 4" />
      <path d="M280 200 L320 150" stroke="#8B5CF6" strokeWidth="3" fill="none" className="opacity-90 dark:opacity-60" strokeDasharray="4 4" />

      {[
        { x: 80, y: 150, color: "#C41E3A" },
        { x: 160, y: 150, color: "#C41E3A" },
        { x: 200, y: 100, color: "#8B5CF6" },
        { x: 280, y: 100, color: "#8B5CF6" },
        { x: 200, y: 200, color: "#C41E3A" },
        { x: 280, y: 200, color: "#C41E3A" },
        { x: 320, y: 150, color: "#8B5CF6" },
      ].map((node, i) => (
        <rect
          key={i}
          x={node.x - 10} y={node.y - 10} width="20" height="20" rx="4"
          fill="none" stroke={node.color} strokeWidth="3.5"
          className="opacity-95 dark:opacity-75 animate-svg-rotate-node"
          style={{ transformOrigin: `${node.x}px ${node.y}px`, animationDuration: `${4 + (i % 2)}s` }}
        />
      ))}
      
      <circle r="6" fill="#C41E3A">
        <animateMotion dur="3s" repeatCount="indefinite" path="M80 150 L160 150 L200 100 L280 100 L320 150" />
      </circle>
      <circle r="6" fill="#8B5CF6">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M160 150 L200 200 L280 200 L320 150" />
      </circle>
    </svg>
  </div>
);

const AppEcosystemAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">

      <path d="M200 150 L120 100" stroke="#C41E3A" strokeWidth="2.5" fill="none" className="opacity-90 dark:opacity-60" />
      <path d="M200 150 L280 100" stroke="#06B6D4" strokeWidth="2.5" fill="none" className="opacity-90 dark:opacity-60" />
      <path d="M200 150 L120 200" stroke="#06B6D4" strokeWidth="2.5" fill="none" className="opacity-90 dark:opacity-60" />
      <path d="M200 150 L280 200" stroke="#C41E3A" strokeWidth="2.5" fill="none" className="opacity-90 dark:opacity-60" />

      <rect
        x="170" y="110" width="60" height="80" rx="8"
        stroke="#C41E3A" strokeWidth="3.5" fill="none"
        className="opacity-95 dark:opacity-80 animate-svg-float-y"
      />
      <rect
        x="90" y="70" width="40" height="40" rx="4"
        stroke="#06B6D4" strokeWidth="3" fill="none"
        className="opacity-90 dark:opacity-75 animate-svg-float-up-left"
        style={{ animationDelay: '0.5s' }}
      />
      <rect
        x="270" y="70" width="30" height="50" rx="6"
        stroke="#C41E3A" strokeWidth="3" fill="none"
        className="opacity-90 dark:opacity-75 animate-svg-float-up-right"
        style={{ animationDelay: '1s' }}
      />
      <rect
        x="100" y="190" width="40" height="20" rx="4"
        stroke="#C41E3A" strokeWidth="3" fill="none"
        className="opacity-90 dark:opacity-75 animate-svg-float-down-left"
        style={{ animationDelay: '1.5s' }}
      />
      <rect
        x="260" y="190" width="50" height="30" rx="4"
        stroke="#06B6D4" strokeWidth="3" fill="none"
        className="opacity-90 dark:opacity-75 animate-svg-float-down-right"
        style={{ animationDelay: '0.2s' }}
      />
      
      <circle r="7" fill="#C41E3A"
        cx="200" cy="150"
        className="animate-svg-pulse-center"
      />
    </svg>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-[#C41E3A] font-bold tracking-[0.15em] text-sm uppercase block mb-4">OUR SERVICES</span>
          <h2 className="font-space-grotesk font-bold text-[clamp(24px,4vw,56px)] leading-tight text-text-primary">
            Everything Your Business Needs
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-6">
          
          {/* ONE large card (full width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group w-full bg-[#FFFFFF] dark:bg-[#141414] border border-[rgba(196,30,58,0.15)] rounded-[20px] p-[40px] hover:-translate-y-2 hover:border-[#C41E3A] hover:shadow-[0_0_30px_rgba(196,30,58,0.15)] hover:bg-[rgba(196,30,58,0.03)] dark:hover:bg-gradient-to-br dark:hover:from-white/[0.05] dark:hover:to-transparent transition-all duration-500 relative overflow-hidden"
          >
            <NeuralNetworkAnimation />
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-white/25 dark:bg-black/40 backdrop-blur-[2px]" />

            <div className="relative z-20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="text-[#C41E3A] shrink-0">
                    <Bot size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-3xl text-[#C41E3A]">AI Agents</h3>
                </div>
              </div>

              <p className="text-[#555555] dark:text-[#A0A0A0] text-lg mb-8 leading-relaxed max-w-3xl">
                Intelligent AI voice agents and chatbots that handle calls, book appointments, capture leads, and follow up automatically — every single day, 24/7.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Voice Receptionist", "Lead Capture", "Auto Booking", "SMS Follow-up", "CRM Dashboard"].map((feature) => (
                  <span 
                    key={feature} 
                    className="px-[16px] py-[6px] rounded-[100px] border border-[rgba(196,30,58,0.25)] bg-[rgba(196,30,58,0.12)] text-[14px] text-[#1A1A1A] dark:text-[#F0EDE8]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* THREE smaller cards below (side by side, stack on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-[#FFFFFF] dark:bg-[#141414] border border-[rgba(196,30,58,0.15)] rounded-[20px] p-[28px] hover:-translate-y-2 hover:border-[#C41E3A] hover:shadow-[0_0_30px_rgba(196,30,58,0.15)] hover:bg-[rgba(196,30,58,0.03)] dark:hover:bg-gradient-to-br dark:hover:from-white/[0.05] dark:hover:to-transparent transition-all duration-500 relative overflow-hidden"
            >
              <WebsiteWireframeAnimation />
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-white/25 dark:bg-black/40 backdrop-blur-[2px]" />

              <div className="relative z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#C41E3A] shrink-0">
                    <Laptop size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-2xl text-[#1A1A1A] dark:text-[#FFFFFF]">Website Development</h3>
                </div>
                <p className="text-[#555555] dark:text-[#A0A0A0] leading-relaxed">
                  Stunning, fast, responsive websites that convert visitors into customers. From landing pages to full platforms.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-[#FFFFFF] dark:bg-[#141414] border border-[rgba(196,30,58,0.15)] rounded-[20px] p-[28px] hover:-translate-y-2 hover:border-[#C41E3A] hover:shadow-[0_0_30px_rgba(196,30,58,0.15)] hover:bg-[rgba(196,30,58,0.03)] dark:hover:bg-gradient-to-br dark:hover:from-white/[0.05] dark:hover:to-transparent transition-all duration-500 relative overflow-hidden"
            >
              <WorkflowAnimation />
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-white/25 dark:bg-black/40 backdrop-blur-[2px]" />

              <div className="relative z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#C41E3A] shrink-0">
                    <Zap size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-2xl text-[#1A1A1A] dark:text-[#FFFFFF]">Automation Systems</h3>
                </div>
                <p className="text-[#555555] dark:text-[#A0A0A0] leading-relaxed">
                  Complete business workflow automation — CRM, email sequences, SMS campaigns, and reporting using AI and n8n.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group bg-[#FFFFFF] dark:bg-[#141414] border border-[rgba(196,30,58,0.15)] rounded-[20px] p-[28px] hover:-translate-y-2 hover:border-[#C41E3A] hover:shadow-[0_0_30px_rgba(196,30,58,0.15)] hover:bg-[rgba(196,30,58,0.03)] dark:hover:bg-gradient-to-br dark:hover:from-white/[0.05] dark:hover:to-transparent transition-all duration-500 relative overflow-hidden"
            >
              <AppEcosystemAnimation />
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-white/25 dark:bg-black/40 backdrop-blur-[2px]" />

              <div className="relative z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#C41E3A] shrink-0">
                    <Smartphone size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-2xl text-[#1A1A1A] dark:text-[#FFFFFF]">App Development</h3>
                </div>
                <p className="text-[#555555] dark:text-[#A0A0A0] leading-relaxed">
                  Premium native & cross-platform applications built for iOS & Android. Delivering immersive UX, offline synchronization, and seamless app store deployments. 
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
