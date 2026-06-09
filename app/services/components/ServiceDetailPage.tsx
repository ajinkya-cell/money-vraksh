'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SubService } from '../types';
import RiskBadge from './RiskBadge';
import PriceCard from './PriceCard';
import KeyMetricsBar from './KeyMetricsBar';
import ServiceTabs from './ServiceTabs';
import { serviceCategories } from '../data';

interface ServiceDetailPageProps {
  service: SubService;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const category = serviceCategories.find(c => c.id === service.category)!;
  const isEquity = service.category === 'equity';

  const accentColor = isEquity ? 'emerald' : 'amber';
  const primaryHex = isEquity ? '#10B981' : '#F59E0B';
  const secondaryHex = isEquity ? '#059669' : '#EA580C';
  const borderClass = isEquity ? 'border-emerald-500/20' : 'border-amber-500/20';
  const textAccent = isEquity ? 'text-emerald-400' : 'text-amber-400';
  const bgAccent = isEquity ? 'bg-emerald-500/8' : 'bg-amber-500/8';

  const metrics = [
    { icon: 'payments', label: 'Min Investment', value: service.minimumInvestment },
    { icon: 'repeat', label: 'Frequency', value: service.recommendationFrequency },
    { icon: 'campaign', label: 'Mode', value: service.modeOfRecommendation },
    { icon: 'support_agent', label: 'Follow Up', value: service.followUp },
  ];

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      icon: 'overview',
      content: (
        <div className="space-y-10">
          <div>
            <h3 className="font-headline-md text-base font-bold text-on-surface mb-4 font-headline flex items-center gap-2">
              <span className={`w-1 h-4 rounded-full ${isEquity ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              What Is It For?
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pl-4">
              {service.whatIsItFor}
            </p>
          </div>
          <div>
            <h3 className="font-headline-md text-base font-bold text-on-surface mb-4 font-headline flex items-center gap-2">
              <span className={`w-1 h-4 rounded-full ${isEquity ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              Who Is It For?
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pl-4">
              {service.whomIsItFor}
            </p>
          </div>
          <div>
            <h3 className="font-headline-md text-base font-bold text-on-surface mb-4 font-headline flex items-center gap-2">
              <span className={`w-1 h-4 rounded-full ${isEquity ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              Ideal For
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pl-4">
              {service.idealFor.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="flex items-center gap-3 p-3 rounded-lg border border-surface-container/50 bg-surface-container-low/50"
                >
                  <span className={`material-symbols-outlined text-sm ${textAccent}`}>check</span>
                  <span className="font-body-md text-sm text-on-surface-variant">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'strategy',
      label: 'Strategy',
      icon: 'psychology',
      content: (
        <div>
          <h3 className="font-headline-md text-base font-bold text-on-surface mb-4 font-headline flex items-center gap-2">
            <span className={`w-1 h-4 rounded-full ${isEquity ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            Product Description
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pl-4">
            {service.productDescription}
          </p>
        </div>
      ),
    },
    {
      id: 'risk',
      label: 'Risk & Suitability',
      icon: 'shield',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-headline-md text-base font-bold text-on-surface mb-4 font-headline flex items-center gap-2">
              <span className={`w-1 h-4 rounded-full ${isEquity ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              Risk Assessment
            </h3>
            <RiskBadge level={service.riskSustainability} variant="detailed" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-surface-container/50 bg-surface-container-low/30 p-5">
              <p className="font-label-md text-[10px] text-on-surface-variant/60 uppercase tracking-wider mb-2">
                Minimum Investment
              </p>
              <p className="font-headline-md text-lg font-bold text-on-surface font-headline">
                {service.minimumInvestment}
              </p>
            </div>
            <div className="rounded-xl border border-surface-container/50 bg-surface-container-low/30 p-5">
              <p className="font-label-md text-[10px] text-on-surface-variant/60 uppercase tracking-wider mb-2">
                Category
              </p>
              <p className="font-headline-md text-lg font-bold text-on-surface font-headline">
                {service.categoryLabel}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'pricing',
      label: 'Pricing',
      icon: 'currency_rupee',
      content: (
        <div className="space-y-6">
          <h3 className="font-headline-md text-base font-bold text-on-surface mb-1 font-headline flex items-center gap-2">
            <span className={`w-1 h-4 rounded-full ${isEquity ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            Investment Plans
          </h3>
          <PriceCard monthly={service.priceMonthly} quarterly={service.priceQuarterly} />
          <div className="rounded-xl border border-surface-container/50 bg-surface-container-low/30 p-5">
            <h4 className="font-headline-md text-sm font-bold text-on-surface mb-4 font-headline">
              What&apos;s Included
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-sm ${textAccent}`}>check</span>
                <span className="font-body-md text-sm text-on-surface-variant">{service.recommendationFrequency}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-sm ${textAccent}`}>check</span>
                <span className="font-body-md text-sm text-on-surface-variant">Delivery via {service.modeOfRecommendation}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-sm ${textAccent}`}>check</span>
                <span className="font-body-md text-sm text-on-surface-variant">Follow-up: {service.followUp}</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="relative">
      <div className={`absolute inset-0 bg-gradient-to-b ${category.gradient} pointer-events-none`} />
      <div className={`absolute top-[-200px] ${isEquity ? 'left-[-200px]' : 'right-[-200px]'} w-[500px] h-[500px] rounded-full opacity-[0.03] ${isEquity ? 'bg-emerald-500' : 'bg-amber-500'}`}
        style={{ filter: 'blur(120px)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 mb-10 text-sm"
        >
          <Link href="/services" className="text-on-surface-variant/60 hover:text-primary transition-colors font-label-md">Services</Link>
          <span className="material-symbols-outlined text-sm text-on-surface-variant/30">chevron_right</span>
          <Link href={`/services/${service.category}`} className={`transition-colors font-label-md ${textAccent}`}>
            {category.name}
          </Link>
          <span className="material-symbols-outlined text-sm text-on-surface-variant/30">chevron_right</span>
          <span className="text-on-surface-variant/40 font-label-md">{service.name}</span>
        </motion.div>

        {/* Hero */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="mb-10">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase ${borderClass} ${bgAccent} ${textAccent}`}>
              <span className="material-symbols-outlined text-sm">{category.icon}</span>
              {category.name} &middot; {service.categoryLabel}
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4 leading-[1.1] tracking-tight">
            {service.name}
          </motion.h1>

          <motion.p variants={fadeUp} className="font-body-lg text-lg text-on-surface-variant/70 max-w-2xl leading-relaxed mb-6">
            {service.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <RiskBadge level={service.riskSustainability} variant="pill" />
            {service.stats?.map((stat, idx) => (
              <span key={idx} className="font-label-md text-xs text-on-surface-variant/50">
                {stat.value} {stat.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Pricing + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <PriceCard monthly={service.priceMonthly} quarterly={service.priceQuarterly} />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center gap-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-label-md text-sm font-bold text-white transition-all duration-300"
                style={{ background: `linear-gradient(135deg, ${primaryHex}, ${secondaryHex})` }}
              >
                Subscribe Now
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-label-md text-sm font-medium border border-surface-container/50 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-300"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Schedule a Call
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <KeyMetricsBar metrics={metrics} />
        </motion.div>

        {/* Tabbed Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-16"
        >
          <div className="rounded-2xl border border-surface-container/50 bg-surface-container-low/20 p-6 md:p-8">
            <ServiceTabs tabs={tabs} />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-surface-container/50 bg-surface-container-low/20 p-8 md:p-12 text-center mb-16"
        >
          <h2 className="font-headline-md text-2xl font-bold text-on-surface mb-3 font-headline">
            Ready to Get Started with <span className={textAccent}>{service.name}</span>?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant/70 max-w-xl mx-auto mb-8">
            Join {category.name} traders who trust our research. Pick a plan that fits your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-label-md text-sm font-bold text-white transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${primaryHex}, ${secondaryHex})` }}
            >
              Get Started Now
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link
              href={`/services/${service.category}`}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-label-md text-sm font-medium border border-surface-container/50 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-300"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              View All {category.name} Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
