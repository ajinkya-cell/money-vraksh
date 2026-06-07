"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Services() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const coreServices = [
    {
      span: "md:col-span-8",
      category: "Cash Market",
      title: "Stock Cash Basic",
      description: "High-probability intraday and short-term delivery calls based on robust volume analysis and price action.",
      icon: "candlestick_chart",
      iconColor: "text-primary",
      borderColor: "hover:border-primary/40",
      stats: [
        { value: "1-2", label: "Calls/Day" },
        { value: ">75%", label: "Target Accuracy" }
      ]
    },
    {
      span: "md:col-span-4",
      category: "Derivatives",
      title: "Stock Future Basic",
      description: "Directional futures trades with defined stop losses.",
      icon: "trending_up",
      iconColor: "text-secondary",
      borderColor: "hover:border-secondary/40",
      stats: []
    },
    {
      span: "md:col-span-4",
      category: "Positional",
      title: "Short Term Pack",
      description: "Hold duration: 3 to 15 days. Capture momentum swings.",
      icon: "update",
      iconColor: "text-tertiary",
      borderColor: "hover:border-tertiary/40",
      stats: []
    },
    {
      span: "md:col-span-4",
      category: "Nifty/BankNifty",
      title: "Index Option Combo",
      description: "Premium decay capture and directional option buying.",
      icon: "analytics",
      iconColor: "text-primary-fixed",
      borderColor: "hover:border-primary-fixed/40",
      stats: []
    },
    {
      span: "md:col-span-4",
      category: "Commodities",
      title: "MCX Pack",
      description: "Gold, Silver, Crude Oil, and Base Metals analysis.",
      icon: "diamond",
      iconColor: "text-outline",
      borderColor: "hover:border-outline/40",
      stats: []
    }
  ];

  const premiumServices = [
    {
      title: "Stock Cash Premium",
      icon: "star",
      description: "Dedicated RM, larger ticket sizes, and exclusive entry/exit alerts."
    },
    {
      title: "Stock Future Premium",
      icon: "monitoring",
      description: "Hedged future positions with algorithmic confirmation signals."
    },
    {
      title: "Stock Option Premium",
      icon: "donut_large",
      description: "Advanced multi-leg strategies (Straddles, Iron Condors) tailored for HNI capital."
    },
    {
      title: "Index Option Premium",
      icon: "token",
      description: "Live expiry day execution desk access and priority WhatsApp broadcast.",
      isPopular: true
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "What is the required capital to start with Premium Plans?",
      answer: "Our Premium Desk recommends a minimum deployment capital of ₹5,00,000 to effectively implement risk management parameters across multi-leg strategies. Core modules can be traded with lower capital bases."
    },
    {
      question: "How are the trading signals delivered?",
      answer: "Signals are broadcasted via secure SMS gateways and our priority communication channels to ensure zero-latency delivery. Premium clients receive concurrent notifications via direct priority WhatsApp channels."
    },
    {
      question: "Do you provide portfolio restructuring?",
      answer: "Yes, portfolio restructuring and long-term equity curation is available exclusively under our Wealth Advisory module (available upon request to Premium clients). Standard service plans focus on active trading strategies."
    }
  ];

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen pt-[120px] pb-24">
      {/* Ambient Light Leaks */}
      <div className="light-leak-primary top-[-100px] left-[-100px]" />
      <div className="light-leak-secondary bottom-[-100px] right-[-100px]" />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10">
        {/* Hero Section */}
        <section className="mb-24 text-center md:text-left">
          <h1 className="font-display-lg text-4xl md:text-6xl font-bold text-on-surface mb-6 mt-6 leading-tight font-headline">
            Precision Strategies for <br className="hidden md:block" />
            <span className="gradient-text-primary">Every Market Condition</span>
          </h1>
          <p className="font-body-lg text-body-lg text-slate-text max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
            Institutional-grade research and actionable insights tailored to your investment style. Choose from our specialized bento modules to execute your edge.
          </p>
        </section>

        {/* Section 1: Core Market Intelligence (Bento Grid) */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-8 w-1 bg-primary rounded-full" />
            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface font-headline">
              Core Market Intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {coreServices.map((service, idx) => (
              <div
                key={idx}
                className={`glass-panel rounded-2xl p-8 flex flex-col justify-between group transition-colors border border-elegant ${service.span} ${service.borderColor}`}
              >
                <div className="flex justify-between items-start mb-6 w-full">
                  <div>
                    <span className="inline-block px-3 py-1 bg-surface-container-high text-primary font-label-md text-xs rounded-md mb-4 font-semibold uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2 font-headline">
                      {service.title}
                    </h3>
                    <p className="font-body-md text-body-md text-slate-text leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <span className={`material-symbols-outlined text-4xl opacity-50 group-hover:opacity-100 transition-opacity ${service.iconColor}`}>
                    {service.icon}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-elegant w-full">
                  {service.stats.length > 0 ? (
                    <div className="flex gap-4">
                      {service.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="flex gap-4 items-center">
                          {sIdx > 0 && <div className="w-px h-8 bg-elegant" />}
                          <div className="text-left">
                            <span className="block font-data-mono text-data-mono text-primary font-bold">
                              {stat.value}
                            </span>
                            <span className="font-label-md text-[9px] text-slate-text uppercase tracking-widest">
                              {stat.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-slate-text">Core Service Package</span>
                  )}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline font-label-md text-sm flex items-center gap-1 font-bold"
                  >
                    Select
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* Stock Option Basic (Spans 12 cols, narrow row) */}
            <div className="glass-panel rounded-2xl p-6 md:col-span-12 flex flex-col md:flex-row items-start md:items-center justify-between group border border-elegant hover:border-primary/40 transition-colors w-full">
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="h-12 w-12 rounded-lg bg-surface-container-high flex items-center justify-center border border-elegant">
                  <span className="material-symbols-outlined text-primary">data_exploration</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface font-headline">
                    Stock Option Basic
                  </h3>
                  <p className="font-body-md text-body-md text-slate-text text-sm mt-1">
                    Leverage stock movements with calculated risk options strategies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <Link
                  href="/contact"
                  className="bg-transparent border border-primary text-primary font-label-md text-sm px-6 py-2.5 rounded-lg font-bold hover:bg-primary/10 transition-colors text-center flex-1 md:flex-none"
                >
                  View Details
                </Link>
                <Link
                  href="/contact"
                  className="btn-primary px-6 py-2.5 rounded-lg font-label-md text-sm font-bold flex-1 md:flex-none text-center"
                >
                  Select Plan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Premium Plans (Gold Accented) */}
        <section className="mb-32 relative">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-8 w-1 bg-premium-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-gradient-gold font-headline">
              HNI &amp; Institutional Premium
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumServices.map((service, idx) => (
              <div
                key={idx}
                className={`glass-panel rounded-2xl p-8 border hover:border-premium-gold/60 transition-colors group relative overflow-hidden flex flex-col justify-between ${
                  service.isPopular
                    ? "border-premium-gold/40 lg:-translate-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-gradient-to-b from-premium-gold/5 to-transparent"
                    : "border-premium-gold/20"
                }`}
              >
                {service.isPopular && (
                  <div className="absolute -top-1 -right-1 z-20">
                    <span className="inline-block px-3 py-1 bg-premium-gold text-background-midnight font-label-md text-[9px] font-bold rounded-bl-xl uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="absolute top-0 right-0 w-24 h-24 bg-premium-gold/5 blur-[40px] rounded-full group-hover:bg-premium-gold/10 transition-colors" />

                <div className="mb-8 relative z-10">
                  <span className="material-symbols-outlined text-3xl text-premium-gold mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {service.icon}
                  </span>
                  <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2 font-headline">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-slate-text text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-premium-gold/20 relative z-10 w-full">
                  <Link
                    href="/contact"
                    className={`w-full block text-center font-label-md text-sm py-3 rounded-lg uppercase tracking-wider transition-all duration-300 font-bold ${
                      service.isPopular
                        ? "bg-premium-gold text-background-midnight hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                        : "border border-premium-gold text-premium-gold hover:bg-premium-gold/10"
                    }`}
                  >
                    {service.isPopular ? "Priority Access" : "Inquire"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Tier Comparison */}
        <section className="mb-32">
          <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-center text-on-surface mb-12 font-headline">
            Tier Architecture
          </h2>
          <div className="glass-panel rounded-2xl overflow-hidden border border-elegant shadow-2xl">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-elegant bg-surface-container-high/30">
                    <th className="p-6 font-label-md text-sm text-slate-text font-semibold uppercase tracking-wider w-1/3">
                      Features
                    </th>
                    <th className="p-6 font-headline-md text-lg font-bold text-on-surface w-1/3 text-center border-l border-elegant font-headline">
                      Core Modules
                    </th>
                    <th className="p-6 font-headline-md text-lg font-bold text-premium-gold w-1/3 text-center border-l border-elegant bg-premium-gold/5 font-headline">
                      Premium Desk
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md text-on-surface-variant">
                  <tr className="border-b border-elegant hover:bg-surface-glass transition-colors">
                    <td className="p-6 font-medium text-on-surface">Personalized Support</td>
                    <td className="p-6 text-center border-l border-elegant text-slate-text">
                      Email &amp; Ticketing
                    </td>
                    <td className="p-6 text-center border-l border-elegant font-semibold text-on-surface bg-premium-gold/5">
                      Dedicated RM &amp; WhatsApp
                    </td>
                  </tr>
                  <tr className="border-b border-elegant hover:bg-surface-glass transition-colors">
                    <td className="p-6 font-medium text-on-surface">Target Accuracy (Historic)</td>
                    <td className="p-6 text-center border-l border-elegant font-data-mono text-primary font-bold">
                      &gt; 75%
                    </td>
                    <td className="p-6 text-center border-l border-elegant font-data-mono text-premium-gold font-bold bg-premium-gold/5">
                      &gt; 85%
                    </td>
                  </tr>
                  <tr className="border-b border-elegant hover:bg-surface-glass transition-colors">
                    <td className="p-6 font-medium text-on-surface">Market Insights</td>
                    <td className="p-6 text-center border-l border-elegant text-slate-text">
                      Daily EOD Reports
                    </td>
                    <td className="p-6 text-center border-l border-elegant font-semibold text-on-surface bg-premium-gold/5">
                      Live Institutional Flow Data
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-glass transition-colors">
                    <td className="p-6 font-medium text-on-surface rounded-bl-2xl">
                      Frequency of Signals
                    </td>
                    <td className="p-6 text-center border-l border-elegant font-data-mono text-slate-text">
                      1-3 Daily
                    </td>
                    <td className="p-6 text-center border-l border-elegant font-data-mono text-on-surface font-semibold bg-premium-gold/5 rounded-br-2xl">
                      Algorithmic (As per Setup)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: FAQ (Accordion) */}
        <section id="faq" className="max-w-3xl mx-auto mb-12">
          <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-center text-on-surface mb-12 font-headline">
            Service Intelligence (FAQ)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`glass-panel rounded-xl border border-elegant overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-primary/30" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 flex justify-between items-center text-left hover:bg-surface-container-high/30 transition-colors cursor-pointer"
                  >
                    <h4 className="font-headline-md font-bold text-on-surface text-base md:text-lg font-headline">
                      {faq.question}
                    </h4>
                    <span
                      className={`material-symbols-outlined text-slate-text transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-60 border-t border-elegant opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    } overflow-hidden bg-surface-container-lowest/30`}
                  >
                    <p className="p-6 font-body-md text-body-md text-slate-text leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
