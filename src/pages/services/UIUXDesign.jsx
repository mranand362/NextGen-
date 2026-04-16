// services/UIDesign.jsx
import React, { useState, useEffect } from "react";
import { Palette, PenTool, Layout, Users, Eye, Heart, ArrowRight, Clock, Star, Shield, Zap } from "lucide-react";

const B = {
  bg: "#FAFBFF",
  surface: "#FFFFFF",
  text1: "#0B1120",
  text2: "#1E293B",
  text3: "#475569",
  text4: "#94A3B8",
  white: "#FFFFFF",
  purple: { 50: "#F5F3FF", 100: "#EDE9FE", 200: "#DDD6FE", 300: "#C4B5FD", 400: "#A78BFA", 500: "#8B5CF6", 600: "#7C3AED", 700: "#6D28D9", 800: "#5B21B6", 900: "#4C1D95" },
  emerald: { 400: "#34D399", 500: "#10B981" },
  r: { xs: "6px", sm: "8px", md: "12px", lg: "16px", xl: "20px", "2xl": "24px", "3xl": "32px", full: "9999px" },
  transition: { default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" },
};

const UIDesign = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const yOffset = -(72 + 40 - 5);
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const features = [
    { icon: Palette, title: "Modern Aesthetics", description: "Contemporary design trends that make your brand stand out." },
    { icon: Users, title: "User-Centered Design", description: "Interfaces designed around real user needs and behaviors." },
    { icon: Eye, title: "Visual Hierarchy", description: "Strategic layout that guides users to key actions." },
    { icon: Heart, title: "Emotional Design", description: "Create connections through thoughtful visual elements." },
    { icon: Layout, title: "Responsive Layouts", description: "Perfect experiences across all devices and screen sizes." },
    { icon: PenTool, title: "Custom Illustrations", description: "Unique graphics that tell your brand story." },
  ];

  const process = [
    { step: "01", title: "Research", description: "User interviews, competitor analysis, and requirement gathering." },
    { step: "02", title: "Wireframing", description: "Low-fidelity layouts to establish information architecture." },
    { step: "03", title: "Visual Design", description: "High-fidelity mockups with color, typography, and imagery." },
    { step: "04", title: "Prototyping", description: "Interactive prototypes for user testing and feedback." },
    { step: "05", title: "Handoff", description: "Developer-ready assets and design specifications." },
  ];

  return (
    <main style={{ background: B.bg, minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ padding: "clamp(80px, 12vh, 120px) 1.5rem 60px", background: `linear-gradient(135deg, ${B.purple[50]} 0%, ${B.bg} 50%, ${B.purple[50]} 100%)` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "8px 20px", background: B.surface, borderRadius: B.r.full, marginBottom: "24px" }}>
            <Palette size={16} color={B.purple[500]} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: B.purple[600] }}>Creative Design Agency</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, color: B.text1, marginBottom: "20px" }}>UI/UX Design<br /><span style={{ color: B.purple[500] }}>That Delights Users</span></h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: B.text3, maxWidth: "700px", margin: "0 auto 32px" }}>Create intuitive, beautiful interfaces that users love and that drive business results.</p>
          <button onClick={scrollToContact} style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: B.r.lg, background: `linear-gradient(135deg, ${B.purple[500]}, ${B.purple[700]})`, color: B.white, border: "none", cursor: "pointer" }}>Start Your Project <ArrowRight size={16} /></button>
        </div>
      </div>

      {/* Features */}
      <div style={{ padding: "60px 1.5rem", background: B.surface }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, marginBottom: "48px" }}>Our Design Approach</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} style={{ padding: "28px", background: B.bg, borderRadius: B.r.xl, border: `1px solid ${B.purple[100]}50`, textAlign: "center" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: B.r.full, background: `${B.purple[500]}10`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}><Icon size={28} color={B.purple[500]} /></div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>{feature.title}</h3>
                  <p style={{ fontSize: "14px", color: B.text3 }}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process */}
      <div style={{ padding: "60px 1.5rem", background: B.bg }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, marginBottom: "48px" }}>Design Process</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
            {process.map((step) => (
              <div key={step.step} style={{ flex: "1", minWidth: "200px", padding: "24px", background: B.surface, borderRadius: B.r.xl, textAlign: "center" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: B.r.full, background: `${B.purple[500]}10`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}><span style={{ fontSize: "20px", fontWeight: 700, color: B.purple[500] }}>{step.step}</span></div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "13px", color: B.text3 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "60px 1.5rem", background: `linear-gradient(135deg, ${B.purple[600]}, ${B.purple[800]})`, textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: B.white, marginBottom: "16px" }}>Ready for a Design That Stands Out?</h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.9)", marginBottom: "32px" }}>Let's create something beautiful together.</p>
          <button onClick={scrollToContact} style={{ padding: "16px 36px", borderRadius: B.r.lg, background: B.white, color: B.purple[600], fontSize: "15px", fontWeight: 700, border: "none", cursor: "pointer" }}>Get Free Consultation →</button>
        </div>
      </div>
    </main>
  );
};

export default UIDesign;