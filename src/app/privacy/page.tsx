"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import { Shield, Eye, Lock, FileText } from "lucide-react";

const FloatingChat = dynamic(() => import("@/components/floating-chat"), { ssr: false });

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-primary">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-card-border bg-gradient-to-b from-accent/5 to-transparent">
        {/* Glow Effects */}
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#FF6B6B]/10 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <Shield size={14} /> Legal Documentation
          </div>
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl tracking-tight text-text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Last Updated: June 23, 2026. Learn how Infernex AI collects, protects, and handles your information when you interact with our AI agents and services.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-card/50 border border-card-border rounded-2xl p-8 md:p-12 backdrop-blur-md space-y-10 text-text-secondary leading-relaxed">
            
            <div className="space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary flex items-center gap-3">
                <Eye className="text-accent" size={22} /> 1. Information We Collect
              </h2>
              <p>
                At Infernex AI, we collect information to provide better services, build tailored AI agents, and communicate effectively with our clients. The types of information we collect include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Data:</strong> Name, business email address, phone number, and company name when you fill out forms or chat inquiries.</li>
                <li><strong>Service Details:</strong> Information about your business type, operating challenges, and selected AI features you request.</li>
                <li><strong>AI Interaction Data:</strong> Transcripts and interaction history from voice calls or chat widgets powered by our AI agents to optimize system performance.</li>
                <li><strong>Usage Data:</strong> Technical logs, IP address, browser type, and page access details collected via cookies.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary flex items-center gap-3">
                <Shield className="text-accent" size={22} /> 2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to operate, maintain, and improve our services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deploying and personalizing your custom AI Voice Agents and business automations.</li>
                <li>Processing your requests, contacting you regarding consultations, and sending service updates.</li>
                <li>Analyzing usage trends to improve our website experience and diagnostic accuracy.</li>
                <li>Preventing fraudulent activities and securing our technical environment.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary flex items-center gap-3">
                <Lock className="text-accent" size={22} /> 3. Data Protection & Security
              </h2>
              <p>
                We implement robust security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We utilize industry-standard encryption protocols (SSL/TLS) for data in transit and secure database storage for inactive data.
              </p>
              <p>
                Please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary flex items-center gap-3">
                <FileText className="text-accent" size={22} /> 4. Sharing Your Data
              </h2>
              <p>
                We do not sell, trade, or rent your personal identification information to third parties. We may share information with trusted third-party service providers (such as hosting partners or payment processors) strictly to help us run our business and deliver services to you, subject to confidentiality agreements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary">
                5. Your Choices & Rights
              </h2>
              <p>
                You have the right to request access to the personal data we hold about you, request corrections, or request complete deletion of your information from our active databases. To make these requests, please contact us at <a href="mailto:contact@infernex.in" className="text-accent hover:underline font-semibold">contact@infernex.in</a>.
              </p>
            </div>

            <div className="pt-6 border-t border-card-border space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <p className="font-semibold text-text-primary">
                Email: <a href="mailto:contact@infernex.in" className="text-accent hover:underline">contact@infernex.in</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </main>
  );
}
