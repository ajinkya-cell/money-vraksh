"use client";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen pt-[120px] pb-24">
      {/* Ambient Light Leak */}
      <div className="light-leak-primary top-[-100px] left-[-200px]" />
      
      <main className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
        {/* Header/Hero Section */}
        <section className="mb-24 text-center">
          <h1 className="font-display-lg text-4xl md:text-6xl font-bold mb-6 font-headline leading-tight">
            Empowering Your Financial Future with <span className="gradient-text-primary">Precision</span>
          </h1>
          <p className="font-body-lg text-body-lg text-slate-text max-w-3xl mx-auto mb-10 leading-relaxed">
            We are a premier stock market research and advisory firm, dedicated to providing high-net-worth individuals and institutional investors with actionable, data-driven insights.
          </p>
        </section>

        {/* Bento Grid: Story & Values */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">
          {/* Company Story (Spans 8 columns) */}
          <div className="glass-panel rounded-2xl p-8 md:col-span-8 flex flex-col justify-center relative overflow-hidden group border border-elegant">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-premium-gold" style={{ fontVariationSettings: "'FILL' 1" }}>
                  history_edu
                </span>
                <h2 className="font-headline-lg text-2xl md:text-3xl font-bold font-headline">Our Story</h2>
              </div>
              <p className="text-slate-text mb-4 leading-relaxed font-body-md">
                Founded on the principle that superior market intelligence should be accessible to those who seek serious wealth generation, MoneyVraksh has grown from a specialized analytics desk into a trusted advisory powerhouse.
              </p>
              <p className="text-slate-text leading-relaxed font-body-md">
                Our deep-rooted expertise in navigating volatile markets ensures that our clients are always positioned strategically, leveraging both macro trends and micro anomalies to secure sustained growth.
              </p>
            </div>
          </div>

          {/* Core Values (Spans 4 columns) */}
          <div className="glass-panel rounded-2xl p-8 md:col-span-4 relative overflow-hidden border border-elegant">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                diamond
              </span>
              <h2 className="font-headline-md text-xl font-bold font-headline">Core Values</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface font-semibold mb-1">Integrity</h3>
                  <p className="font-data-mono text-data-mono text-slate-text text-xs">Unwavering ethical standards.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-1">visibility</span>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface font-semibold mb-1">Transparency</h3>
                  <p className="font-data-mono text-data-mono text-slate-text text-xs">Clear, honest communication.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-1">target</span>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface font-semibold mb-1">Precision</h3>
                  <p className="font-data-mono text-data-mono text-slate-text text-xs">Data-backed analysis.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-1">handshake</span>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface font-semibold mb-1">Client-Focus</h3>
                  <p className="font-data-mono text-data-mono text-slate-text text-xs">Your success is our priority.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership & Compliance */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-24">
          {/* Leadership Message */}
          <div className="glass-panel rounded-2xl p-8 border border-elegant border-l-4 border-l-primary flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-surface-variant overflow-hidden border border-elegant relative">
                <Image
                  alt="Mr. Chetan Sharma"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwckzyRlBCI1_c4UPhwXkKseHMv1rzAP6XKS5CKcjEBO5xeDmnU0rb9znCXPYo6TMpMCfcFtpkNSPY9-Jx9mgM0o_Gbr_hF2rI3rt8hGaeO6QwHpVzmL1N6hn9pciJCUUsUjf2FthBMFWdebH2peO-s2NN64Gpcx3psOMrf4DjPLAUHhVEA344vjHY-H_l5AAtzTk0AOP2BOE6Ro26mvnurhByZtUdX_Jhc1UhU0ih1UYpK4fALZCKxfPrpGdws0Y7YhSeDrTdI3U8"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-headline-md text-lg font-bold font-headline">Message from Leadership</h2>
                <p className="font-label-md text-label-md text-premium-gold font-medium">Mr. Chetan Sharma, Founder &amp; CEO</p>
              </div>
            </div>
            <blockquote className="italic text-slate-text mb-4 border-l border-elegant pl-4 leading-relaxed font-body-md">
              &quot;In an era of information overload, true value lies in synthesized intelligence. At MoneyVraksh, we don&apos;t just provide data; we provide conviction. Our goal is to transform complexity into clarity, empowering you to navigate the financial markets with absolute confidence.&quot;
            </blockquote>
          </div>

          {/* Compliance */}
          <div className="glass-panel rounded-2xl p-8 bg-surface-container-low/50 border border-elegant flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
                  gavel
                </span>
                <h2 className="font-headline-md text-xl font-bold font-headline text-on-surface">Regulatory Compliance</h2>
              </div>
              <p className="text-slate-text mb-6 leading-relaxed font-body-md">
                We operate strictly under the regulatory guidelines, ensuring maximum capital protection, risk mitigation, and full transparency for our retail and HNI clients.
              </p>
            </div>
            <div className="bg-background-midnight p-4 rounded-xl border border-elegant flex items-center justify-between">
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1 font-semibold text-xs uppercase">
                  SEBI Registration Status
                </p>
                <p className="font-data-mono text-data-mono text-primary font-bold text-sm">
                  XXXXXXXXX (Details Pending)
                </p>
              </div>
              <span className="material-symbols-outlined text-success-emerald text-3xl">
                verified_user
              </span>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="glass-panel rounded-2xl p-12 text-center relative overflow-hidden border border-elegant">
          <div className="absolute inset-0 bg-gradient-to-r from-background-midnight via-primary/10 to-background-midnight z-0" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-3xl font-bold mb-4 font-headline text-on-surface">
              Join Thousands of Successful Investors.
            </h2>
            <p className="text-slate-text mb-8 leading-relaxed">
              Experience the difference of precision research and dedicated advisory.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="gradient-bg-primary text-background font-label-md text-label-md px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all font-bold hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Your Journey
              </Link>
              <Link
                href="/services"
                className="bg-transparent border border-premium-gold text-premium-gold font-label-md text-label-md px-8 py-3 rounded-full hover:bg-premium-gold/10 transition-all font-bold hover:scale-[1.02] active:scale-[0.98]"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
