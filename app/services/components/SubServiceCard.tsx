'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SubService } from '../types';
import RiskBadge from './RiskBadge';

interface SubServiceCardProps {
  service: SubService;
  index: number;
  categoryId: string;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export default function SubServiceCard({ service, index, categoryId }: SubServiceCardProps) {
  const isEquity = categoryId === 'equity';
  const iconWrapBorder = isEquity ? 'border-emerald-500/15' : 'border-amber-500/15';
  const iconWrapBg = isEquity ? 'bg-emerald-500/8' : 'bg-amber-500/8';
  const categoryBadgeBg = isEquity ? 'bg-emerald-500/8' : 'bg-amber-500/8';
  const categoryBadgeText = isEquity ? 'text-emerald-400' : 'text-amber-400';
  const hoverBorder = isEquity ? 'hover:border-emerald-500/25' : 'hover:border-amber-500/25';
  const hoverBg = isEquity ? 'hover:bg-emerald-500/5' : 'hover:bg-amber-500/5';
  const accentHoverLine = isEquity ? 'group-hover:bg-emerald-500/20' : 'group-hover:bg-amber-500/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <Link href={`/services/${categoryId}/${service.slug}`} className="block group h-full">
        <div className={`rounded-xl border border-elegant bg-surface-container-low/20 h-full flex flex-col relative overflow-hidden transition-all duration-300 ${hoverBorder} ${hoverBg}`}>
          {service.isPopular && (
            <div className="absolute top-0 right-0">
              <span className="inline-block px-2.5 py-0.5 bg-primary/15 text-primary font-label-md text-[9px] font-bold uppercase tracking-wider rounded-bl-lg rounded-tr-xl">
                Popular
              </span>
            </div>
          )}

          <div className="p-5 flex-1 flex flex-col relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className={`h-10 w-10 rounded-lg border ${iconWrapBorder} ${iconWrapBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className={`material-symbols-outlined text-lg ${service.iconColor}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}>
                  {service.icon}
                </span>
              </div>
              <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider ${categoryBadgeBg} ${categoryBadgeText}`}>
                {service.categoryLabel}
              </span>
            </div>

            <h3 className="font-headline-md text-base font-bold text-on-surface mb-1.5 font-headline group-hover:text-primary transition-colors">
              {service.name}
            </h3>

            <p className="font-body-md text-sm text-on-surface-variant/70 leading-relaxed mb-4 flex-1 line-clamp-2">
              {service.shortDescription}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-elegant/50">
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-headline-md text-lg font-bold text-on-surface font-headline tracking-tight">
                    {formatPrice(service.priceMonthly)}
                  </p>
                  <p className="font-label-md text-[9px] text-on-surface-variant/40 uppercase tracking-wider">per month</p>
                </div>
                <div className="w-px h-7 bg-elegant/50" />
                <RiskBadge level={service.riskSustainability} variant="dot" />
              </div>
              <span className="material-symbols-outlined text-base text-on-surface-variant/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                chevron_right
              </span>
            </div>
          </div>

          <div className={`absolute bottom-0 left-0 right-0 h-px bg-transparent ${accentHoverLine} transition-colors duration-500`} />
        </div>
      </Link>
    </motion.div>
  );
}
