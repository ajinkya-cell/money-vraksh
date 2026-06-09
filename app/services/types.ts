export type RiskLevel = 'Low' | 'Medium' | 'High';
export type CategoryId = 'equity' | 'fo';

export interface SubService {
  id: string;
  slug: string;
  category: CategoryId;
  name: string;
  tagline: string;
  shortDescription: string;
  whatIsItFor: string;
  whomIsItFor: string;
  idealFor: string[];
  productDescription: string;
  riskSustainability: RiskLevel;
  minimumInvestment: string;
  categoryLabel: string;
  recommendationFrequency: string;
  modeOfRecommendation: string;
  followUp: string;
  priceMonthly: number;
  priceQuarterly: number;
  icon: string;
  iconColor: string;
  borderColor: string;
  gradient: string;
  isPopular?: boolean;
  stats?: { value: string; label: string }[];
}

export interface ServiceCategory {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  icon: string;
  gradient: string;
  accentColor: string;
  subServices: SubService[];
}

export const RISK_CONFIG: Record<RiskLevel, { label: string; color: string; bg: string; icon: string; description: string }> = {
  Low: {
    label: 'Low Risk',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/15 border-emerald-500/30',
    icon: 'shield_check',
    description: 'Conservative approach with capital preservation as priority. Suitable for risk-averse investors seeking steady compounding.'
  },
  Medium: {
    label: 'Medium Risk',
    color: 'text-amber-400',
    bg: 'bg-amber-500/15 border-amber-500/30',
    icon: 'shield_alert',
    description: 'Balanced risk-reward profile. Drawdowns managed through position sizing and stop losses. Ideal for growth-oriented investors.'
  },
  High: {
    label: 'High Risk',
    color: 'text-red-400',
    bg: 'bg-red-500/15 border-red-500/30',
    icon: 'shield_off',
    description: 'Aggressive strategies with higher volatility. Requires strong risk tolerance and discipline. For experienced traders only.'
  }
};

export const CATEGORY_CONFIG: Record<CategoryId, { gradient: string; accent: string; borderGlow: string }> = {
  equity: {
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accent: 'emerald',
    borderGlow: 'border-emerald-500/40'
  },
  fo: {
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accent: 'amber',
    borderGlow: 'border-amber-500/40'
  }
};