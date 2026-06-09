'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SubServiceCard from '../components/SubServiceCard';
import { serviceCategories } from '../data';

export default function EquityPage() {
  const category = serviceCategories.find(c => c.id === 'equity')!;

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen pt-[120px] pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-emerald-500/5"
        style={{ filter: 'blur(120px)' }} />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 mb-8 text-sm"
        >
          <Link href="/services" className="text-slate-text hover:text-primary transition-colors font-label-md">Services</Link>
          <span className="material-symbols-outlined text-sm text-slate-text">chevron_right</span>
          <span className="text-emerald-400 font-label-md">Equity</span>
        </motion.div>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>
                {category.icon}
              </span>
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                {category.shortName}
              </span>
              <h1 className="font-headline text-3xl md:text-5xl font-bold text-on-surface mt-2 leading-tight">
                {category.name} Strategies
              </h1>
            </div>
          </div>
          <p className="font-body-lg text-body-lg text-slate-text max-w-2xl leading-relaxed">
            {category.longDescription}
          </p>
        </motion.section>

        {/* SubServices Grid */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-emerald-400 rounded-full" />
            <h2 className="font-headline-lg text-2xl font-bold text-on-surface font-headline">
              Our {category.name} Services
              <span className="text-slate-text font-label-md text-sm ml-3 font-normal">
                ({category.subServices.length} services)
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {category.subServices.map((service, idx) => (
              <SubServiceCard key={service.id} service={service} index={idx} categoryId="equity" />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-2xl p-8 md:p-12 border border-elegant text-center"
        >
          <h2 className="font-headline-md text-2xl font-bold text-on-surface mb-4 font-headline">
            Need Help Choosing an Equity Service?
          </h2>
          <p className="font-body-lg text-body-lg text-slate-text max-w-xl mx-auto mb-8">
            Our team will analyze your trading style and recommend the perfect match.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-label-md text-sm font-bold text-white transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}
          >
            Talk to an Expert
            <span className="material-symbols-outlined text-base">support_agent</span>
          </Link>
        </motion.section>
      </main>
    </div>
  );
}
