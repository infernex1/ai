"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "AI Lead Machine",
    badge: "STARTER",
    setupFee: 500,
    monthlyPrice: 199,
    highlighted: false,
    features: [
      { name: "AI Voice Receptionist 24/7", included: true },
      { name: "Website Chat Widget", included: true },
      { name: "Lead Capture Dashboard", included: true },
      { name: "Trial Booking Automation", included: true },
      { name: "SMS Confirmation", included: true },
      { name: "Owner Email Alerts", included: true },
      { name: "Monthly Report", included: true },
      { name: "Outbound Calls", included: false },
      { name: "Full CRM", included: false },
      { name: "Campaigns", included: false },
    ],
  },
  {
    name: "AI Receptionist Pro",
    badge: "MOST POPULAR",
    setupFee: 1500,
    monthlyPrice: 399,
    highlighted: true,
    features: [
      { name: "AI Voice Receptionist 24/7", included: true },
      { name: "Website Chat Widget", included: true },
      { name: "Lead Capture Dashboard", included: true },
      { name: "Trial Booking Automation", included: true },
      { name: "SMS Confirmation", included: true },
      { name: "Owner Email Alerts", included: true },
      { name: "Monthly Report", included: true },
      { name: "Outbound Follow-up Calls", included: true },
      { name: "Full CRM Dashboard", included: true },
      { name: "Renewal Reminders", included: true },
      { name: "SMS & Email Campaigns", included: true },
      { name: "Analytics Dashboard", included: true },
      { name: "Monthly Strategy Call", included: true },
    ],
  },
  {
    name: "AI Gym OS",
    badge: "PREMIUM",
    setupFee: 3000,
    monthlyPrice: 799,
    highlighted: false,
    features: [
      { name: "AI Voice Receptionist 24/7", included: true },
      { name: "Website Chat Widget", included: true },
      { name: "Lead Capture Dashboard", included: true },
      { name: "Trial Booking Automation", included: true },
      { name: "SMS Confirmation", included: true },
      { name: "Owner Email Alerts", included: true },
      { name: "Monthly Report", included: true },
      { name: "Outbound Follow-up Calls", included: true },
      { name: "Full CRM Dashboard", included: true },
      { name: "Renewal Reminders", included: true },
      { name: "SMS & Email Campaigns", included: true },
      { name: "Analytics Dashboard", included: true },
      { name: "Monthly Strategy Call", included: true },
      { name: "AI Sales Agent", included: true },
      { name: "Multi-Location (3)", included: true },
      { name: "Staff Management", included: true },
      { name: "Owner AI Assistant Bot", included: true },
      { name: "Facebook Ads Integration", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true },
    ],
  },
];

const customFeatures = [
  { name: "AI Voice Receptionist", price: 99 },
  { name: "Website Chat Widget", price: 49 },
  { name: "Lead Dashboard", price: 29 },
  { name: "Outbound Follow-up Calls", price: 79 },
  { name: "SMS Campaigns", price: 49 },
  { name: "Email Campaigns", price: 29 },
  { name: "CRM Dashboard", price: 59 },
  { name: "Renewal Reminders", price: 39 },
  { name: "Analytics Dashboard", price: 49 },
  { name: "AI Sales Agent", price: 99 },
  { name: "Multi-Location Support", price: 149 },
  { name: "Owner AI Assistant Bot", price: 79 },
];

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

export default function Pricing() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const customTotal = selectedFeatures.reduce((total, featureName) => {
    const feature = customFeatures.find((f) => f.name === featureName);
    return total + (feature ? feature.price : 0);
  }, 0);

  const toggleFeature = (featureName: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureName)
        ? prev.filter((f) => f !== featureName)
        : [...prev, featureName]
    );
  };

  const getCustomQuoteLink = () => {
    if (selectedFeatures.length === 0) return "#contact";
    const featuresList = encodeURIComponent(selectedFeatures.join(", "));
    return `#contact?features=${featuresList}`;
  };

  return (
    <section id="pricing" className="py-24 bg-primary relative overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6"
      >
        
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="mb-16 text-center"
        >
          <span className="text-accent font-bold tracking-[0.15em] text-sm uppercase block mb-4">PRICING</span>
          <h2 className="font-space-grotesk font-bold text-[clamp(24px,4vw,56px)] leading-tight text-text-primary mb-4">
            Simple. Transparent. No Surprises.
          </h2>
          <p className="text-text-secondary text-lg">Setup fee + low monthly. Cancel anytime.</p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`flex flex-col bg-card rounded-3xl p-8 relative transition-[border-color,box-shadow,transform] duration-300 ${
                plan.highlighted 
                  ? "border-2 border-accent shadow-[0_0_30px_rgba(196,30,58,0.15)] lg:-translate-y-4" 
                  : "border border-card-border hover:border-accent/50"
              }`}
            >
              <div className="mb-8">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                  plan.highlighted ? "bg-accent text-white" : "bg-card-border text-text-primary"
                }`}>
                  {plan.badge}
                </span>
                <h3 className="font-space-grotesk font-bold text-2xl text-text-primary mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-text-primary">${plan.monthlyPrice}</span>
                  <span className="text-text-secondary">/month</span>
                </div>
                <div className="text-sm text-text-secondary">${plan.setupFee} setup</div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-text-primary" : "text-text-secondary line-through opacity-70"}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className={`w-full flex items-center justify-center h-12 rounded-full font-semibold transition-[background-color,box-shadow] duration-300 ${
                  plan.highlighted
                    ? "bg-accent-gradient text-white shadow-[0_0_15px_rgba(196,30,58,0.4)] hover:shadow-[0_0_25px_rgba(196,30,58,0.6)]"
                    : "border border-accent/50 text-text-primary hover:bg-accent/5"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Calculator */}
        <motion.div
          variants={itemVariants}
          className="bg-card border border-accent rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="text-center mb-10">
            <h3 className="font-space-grotesk font-bold text-3xl md:text-4xl text-text-primary mb-4">Build Your Custom Plan</h3>
            <p className="text-text-secondary">Select what you need. See instant pricing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 relative z-10">
            {customFeatures.map((feature) => {
              const isSelected = selectedFeatures.includes(feature.name);
              return (
                <button
                  key={feature.name}
                  onClick={() => toggleFeature(feature.name)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-left transition-[border-color,background-color,box-shadow] duration-200 ${
                    isSelected 
                      ? "border-accent bg-accent/5 shadow-[0_0_10px_rgba(196,30,58,0.1)]" 
                      : "border-card-border hover:border-accent/50 bg-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                      isSelected ? "bg-accent border-accent" : "border-text-secondary/50"
                    }`}>
                      {isSelected && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className={`text-sm font-medium ${isSelected ? "text-text-primary" : "text-text-secondary"}`}>
                      {feature.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-text-secondary">
                    +${feature.price}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col items-center justify-center border-t border-card-border pt-8 relative z-10">
            <motion.div 
              key={customTotal}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center mb-6"
            >
              <div className="text-text-secondary text-sm font-bold uppercase tracking-widest mb-2">Estimated Monthly</div>
              <div className="font-space-grotesk text-5xl md:text-6xl font-bold text-text-primary">
                ${customTotal}
                <span className="text-2xl text-text-secondary font-sans">/mo</span>
              </div>
            </motion.div>
            <p className="text-sm text-text-secondary mb-8">+ Setup fee discussed on consultation call</p>
            
            <Link
              href={getCustomQuoteLink()}
              className="flex items-center justify-center h-14 px-8 rounded-full bg-accent-gradient text-white text-lg font-semibold shadow-[0_0_20px_rgba(196,30,58,0.4)] hover:shadow-[0_0_30px_rgba(196,30,58,0.6)] hover:scale-105 transition-[transform,box-shadow] duration-300"
            >
              Get My Custom Quote →
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
