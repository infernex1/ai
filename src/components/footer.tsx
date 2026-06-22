"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-border pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <span className="font-space-grotesk font-bold text-3xl tracking-tighter text-text-primary group-hover:text-accent transition-colors">
                INFERNEX
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Next-generation AI agency building intelligent automation systems, custom websites, and 24/7 AI agents for businesses ready to scale.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/Infernex_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-text-primary hover:border-accent hover:text-accent transition-all">
                𝕏
              </a>
              <a href="https://www.linkedin.com/company/infernex" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-text-primary hover:border-accent hover:text-accent transition-all">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-text-primary hover:border-accent hover:text-accent transition-all">
                IG
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-space-grotesk font-bold text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["About", "Process", "Pricing", "FAQ"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-text-secondary text-sm hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-space-grotesk font-bold text-text-primary mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-text-secondary text-sm hover:text-accent transition-colors">
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-text-secondary text-sm hover:text-accent transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-text-secondary text-sm hover:text-accent transition-colors">
                  Lead Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-text-secondary text-sm hover:text-accent transition-colors">
                  Custom CRM Builds
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-space-grotesk font-bold text-text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-text-secondary text-sm flex items-center gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-accent" /> 
                <a href="mailto:contact@infernex.in" className="hover:text-accent transition-colors">contact@infernex.in</a>
              </li>
              <li className="text-text-secondary text-sm flex items-center gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-accent" /> Los Angeles, CA
              </li>
            </ul>
            <div className="mt-8">
              <Link href="#contact" className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent font-semibold text-sm hover:bg-accent hover:text-white transition-all">
                Book a Demo
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs">
            © {currentYear} Infernex AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-text-secondary text-xs hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-secondary text-xs hover:text-text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
