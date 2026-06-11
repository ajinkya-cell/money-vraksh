"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-midnight w-full mt-auto relative z-10 before:absolute before:top-0 before:left-1/4 before:right-1/4 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:content-['']">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
        {/* Brand */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <Link
            href="/"
            className="font-headline-md text-headline-md text-primary flex items-center gap-2 mb-2 font-bold focus-ring rounded-lg"
          >
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance
            </span>
            MoneyVraksh
          </Link>
          <p className="font-body-md text-body-md text-slate-text text-sm">
            Empowering investors with institutional-grade research and insights.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md text-on-surface mb-2 font-bold uppercase tracking-wider">
              Company
            </span>
            <Link href="/" className="text-slate-text hover:text-primary transition-colors text-sm focus-ring rounded-sm">
              Home
            </Link>
            <Link href="/about" className="text-slate-text hover:text-primary transition-colors text-sm focus-ring rounded-sm">
              About Us
            </Link>
            <Link href="/services" className="text-slate-text hover:text-primary transition-colors text-sm focus-ring rounded-sm">
              Services
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md text-on-surface mb-2 font-bold uppercase tracking-wider">
              Support
            </span>
            <Link href="/services#faq" className="text-slate-text hover:text-primary transition-colors text-sm focus-ring rounded-sm">
              FAQ
            </Link>
            <Link href="/contact" className="text-slate-text hover:text-primary transition-colors text-sm focus-ring rounded-sm">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md text-on-surface mb-2 font-bold uppercase tracking-wider">
              Legal
            </span>
            <Link href="/disclosure" className="text-slate-text hover:text-primary transition-colors text-sm focus-ring rounded-sm">
              Disclosure
            </Link>
            <Link href="/disclosure#terms" className="text-slate-text hover:text-primary transition-colors text-sm focus-ring rounded-sm">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        {/* Disclaimer Block */}
        <div className="md:col-span-1 flex flex-col justify-end pt-6 md:pt-0 mt-6 md:mt-0">
          <p className="font-body-md text-body-md text-premium-gold text-xs leading-relaxed">
            © {new Date().getFullYear()} MoneyVraksh. Investment in securities market are subject to market risks. Read all the related documents carefully before investing. SEBI Reg. NO INH000025300.
          </p>
        </div>
      </div>
      
      {/* Compliance Bottom Bar */}
      <div className="relative py-6 px-margin-desktop text-center before:absolute before:top-0 before:left-1/4 before:right-1/4 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-primary/15 before:to-transparent before:content-['']">
        <p className="font-data-mono text-data-mono text-premium-gold max-w-4xl mx-auto font-normal text-[10px] opacity-70 leading-normal">
          Disclaimer: MoneyVraksh is a SEBI registered Research Analyst. Trading and investing in stock markets involve significant risk. All recommendations are for educational purposes.
        </p>
      </div>
    </footer>
  );
}
