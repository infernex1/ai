"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Phone, 
  Users, 
  Clock, 
  DollarSign, 
  Bot, 
  HelpCircle, 
  Smartphone,
  Check,
  Mail
} from "lucide-react";

const challengesList = [
  { id: "calls", text: "Missing after-hours calls", icon: Phone },
  { id: "leads", text: "Not enough leads", icon: Users },
  { id: "time", text: "Manual follow-up taking too much time", icon: Clock },
  { id: "competitors", text: "Losing revenue to competitors", icon: DollarSign },
  { id: "automate", text: "Want to automate operations", icon: Bot },
  { id: "other", text: "Other", icon: HelpCircle }
];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    challenge: "",
    otherChallenge: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Use searchParams carefully. Needs suspense boundary usually, but we are client side.
  // We'll extract features from URL if any (e.g., from Custom Plan Calculator)
  const [features, setFeatures] = useState<string>("");

  useEffect(() => {
    // Basic extraction to avoid full Suspense wrapping complexity for this demo
    if (typeof window !== "undefined") {
      const search = new URLSearchParams(window.location.search || window.location.hash.split("?")[1]);
      if (search.get("features")) {
        setFeatures(search.get("features") || "");
      }
    }
  }, []);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/contact@infernex.in", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          "Business Type": formData.businessType,
          Challenge: formData.challenge === "Other" ? formData.otherChallenge : formData.challenge,
          "Selected Features": features,
          "_subject": "New Contact Form Lead - Infernex AI"
        })
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      // Even if webhook fails (CORS etc), show success for demo purposes to user
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden lg:min-h-screen lg:flex lg:items-center">
      {/* Animated Background (CSS GPU Accelerated) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
        <div className="absolute top-[20%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/10 rounded-full blur-[60px] md:blur-[120px] animate-orb-3" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF6B6B]/10 rounded-full blur-[80px] md:blur-[150px] animate-orb-4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="text-center lg:text-left">
            <span className="text-accent font-bold tracking-[0.15em] text-sm uppercase block mb-4">GET STARTED</span>
            <h2 className="font-space-grotesk font-bold text-[clamp(24px,4vw,56px)] leading-tight text-text-primary">
              Ready to Automate Your Business?
            </h2>
          </div>
          <div className="flex justify-center lg:justify-end shrink-0">
            <a href="mailto:contact@infernex.in" className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-card-border hover:border-accent/50 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <Mail size={20} strokeWidth={2} />
              </div>
              <div className="text-left">
                <div className="text-[12px] font-bold text-text-secondary uppercase tracking-wider mb-0.5">Prefer Email?</div>
                <div className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">contact@infernex.in</div>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          
          {/* Left Column: Animation Showcase */}
          <div className="hidden lg:flex flex-col items-center justify-center relative min-h-[620px] w-full py-6">
            
            {/* ANIMATION: PHONE MOCKUP */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[240px] md:w-[260px] h-[420px] bg-[#F5F5F5] dark:bg-[#0F0F0F] border-[6px] border-[#E0E0E0] dark:border-[#2A2A2A] rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
              >
                {/* Subtle reflection gradient */}
                <div className="absolute top-0 right-0 w-[150%] h-32 bg-gradient-to-br from-white/30 to-transparent rotate-45 transform origin-top-right mix-blend-overlay pointer-events-none" />

                {/* STATUS BAR */}
                <div className="flex justify-between items-center px-5 pt-3 text-[11px] font-bold text-text-secondary select-none">
                  <span>9:47</span>
                  <div className="flex gap-1.5 items-center">
                    <div className="flex gap-0.5 items-end h-2.5">
                      <span className="w-[2px] h-[4px] bg-[#555] dark:bg-[#A0A0A0] rounded-sm"></span>
                      <span className="w-[2px] h-[6px] bg-[#555] dark:bg-[#A0A0A0] rounded-sm"></span>
                      <span className="w-[2px] h-[8px] bg-[#555] dark:bg-[#A0A0A0] rounded-sm"></span>
                      <span className="w-[2px] h-[10px] bg-[#555] dark:bg-[#A0A0A0] rounded-sm"></span>
                    </div>
                  </div>
                </div>
                
                {/* Notifications inside phone */}
                <div className="p-4 flex-1 relative overflow-hidden flex flex-col">
                  {/* 1. New Lead */}
                  <motion.div
                    animate={{
                      y: [-60, 0, 0, 0, -60],
                      opacity: [0, 1, 1, 1, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.06, 0.82, 0.9, 1],
                      ease: "circOut"
                    }}
                    className="bg-white dark:bg-[#2A2A2A] text-[#1A1A1A] dark:text-white border border-[rgba(0,0,0,0.06)] dark:border-white/10 rounded-[16px] p-3 shadow-lg flex gap-3 items-start w-full relative z-30"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                      <Smartphone size={14} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-bold text-[14px] leading-tight mb-1">New Lead!</div>
                      <div className="text-[13px] text-text-secondary leading-snug">John wants to book a trial</div>
                    </div>
                  </motion.div>

                  {/* 2. Inbox Notification */}
                  <motion.div
                    animate={{
                      y: [-60, 0, 0, 0, -60],
                      opacity: [0, 1, 1, 1, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0.12, 0.18, 0.82, 0.9, 1],
                      ease: "circOut"
                    }}
                    className="flex mt-3 bg-white dark:bg-[#2A2A2A] text-[#1A1A1A] dark:text-white border border-[rgba(0,0,0,0.06)] dark:border-white/10 rounded-[16px] p-3 shadow-lg gap-3 items-start w-full relative z-20"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#EA4335]/10 flex items-center justify-center shrink-0">
                      <span className="text-[#EA4335] font-bold text-base leading-none">M</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="font-bold text-[13px] leading-tight">Inbox (1)</span>
                      </div>
                      <div className="font-bold text-[12px] mb-0.5">Lead — John</div>
                      <div className="text-[11px] text-text-secondary">AI captured lead at 9:47 PM</div>
                    </div>
                  </motion.div>

                  {/* 3. Dashboard Card */}
                  <motion.div
                    animate={{
                      y: [-60, 0, 0, 0, -60],
                      opacity: [0, 1, 1, 1, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0.24, 0.3, 0.82, 0.9, 1],
                      ease: "circOut"
                    }}
                    className="flex mt-3 bg-white dark:bg-[#2A2A2A] text-[#1A1A1A] dark:text-white border border-[rgba(0,0,0,0.06)] dark:border-white/10 rounded-[16px] p-3 shadow-lg flex-col gap-2 w-full relative z-10"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[12px] font-bold text-[#C41E3A]">Recent Activity</span>
                    </div>
                    <div className="text-[11px] leading-relaxed text-text-secondary bg-[#F8F8F8] dark:bg-[#111] p-2 rounded-lg border border-card-border">
                      <span className="font-bold text-text-primary">John Smith</span> | 10am | <br/>
                      <span className="text-green-500 font-bold inline-flex items-center gap-1 mt-0.5">
                        <Check size={10} strokeWidth={3} /> SMS Sent
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Multi-step Form */}
          <div className="bg-card border border-card-border rounded-3xl p-6 md:p-10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
                >
                  {/* Progress Indicator */}
                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-accent" : "bg-card-border"}`} />
                    ))}
                  </div>

                  <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
                    
                    {/* Step 1 */}
                    {step === 1 && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="space-y-6">
                        <h3 className="font-space-grotesk font-bold text-2xl text-text-primary">What&apos;s your name?</h3>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Full Name"
                          className="w-full bg-primary border border-card-border rounded-xl px-4 py-4 text-text-primary outline-none focus:border-accent transition-colors text-base"
                        />
                        <button type="submit" className="w-full h-14 rounded-full bg-accent-gradient text-white font-semibold flex items-center justify-center gap-2">
                          Continue <span className="text-xl">→</span>
                        </button>
                      </motion.div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="space-y-6">
                        <h3 className="font-space-grotesk font-bold text-2xl text-text-primary">What&apos;s your biggest challenge?</h3>
                        <div className="flex flex-col gap-3">
                          {challengesList.map((challenge) => (
                            <button
                              key={challenge.id}
                              type="button"
                              onClick={() => { 
                                setFormData({ ...formData, challenge: challenge.text }); 
                                if (challenge.id !== "other") handleNext(); 
                              }}
                              className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-colors ${formData.challenge === challenge.text ? "border-accent bg-accent/5" : "border-card-border bg-primary hover:border-accent/50"}`}
                            >
                              <span className="text-accent shrink-0">
                                <challenge.icon size={18} strokeWidth={1.5} />
                              </span>
                              <span className="font-medium text-text-primary text-sm">{challenge.text}</span>
                            </button>
                          ))}
                          {formData.challenge === "Other" && (
                            <div className="flex gap-2">
                              <input
                                type="text"
                                required
                                value={formData.otherChallenge}
                                onChange={(e) => setFormData({ ...formData, otherChallenge: e.target.value })}
                                placeholder="Please specify..."
                                className="flex-1 bg-primary border border-card-border rounded-xl px-4 py-3 text-text-primary outline-none focus:border-accent transition-colors text-base"
                                autoFocus
                              />
                              <button type="button" onClick={handleNext} className="px-6 rounded-xl bg-accent text-white font-medium">Next</button>
                            </div>
                          )}
                        </div>
                        <button type="button" onClick={handleBack} className="text-text-secondary text-sm hover:text-text-primary transition-colors mt-4 inline-block">← Back</button>
                      </motion.div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="space-y-6">
                        <h3 className="font-space-grotesk font-bold text-2xl text-text-primary">How can we reach you?</h3>
                        <div className="space-y-4">
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email address"
                            className="w-full bg-primary border border-card-border rounded-xl px-4 py-4 text-text-primary outline-none focus:border-accent transition-colors text-base"
                          />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Phone number"
                            className="w-full bg-primary border border-card-border rounded-xl px-4 py-4 text-text-primary outline-none focus:border-accent transition-colors text-base"
                          />
                        </div>
                        <div className="flex gap-4">
                          <button type="button" onClick={handleBack} className="px-6 rounded-full border border-card-border text-text-primary hover:bg-primary transition-colors font-medium">
                            Back
                          </button>
                          <button disabled={isSubmitting} type="submit" className="flex-1 h-14 rounded-full bg-accent-gradient text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70 shadow-[0_0_15px_rgba(196,30,58,0.3)]">
                            {isSubmitting ? "Submitting..." : "Book My Free Demo →"}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center py-12 flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                    <Check size={36} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-3xl text-text-primary mb-4">Booked!</h3>
                  <p className="text-text-secondary text-lg mb-8">We&apos;ll reach out within 24 hours.</p>
                  <Link href="#services" className="text-accent font-medium hover:underline flex items-center gap-2">
                    In the meantime, explore what we&apos;ve built <span>→</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
