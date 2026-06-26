"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { 
  Bot, 
  Smartphone,
  Check,
  Mail
} from "lucide-react";

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



export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-10%" });
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

    // Rule 4 Catch-all (Never say "I don't know")
    return "Great question! Our team can answer that in detail. Email us at contact@infernex.in and we will get back to you within 24 hours.";
  };

  const handleSend = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;
    
    const updatedHistory = [...chatHistory, { role: "user", content: text }];
    setChatHistory(updatedHistory);
    setInputValue("");
    setIsTyping(true);

    // Auto scroll
    setTimeout(() => {
      const scrollDiv = document.getElementById("inferno-messages-scroll");
      if (scrollDiv) scrollDiv.scrollTop = scrollDiv.scrollHeight;
    }, 50);

    // Simulate natural typing delay (800ms)
    setTimeout(() => {
      const reply = getLocalResponse(text);
      setChatHistory(prev => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
      
      // Auto scroll down again
      setTimeout(() => {
        const scrollDiv = document.getElementById("inferno-messages-scroll");
        if (scrollDiv) scrollDiv.scrollTop = scrollDiv.scrollHeight;
      }, 50);
    }, 800);
  };  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`py-24 relative overflow-hidden lg:min-h-screen lg:flex lg:items-center ${
        isInView ? "section-in-view" : ""
      }`}
    >
      {/* Animated Background (CSS GPU Accelerated) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
        {isInView && (
          <>
            <div className="absolute top-[20%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/10 rounded-full blur-[40px] md:blur-[60px] animate-orb-3" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF6B6B]/10 rounded-full blur-[50px] md:blur-[85px] animate-orb-4" />
          </>
        )}
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
            <a href="mailto:contact@infernex.in" className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-card-border hover:border-accent/50 shadow-sm hover:shadow-md transition-[border-color,box-shadow] duration-300 group">
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
              <div
                className="relative w-[240px] md:w-[260px] h-[420px] bg-[#F5F5F5] dark:bg-[#0F0F0F] border-[6px] border-[#E0E0E0] dark:border-[#2A2A2A] rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col animate-phone-float"
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
                  <div
                    className="bg-white dark:bg-[#2A2A2A] text-[#1A1A1A] dark:text-white border border-[rgba(0,0,0,0.06)] dark:border-white/10 rounded-[16px] p-3 shadow-lg flex gap-3 items-start w-full relative z-30 animate-notif-1"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                      <Smartphone size={14} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-bold text-[14px] leading-tight mb-1">New Lead!</div>
                      <div className="text-[13px] text-text-secondary leading-snug">John wants to book a trial</div>
                    </div>
                  </div>

                  {/* 2. Inbox Notification */}
                  <div
                    className="flex mt-3 bg-white dark:bg-[#2A2A2A] text-[#1A1A1A] dark:text-white border border-[rgba(0,0,0,0.06)] dark:border-white/10 rounded-[16px] p-3 shadow-lg gap-3 items-start w-full relative z-20 animate-notif-2"
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
                  </div>

                  {/* 3. Dashboard Card */}
                  <div
                    className="flex mt-3 bg-white dark:bg-[#2A2A2A] text-[#1A1A1A] dark:text-white border border-[rgba(0,0,0,0.06)] dark:border-white/10 rounded-[16px] p-3 shadow-lg flex-col gap-2 w-full relative z-10 animate-notif-3"
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
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Inferno Chatbot Box */}
          <div className="bg-card border border-card-border rounded-3xl p-6 md:p-8 shadow-2xl relative flex flex-col h-[550px] overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-card-border pb-4 mb-4 shrink-0">
              <div className="w-3.5 h-3.5 rounded-full bg-[#00ffaa] shadow-[0_0_10px_#00ffaa] animate-pulse" />
              <div>
                <h3 className="font-space-grotesk font-bold text-lg text-text-primary">INFERNO AI</h3>
                <p className="text-xs text-text-secondary">Online • Answers instantly</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1 scrollbar-thin scrollbar-thumb-card-border" id="inferno-messages-scroll">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0 font-bold text-xs font-space-grotesk">I</div>
                <div className="bg-primary/40 border border-card-border p-3.5 rounded-2xl rounded-tl-sm text-sm text-text-primary leading-relaxed max-w-[85%]">
                  Hi there! I am Inferno, Infernex&apos;s AI assistant. Ask me anything about our services, plans, pricing, or how we can automate your business 24/7!
                </div>
              </div>

              {chatHistory.slice(1).map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role !== 'user' && (
                    <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0 font-bold text-xs font-space-grotesk">I</div>
                  )}
                  <div className={`p-3.5 rounded-2xl text-sm leading-relaxed max-w-[85%] ${
                    msg.role === 'user' 
                      ? 'bg-accent-gradient text-white rounded-tr-sm' 
                      : 'bg-primary/40 border border-card-border text-text-primary rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0 font-bold text-xs font-space-grotesk">I</div>
                  <div className="bg-primary/40 border border-card-border p-3.5 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            <div className="flex gap-2 overflow-x-auto pb-3 shrink-0 scrollbar-none">
              {['What is Infernex?', 'Pricing Plans', 'AI Receptionist', 'Book a free demo'].map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sug)}
                  disabled={isTyping}
                  className="px-4 py-2 rounded-full bg-primary/40 border border-card-border text-xs text-text-secondary hover:border-accent hover:text-text-primary transition-colors whitespace-nowrap"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2 shrink-0 border-t border-card-border pt-4">
              <input
                type="text"
                disabled={isTyping}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Inferno about Infernex..."
                className="flex-1 bg-primary border border-card-border rounded-full px-5 py-3 text-sm text-text-primary outline-none focus:border-accent transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className="w-12 h-12 rounded-full bg-accent-gradient text-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform disabled:opacity-50"
              >
                <Bot size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}


