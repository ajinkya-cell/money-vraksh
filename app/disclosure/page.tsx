"use client";

import Link from "next/link";

export default function Disclosure() {
  const sections = [
    {
      id: "history",
      title: "History & Business",
      icon: "corporate_fare",
      content: (
        <>
          <p>
            MoneyVraksh is an independent equity research firm dedicated to providing high-quality, actionable insights to institutional and high-net-worth investors. Founded with a commitment to analytical rigor, our business model focuses entirely on proprietary research without the conflicts inherent in investment banking or proprietary trading operations.
          </p>
          <p className="mt-4">
            Our core business involves analyzing macroeconomic trends, sector dynamics, and individual corporate fundamentals to deliver comprehensive research reports and recommendations. We do not engage in any merchant banking, investment banking, or brokerage services.
          </p>
        </>
      ),
    },
    {
      id: "terms",
      title: "Terms & Conditions",
      icon: "gavel",
      content: (
        <>
          <p>
            The information and views presented in our research reports are prepared by MoneyVraksh solely for informational purposes and are not intended to be a complete description of the securities, markets, or developments referred to in the material.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>All research is subject to change without notice.</li>
            <li>Past performance is not indicative of future results.</li>
            <li>Clients should seek advice based on their particular circumstances from an independent tax, legal, or financial advisor.</li>
          </ul>
        </>
      ),
    },
    {
      id: "disciplinary",
      title: "Disciplinary History",
      icon: "history",
      content: (
        <>
          <p>
            There are no material disciplinary actions, penalties, or litigations pending against MoneyVraksh or its key managerial personnel by any regulatory authority (including SEBI, stock exchanges, or other judicial bodies) as of the date of these disclosures.
          </p>
          <p className="mt-4">
            We maintain strict compliance and adherence to regulatory directives to preserve the integrity of our advisory operations.
          </p>
        </>
      ),
    },
    {
      id: "associates",
      title: "Associates Details",
      icon: "group",
      content: (
        <>
          <p>
            MoneyVraksh does not have any material associate or group companies engaged in merchant banking, brokerage, portfolio management, or lending operations.
          </p>
          <p className="mt-4">
            This lack of corporate associations guarantees that our research and market analyst insights are completely independent, objective, and free from cross-selling conflicts of interest.
          </p>
        </>
      ),
    },
    {
      id: "research",
      title: "Research Disclosures",
      icon: "analytics",
      content: (
        <>
          <p>
            Pursuant to the SEBI (Research Analysts) Regulations, 2014, MoneyVraksh and its associated research analysts hereby declare:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Neither the analyst nor their relatives have any financial interest in the subject companies under coverage.</li>
            <li>There are no material conflict of interest issues at the time of publication of research reports.</li>
            <li>No brokerage, investment banking fee, or advisory commissions have been received from the subject companies in the past twelve months.</li>
          </ul>
        </>
      ),
    },
    {
      id: "disclaimer",
      title: "Legal Disclaimer",
      icon: "shield",
      content: (
        <>
          <p>
            Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </p>
          <p className="mt-4">
            Investments in the securities market are subject to market risks. Please read all scheme-related and disclosure documents carefully before investing. Equity trading involves risk of capital loss.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen pt-[80px] md:pt-[100px]">
      {/* Light Leak backdrop */}
      <div className="light-leak-primary top-[10%] left-[-200px] opacity-40" />

      <main className="flex-grow px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10 pb-20">
        {/* Warning Banner */}
        <div className="glass-panel border-l-4 border-l-premium-gold rounded-xl p-6 mb-8 mt-6">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-premium-gold text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              warning
            </span>
            <div>
              <h2 className="font-headline-md text-base font-bold text-premium-gold mb-2 font-headline uppercase tracking-wider">
                Important Regulatory Notice
              </h2>
              <p className="font-body-lg text-body-md text-on-surface leading-relaxed">
                Investment in securities markets are subject to market risks. Read all related documents carefully before investing. SEBI Registration No: <span className="font-data-mono text-data-mono text-on-surface bg-surface-container-high px-2 py-1 rounded font-bold">XXXXXXXXX (Details Pending)</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-[120px] glass-panel rounded-2xl p-4 border border-elegant">
              <nav className="flex flex-col space-y-2">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      const element = document.getElementById(sec.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-left w-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high/30 px-4 py-3 border-l-2 border-transparent hover:border-primary rounded-r-lg font-label-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer focus-ring"
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Cards */}
          <div className="lg:col-span-9 space-y-gutter">
            <h1 className="font-display-lg text-3xl md:text-4xl font-bold text-primary mb-8 lg:hidden font-headline">
              Disclosures
            </h1>

            {sections.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                className="glass-panel rounded-2xl p-6 md:p-8 scroll-mt-28 border border-elegant hover:border-primary/20 transition-all duration-300"
              >
                <h2 className="font-headline-lg text-xl md:text-2xl font-bold text-on-surface mb-6 flex items-center gap-3 font-headline">
                  <span className="material-symbols-outlined text-primary">{sec.icon}</span>
                  {sec.title}
                </h2>
                <div className="prose prose-invert max-w-none text-slate-text font-body-md text-body-md leading-relaxed">
                  {sec.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
