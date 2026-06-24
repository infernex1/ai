"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does setup actually take?",
    answer: "For standard gym setups, we can have your AI Voice Receptionist and basic automations running in 48 hours. Custom websites and complex CRM integrations take 1-2 weeks depending on your requirements."
  },
  {
    question: "Do I need to know anything about AI?",
    answer: "Absolutely not. We handle 100% of the technical setup, prompt engineering, integration, and maintenance. You just tell us how you want the AI to behave, and we build it."
  },
  {
    question: "Can the AI really handle complex customer questions?",
    answer: "Yes. Our AI voice agents and chat bots are trained on your specific business knowledge base (pricing, schedules, FAQs). If they encounter a completely novel situation, they are programmed to politely take a message and immediately notify your human staff."
  },
  {
    question: "What happens if I already have a website or CRM?",
    answer: "We play nice with others. Our automations (using n8n) can connect to almost any modern software with an API. We can integrate our AI tools right into your existing flow, or build you a better one."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. Our monthly automation plans are strictly month-to-month. We believe our systems provide so much value that we don't need to lock you in."
  }
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
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-bold tracking-[0.15em] text-sm uppercase block mb-4">FAQ</span>
          <h2 className="font-space-grotesk font-bold text-[clamp(24px,4vw,56px)] leading-tight text-text-primary">
            Common Questions
          </h2>
        </motion.div>

        {/* Accordion List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`overflow-hidden transition-colors duration-300 ${
                  isOpen ? "faq-container-open" : "faq-container-closed"
                }`}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-space-grotesk faq-question pr-8">
                    {faq.question}
                  </span>
                  <div className="shrink-0 flex items-center justify-center">
                    {isOpen ? (
                      <Minus size={20} strokeWidth={1.5} className="faq-toggle-icon" />
                    ) : (
                      <Plus size={20} strokeWidth={1.5} className="faq-toggle-icon" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="faq-answer border-t border-card-border/30 mt-4 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
