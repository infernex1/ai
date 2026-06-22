"use client";

const marqueeItems = [
  "AI Voice Agents",
  "✦",
  "Website Development",
  "✦",
  "Lead Automation",
  "✦",
  "CRM Systems",
  "✦",
  "24/7 AI Receptionist",
  "✦",
  "Business Automation",
  "✦",
  "Custom AI Solutions",
  "✦",
  "SMS Campaigns",
  "✦",
];

export default function MarqueeTicker() {
  return (
    <section id="marquee-ticker" className="py-[20px] min-h-[64px] flex items-center bg-primary relative overflow-hidden border-y border-border">
      {/* Gradient fades for edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-primary to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-primary to-transparent pointer-events-none"></div>

      <div className="flex whitespace-nowrap group w-full">
        <div className="animate-marquee gap-8 px-4 items-center group-hover:[animation-play-state:paused] flex">
          {/* We render the list 4 times to ensure seamless scrolling on all screen sizes */}
          {[...Array(4)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-8 items-center shrink-0">
              {marqueeItems.map((item, i) => (
                <span
                  key={i}
                  className={`font-space-grotesk ${
                    item === "✦" 
                      ? "text-[#C41E3A] text-[20px] font-bold" 
                      : "text-[18px] font-semibold tracking-[0.02em] text-[#1A1A1A] dark:text-[#F0EDE8]"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
