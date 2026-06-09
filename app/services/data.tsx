import { ServiceCategory } from './types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'equity',
    name: 'Equity',
    shortName: 'EQ',
    description: 'Cash market strategies for wealth creation',
    longDescription: 'Institutional-grade equity research covering intraday, swing, and positional strategies. Precision entries with defined risk management for consistent compounding.',
    icon: 'candlestick_chart',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: 'emerald',
    subServices: [
      {
        id: 'equity-intraday-pro',
        slug: 'equity-intraday-pro',
        category: 'equity',
        name: 'Equity Intraday Pro',
        tagline: 'Same-day precision entries for active traders',
        shortDescription: 'High-probability intraday calls with defined entry, target, and stop loss.',
        whatIsItFor: 'Designed for traders seeking consistent daily returns from equity cash market movements. Focuses on momentum breakouts, volume surges, and key technical levels for same-day trades.',
        whomIsItFor: 'Active day traders, swing traders expanding into intraday, and professionals looking to utilize spare time during market hours for active trading.',
        idealFor: [
          'Day traders with 3-4 hours daily market access',
          'Traders seeking quick turnaround',
          'Individuals comfortable with multiple daily positions',
          'Those who can manage stop losses actively'
        ],
        productDescription: 'Our proprietary algorithm scans 500+ stocks daily to identify high-probability breakout setups. Each recommendation includes precise entry, target, and stop-loss levels with risk-reward analysis.',
        riskSustainability: 'Medium',
        minimumInvestment: 'Rs 50,000 to Rs 2,00,000',
        categoryLabel: 'Intraday',
        recommendationFrequency: '2-3 calls per market day',
        modeOfRecommendation: 'Telegram + WhatsApp + Email',
        followUp: 'Real-time updates on targets/stop-loss, daily EOD P&L summary',
        priceMonthly: 4999,
        priceQuarterly: 12999,
        icon: 'trending_up',
        iconColor: 'text-emerald-400',
        borderColor: 'hover:border-emerald-500/40',
        gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
        isPopular: true,
        stats: [
          { value: '2-3', label: 'Calls/Day' },
          { value: '>85%', label: 'Win Rate' }
        ]
      },
      {
        id: 'equity-swing-trade',
        slug: 'equity-swing-trade',
        category: 'equity',
        name: 'Equity Swing Trade',
        tagline: 'Hold positions for 3-15 days for larger gains',
        shortDescription: 'Capture multi-day market swings with technical and fundamental analysis.',
        whatIsItFor: 'For traders who prefer holding positions for a few days to a few weeks, capitalizing on medium-term trends and price reversals.',
        whomIsItFor: 'Swing traders, working professionals, and part-time investors who cannot track the market throughout the day.',
        idealFor: [
          'Traders who can hold positions for 3-15 days',
          'Professionals with limited daily market time',
          'Investors seeking larger per-trade profits',
          'Those comfortable with overnight risk'
        ],
        productDescription: 'Access to high-conviction swing trading recommendations with detailed analysis. Targets are set to capture substantial price movements over several sessions.',
        riskSustainability: 'Medium',
        minimumInvestment: 'Rs 1,00,000 to Rs 5,00,000',
        categoryLabel: 'Swing Trading',
        recommendationFrequency: '3-4 calls per week',
        modeOfRecommendation: 'WhatsApp + Email + Dedicated App',
        followUp: 'Daily status updates, weekly performance review, SMS at key milestones',
        priceMonthly: 2999,
        priceQuarterly: 7499,
        icon: 'calendar_month',
        iconColor: 'text-teal-400',
        borderColor: 'hover:border-teal-500/40',
        gradient: 'from-teal-500/10 via-cyan-500/5 to-transparent',
        stats: [
          { value: '3-15', label: 'Days Hold' },
          { value: '4-8%', label: 'Avg. Return' }
        ]
      },
      {
        id: 'equity-positional',
        slug: 'equity-positional',
        category: 'equity',
        name: 'Equity Positional',
        tagline: 'Long-term wealth building through strategic holds',
        shortDescription: 'Strategic medium-to-long term equity holdings for wealth building.',
        whatIsItFor: 'Focuses on identifying fundamentally strong companies at optimal technical entry points for holding periods of weeks to months.',
        whomIsItFor: 'Investors looking for capital appreciation over the medium to long term without daily trading.',
        idealFor: [
          'Long-term wealth builders',
          'Investors with medium to high risk appetite',
          'Those who prefer fewer, higher-conviction trades',
          'Individuals seeking portfolio growth'
        ],
        productDescription: 'A curated selection of positional stocks with strong fundamentals and favorable technical setups, managed through structured entry and exit processes.',
        riskSustainability: 'High',
        minimumInvestment: 'Rs 2,00,000+',
        categoryLabel: 'Positional',
        recommendationFrequency: '2-3 calls per month',
        modeOfRecommendation: 'Email + Phone Call + Dedicated RM',
        followUp: 'Bi-weekly review, quarterly portfolio analysis, dedicated RM for queries',
        priceMonthly: 3999,
        priceQuarterly: 9999,
        icon: 'stack',
        iconColor: 'text-cyan-400',
        borderColor: 'hover:border-cyan-500/40',
        gradient: 'from-cyan-500/10 via-blue-500/5 to-transparent',
        stats: [
          { value: '2-3', label: 'Calls/Month' },
          { value: '15%+', label: 'Target Return' }
        ]
      },
      {
        id: 'equity-option-strategies',
        slug: 'equity-option-strategies',
        category: 'equity',
        name: 'Equity Option Strategies',
        tagline: 'Leveraged plays on individual stocks',
        shortDescription: 'Options-based strategies on equity stocks for leveraged returns.',
        whatIsItFor: 'Designed for traders looking to leverage their capital using options on individual stocks with defined risk-reward profiles.',
        whomIsItFor: 'Experienced equity traders wanting to move beyond cash market, option buyers and sellers seeking structured plays on stocks.',
        idealFor: [
          'Traders comfortable with options',
          'Those seeking leveraged equity exposure',
          'Investors with option writing experience',
          'Traders looking for hedged equity positions'
        ],
        productDescription: 'Combination of directional and non-directional option strategies on stocks. Includes covered calls, protective puts, and bull/bear spreads tailored to the underlying stock movement.',
        riskSustainability: 'High',
        minimumInvestment: 'Rs 50,000 to Rs 3,00,000',
        categoryLabel: 'Options',
        recommendationFrequency: '2-4 setups per week',
        modeOfRecommendation: 'Telegram + WhatsApp + Email',
        followUp: 'Real-time fill updates, daily P&L, expiry management alerts',
        priceMonthly: 3499,
        priceQuarterly: 8999,
        icon: 'data_exploration',
        iconColor: 'text-sky-400',
        borderColor: 'hover:border-sky-500/40',
        gradient: 'from-sky-500/10 via-indigo-500/5 to-transparent',
        stats: [
          { value: '2-4', label: 'Setups/Week' },
          { value: '1:3', label: 'Risk Reward' }
        ]
      },
      {
        id: 'wealth-advisory',
        slug: 'wealth-advisory',
        category: 'equity',
        name: 'Wealth Advisory',
        tagline: 'Comprehensive portfolio management for HNIs',
        shortDescription: 'End-to-end portfolio management with dedicated relationship manager.',
        whatIsItFor: 'Holistic investment advisory covering portfolio construction, rebalancing, and long-term wealth creation through equities.',
        whomIsItFor: 'High-net-worth individuals, families, and professionals seeking personalized wealth management and financial planning.',
        idealFor: [
          'HNIs with substantial capital',
          'Families seeking generational wealth',
          'Professionals wanting passive management',
          'Investors needing comprehensive financial planning'
        ],
        productDescription: 'Complete wealth management solution including portfolio construction, regular rebalancing, tax-efficient investing, and dedicated relationship management. Access to exclusive investment opportunities.',
        riskSustainability: 'Medium',
        minimumInvestment: 'Rs 10,00,000+',
        categoryLabel: 'Wealth Management',
        recommendationFrequency: 'Ongoing portfolio monitoring',
        modeOfRecommendation: 'Dedicated RM + Quarterly Reviews + App',
        followUp: 'Weekly portfolio snapshot, monthly performance report, quarterly in-person review',
        priceMonthly: 14999,
        priceQuarterly: 39999,
        icon: 'account_balance',
        iconColor: 'text-emerald-300',
        borderColor: 'hover:border-emerald-400/40',
        gradient: 'from-emerald-400/10 via-green-500/5 to-transparent',
        isPopular: true,
        stats: [
          { value: 'Dedicated', label: 'RM Assigned' },
          { value: '15%+', label: 'Target IRR' }
        ]
      }
    ]
  },
  {
    id: 'fo',
    name: 'Futures & Options',
    shortName: 'F/O',
    description: 'Derivative strategies for tactical trading',
    longDescription: 'Advanced derivative strategies leveraging futures and options for directional, hedged, and volatility-based approaches. Designed for traders seeking leverage with defined risk.',
    icon: 'analytics',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: 'amber',
    subServices: [
      {
        id: 'index-options-intraday',
        slug: 'index-options-intraday',
        category: 'fo',
        name: 'Index Options Intraday',
        tagline: 'Nifty and BankNifty options for same-day trades',
        shortDescription: 'Intraday option buying and selling strategies on Nifty and BankNifty indices.',
        whatIsItFor: 'For traders who want to capitalize on intraday index movements using options. Combines technical analysis with options Greeks for precision entries.',
        whomIsItFor: 'Active index traders, option scalpers, and intraday momentum traders specializing in Nifty and BankNifty.',
        idealFor: [
          'Traders focused on index movements',
          'Option buyers seeking high leverage',
          'Those with 3-4 hours daily availability',
          'Traders comfortable with options Greeks'
        ],
        productDescription: 'Real-time index options recommendations with precise strike selection, entry time, target, and stop loss. Strategies include momentum buying, premium selling on range days, and straddle adjustments.',
        riskSustainability: 'High',
        minimumInvestment: 'Rs 25,000 to Rs 1,00,000',
        categoryLabel: 'Index Options',
        recommendationFrequency: '3-5 trades per market day',
        modeOfRecommendation: 'Telegram + WhatsApp + SMS',
        followUp: 'Live fills tracking, intraday updates, EOD performance report',
        priceMonthly: 3999,
        priceQuarterly: 9999,
        icon: 'analytics',
        iconColor: 'text-amber-400',
        borderColor: 'hover:border-amber-500/40',
        gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
        isPopular: true,
        stats: [
          { value: '3-5', label: 'Trades/Day' },
          { value: '1:2', label: 'Risk Reward' }
        ]
      },
      {
        id: 'stock-futures-pro',
        slug: 'stock-futures-pro',
        category: 'fo',
        name: 'Stock Futures Pro',
        tagline: 'Directional futures trades on high-beta stocks',
        shortDescription: 'Futures trading calls on select stocks with momentum analysis.',
        whatIsItFor: 'Designed for traders who prefer futures for their liquidity, leverage, and simplicity. Focuses on directional moves in high-beta stocks.',
        whomIsItFor: 'Futures traders, swing traders using futures, and those seeking leveraged directional exposure on stocks.',
        idealFor: [
          'Futures market specialists',
          'Traders seeking leveraged directional plays',
          'Those comfortable with futures rollovers',
          'Investors wanting intraday to positional futures'
        ],
        productDescription: 'Stock futures recommendations based on technical breakouts, volume analysis, and open interest trends. Each call includes entry, target, stop loss, and suggested lot size.',
        riskSustainability: 'High',
        minimumInvestment: 'Rs 50,000 to Rs 3,00,000',
        categoryLabel: 'Stock Futures',
        recommendationFrequency: '2-3 calls per market day',
        modeOfRecommendation: 'Telegram + WhatsApp + Email',
        followUp: 'Intraday updates, daily settlement report, margin monitoring alerts',
        priceMonthly: 4499,
        priceQuarterly: 11999,
        icon: 'trending_up',
        iconColor: 'text-amber-400',
        borderColor: 'hover:border-amber-500/40',
        gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
        stats: [
          { value: '2-3', label: 'Calls/Day' },
          { value: '>80%', label: 'Win Rate' }
        ]
      },
      {
        id: 'option-selling-mastery',
        slug: 'option-selling-mastery',
        category: 'fo',
        name: 'Option Selling Mastery',
        tagline: 'Consistent premium collection with defined risk',
        shortDescription: 'Systematic option selling strategies for steady monthly returns.',
        whatIsItFor: 'For traders who want to consistently collect option premiums using defined-risk credit spreads, iron condors, and strangles on indices.',
        whomIsItFor: 'Option sellers, income-focused traders, and those with a systematic approach to markets who prefer probability-based strategies.',
        idealFor: [
          'Income-oriented traders',
          'Those comfortable with option selling',
          'Traders with patience for theta decay',
          'Individuals seeking predictable monthly returns'
        ],
        productDescription: 'Weekly and monthly option selling strategies on Nifty and BankNifty with defined risk parameters. Uses technical support/resistance and IV analysis for strike selection.',
        riskSustainability: 'Medium',
        minimumInvestment: 'Rs 1,00,000 to Rs 5,00,000',
        categoryLabel: 'Option Selling',
        recommendationFrequency: '2-3 setups per week',
        modeOfRecommendation: 'WhatsApp + Email + App Notifications',
        followUp: 'Daily margin utilization, weekly rollover guidance, monthly performance summary',
        priceMonthly: 5999,
        priceQuarterly: 15999,
        icon: 'savings',
        iconColor: 'text-yellow-400',
        borderColor: 'hover:border-yellow-500/40',
        gradient: 'from-yellow-500/10 via-amber-500/5 to-transparent',
        isPopular: true,
        stats: [
          { value: '3-5%', label: 'Monthly Return' },
          { value: '>90%', label: 'Win Rate' }
        ]
      },
      {
        id: 'index-hedge',
        slug: 'index-hedge',
        category: 'fo',
        name: 'Index Hedge Strategies',
        tagline: 'Protect your portfolio with smart hedging',
        shortDescription: 'Professional-grade hedging strategies for portfolio protection.',
        whatIsItFor: 'Designed for investors and traders who want to protect their equity portfolio from market downturns using index options and futures.',
        whomIsItFor: 'Equity investors with large portfolios, mutual fund holders, and traders wanting to hedge directional risk.',
        idealFor: [
          'Large equity portfolio holders',
          'Investors during uncertain markets',
          'Traders wanting portfolio insurance',
          'Those with concentrated stock positions'
        ],
        productDescription: 'Tailored hedging solutions using index put options, futures shorting, and option collars. Strategies are calibrated to portfolio size and risk tolerance.',
        riskSustainability: 'Low',
        minimumInvestment: 'Rs 5,00,000+',
        categoryLabel: 'Hedging',
        recommendationFrequency: 'As per market conditions',
        modeOfRecommendation: 'Dedicated RM + Phone + Email',
        followUp: 'Portfolio delta monitoring, rebalancing alerts, quarterly review',
        priceMonthly: 6999,
        priceQuarterly: 17999,
        icon: 'shield',
        iconColor: 'text-emerald-400',
        borderColor: 'hover:border-emerald-500/40',
        gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
        stats: [
          { value: 'Portfolio', label: 'Protection' },
          { value: 'Custom', label: 'Coverage' }
        ]
      },
      {
        id: 'index-futures-swing',
        slug: 'index-futures-swing',
        category: 'fo',
        name: 'Index Futures Swing',
        tagline: 'Swing trading on Nifty and BankNifty futures',
        shortDescription: 'Multi-day positional trades on index futures with trend analysis.',
        whatIsItFor: 'For traders who want to capture medium-term moves in index futures leveraging trend-following and breakout strategies.',
        whomIsItFor: 'Swing traders, part-time traders, and those who prefer holding futures positions for days to weeks.',
        idealFor: [
          'Swing traders using futures',
          'Traders with limited daily screen time',
          'Those comfortable with overnight futures',
          'Investors seeking trend-based returns'
        ],
        productDescription: 'Medium-term index futures recommendations based on multi-timeframe analysis, institutional flow tracking, and global market correlation studies.',
        riskSustainability: 'Medium',
        minimumInvestment: 'Rs 50,000 to Rs 2,00,000',
        categoryLabel: 'Futures Swing',
        recommendationFrequency: '2-3 calls per week',
        modeOfRecommendation: 'WhatsApp + Email + SMS',
        followUp: 'Daily trend update, trailing stop management, weekly review',
        priceMonthly: 3499,
        priceQuarterly: 8999,
        icon: 'swap_vert',
        iconColor: 'text-orange-400',
        borderColor: 'hover:border-orange-500/40',
        gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
        stats: [
          { value: '2-3', label: 'Calls/Week' },
          { value: '5-8%', label: 'Avg. Return' }
        ]
      },
      {
        id: 'options-advanced-multileg',
        slug: 'options-advanced-multileg',
        category: 'fo',
        name: 'Advanced Multi-Leg Options',
        tagline: 'Complex options strategies for experienced traders',
        shortDescription: 'Advanced multi-leg strategies including butterflies, condors, and calendars.',
        whatIsItFor: 'For sophisticated traders who understand complex options strategies like butterflies, iron condors, calendar spreads, and ratio spreads for defined-risk defined-reward setups.',
        whomIsItFor: 'Experienced options traders, professional traders, and those with a strong understanding of options Greeks and volatility.',
        idealFor: [
          'Advanced options traders',
          'Those comfortable with multi-leg positions',
          'Traders specializing in volatility strategies',
          'Professionals with systematic trading approach'
        ],
        productDescription: 'Complex multi-leg options strategies built for specific market outlooks. Includes volatility arbitrage, time decay capture, and earnings play setups with precise risk parameters.',
        riskSustainability: 'Medium',
        minimumInvestment: 'Rs 2,00,000 to Rs 10,00,000',
        categoryLabel: 'Advanced Options',
        recommendationFrequency: '1-2 strategies per week',
        modeOfRecommendation: 'Dedicated RM + Email + Phone',
        followUp: 'Position Greeks monitoring, adjustment alerts, expiry management',
        priceMonthly: 8999,
        priceQuarterly: 23999,
        icon: 'hub',
        iconColor: 'text-red-400',
        borderColor: 'hover:border-red-500/40',
        gradient: 'from-red-500/10 via-rose-500/5 to-transparent',
        stats: [
          { value: '1-2', label: 'Setups/Week' },
          { value: 'Custom', label: 'Risk Profile' }
        ]
      },
      {
        id: 'commodity-fo',
        slug: 'commodity-fo',
        category: 'fo',
        name: 'Commodity Futures',
        tagline: 'Gold, Silver, Crude, and Base Metals trading',
        shortDescription: 'Futures trading strategies on MCX commodities.',
        whatIsItFor: 'For traders interested in commodity markets including precious metals, energy, and base metals using futures contracts on MCX.',
        whomIsItFor: 'Commodity traders, investors seeking diversification, and those wanting exposure to global commodity price movements.',
        idealFor: [
          'Commodity market traders',
          'Diversification seekers',
          'Inflation hedge seekers',
          'Global macro traders'
        ],
        productDescription: 'Comprehensive commodity futures recommendations covering Gold, Silver, Crude Oil, Natural Gas, and Base Metals. Combines technical analysis with global supply-demand fundamentals.',
        riskSustainability: 'High',
        minimumInvestment: 'Rs 50,000 to Rs 3,00,000',
        categoryLabel: 'Commodities',
        recommendationFrequency: '2-3 calls per market day',
        modeOfRecommendation: 'Telegram + WhatsApp + Email',
        followUp: 'Global market updates, intraday alerts, daily settlement reports',
        priceMonthly: 2999,
        priceQuarterly: 7499,
        icon: 'diamond',
        iconColor: 'text-amber-300',
        borderColor: 'hover:border-amber-400/40',
        gradient: 'from-amber-300/10 via-yellow-500/5 to-transparent',
        stats: [
          { value: '2-3', label: 'Calls/Day' },
          { value: 'MCX', label: 'Exchange' }
        ]
      }
    ]
  }
];

export function getCategory(id: string): ServiceCategory | undefined {
  return serviceCategories.find(c => c.id === id);
}

export function getSubService(categoryId: string, slug: string) {
  const category = getCategory(categoryId);
  return category?.subServices.find(s => s.slug === slug);
}

export function getAllSubServices() {
  return serviceCategories.flatMap(c => c.subServices);
}

export function calculateQuarterlySavings(monthly: number, quarterly: number): number {
  const threeMonthCost = monthly * 3;
  return threeMonthCost - quarterly;
}

export function calculateSavingsPercent(monthly: number, quarterly: number): number {
  const threeMonthCost = monthly * 3;
  if (threeMonthCost === 0) return 0;
  return Math.round(((threeMonthCost - quarterly) / threeMonthCost) * 100);
}
