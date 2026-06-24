"use client";

import { motion } from "framer-motion";
import { Dumbbell, Pizza, GraduationCap, School, ShoppingCart, Plane } from "lucide-react";

const GymAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Proper Dumbbell */}
      <path d="M 140 150 L 260 150" stroke="#C41E3A" strokeWidth="12" strokeLinecap="round" fill="none" className="opacity-80 dark:opacity-60" />
      {/* Left Weights */}
      <rect x="120" y="100" width="20" height="100" rx="6" fill="none" stroke="#C41E3A" strokeWidth="4" className="opacity-70 dark:opacity-50" />
      <rect x="100" y="110" width="16" height="80" rx="4" fill="none" stroke="#C41E3A" strokeWidth="4" className="opacity-60 dark:opacity-40" />
      {/* Right Weights */}
      <rect x="260" y="100" width="20" height="100" rx="6" fill="none" stroke="#C41E3A" strokeWidth="4" className="opacity-70 dark:opacity-50" />
      <rect x="284" y="110" width="16" height="80" rx="4" fill="none" stroke="#C41E3A" strokeWidth="4" className="opacity-60 dark:opacity-40" />
      {/* Collars */}
      <rect x="140" y="135" width="10" height="30" rx="2" fill="#C41E3A" className="opacity-90" />
      <rect x="250" y="135" width="10" height="30" rx="2" fill="#C41E3A" className="opacity-90" />

      {/* AI Network connecting to Dumbbell */}
      <path d="M 50 80 L 110 110 M 50 220 L 110 190 M 350 80 L 290 110 M 350 220 L 290 190" stroke="#C41E3A" strokeWidth="2" strokeDasharray="4 4" fill="none" className="opacity-40 dark:opacity-20" />
      {[
        {cx:110, cy:110}, {cx:110, cy:190}, {cx:290, cy:110}, {cx:290, cy:190}, {cx:145, cy:150}, {cx:255, cy:150}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="4" fill="#C41E3A" className="opacity-100 dark:opacity-80 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <circle r="4" fill="#fff">
        <animateMotion dur="2s" repeatCount="indefinite" path="M 145 150 L 255 150" />
      </circle>
      <circle r="3" fill="#fff">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50 80 L 110 110 L 110 190 L 50 220" />
      </circle>
    </svg>
  </div>
);

const RestaurantAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Restaurant Storefront */}
      <rect x="100" y="80" width="200" height="150" rx="4" fill="none" stroke="#C41E3A" strokeWidth="3" className="opacity-70 dark:opacity-50" />
      {/* Awning */}
      <path d="M 85 140 L 315 140 L 290 100 L 110 100 Z" fill="none" stroke="#C41E3A" strokeWidth="3" strokeLinejoin="round" className="opacity-80 dark:opacity-60" />
      <path d="M 110 140 L 110 150 M 140 140 L 140 150 M 170 140 L 170 150 M 200 140 L 200 150 M 230 140 L 230 150 M 260 140 L 260 150 M 290 140 L 290 150" stroke="#C41E3A" strokeWidth="2" fill="none" className="opacity-80 dark:opacity-60" />
      {/* Door */}
      <rect x="180" y="160" width="40" height="70" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-60 dark:opacity-40" />
      <line x1="210" y1="195" x2="215" y2="195" stroke="#C41E3A" strokeWidth="2" className="opacity-80" />
      {/* Windows */}
      <rect x="115" y="160" width="50" height="40" rx="2" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-60 dark:opacity-40" />
      <rect x="235" y="160" width="50" height="40" rx="2" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-60 dark:opacity-40" />

      {/* Network pulsing dots around storefront */}
      {[
        {cx:100, cy:80}, {cx:300, cy:80}, {cx:85, cy:140}, {cx:315, cy:140}, {cx:140, cy:180}, {cx:260, cy:180}, {cx:200, cy:120}, {cx:200, cy:200}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="4" fill="#C41E3A" className="opacity-100 dark:opacity-85 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
      <circle r="3.5" fill="#fff">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 100 80 L 300 80 L 315 140 L 85 140 Z" />
      </circle>
    </svg>
  </div>
);

const CoachingAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Target/Bullseye for coaching goals */}
      <circle cx="200" cy="150" r="70" fill="none" stroke="#C41E3A" strokeWidth="4" className="opacity-80 dark:opacity-60" />
      <circle cx="200" cy="150" r="45" fill="none" stroke="#C41E3A" strokeWidth="3" className="opacity-70 dark:opacity-50" />
      <circle cx="200" cy="150" r="20" fill="none" stroke="#C41E3A" strokeWidth="3" className="opacity-80 dark:opacity-60" />
      
      {/* Arrow hitting bullseye */}
      <line x1="80" y1="50" x2="190" y2="140" stroke="#C41E3A" strokeWidth="5" strokeLinecap="round" className="opacity-95" />
      <polygon points="194,144 178,142 190,130" fill="#C41E3A" className="opacity-95" />
      
      {/* Pulsing highlights */}
      {[
        {cx:200, cy:80}, {cx:200, cy:220}, {cx:130, cy:150}, {cx:270, cy:150}, {cx:200, cy:150}, {cx:80, cy:50}, {cx:140, cy:100}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="4" fill="#C41E3A" className="opacity-100 dark:opacity-85 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.25}s` }} />
      ))}
      <circle r="3" fill="#fff">
        <animateMotion dur="2s" repeatCount="indefinite" path="M 80 50 L 190 140" />
      </circle>
    </svg>
  </div>
);

const SchoolsAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* School House Outline */}
      <path d="M 120 230 L 120 130 L 200 70 L 280 130 L 280 230 Z" fill="none" stroke="#C41E3A" strokeWidth="3" className="opacity-70 dark:opacity-50" />
      <rect x="180" y="160" width="40" height="70" fill="none" stroke="#C41E3A" strokeWidth="2.5" className="opacity-60 dark:opacity-40" />
      <circle cx="210" cy="195" r="3" fill="#C41E3A" className="opacity-90" />
      {/* Roof Clock */}
      <circle cx="200" cy="115" r="16" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-70 dark:opacity-50" />
      <line x1="200" y1="115" x2="200" y2="106" stroke="#C41E3A" strokeWidth="2" className="opacity-80" />
      <line x1="200" y1="115" x2="208" y2="115" stroke="#C41E3A" strokeWidth="1.5" className="opacity-80" />

      {/* Pulsing nodes representing classes/bookings */}
      {[
        {cx:120, cy:130}, {cx:280, cy:130}, {cx:200, cy:70}, {cx:150, cy:180}, {cx:250, cy:180}, {cx:200, cy:115}, {cx:120, cy:230}, {cx:280, cy:230}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="4" fill="#C41E3A" className="opacity-100 dark:opacity-85 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.18}s` }} />
      ))}
      <circle r="3" fill="#fff">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 120 230 L 120 130 L 200 70 L 280 130 L 280 230 Z" />
      </circle>
    </svg>
  </div>
);

const GroceryAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Shopping Cart */}
      <path d="M 100 100 L 125 100 L 155 200 L 270 200 L 300 120 L 132 120" fill="none" stroke="#C41E3A" strokeWidth="4" strokeLinecap="round" className="opacity-80 dark:opacity-60" />
      <circle cx="170" cy="225" r="12" fill="none" stroke="#C41E3A" strokeWidth="3" className="opacity-80" />
      <circle cx="255" cy="225" r="12" fill="none" stroke="#C41E3A" strokeWidth="3" className="opacity-80" />

      {/* Pulsing items inside and around cart */}
      {[
        {cx:155, cy:120}, {cx:190, cy:120}, {cx:225, cy:120}, {cx:260, cy:120}, {cx:180, cy:160}, {cx:220, cy:160}, {cx:250, cy:160}, {cx:100, cy:100}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="4" fill="#C41E3A" className="opacity-100 dark:opacity-85 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.12}s` }} />
      ))}
      <circle r="3" fill="#fff">
        <animateMotion dur="2s" repeatCount="indefinite" path="M 300 120 L 132 120" />
      </circle>
    </svg>
  </div>
);

const TravelAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Aeroplane Shape */}
      <path d="M 80 180 Q 200 100 320 60 Q 300 140 280 200 L 260 200 L 220 150 L 150 170 L 140 200 L 120 200 L 115 175 L 85 185 Z" fill="none" stroke="#C41E3A" strokeWidth="3" className="opacity-80 dark:opacity-60" />
      
      {/* Flight Path */}
      <path d="M 50 250 Q 150 190 350 50" fill="none" stroke="rgba(196,30,58,0.25)" strokeWidth="2.5" strokeDasharray="6 6" />

      {/* Staggered pulsing nodes */}
      {[
        {cx:80, cy:180}, {cx:150, cy:170}, {cx:220, cy:150}, {cx:320, cy:60}, {cx:280, cy:200}, {cx:150, cy:215}, {cx:250, cy:120}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="4" fill="#C41E3A" className="opacity-100 dark:opacity-85 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.22}s` }} />
      ))}
      <circle r="3.5" fill="#fff">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50 250 Q 150 190 350 50" />
      </circle>
    </svg>
  </div>
);

const industries = [
  {
    title: "Gyms & Fitness",
    icon: Dumbbell,
    badge: "AVAILABLE NOW",
    features: [
      "AI answers missed member calls",
      "Books gym tours automatically",
      "Responds to membership pricing queries",
      "Saves leads straight to gym dashboard",
      "Stops lost membership sales 24/7"
    ]
  },
  {
    title: "Restaurants",
    icon: Pizza,
    badge: "AVAILABLE NOW",
    features: [
      "AI takes food orders over phone",
      "Handles table bookings & timings",
      "Integrates with POS systems",
      "Answers menu & ingredient FAQs",
      "Sends SMS confirmation to clients"
    ]
  },
  {
    title: "Coaching",
    icon: GraduationCap,
    badge: "AVAILABLE NOW",
    features: [
      "Qualifies incoming student leads",
      "Books discovery calls on Calendar",
      "Automates client onboarding forms",
      "Handles billing & program queries",
      "Sends SMS reminders for sessions"
    ]
  },
  {
    title: "Schools",
    icon: School,
    badge: "COMING SOON",
    features: [
      "Answers admission & timing FAQs",
      "Screens parent inquiry phone calls",
      "Books campus visits & meetings",
      "Sends automated text alerts to parents",
      "CRM dashboard for admin staff"
    ]
  },
  {
    title: "Grocery",
    icon: ShoppingCart,
    badge: "COMING SOON",
    features: [
      "Takes stock availability inquiries",
      "Handles order-ahead collections",
      "Integrates with inventory systems",
      "Updates delivery schedules",
      "Drives automated customer loyalty"
    ]
  },
  {
    title: "Travel",
    icon: Plane,
    badge: "COMING SOON",
    features: [
      "Screens package & pricing questions",
      "Books flight & hotel consults",
      "Answers booking modification FAQs",
      "Captures target destinations",
      "Staggered email & SMS follow-ups"
    ]
  }
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

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-[#C41E3A] font-bold tracking-[0.15em] text-sm uppercase block mb-4">INDUSTRIES WE SERVE</span>
          <h2 className="font-space-grotesk font-bold text-[clamp(24px,4vw,56px)] leading-tight text-text-primary">
            Built For Your Industry
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((item) => {
            const AnimationComponent = 
              item.title === "Gyms & Fitness" ? GymAnimation :
              item.title === "Restaurants" ? RestaurantAnimation :
              item.title === "Coaching" ? CoachingAnimation :
              item.title === "Schools" ? SchoolsAnimation :
              item.title === "Grocery" ? GroceryAnimation :
              item.title === "Travel" ? TravelAnimation : null;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group bg-[#FFFFFF] dark:bg-[#141414] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-[16px] p-[28px] hover:translate-y-[-4px] hover:border-[#C41E3A] hover:shadow-[0_0_20px_rgba(196,30,58,0.15)] transition-[transform,border-color,box-shadow] duration-300 relative overflow-hidden flex flex-col h-full min-h-[280px]"
              >
                {/* AI Animation Layer (BOTTOM) */}
                {AnimationComponent && <AnimationComponent />}
                
                {/* Theme-aware Readability Layer (MIDDLE) */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-white/25 dark:bg-black/35" />

                {/* Badge */}
                <div className="absolute top-6 right-6 z-20">
                  {item.badge === "AVAILABLE NOW" ? (
                    <span className="bg-[rgba(196,30,58,0.15)] text-[#C41E3A] border border-[rgba(196,30,58,0.3)] rounded-[100px] text-[11px] font-bold px-[12px] py-[4px]">
                      {item.badge}
                    </span>
                  ) : (
                    <span className="bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.05)] text-[#999999] dark:text-[#666666] border border-transparent rounded-[100px] text-[11px] font-bold px-[12px] py-[4px]">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Icon SVG */}
                <div className="text-[#C41E3A] mb-6 relative z-20">
                  <item.icon size={48} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk font-bold text-[20px] text-[#1A1A1A] dark:text-[#FFFFFF] mb-4 relative z-20">
                  {item.title}
                </h3>
                
                {/* Features */}
                <ul className="space-y-3 mt-auto relative z-20">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-[14px] text-[#555555] dark:text-[#A0A0A0] leading-tight">
                      <span className="text-[#C41E3A] font-bold mr-2 select-none">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
