// services/ATSResume.jsx
import React, { useState, useEffect } from "react";
import { FileText, Target, CheckCircle, TrendingUp, Users, Award, ArrowRight, Clock, Star, Shield, Zap, Download, Eye, Briefcase } from "lucide-react";

const B = {
  bg: "#FAFBFF",
  surface: "#FFFFFF",
  text1: "#0B1120",
  text2: "#1E293B",
  text3: "#475569",
  text4: "#94A3B8",
  white: "#FFFFFF",
  emerald: { 50: "#ECFDF5", 100: "#D1FAE5", 200: "#A7F3D0", 300: "#6EE7B7", 400: "#34D399", 500: "#10B981", 600: "#059669", 700: "#047857", 800: "#065F46", 900: "#064E3B" },
  blue: { 500: "#3B82F6", 600: "#2563EB" },
  r: { xs: "6px", sm: "8px", md: "12px", lg: "16px", xl: "20px", "2xl": "24px", "3xl": "32px", full: "9999px" },
  transition: { default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" },
};

const ATSResume = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const yOffset = -(72 + 40 - 5);
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const benefits = [
    { icon: Target, title: "ATS-Friendly Format", description: "Optimized layout that passes automated screening systems.", stat: "85% More Interviews" },
    { icon: CheckCircle, title: "Keyword Optimization", description: "Strategic placement of industry-relevant keywords.", stat: "3x Callbacks" },
    { icon: TrendingUp, title: "Career Growth", description: "Designed to highlight achievements and impact.", stat: "50% Higher Salary" },
    { icon: Users, title: "HR Approved", description: "Reviewed by professional recruiters.", stat: "98% Satisfaction" },
  ];

  const packages = [
    { name: "Basic", price: "₹2,999", features: ["ATS-Friendly Template", "Keyword Optimization", "Proofreading", "PDF & Word Format"], popular: false },
    { name: "Professional", price: "₹5,999", features: ["Everything in Basic", "LinkedIn Profile Optimization", "Cover Letter", "30-Day Revisions", "Priority Delivery"], popular: true },
    { name: "Executive", price: "₹9,999", features: ["Everything in Professional", "Executive Bio", "Portfolio Review", "90-Day Revisions", "1-on-1 Career Session"], popular: false },
  ];

  return (
    <main style={{ background: B.bg, minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ padding: "clamp(80px, 12vh, 120px) 1.5rem 60px", background: `linear-gradient(135deg, ${B.emerald[50]} 0%, ${B.bg} 50%, ${B.emerald[50]} 100%)` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "8px 20px", background: B.surface, borderRadius: B.r.full, marginBottom: "24px" }}>
            <FileText size={16} color={B.emerald[500]} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: B.emerald[600] }}>ATS Resume Experts</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, color: B.text1, marginBottom: "20px" }}>ATS-Friendly Resume<br /><span style={{ color: B.emerald[500] }}>That Gets You Hired</span></h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: B.text3, maxWidth: "700px", margin: "0 auto 32px" }}>Beat the automated screening systems and get your resume in front of real recruiters.</p>
          <button onClick={scrollToContact} style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: B.r.lg, background: `linear-gradient(135deg, ${B.emerald[500]}, ${B.emerald[700]})`, color: B.white, border: "none", cursor: "pointer" }}>Get Started <ArrowRight size={16} /></button>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ padding: "60px 1.5rem", background: B.surface }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, marginBottom: "48px" }}>Why Choose Our Resume Service</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} style={{ padding: "28px", background: B.bg, borderRadius: B.r.xl, textAlign: "center" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: B.r.full, background: `${B.emerald[500]}10`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}><Icon size={28} color={B.emerald[500]} /></div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{benefit.title}</h3>
                  <p style={{ fontSize: "14px", color: B.text3, marginBottom: "12px" }}>{benefit.description}</p>
                  <span style={{ fontSize: "12px", padding: "4px 12px", background: `${B.emerald[500]}10`, borderRadius: B.r.full, color: B.emerald[600] }}>{benefit.stat}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div style={{ padding: "60px 1.5rem", background: B.bg }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, marginBottom: "48px" }}>Pricing Plans</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {packages.map((pkg) => (
              <div key={pkg.name} style={{ padding: "32px", background: B.surface, borderRadius: B.r["2xl"], border: pkg.popular ? `2px solid ${B.emerald[500]}` : `1px solid ${B.emerald[100]}`, position: "relative" }}>
                {pkg.popular && <span style={{ position: "absolute", top: "-12px", right: "24px", padding: "4px 12px", background: B.emerald[500], color: B.white, borderRadius: B.r.full, fontSize: "11px", fontWeight: 600 }}>Most Popular</span>}
                <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>{pkg.name}</h3>
                <div style={{ fontSize: "36px", fontWeight: 800, color: B.emerald[600], marginBottom: "24px" }}>{pkg.price}<span style={{ fontSize: "14px", color: B.text4 }}>/resume</span></div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
                  {pkg.features.map((feature) => (
                    <li key={feature} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", fontSize: "14px" }}><CheckCircle size={16} color={B.emerald[500]} />{feature}</li>
                  ))}
                </ul>
                <button onClick={scrollToContact} style={{ width: "100%", padding: "14px", borderRadius: B.r.lg, background: pkg.popular ? `linear-gradient(135deg, ${B.emerald[500]}, ${B.emerald[700]})` : B.surface, color: pkg.popular ? B.white : B.emerald[600], border: pkg.popular ? "none" : `1px solid ${B.emerald[200]}`, cursor: "pointer", fontWeight: 600 }}>Choose Plan →</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "60px 1.5rem", background: `linear-gradient(135deg, ${B.emerald[600]}, ${B.emerald[800]})`, textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: B.white, marginBottom: "16px" }}>Ready to Land Your Dream Job?</h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.9)", marginBottom: "32px" }}>Let our expert resume writers help you stand out.</p>
          <button onClick={scrollToContact} style={{ padding: "16px 36px", borderRadius: B.r.lg, background: B.white, color: B.emerald[600], fontSize: "15px", fontWeight: 700, border: "none", cursor: "pointer" }}>Get Started Today →</button>
        </div>
      </div>
    </main>
  );
};

export default ATSResume;