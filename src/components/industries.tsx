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
      {/* Signboard */}
      <rect x="160" y="60" width="80" height="25" rx="2" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-90 dark:opacity-70" />
      
      {/* AI Nodes around storefront */}
      <path d="M 160 60 L 120 40 M 240 60 L 280 40 M 100 230 L 50 230 M 300 230 L 350 230" stroke="#C41E3A" strokeWidth="2" strokeDasharray="4 4" fill="none" className="opacity-40 dark:opacity-20" />
      {[
        {cx:160, cy:60}, {cx:240, cy:60}, {cx:115, cy:160}, {cx:285, cy:160}, {cx:120, cy:40}, {cx:280, cy:40}, {cx:100, cy:230}, {cx:300, cy:230}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="4" fill="#C41E3A" className="opacity-100 dark:opacity-80 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <circle r="4" fill="#fff">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 120 40 L 160 60 L 240 60 L 280 40" />
      </circle>
    </svg>
  </div>
);

const CoachingAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Graduation Cap */}
      <path d="M 200 100 L 120 140 L 200 180 L 280 140 Z" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-80 dark:opacity-60" />
      <path d="M 140 150 L 140 200 Q 200 230 260 200 L 260 150" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-60 dark:opacity-40" />
      <path d="M 280 140 L 300 160 L 300 200" stroke="#C41E3A" strokeWidth="2" fill="none" className="opacity-70 dark:opacity-50" />
      <circle cx="300" cy="205" r="5" fill="#C41E3A" className="opacity-80 dark:opacity-60" />
      
      {/* Network Connections */}
      <path d="M 200 100 L 200 40 M 120 140 L 60 140 M 200 215 L 200 270" stroke="#C41E3A" strokeWidth="2" strokeDasharray="4 4" fill="none" className="opacity-40 dark:opacity-20" />
      
      {[
        {cx:200, cy:100}, {cx:120, cy:140}, {cx:200, cy:180}, {cx:280, cy:140}, {cx:200, cy:40}, {cx:60, cy:140}, {cx:200, cy:270}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="5" fill="#C41E3A" className="opacity-100 dark:opacity-80 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <circle r="4" fill="#fff">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 200 100 L 120 140 L 200 180 L 280 140 Z" />
      </circle>
    </svg>
  </div>
);

const SchoolsAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Student Head */}
      <circle cx="200" cy="80" r="25" fill="none" stroke="#C41E3A" strokeWidth="4" className="opacity-80 dark:opacity-60" />
      {/* Student Body */}
      <path d="M 170 200 L 175 115 Q 200 130 225 115 L 230 200 Z" fill="none" stroke="#C41E3A" strokeWidth="3" className="opacity-70 dark:opacity-50" />
      {/* Legs */}
      <path d="M 185 200 L 185 260 M 215 200 L 215 260" stroke="#C41E3A" strokeWidth="4" className="opacity-70 dark:opacity-50" />
      {/* Arms holding books */}
      <path d="M 175 120 Q 140 140 160 170 L 175 160" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-80 dark:opacity-60" />
      <path d="M 225 120 Q 260 140 240 170 L 225 160" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-80 dark:opacity-60" />
      {/* Backpack straps */}
      <path d="M 175 115 L 175 180 M 225 115 L 225 180" stroke="#C41E3A" strokeWidth="2" strokeDasharray="4 4" fill="none" className="opacity-50" />
      
      {/* Stack of Books */}
      <g transform="translate(198, 155) rotate(-15)">
        <rect x="-35" y="-15" width="55" height="12" rx="2" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-90 dark:opacity-70" />
        <rect x="-35" y="-3" width="50" height="12" rx="2" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-90 dark:opacity-70" />
        <rect x="-35" y="9" width="60" height="12" rx="2" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-90 dark:opacity-70" />
      </g>
      
      {/* AI Knowledge paths radiating */}
      <path d="M 200 55 L 200 20 M 175 60 L 140 30 M 225 60 L 260 30" stroke="#C41E3A" strokeWidth="2" strokeDasharray="4 4" fill="none" className="opacity-40 dark:opacity-20" />
      
      {[
        {cx:200, cy:55}, {cx:200, cy:20}, {cx:175, cy:60}, {cx:140, cy:30}, {cx:225, cy:60}, {cx:260, cy:30}, {cx:160, cy:170}, {cx:240, cy:170}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="4" fill="#C41E3A" className="opacity-100 dark:opacity-80 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <circle r="3" fill="#fff">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 140 30 L 175 60 L 200 80" />
      </circle>
    </svg>
  </div>
);

const GroceryAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Shopping Cart */}
      <path d="M 80 80 L 120 80 L 150 180 L 280 180 L 310 100 L 130 100" stroke="#C41E3A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-80 dark:opacity-60" />
      <circle cx="170" cy="210" r="10" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-80 dark:opacity-60" />
      <circle cx="260" cy="210" r="10" stroke="#C41E3A" strokeWidth="3" fill="none" className="opacity-80 dark:opacity-60" />
      {/* Cart Grid/Lines */}
      <path d="M 140 140 L 295 140 M 180 100 L 170 180 M 220 100 L 210 180 M 260 100 L 250 180" stroke="#C41E3A" strokeWidth="2" fill="none" className="opacity-50 dark:opacity-30" />
      
      {/* Scanner/AI Connection lines */}
      <path d="M 310 100 L 350 60 M 80 80 L 50 50" stroke="#C41E3A" strokeWidth="2" strokeDasharray="4 4" fill="none" className="opacity-40 dark:opacity-20" />
      
      {[
        {cx:120, cy:80}, {cx:150, cy:180}, {cx:280, cy:180}, {cx:310, cy:100}, {cx:170, cy:210}, {cx:260, cy:210}, {cx:350, cy:60}, {cx:50, cy:50}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="5" fill="#C41E3A" className="opacity-100 dark:opacity-80 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <circle r="4" fill="#fff">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 120 80 L 150 180 L 280 180 L 310 100" />
      </circle>
    </svg>
  </div>
);

const TravelAnimation = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-[0.45] dark:group-hover:opacity-[0.32] transition-opacity duration-500 overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Passenger Aeroplane */}
      <g transform="translate(40, -20) rotate(15, 200, 150)">
        {/* Fuselage (Body) */}
        <path d="M 60 150 Q 40 150 40 140 Q 40 130 60 130 L 280 130 Q 340 130 350 140 Q 340 150 280 150 Z" fill="none" stroke="#C41E3A" strokeWidth="4" className="opacity-80 dark:opacity-60" />
        {/* Tail */}
        <path d="M 60 130 L 40 70 L 90 70 L 110 130" fill="none" stroke="#C41E3A" strokeWidth="3" className="opacity-80 dark:opacity-60" />
        <path d="M 50 140 L 20 140 L 30 150 Z" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-60 dark:opacity-40" />
        {/* Main Wings */}
        <path d="M 190 150 L 140 230 L 190 230 L 230 150" fill="none" stroke="#C41E3A" strokeWidth="3" strokeLinejoin="round" className="opacity-80 dark:opacity-60" />
        <path d="M 210 130 L 170 80 L 220 80 L 250 130" fill="none" stroke="#C41E3A" strokeWidth="2" strokeLinejoin="round" className="opacity-60 dark:opacity-40" />
        {/* Engines */}
        <rect x="160" y="155" width="30" height="12" rx="4" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-70 dark:opacity-50" />
        <rect x="190" y="115" width="25" height="10" rx="3" fill="none" stroke="#C41E3A" strokeWidth="2" className="opacity-70 dark:opacity-50" />
        {/* Passenger Windows */}
        <g stroke="#C41E3A" strokeWidth="2" fill="none" className="opacity-90 dark:opacity-70">
          <circle cx="120" cy="140" r="2.5" />
          <circle cx="140" cy="140" r="2.5" />
          <circle cx="160" cy="140" r="2.5" />
          <circle cx="180" cy="140" r="2.5" />
          <circle cx="200" cy="140" r="2.5" />
          <circle cx="220" cy="140" r="2.5" />
          <circle cx="240" cy="140" r="2.5" />
          <circle cx="260" cy="140" r="2.5" />
          {/* Cockpit Window */}
          <path d="M 310 135 L 325 135 L 325 145 L 310 145 Z" />
        </g>
      </g>
      
      {/* Flight Path / AI Data Streams */}
      <path d="M 20 280 Q 150 250 380 40" stroke="#C41E3A" strokeWidth="2" strokeDasharray="8 8" fill="none" className="opacity-40 dark:opacity-20" />
      
      {[
        {cx:20, cy:280}, {cx:150, cy:250}, {cx:380, cy:40}
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="5" fill="#C41E3A" className="opacity-100 dark:opacity-80 animate-svg-scale-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <circle r="4" fill="#fff">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 20 280 Q 150 250 380 40" />
      </circle>
    </svg>
  </div>
);

const industries = [
  {
    title: "Gyms & Fitness",
    icon: Dumbbell,
    badge: "AVAILABLE NOW",
    features: ["AI Voice Receptionist 24/7", "Automated Trial Booking", "Member Renewal Reminders"],
  },
  {
    title: "Restaurants",
    icon: Pizza,
    badge: "COMING SOON",
    features: ["AI Reservation Booking", "Order Inquiry Handling", "Promotional Campaigns"],
  },
  {
    title: "Coaching",
    icon: GraduationCap,
    badge: "COMING SOON",
    features: ["AI Admission Assistant", "Demo Class Booking", "Student CRM"],
  },
  {
    title: "Schools",
    icon: School,
    badge: "COMING SOON",
    features: ["Enquiry Handling AI", "Admission Automation", "Parent Communication"],
  },
  {
    title: "Grocery",
    icon: ShoppingCart,
    badge: "COMING SOON",
    features: ["Order Management AI", "Delivery Updates", "Customer Support"],
  },
  {
    title: "Travel",
    icon: Plane,
    badge: "COMING SOON",
    features: ["AI Travel Consultant", "Booking Automation", "Customer Support"],
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => {
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[#FFFFFF] dark:bg-[#141414] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-[16px] p-[28px] hover:translate-y-[-4px] hover:border-[#C41E3A] hover:shadow-[0_0_20px_rgba(196,30,58,0.15)] transition-all duration-300 relative overflow-hidden flex flex-col h-full min-h-[280px]"
              >
                {/* AI Animation Layer (BOTTOM) */}
                {AnimationComponent && <AnimationComponent />}
                
                {/* Theme-aware Readability Layer (MIDDLE) */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-white/25 dark:bg-black/35 backdrop-blur-[2px]" />

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
        </div>
      </div>
    </section>
  );
}
