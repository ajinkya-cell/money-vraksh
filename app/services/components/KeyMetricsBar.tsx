'use client';
import { motion } from 'framer-motion';

interface Metric {
  icon: string;
  label: string;
  value: string;
}

interface KeyMetricsBarProps {
  metrics: Metric[];
}

export default function KeyMetricsBar({ metrics }: KeyMetricsBarProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-3"
    >
      {metrics.map((metric, idx) => (
        <motion.div
          key={idx}
          variants={item}
          className="rounded-xl border border-surface-container/50 bg-surface-container-low/20 p-4 transition-colors hover:border-surface-container"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-surface-container-low border border-surface-container/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-base text-on-surface-variant/60">{metric.icon}</span>
            </div>
            <div className="min-w-0">
              <p className="font-label-md text-[9px] text-on-surface-variant/50 uppercase tracking-wider truncate">{metric.label}</p>
              <p className="font-data-mono text-sm text-on-surface font-medium truncate mt-0.5">{metric.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
