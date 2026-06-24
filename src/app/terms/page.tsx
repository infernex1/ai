"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import { FileText, CheckCircle, Scale, AlertCircle } from "lucide-react";

const FloatingChat = dynamic(() => import("@/components/floating-chat"), { ssr: false });

export default function TermsOfService() {
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
            <Scale size={14} /> Legal Documentation
          </div>
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl tracking-tight text-text-primary mb-6">
            Terms of Service
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Last Updated: June 23, 2026. Please read these terms carefully before utilizing our custom website building, AI automation, and AI agent services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-card border border-card-border rounded-2xl p-8 md:p-12 space-y-10 text-text-secondary leading-relaxed">
            
            <div className="space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary flex items-center gap-3">
                <FileText className="text-accent" size={22} /> 1. Acceptance of Terms
              </h2>
              <p>
                By accessing Infernex AI&apos;s website and utilizing our custom services (including custom AI Voice Agents, CRM setups, automation pipelines, and website design/development), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary flex items-center gap-3">
                <CheckCircle className="text-accent" size={22} /> 2. Scope of Services
              </h2>
              <p>
                Infernex AI offers tailored business operations setups, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automated AI agents (voice and chat) for lead handling and general receptionist functions.</li>
                <li>Design, development, and hosting configuration of high-conversion business websites.</li>
                <li>Custom CRM integrations and automated outreach channels.</li>
              </ul>
              <p>
                All specifications, development milestones, and project criteria will be outlined in separate service agreements signed before project kickoff.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary flex items-center gap-3">
                <Scale className="text-accent" size={22} /> 3. Payment & Pricing
              </h2>
              <p>
                Fees for custom agency development and monthly subscriptions for hosting, API tokens, and support are outlined in your invoice or selected tier. 
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscription payments are billed automatically on a recurring monthly or annual basis.</li>
                <li>We reserve the right to suspend API or system functionality if subscription payments are overdue.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary flex items-center gap-3">
                <AlertCircle className="text-accent" size={22} /> 4. Limitations of Liability
              </h2>
              <p>
                Infernex AI is not liable for any direct, indirect, incidental, or consequential damages resulting from system downtime, missed phone calls handled by AI agents, or service interruptions from upstream AI model providers (such as OpenAI or Anthropic).
              </p>
              <p>
                We do not guarantee that the utilization of automated agents will meet specific sales quotas or completely eliminate missed lead calls, although systems are built to maximize performance.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary">
                5. Intellectual Property
              </h2>
              <p>
                Upon full payment of all custom design and setup fees, the client owns all design assets and custom code created for their project. Infernex AI retains rights to our core pre-built software blocks, templates, and proprietary system frameworks.
              </p>
            </div>

            <div className="pt-6 border-t border-card-border space-y-4">
              <h2 className="font-space-grotesk font-bold text-2xl text-text-primary">
                Questions?
              </h2>
              <p>
                If you have any questions or concern regarding these Terms of Service, please reach out to our legal department:
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
