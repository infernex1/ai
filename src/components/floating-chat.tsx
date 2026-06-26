"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{ role: string; content: string }>>([
    { role: "system", content: INFERNO_SYSTEM_PROMPT }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    const updatedHistory = [...chatHistory, { role: "user", content: text }];
    setChatHistory(updatedHistory);
    setInputValue("");
    setIsTyping(true);

    // Auto scroll after render
    setTimeout(() => {
      const scrollDiv = document.getElementById("floating-messages-scroll");
      if (scrollDiv) scrollDiv.scrollTop = scrollDiv.scrollHeight;
    }, 50);

    try {
      let historyToSend = updatedHistory;
      if (historyToSend.length > 12) {
        historyToSend = [
          historyToSend[0],
          ...historyToSend.slice(historyToSend.length - 10)
        ];
      }

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": typeof window !== "undefined" ? window.location.origin : "",
          "X-Title": "Infernex Floating Chatbot"
        },
        body: JSON.stringify({
          model: "nvidia/llama-3.1-nemotron-70b-instruct",
          messages: historyToSend,
          temperature: 0.5,
          max_tokens: 400
        })
      });

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      const reply = data.choices[0].message.content;

      setChatHistory(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("OpenRouter API error:", error);
      const fallbackText = "Great question! Our team can answer that in detail. Email us at contact@infernex.in and we will get back to you within 24 hours.";
      setChatHistory(prev => [...prev, { role: "assistant", content: fallbackText }]);
    } finally {
      setIsTyping(false);
      setTimeout(() => {
        const scrollDiv = document.getElementById("floating-messages-scroll");
        if (scrollDiv) scrollDiv.scrollTop = scrollDiv.scrollHeight;
      }, 50);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-[0_0_20px_rgba(196,30,58,0.4)] hover:scale-110 transition-transform z-50 ${isOpen ? "hidden" : "flex"}`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[360px] max-w-[calc(100vw-3rem)] h-[480px] bg-card border border-card-border rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-accent-gradient p-4 flex justify-between items-center text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Bot size={16} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Inferno AI</h3>
                  <p className="text-xs opacity-80">Online • Answers instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="p-4 flex-1 overflow-y-auto space-y-4 bg-primary/20 scrollbar-thin scrollbar-thumb-card-border" id="floating-messages-scroll">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-1 font-bold text-xs">I</div>
                <div className="bg-card border border-card-border p-3 rounded-2xl rounded-tl-sm text-xs text-text-primary shadow-sm leading-relaxed max-w-[85%]">
                  Hi there! I am Inferno, Infernex&apos;s AI assistant. Ask me anything about our services or pricing plans!
                </div>
              </div>

              {chatHistory.slice(1).map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role !== 'user' && (
                    <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-1 font-bold text-xs">I</div>
                  )}
                  <div className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[85%] ${
                    msg.role === 'user'
                      ? 'bg-accent-gradient text-white rounded-tr-sm'
                      : 'bg-card border border-card-border text-text-primary rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-1 font-bold text-xs">I</div>
                  <div className="bg-card border border-card-border p-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            <div className="flex gap-1.5 overflow-x-auto px-4 py-2 bg-primary/20 shrink-0 scrollbar-none border-t border-card-border/40">
              {['What is Infernex?', 'Pricing Plans', 'AI Receptionist', 'Book a free demo'].map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sug)}
                  disabled={isTyping}
                  className="px-3 py-1.5 rounded-full bg-card border border-card-border text-[10px] text-text-secondary hover:border-accent hover:text-text-primary transition-colors whitespace-nowrap"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 bg-card border-t border-card-border flex gap-2 shrink-0">
              <input
                type="text"
                disabled={isTyping}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Inferno..."
                className="flex-1 bg-primary border border-card-border rounded-xl px-4 py-2 text-xs text-text-primary outline-none focus:border-accent transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className="w-8 h-8 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform disabled:opacity-50"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// System Prompt
const INFERNO_SYSTEM_PROMPT = `You are "Inferno", the friendly, professional, and confident AI chatbot assistant for Infernex.
Your goal is to answer customer questions about Infernex services, pricing, and offerings.

INFERNEX BUSINESS INFORMATION:
- What is Infernex: A next-generation AI agency building intelligent AI agents, stunning websites, and automation systems. We automate customer communication, lead capture, appointment booking, and follow-ups 24/7.
- Location: Globally remote, serving clients primarily in the US.
- Status: New-generation AI agency onboarding founding clients.
- Differentiation: 1) Done-for-you (we build/manage everything), 2) 48-hour setup, 3) Affordable enterprise-level AI.
- Core Services:
  1. AI Agents (voice receptionists answering 24/7 like a human, booking appointments, capturing leads, sending confirmation SMS).
  2. Website Development (modern, fast, fully responsive sites designed to convert visitors).
  3. Automation Systems (CRM management, email/SMS campaigns, reminders, reporting).
- Pricing (Gyms & Fitness):
  * Basic AI Lead Machine: $500 setup (one time) + $199/month. Includes 24/7 Voice Receptionist, Website Chat Widget, Google Sheets Dashboard, Trial Booking, SMS Confirmation, Owner Email Alerts, Monthly Report.
  * AI Receptionist Pro: $1,500 setup (one time) + $399/month. Includes Basic + Outbound Follow-up Calls, Airtable CRM Dashboard, Renewal Reminders, SMS/Email Campaigns, Analytics Dashboard, Monthly Strategy Call.
  * AI Gym Operating System: $3,000 setup (one time) + $799/month. Includes Pro + AI Sales Agent (handles objections), Multi-location (up to 3 gyms), Staff Management, Owner AI Assistant (WhatsApp/Telegram), FB Ads Integration, Priority Support.
  * Custom plans/pricing are available (email contact@infernex.in).
  * No contract (30-day cancellation policy).
- Process: Discovery Call (30 min) -> We Build (24-48 hrs) -> Go Live.
- Technology Used: Vapi AI, Claude AI, Twilio, n8n, Google Sheets, Airtable, Looker Studio.
- Setup Details: No website needed to use the voice receptionist.
- Contact Email: contact@infernex.in

BEHAVIOR RULES (CRITICAL):
1. NEVER say "we don't do that". If asked about an unlisted service/industry, ALWAYS say yes and direct to contact@infernex.in for custom requirements.
2. ALWAYS end with a call to action. End every response with one of:
   - "Book a free demo at infernex.in"
   - "Email us at contact@infernex.in"
   - "Use the contact form on our website"
3. NEVER make up prices. Only quote the exact prices listed. For anything else, say "For custom pricing, email contact@infernex.in".
4. NEVER say "I don't know". If you don't know, say: "Great question! Our team can answer that in detail. Email us at contact@infernex.in and we will get back to you within 24 hours."
5. BE POSITIVE AND CONFIDENT. No negative words, no "unfortunately" or "sorry we can't".
6. FOR ANY OTHER BUSINESS TYPE (schools, hospitals, clinics, salons, real estate, etc.): Say: "Yes, we work with [business type] businesses. Our team can build a custom AI system for your specific needs. Email contact@infernex.in to discuss your requirements and get a custom quote."
7. URGENCY: Mention the Founding Partner Offer if appropriate: "We currently have limited founding partner spots available at a special rate. These fill up quickly. Email contact@infernex.in to check availability."
8. Keep answers concise but complete. Name of the bot is Inferno.`;
