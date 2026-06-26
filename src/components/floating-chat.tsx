"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

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

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{ role: string; content: string }>>([
    { role: "system", content: INFERNO_SYSTEM_PROMPT }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getLocalResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    // Urgency Found Partner check first
    if (q.includes("founding") || q.includes("partner") || q.includes("offer") || q.includes("special")) {
      return "Yes! We are onboarding our first 5 founding gym partners at a special reduced rate, with direct team access and priority setup. Only limited spots are remaining! Email contact@infernex.in to check availability.";
    }

    // Specific business types checks (Rule 6)
    if (q.includes("restaurant") || q.includes("cafe") || q.includes("food") || q.includes("eat")) {
      return "Absolutely! We work with restaurants and cafes. We build AI reservation booking, customer inquiry handling, promotional campaigns, and more — plus beautiful restaurant websites. Email our team at contact@infernex.in with your requirements and we will put together a custom solution for your restaurant. Book a free demo at infernex.in";
    }
    if (q.includes("school") || q.includes("education") || q.includes("student")) {
      return "Yes! We handle enquiry AI, admission automation, parent communication, event reminders, and student follow-up systems for schools. Our team can build a custom AI system for your specific needs. Email contact@infernex.in to discuss your requirements and get a custom quote. Use the contact form on our website";
    }
    if (q.includes("hospital") || q.includes("clinic") || q.includes("doctor") || q.includes("medical") || q.includes("patient")) {
      return "Yes, we work with healthcare businesses and clinics too. We build AI appointment booking, patient inquiry handling, reminder systems, and more. Email contact@infernex.in to discuss your requirements and get a custom quote. Book a free demo at infernex.in";
    }
    if (q.includes("coaching") || q.includes("institute") || q.includes("demo class")) {
      return "Absolutely yes. We build AI admission assistants, demo class booking systems, student CRM, parent communication automation, and fee reminder systems for coaching institutes. Reach our team at: contact@infernex.in. Book a free demo at infernex.in";
    }
    if (q.includes("grocery") || q.includes("store") || q.includes("supermarket")) {
      return "Yes. We build order management AI, customer support bots, delivery updates, and promotional campaigns for grocery businesses. Get in touch at contact@infernex.in to discuss your requirements and get a custom quote. Use the contact form on our website";
    }
    if (q.includes("travel") || q.includes("agency") || q.includes("consultant")) {
      return "Absolutely. We build AI travel consultants, booking automation, itinerary follow-up, payment reminders, and customer support systems. Contact us at contact@infernex.in to discuss your requirements. Book a free demo at infernex.in";
    }
    if (q.includes("hotel") || q.includes("salon") || q.includes("real estate") || q.includes("gym") || q.includes("fitness")) {
      // Gym has specific plans listed below, but general inquiries get:
      if (q.includes("gym") || q.includes("fitness") || q.includes("cost") || q.includes("price") || q.includes("pricing") || q.includes("plan") || q.includes("how much")) {
        // Proceed to gym plans
      } else {
        return "Yes, we work with gym, real estate, hotel, and salon businesses. Our team can build a custom AI system for your specific needs. Email contact@infernex.in to discuss your requirements and get a custom quote. Book a free demo at infernex.in";
      }
    }

    // Pricing & plans
    if (q.includes("price") || q.includes("cost") || q.includes("pricing") || q.includes("plan") || q.includes("how much") || q.includes("rate")) {
      if (q.includes("basic") || q.includes("starter") || q.includes("199")) {
        return "The Basic AI Lead Machine is $199/month (+ one-time $500 setup). It includes: 24/7 AI Voice Receptionist, Website Chat Widget, Lead Capture Dashboard (Google Sheets), Trial Booking Automation, SMS Confirmation to leads, Owner Email Alerts, and a Monthly Report. Book a free demo at infernex.in";
      }
      if (q.includes("pro") || q.includes("popular") || q.includes("399")) {
        return "The AI Receptionist Pro is $399/month (+ one-time $1,500 setup). It includes everything in Basic, plus: Outbound Follow-up Calls (AI calls leads back), Full CRM Dashboard (Airtable), Member Renewal Reminders, SMS and Email Campaigns, Analytics Dashboard, and a Monthly Strategy Call. Book a free demo at infernex.in";
      }
      if (q.includes("premium") || q.includes("operating system") || q.includes("799") || q.includes("os")) {
        return "The AI Gym Operating System is $799/month (+ one-time $3,000 setup). It includes everything in Pro, plus: AI Sales Agent (handles price objections), Multi-Location Support (up to 3 gyms), Staff Management System, Owner AI Assistant Bot (WhatsApp/Telegram), Facebook Ads Integration, Advanced Analytics, and Priority Support. Book a free demo at infernex.in";
      }
      return "We have three plans starting at $199/month plus a one-time setup fee:\n- Basic: $500 setup + $199/month\n- Pro: $1,500 setup + $399/month\n- Premium: $3,000 setup + $799/month\nWe also offer custom pricing. Would you like details on any specific plan? Or book a free demo at infernex.in";
    }

    // Services
    if (q.includes("service") || q.includes("what do you do") || q.includes("offer") || q.includes("work")) {
      return "We offer three core services: \n1. AI AGENTS (24/7 natural voice receptionists and chatbots that capture leads, book trials, and follow up).\n2. WEBSITE DEVELOPMENT (stunning, fast, conversion-optimized websites).\n3. AUTOMATION SYSTEMS (automating workflows, CRM, email/SMS campaigns, and renewal reminders).\nWhich service are you interested in? Email us at contact@infernex.in";
    }

    // AI receptionist details
    if (q.includes("voice") || q.includes("receptionist") || q.includes("phone") || q.includes("call")) {
      return "Our AI voice receptionist answers your business calls automatically 24/7. It speaks naturally like a human, answers customer questions, collects contact details, books appointments, and sends confirmation SMS—all naturally. Every call is answered and captured! Book a free demo at infernex.in to hear it in action.";
    }

    // Website details
    if (q.includes("website") || q.includes("web dev") || q.includes("develop")) {
      return "Yes, absolutely! We build modern, fast, fully responsive websites optimized for speed, SEO, and converting visitors. Contact our team for a custom quote: contact@infernex.in";
    }

    // Automation details
    if (q.includes("automate") || q.includes("automation") || q.includes("workflow")) {
      return "We automate your entire business workflow—including CRM management (Google Sheets/Airtable), automated email/SMS follow-ups, renewal reminders, and analytics reporting so your business runs on autopilot 24/7. Book a free demo at infernex.in";
    }

    // Contract concern
    if (q.includes("contract") || q.includes("agreement") || q.includes("cancel")) {
      return "No long-term contracts! We operate on a simple 30-day cancellation policy. Cancel anytime with 30 days notice—no hidden fees, no lock-in, no risk. We are confident you will love the results. Email us at contact@infernex.in";
    }

    // Setup process & duration
    if (q.includes("how it works") || q.includes("process") || q.includes("step") || q.includes("setup")) {
      if (q.includes("how long") || q.includes("time") || q.includes("duration") || q.includes("setup take")) {
        return "For standard setups, we go live within 48 hours of receiving your information! Complex custom setups with multiple integrations may take 1-2 weeks. Email us at contact@infernex.in to get started.";
      }
      return "Our setup is simple: \nStep 1: Discovery Call (30 min) to learn your hours, pricing, and goals. \nStep 2: We build everything in 24-48 hours (you do nothing).\nStep 3: Go live and start capturing leads automatically! Book a free demo at infernex.in";
    }

    // Location / operation
    if (q.includes("where") || q.includes("location") || q.includes("based") || q.includes("country") || q.includes("us")) {
      return "Infernex operates globally, primarily serving clients in the United States. Our team works remotely and is available to support clients across all time zones. Email us at contact@infernex.in";
    }

    // Natural sounding
    if (q.includes("natural") || q.includes("sound") || q.includes("human") || q.includes("real person")) {
      return "Yes! Our AI voice receptionists use advanced natural language processing that sounds human. Callers get natural flows, pricing info, and booking seamlessly. Want to hear it? Book a free demo at infernex.in and our AI will call you directly!";
    }

    // Tech questions
    if (q.includes("tech") || q.includes("technology") || q.includes("software") || q.includes("tool")) {
      return "We use industry-leading tools: Vapi AI for voice, Claude AI (Anthropic) for intelligence, Twilio for SMS, n8n for workflow automation, Google Sheets/Airtable for data, and Looker Studio for analytics. Email contact@infernex.in to check compatibility with your current tools.";
    }

    // Security / data safety
    if (q.includes("safe") || q.includes("security") || q.includes("data") || q.includes("privacy")) {
      return "Yes, your data is 100% safe. We use enterprise-grade security. Customer information is stored securely and never shared with third parties. We comply with all standard data protection requirements. Email contact@infernex.in for more details.";
    }

    // Results & ROI
    if (q.includes("result") || q.includes("roi") || q.includes("return") || q.includes("expect")) {
      return "Most clients see return on investment within the first month. Just one booked member covers the fee, and every call answered is pure profit. Expect zero missed calls, automated lead capture, and trial bookings. Email us at contact@infernex.in";
    }

    // Getting started / book demo
    if (q.includes("start") || q.includes("get started") || q.includes("join") || q.includes("buy") || q.includes("book") || q.includes("demo")) {
      return "Getting started is simple! Email us at contact@infernex.in with your business name and phone number, or book a free demo at infernex.in. We will set up a quick 30-minute discovery call and get you live in 48 hours!";
    }

    // About Infernex
    if (q.includes("infernex") || q.includes("who are you") || q.includes("what is it")) {
      return "Infernex is a next-generation AI agency that builds intelligent AI agents, stunning websites, and automation systems. We help businesses grow by automating customer communication, lead capture, appointment booking, and follow-ups 24/7. Book a free demo at infernex.in";
    }

    // Rule 6 Specific fallback for custom business inquiries
    if (q.includes("business") || q.includes("build for") || q.includes("work with")) {
      return "Yes, we build AI systems and websites for all types of businesses. Our team can build a custom AI system for your specific needs. Email contact@infernex.in to discuss your requirements and get a custom quote.";
    }

    // Return fallback token to trigger API call for custom questions
    return "API_FALLBACK";
  };

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

    const localReply = getLocalResponse(text);

    if (localReply !== "API_FALLBACK") {
      // Simulate natural typing delay for local rule-based match
      setTimeout(() => {
        setChatHistory(prev => [...prev, { role: "assistant", content: localReply }]);
        setIsTyping(false);
        setTimeout(() => {
          const scrollDiv = document.getElementById("floating-messages-scroll");
          if (scrollDiv) scrollDiv.scrollTop = scrollDiv.scrollHeight;
        }, 50);
      }, 700);
      return;
    }

    // Call OpenRouter API route for custom answers
    try {
      let historyToSend = updatedHistory;
      if (historyToSend.length > 12) {
        historyToSend = [
          historyToSend[0],
          ...historyToSend.slice(historyToSend.length - 10)
        ];
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: historyToSend
        })
      });

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      const reply = data.choices[0].message.content;

      setChatHistory(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("OpenRouter API error:", error);
      // Fallback response complying with Rule 4
      const finalFallback = "Great question! Our team can answer that in detail. Email us at contact@infernex.in and we will get back to you within 24 hours.";
      setChatHistory(prev => [...prev, { role: "assistant", content: finalFallback }]);
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


