"use client";

import { useState } from "react";
import Image from "next/image";

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

  const [formSubmitted, setFormSubmitted] = useState(false);
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
    // Simulate API request
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Select a service...",
        message: "",
      });
      setFormSubmitted(false);
    }, 5000);
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

            {formSubmitted ? (
              <div className="bg-primary/10 border border-primary/30 text-primary p-6 rounded-xl animate-fade-in flex flex-col items-center justify-center text-center min-h-[300px]">
                <span className="material-symbols-outlined text-5xl mb-4">check_circle</span>
                <h3 className="font-headline-md font-bold text-lg mb-2 font-headline">Request Submitted!</h3>
                <p className="text-sm text-slate-text max-w-md">
                  Thank you for reaching out, we will get back to you shortly at the provided email/phone number.
                </p>
              </div>
            ) : (
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
                      className="bg-surface-container-high border-0 border-b border-outline-variant text-on-surface p-3 rounded-t-lg transition-all focus:border-b-primary focus:outline-none focus:bg-surface-container-highest"
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
                      className="bg-surface-container-high border-0 border-b border-outline-variant text-on-surface p-3 rounded-t-lg transition-all focus:border-b-primary focus:outline-none focus:bg-surface-container-highest"
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
                      className="bg-surface-container-high border-0 border-b border-outline-variant text-on-surface p-3 rounded-t-lg transition-all focus:border-b-primary focus:outline-none focus:bg-surface-container-highest"
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
                      className="bg-surface-container-high border-0 border-b border-outline-variant text-on-surface p-3 rounded-t-lg transition-all focus:border-b-primary focus:outline-none focus:bg-surface-container-highest appearance-none cursor-pointer"
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
                    className="bg-surface-container-high border-0 border-b border-outline-variant text-on-surface p-3 rounded-t-lg transition-all focus:border-b-primary focus:outline-none focus:bg-surface-container-highest resize-none"
                    placeholder="How can we help you today?"
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-success-emerald text-background font-label-md text-sm px-8 py-3 rounded-lg mt-4 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all font-bold hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Submit Request
                </button>
              </form>
            )}
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
          <div className="glass-panel p-6 rounded-2xl hover:bg-surface-container-high/20 transition-all duration-300 group cursor-pointer border border-elegant border-t-2 border-t-transparent hover:border-t-primary flex flex-col justify-between min-h-[160px]">
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
          </div>

          <div className="glass-panel p-6 rounded-2xl hover:bg-surface-container-high/20 transition-all duration-300 group cursor-pointer border border-elegant border-t-2 border-t-transparent hover:border-t-premium-gold flex flex-col justify-between min-h-[160px]">
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
          </div>

          <div className="glass-panel p-6 rounded-2xl hover:bg-surface-container-high/20 transition-all duration-300 group cursor-pointer border border-elegant border-t-2 border-t-transparent hover:border-t-primary flex flex-col justify-between min-h-[160px]">
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
          </div>
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
                    className="w-full flex justify-between items-center text-left py-2 font-headline-md text-base font-bold text-on-surface font-headline cursor-pointer hover:text-primary transition-colors"
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
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
                    } pl-4 border-l-2 border-primary/30`}
                  >
                    <p className="font-body-md text-body-md text-slate-text leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
