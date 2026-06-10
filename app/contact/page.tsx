"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { showToast } from "../components/Toast";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Select a service...",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Trigger Toast notification
      showToast("success", "Your message has been sent successfully!");

      // Reset success state after 1.5s
      setTimeout(() => {
        setIsSuccess(false);
      }, 1500);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Select a service...",
        message: "",
      });
    }, 1500);
  };

  const faqs: FAQItem[] = [
    {
      question: "How long does onboarding take?",
      answer: "Standard KYC and onboarding usually takes 24-48 business hours after all required documents are submitted."
    },
    {
      question: "Are my investments safe?",
      answer: "We operate strictly within regulatory frameworks to ensure maximum transparency, compliance, and capital protection."
    },
    {
      question: "Can I upgrade my service plan later?",
      answer: "Yes, you can upgrade your service tier at any time through your dashboard or by contacting your dedicated account manager."
    }
  ];

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen pt-[120px] pb-24">
      {/* Light Leak Effect */}
      <div className="fixed inset-0 light-leak z-0" />

      <main className="flex-grow px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="font-display-lg text-4xl md:text-6xl font-bold text-on-surface mb-4 font-headline leading-tight">
            Get in Touch
          </h1>
          <p className="font-body-lg text-body-lg text-slate-text max-w-2xl leading-relaxed">
            Connect with our experts for personalized financial strategies, compliance inquiries, or general support.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          {/* Left Column: Form (Spans 7) */}
          <div className="md:col-span-7 glass-panel p-8 rounded-2xl relative overflow-hidden border border-elegant">
            {/* Subtle internal highlight */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 to-transparent" />
            <h2 className="font-headline-lg text-2xl font-bold mb-8 text-on-surface font-headline">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-label-md text-[10px] text-slate-text mb-2 uppercase tracking-widest font-semibold">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    type="text"
                    className="bg-surface-container-high border-0 border-b border-outline-variant text-on-surface p-3 rounded-t-lg transition-all focus:border-b-primary focus:outline-none focus:bg-surface-container-highest focus-ring"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-label-md text-[10px] text-slate-text mb-2 uppercase tracking-widest font-semibold">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    type="email"
                    className="bg-surface-container-high border-0 border-b border-outline-variant text-on-surface p-3 rounded-t-lg transition-all focus:border-b-primary focus:outline-none focus:bg-surface-container-highest focus-ring"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-label-md text-[10px] text-slate-text mb-2 uppercase tracking-widest font-semibold">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    type="tel"
                    className="bg-surface-container-high border-0 border-b border-outline-variant text-on-surface p-3 rounded-t-lg transition-all focus:border-b-primary focus:outline-none focus:bg-surface-container-highest focus-ring"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-label-md text-[10px] text-slate-text mb-2 uppercase tracking-widest font-semibold">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="bg-surface-container-high border-0 border-b border-outline-variant text-on-surface p-3 rounded-t-lg transition-all focus:border-b-primary focus:outline-none focus:bg-surface-container-highest focus-ring appearance-none cursor-pointer"
                  >
                    <option>Select a service...</option>
                    <option>Portfolio Management</option>
                    <option>Equity Research</option>
                    <option>Algo Trading</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-label-md text-[10px] text-slate-text mb-2 uppercase tracking-widest font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-surface-container-high border-0 border-b border-outline-variant text-on-surface p-3 rounded-t-lg transition-all focus:border-b-primary focus:outline-none focus:bg-surface-container-highest focus-ring resize-none"
                  placeholder="How can we help you today?"
                  rows={4}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`w-full md:w-auto text-background font-label-md text-sm px-8 py-3 rounded-lg mt-4 transition-all font-bold focus-ring cursor-pointer flex items-center justify-center gap-2 ${
                  isSuccess
                    ? "bg-gradient-to-r from-emerald-500 to-teal-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    : "bg-gradient-to-r from-primary to-success-emerald hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : isSuccess ? (
                  <>
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Submitted!
                  </>
                ) : (
                  "Submit Request"
                )}
              </motion.button>
            </form>
          </div>

          {/* Right Column: Info & Map (Spans 5) */}
          <div className="md:col-span-5 flex flex-col gap-gutter">
            {/* Contact Details Card */}
            <div className="glass-panel p-8 rounded-2xl flex-grow relative overflow-hidden border border-elegant">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-premium-gold/30 to-transparent" />
              <h3 className="font-headline-md text-lg font-bold text-premium-gold mb-6 font-headline">
                Headquarters
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                  <div>
                    <p className="font-label-md text-[10px] text-slate-text mb-1 uppercase tracking-wider font-semibold">
                      Address
                    </p>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      123 Financial District,
                      <br />
                      Vijay Nagar, Indore,
                      <br />
                      Madhya Pradesh 452010
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    mail
                  </span>
                  <div>
                    <p className="font-label-md text-[10px] text-slate-text mb-1 uppercase tracking-wider font-semibold">
                      Email
                    </p>
                    <p className="font-body-md text-body-md text-on-surface font-semibold">
                      contact@moneyvraksh.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    call
                  </span>
                  <div>
                    <p className="font-label-md text-[10px] text-slate-text mb-1 uppercase tracking-wider font-semibold">
                      Phone
                    </p>
                    <p className="font-data-mono text-data-mono text-on-surface font-bold">
                      +91 1800 123 4567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="glass-panel rounded-2xl overflow-hidden h-48 relative group border border-elegant">
              {/* Dark filter */}
              <div className="absolute inset-0 bg-background-midnight/70 opacity-80 z-10 group-hover:opacity-60 transition-opacity" />
              <Image
                alt="Map Location"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiSKj2jQBh1GCrTrfm4urK-ZjTS0wLR-QmYF-WY3cidA3RkMKRbXX3oogNf_zZbutLt_DNeK2dZr-_zPqIiWLcHUuyhv5h1JvsAFdU7rmrpmhxyrDelLu-OHswd_Vz6nWyO17ImfMSYUuujvPf5lsJdFlGKDPaWlbuYS1dr92DuTPMDJTDbBxC5HTozeq4x-D04628A-0ZfNw8FrDjNYDZELjomkm9uOmXDciUYv44RWaIVcZFRCPmDTu3j4EdmmWlyTzkSOw5pVT6"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="bg-background-midnight/80 backdrop-blur-md border border-elegant px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    my_location
                  </span>
                  <span className="font-label-md text-xs font-bold text-on-surface">
                    View on Maps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards (Bento row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-16">
          <Link
            href="/contact"
            className="glass-panel p-6 rounded-2xl hover:bg-surface-container-high/20 transition-all duration-300 group border border-elegant border-t-2 border-t-transparent hover:border-t-primary flex flex-col justify-between min-h-[160px] focus-ring"
          >
            <span className="material-symbols-outlined text-3xl text-primary mb-4 block group-hover:scale-110 transition-transform">
              support_agent
            </span>
            <div>
              <h4 className="font-headline-md text-base font-bold text-on-surface mb-1 font-headline">
                Talk to an Expert
              </h4>
              <p className="font-body-md text-xs text-slate-text">
                Direct line to our senior research analysts.
              </p>
            </div>
            <div className="font-data-mono text-xs text-primary font-bold mt-4">
              Schedule Call →
            </div>
          </Link>

          <Link
            href="/contact"
            className="glass-panel p-6 rounded-2xl hover:bg-surface-container-high/20 transition-all duration-300 group border border-elegant border-t-2 border-t-transparent hover:border-t-premium-gold flex flex-col justify-between min-h-[160px] focus-ring"
          >
            <span className="material-symbols-outlined text-3xl text-premium-gold mb-4 block group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
              gavel
            </span>
            <div>
              <h4 className="font-headline-md text-base font-bold text-on-surface mb-1 font-headline">
                Compliance Desk
              </h4>
              <p className="font-body-md text-xs text-slate-text">
                Regulatory inquiries and documentation.
              </p>
            </div>
            <div className="font-data-mono text-xs text-premium-gold font-bold mt-4">
              Email Desk →
            </div>
          </Link>

          <Link
            href="/contact"
            className="glass-panel p-6 rounded-2xl hover:bg-surface-container-high/20 transition-all duration-300 group border border-elegant border-t-2 border-t-transparent hover:border-t-primary flex flex-col justify-between min-h-[160px] focus-ring"
          >
            <span className="material-symbols-outlined text-3xl text-primary mb-4 block group-hover:scale-110 transition-transform">
              help
            </span>
            <div>
              <h4 className="font-headline-md text-base font-bold text-on-surface mb-1 font-headline">
                General Support
              </h4>
              <p className="font-body-md text-xs text-slate-text">
                Account access and billing questions.
              </p>
            </div>
            <div className="font-data-mono text-xs text-primary font-bold mt-4">
              Visit Help Center →
            </div>
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto border border-elegant">
          <h2 className="font-headline-lg text-2xl font-bold mb-8 text-center text-on-surface font-headline">
            Frequent Inquiries
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border-b border-elegant pb-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left py-2 font-headline-md text-base font-bold text-on-surface font-headline cursor-pointer hover:text-primary transition-colors focus-ring rounded"
                  >
                    {faq.question}
                    <span
                      className={`material-symbols-outlined text-primary transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 border-l-2 border-primary/30 mt-4"
                      >
                        <p className="font-body-md text-body-md text-slate-text leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
