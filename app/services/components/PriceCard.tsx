'use client';
import { motion } from 'framer-motion';
import { calculateQuarterlySavings, calculateSavingsPercent } from '../data';

interface PriceCardProps {
  monthly: number;
  quarterly: number;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export default function PriceCard({ monthly, quarterly }: PriceCardProps) {
  const savings = calculateQuarterlySavings(monthly, quarterly);
  const savingsPercent = calculateSavingsPercent(monthly, quarterly);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="rounded-xl border border-surface-container/50 bg-surface-glass backdrop-blur-md p-5 transition-all duration-300 hover:border-primary/30 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <p className="font-label-md text-[10px] text-on-surface-variant/50 uppercase tracking-wider mb-2">Monthly</p>
          <div className="flex items-baseline gap-1">
            <span className="material-symbols-outlined text-lg text-on-surface-variant/40">currency_rupee</span>
            <span className="font-headline-md text-3xl font-bold text-on-surface font-headline tracking-tight">
              {formatPrice(monthly).replace('₹', '')}
            </span>
          </div>
          <p className="font-label-md text-xs text-on-surface-variant/40 mt-1">per month</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-xl border border-premium-gold/20 bg-amber-500/5 backdrop-blur-md p-5 transition-all duration-300 hover:border-premium-gold/40 relative overflow-hidden group"
      >
        {savings > 0 && (
          <div className="absolute top-0 right-0">
            <span className="inline-block px-2.5 py-0.5 bg-amber-500/20 text-amber-400 font-label-md text-[9px] font-bold uppercase tracking-wider rounded-bl-lg rounded-tr-xl">
              Save {savingsPercent}%
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <p className="font-label-md text-[10px] text-amber-400/60 uppercase tracking-wider mb-2">Quarterly</p>
          <div className="flex items-baseline gap-1">
            <span className="material-symbols-outlined text-lg text-amber-400/40">currency_rupee</span>
            <span className="font-headline-md text-3xl font-bold text-premium-gold font-headline tracking-tight">
              {formatPrice(quarterly).replace('₹', '')}
            </span>
          </div>
          <p className="font-label-md text-xs text-amber-400/40 mt-1">per quarter</p>
          {savings > 0 && (
            <p className="font-body-md text-xs text-emerald-400/80 mt-2 font-medium">
              Save {formatPrice(savings)} with quarterly plan
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
