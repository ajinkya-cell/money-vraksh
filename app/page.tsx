"use client";

import Link from "next/link";
import Image from "next/image";
import { AboutSection } from "./components/AboutSection";
import { motion } from "framer-motion";
import { serviceCategories } from "./services/data";
import { ACCENT_THEMES } from "./services/types";

const MotionLink = motion.create(Link);

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen pt-[80px] md:pt-[100px]">
      {/* Ambient Light Leaks */}
      <div className="light-leak-primary top-[-100px] left-[-200px]" />
      <div className="light-leak-secondary top-[20%] right-[-100px]" />
      <div className="light-leak-primary bottom-[10%] left-[-100px] opacity-50" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative px-margin-mobile md:px-margin-desktop py-12 md:py-24 max-w-container-max mx-auto min-h-[750px] flex items-center"
      >
        {/* Background Image Panel */}
        <div
          className="absolute inset-0 z-[-1] opacity-20 bg-cover bg-center rounded-2xl overflow-hidden mx-margin-mobile md:mx-margin-desktop my-6 border border-elegant"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlNQ_mxpVKHmffOod9PpCUjb9exANO8Me3LV4sXhu9ySxB_ax2F5Bw63oPRX1Q69fbT7CypbVES437vPA7SFyxSxI1HIluMwqGiEPfd2IVBXaB6J-XK2G2iKf8mcG0vUYoeqXwNkuGkmxFFlHVGZmtit8sNJZTMN4msXkSJbtMUqb5xIdlVvW_3MZIamkF6w75bWuV4Mx-EcSEKwYvzcf5FcHtXZX_kVpr_jBRBjBHj6SmqJ8SLuiBCe7dR8b-lsVQwp1AIZ94boNf')",
          }}
        />

        <div className="grid grid-cols-1 px-5 md:grid-cols-12 gap-gutter w-full">
          {/* Hero Left Content */}
          <div className="md:col-span-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-surface-container-high/50 border border-premium-gold/30 rounded-full px-10 py-1.5 w-fit mb-6 glass-panel">
              <span className="material-symbols-outlined text-premium-gold text-sm">
                verified
              </span>
              <span className="font-label-md text-label-md text-premium-gold uppercase tracking-widest text-xs">
                Registered Research Analyst
              </span>
            </div>
            
            <h1 className="font-display-lg text-4xl md:text-6xl font-bold text-on-surface mb-6 leading-tight font-headline">
              Your Financial Future <br className="hidden md:block" />
              <span className="gradient-text-primary">Starts Now</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-slate-text mb-10 max-w-2xl">
              Professional Stock Market Research, Trading Insights, and Investment Strategies Designed For Consistent Growth in a complex financial landscape.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <MotionLink
                href="/contact"
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="gradient-bg-primary text-background font-label-md text-label-md px-8 py-4 rounded-full hover:shadow-[0_0_20px_rgba(78,222,163,0.5)] transition-all-slow flex items-center gap-2 font-bold focus-ring cursor-pointer"
              >
                Talk To Our Experts
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </MotionLink>
              <MotionLink
                href="/services"
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-transparent border border-premium-gold text-premium-gold font-label-md text-label-md px-8 py-4 rounded-full hover:bg-premium-gold/10 transition-all-slow flex items-center gap-2 font-bold focus-ring cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  play_circle
                </span>
                How We Work
              </MotionLink>
            </div>

            {/* Trust Indicators */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-16 flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-elegant"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
                }}
                className="flex flex-col gap-1"
              >
                <span className="font-data-mono text-data-mono text-primary text-2xl font-bold">
                  10K+
                </span>
                <span className="font-label-md text-label-md text-slate-text">
                  Active Clients
                </span>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
                }}
                className="flex flex-col gap-1"
              >
                <span className="font-data-mono text-data-mono text-primary text-2xl font-bold">
                  98%
                </span>
                <span className="font-label-md text-label-md text-slate-text">
                  Accuracy Rate
                </span>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
                }}
                className="flex flex-col gap-1"
              >
                <span className="font-data-mono text-data-mono text-primary text-2xl font-bold">
                  24/7
                </span>
                <span className="font-label-md text-label-md text-slate-text">
                  Expert Support
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Right Graphic Card */}
          <div className="hidden md:flex md:col-span-4 items-center justify-center relative">
            <div className="w-full aspect-[3/4] glass-panel rounded-2xl relative overflow-hidden flex flex-col justify-between p-6 bg-gradient-to-br from-surface-container-high/40 to-background-midnight border border-elegant">
              <div className="flex justify-between items-start w-full">
                <div>
                  <span className="font-label-md text-label-md text-slate-text block mb-1">
                    NIFTY 50
                  </span>
                  <span className="font-data-mono text-data-mono text-on-surface text-2xl font-bold">
                    22,453.30
                  </span>
                </div>
                <div className="bg-success-emerald/15 text-success-emerald px-2.5 py-1 rounded-lg text-xs font-data-mono flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-[14px]">
                    trending_up
                  </span>
                  +1.24%
                </div>
              </div>

              {/* SVG Sparkline Chart */}
              <div className="w-full h-32 mt-8 relative">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                  <defs>
                    <linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(78, 222, 163, 0.4)" />
                      <stop offset="100%" stopColor="rgba(78, 222, 163, 0)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 50 L0 30 L10 35 L20 20 L30 25 L40 10 L50 15 L60 5 L70 20 L80 10 L90 15 L100 0 L100 50 Z"
                    fill="url(#chart-grad)"
                  />
                  <path
                    d="M0 30 L10 35 L20 20 L30 25 L40 10 L50 15 L60 5 L70 20 L80 10 L90 15 L100 0"
                    fill="none"
                    stroke="#4edea3"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              <div className="w-full mt-6 pt-6 border-t border-elegant flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                    <span className="material-symbols-outlined text-primary">
                      lightbulb
                    </span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface font-semibold">
                      Buy Signal
                    </p>
                    <p className="text-xs text-slate-text font-body-md">
                      Generated 2m ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <AboutSection />
      </motion.div>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface mb-4 font-headline">
            <span>Premium</span> Research Services
          </h2>
          <p className="font-body-lg text-body-lg text-slate-text max-w-2xl mx-auto">
            Tailored strategies for every market condition, designed to maximize your portfolio's potential.
          </p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
        >
          {serviceCategories.slice(0, 3).map((category, idx) => {
            const theme = ACCENT_THEMES[category.accentColor] || ACCENT_THEMES.emerald;
            const cardShadow = "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.08), inset 0 -1.5px 0 0 rgba(0, 0, 0, 0.4)";

            return (
              <motion.div
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                whileHover={{
                  y: -3
                }}
                style={{
                  boxShadow: cardShadow
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 18
                }}
                className="bg-[#171717] rounded-2xl p-8 flex flex-col group border-t border-white/20 border-x border-white/[0.02] border-b border-white/10 relative overflow-visible"
              >
                {idx === 1 && (
                  <div className="absolute top-0 right-0 bg-premium-gold text-background-midnight font-data-mono text-[10px] px-4 py-1.5 rounded-bl-xl font-bold tracking-wider uppercase z-20">
                    POPULAR
                  </div>
                )}
                <div className="w-14 h-14 rounded-xl bg-[#070707] border border-white/5 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className={`material-symbols-outlined ${theme.text} text-3xl`}>
                    {category.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3 font-headline">
                  {category.name}
                </h3>
                <p className="font-body-md text-body-md text-slate-text mb-8 flex-grow">
                  {category.description}
                </p>
                <Link
                  href={`/services/${category.id}`}
                  className={`font-label-md text-label-md ${theme.text} flex items-center gap-2 w-fit hover:opacity-80 transition-colors font-bold focus-ring rounded-sm`}
                >
                  Read More
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto before:absolute before:top-0 before:left-1/4 before:right-1/4 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:content-['']"
      >
        <div className="text-center mb-16">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-2 block font-semibold">
            Our Process
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface font-headline">
            Get Our Service In <span className="font-normal">4 Steps</span>
          </h2>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Step 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            whileHover={{
              y: -3
            }}
            style={{
              boxShadow: "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.08), inset 0 -1.5px 0 0 rgba(0, 0, 0, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="bg-[#171717] p-8 rounded-2xl relative overflow-visible group border-t border-white/20 border-x border-white/[0.02] border-b border-white/10 flex flex-col"
          >
            <div className="absolute top-0 right-0 bg-[#070707] text-premium-gold border-b border-l border-white/10 font-data-mono text-sm px-4 py-1.5 rounded-bl-xl font-bold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)]">
              01
            </div>
            <div className="w-14 h-14 rounded-xl bg-[#070707] border border-white/5 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary">
                contact_support
              </span>
            </div>
            <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2 font-headline">
              Contact Us
            </h3>
            <p className="font-body-md text-body-md text-slate-text">
              First Step of Process
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            whileHover={{
              y: -3
            }}
            style={{
              boxShadow: "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.08), inset 0 -1.5px 0 0 rgba(0, 0, 0, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="bg-[#171717] p-8 rounded-2xl relative overflow-visible group border-t border-white/20 border-x border-white/[0.02] border-b border-white/10 flex flex-col"
          >
            <div className="absolute top-0 right-0 bg-[#070707] text-premium-gold border-b border-l border-white/10 font-data-mono text-sm px-4 py-1.5 rounded-bl-xl font-bold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)]">
              02
            </div>
            <div className="w-14 h-14 rounded-xl bg-[#070707] border border-white/5 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary">
                strategy
              </span>
            </div>
            <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2 font-headline">
              Investment Strategy
            </h3>
            <p className="font-body-md text-body-md text-slate-text">
              Second Step of Process
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            whileHover={{
              y: -3
            }}
            style={{
              boxShadow: "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.08), inset 0 -1.5px 0 0 rgba(0, 0, 0, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="bg-[#171717] p-8 rounded-2xl relative overflow-visible group border-t border-white/20 border-x border-white/[0.02] border-b border-white/10 flex flex-col"
          >
            <div className="absolute top-0 right-0 bg-[#070707] text-premium-gold border-b border-l border-white/10 font-data-mono text-sm px-4 py-1.5 rounded-bl-xl font-bold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)]">
              03
            </div>
            <div className="w-14 h-14 rounded-xl bg-[#070707] border border-white/5 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary">
                model_training
              </span>
            </div>
            <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2 font-headline">
              Follow our guidance
            </h3>
            <p className="font-body-md text-body-md text-slate-text">
              Third Step of Process
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            whileHover={{
              y: -3
            }}
            style={{
              boxShadow: "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.08), inset 0 -1.5px 0 0 rgba(0, 0, 0, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="bg-[#171717] p-8 rounded-2xl relative overflow-visible group border-t border-white/20 border-x border-white/[0.02] border-b border-white/10 flex flex-col"
          >
            <div className="absolute top-0 right-0 bg-[#070707] text-premium-gold border-b border-l border-white/10 font-data-mono text-sm px-4 py-1.5 rounded-bl-xl font-bold shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)]">
              04
            </div>
            <div className="w-14 h-14 rounded-xl bg-[#070707] border border-white/5 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary">
                insights
              </span>
            </div>
            <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2 font-headline">
              Start Investing
            </h3>
            <p className="font-body-md text-body-md text-slate-text">
              Four Step of Process
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Advantages Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative px-margin-mobile md:px-margin-desktop py-20 bg-surface-container-low before:absolute before:top-0 before:left-1/4 before:right-1/4 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:content-[''] after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-primary/20 after:to-transparent after:content-['']"
      >
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-2 block font-semibold">
              Why Choose Us
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface mb-6 font-headline">
              Our <span>Advantages</span>
            </h2>
            <p className="font-body-md text-body-md text-slate-text mb-10 leading-relaxed">
              We help our clients to adhere to the money management as well as risk management principles, to make them accomplish their financial goals. Our analysts utilize the trend following strategies in a sophisticated manner to facilitate our clients grab the profits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary border border-primary/20">
                  <span className="material-symbols-outlined">timer</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-body-lg font-semibold text-on-surface font-headline">
                    10+ Years of experience
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary border border-primary/20">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-body-lg font-semibold text-on-surface font-headline">
                    Modern &amp; Expert trading
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary border border-primary/20">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-body-lg font-semibold text-on-surface font-headline">
                    Tech Growth &amp; Innovation
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary border border-primary/20">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-body-lg font-semibold text-on-surface font-headline">
                    Comprehensive Support
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden glass-panel aspect-video relative flex items-center justify-center bg-surface-container-high/50 border border-elegant">
            <span className="material-symbols-outlined text-6xl text-slate-text/50">image</span>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-500 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWCfTlGgKbr_F1Yl1FWRdrUNiY21JEQSc_56PJHZbQ9g8Vw0AVwcNdERCMtTFjvra5A-lThM_l8coG1Nc5BKAW8uOguBgvIlAD9BYNoQK-JjP4JnlN1qLENAffLNkwhnWVmbkaiw4ZR66aWzqlmpddT1FiK7jlvMpz8xpclI_5LP9y4JrKKWgnobUjc0Zq2eTpHFnE5jkqdtlAT6cwCGGaSiq7S3QLAaMtH1EWE0DmOlcFk_0tVWqP6JXRmMLicman_1kBLzLGXK5K')",
              }}
            />
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-2 block font-semibold">
              Our Mission
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mb-4 leading-tight font-headline">
              We Come To <span>Taking Care</span> Of Your Investment
            </h2>
            <p className="font-body-md text-body-md text-slate-text leading-relaxed">
              Our research team is committed to providing premium market intelligence. Every signal is supported by meticulous technical and fundamental analysis, ensuring high accuracy. Our clients consistently achieve financial stability and wealth growth.
            </p>
          </div>
          <div className="md:col-span-1 glass-panel p-6 rounded-2xl flex flex-col justify-center border border-elegant bg-gradient-to-br from-primary/10 to-transparent">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">
              verified_user
            </span>
            <h4 className="font-headline-md text-lg font-bold text-on-surface mb-2 font-headline">
              Secure Advisory
            </h4>
            <p className="text-xs text-slate-text">
              Fully compliant research models protecting investor capital.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
