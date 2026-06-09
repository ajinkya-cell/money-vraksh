'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ServiceCategory } from '../types';

interface CategoryCardProps {
  category: ServiceCategory;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const isEquity = category.id === 'equity';

  const iconWrapBorder = isEquity ? 'border-emerald-500/15' : 'border-amber-500/15';
  const iconWrapBg = isEquity ? 'bg-emerald-500/8' : 'bg-amber-500/8';
  const iconColor = isEquity ? 'text-emerald-400' : 'text-amber-400';
  const badgeBg = isEquity ? 'bg-emerald-500/8' : 'bg-amber-500/8';
  const badgeText = isEquity ? 'text-emerald-400' : 'text-amber-400';
  const hoverBorder = isEquity ? 'hover:border-emerald-500/25' : 'hover:border-amber-500/25';
  const glowBg = isEquity ? 'bg-emerald-500' : 'bg-amber-500';
  const accentBar = isEquity ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-amber-500 to-orange-400';
  const btnBg = isEquity
    ? 'linear-gradient(135deg, #10B981, #059669)'
    : 'linear-gradient(135deg, #F59E0B, #EA580C)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
    >
      <Link href={`/services/${category.id}`} className="block group h-full">
        <div className={`rounded-2xl border border-elegant bg-surface-container-low/20 h-full flex flex-col relative overflow-hidden transition-all duration-500 ${hoverBorder}`}
          style={{ boxShadow: `0 0 0px ${isEquity ? 'rgba(16,185,129,0)' : 'rgba(245,158,11,0)'}` }}
        >
          <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-700 ${glowBg}`}
            style={{ filter: 'blur(80px)' }}
          />

          <div className="relative z-10 p-8 md:p-10 flex-1 flex flex-col">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${iconWrapBorder} ${iconWrapBg} group-hover:scale-110 transition-transform duration-400`}>
              <span className={`material-symbols-outlined text-3xl ${iconColor}`}
                style={{ fontVariationSettings: "'FILL' 1" }}>
                {category.icon}
              </span>
            </div>

            <div className="flex items-center gap-2.5 mb-3">
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase ${badgeBg} ${badgeText}`}>
                {category.shortName}
              </span>
              <span className="text-[11px] text-on-surface-variant/40 font-label-md">
                {category.subServices.length} Services
              </span>
            </div>

            <h3 className="font-headline-md text-2xl md:text-3xl font-bold text-on-surface mb-3 font-headline tracking-tight">
              {category.name}
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant/70 leading-relaxed mb-8 flex-1">
              {category.description}
            </p>

            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-label-md text-sm font-bold text-white transition-all duration-300 self-start"
              style={{ background: btnBg }}
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Strategies
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </motion.div>
          </div>

          <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:opacity-100 transition-all duration-700 ${accentBar} opacity-0`} />
        </div>
      </Link>
    </motion.div>
  );
}
