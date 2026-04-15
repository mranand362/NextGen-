import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Code2,
  ArrowRight,
  CheckCircle2,
  Star,
  Play,
  Terminal,
  Users,
  Zap,
  Shield,
  Globe,
  FileText,
  Monitor,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   BLUE DESIGN TOKENS
   ═══════════════════════════════════════════════════════════════════════════ */
const B = {
  bg:        "#FAFBFF",
  surface:   "#FFFFFF",
  text1:     "#0B1120",
  text2:     "#1E293B",
  text3:     "#475569",
  text4:     "#94A3B8",
  blue: {
    50:  "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A5F",
  },
  indigo: { 400: "#818CF8", 500: "#6366F1" },
  sky:    { 300: "#7DD3FC", 400: "#38BDF8" },
  amber:  { 400: "#FBBF24", 500: "#F59E0B" },
  emerald:{ 400: "#34D399", 500: "#10B981" },
  r:      { xs:"6px", sm:"8px", md:"12px", lg:"16px", xl:"20px", "2xl":"24px", "3xl":"32px", full:"9999px" },
  shadow: {
    xs:  "0 1px 2px rgba(0,0,0,0.03)",
    sm:  "0 2px 8px rgba(0,0,0,0.04)",
    md:  "0 4px 16px rgba(0,0,0,0.05)",
    lg:  "0 8px 32px rgba(0,0,0,0.06)",
    xl:  "0 16px 48px rgba(0,0,0,0.07)",
    blue:"0 8px 32px rgba(59,130,246,0.15)",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   EXTRACTED STYLES
   ═══════════════════════════════════════════════════════════════════════════ */
const styles = {
  buttonPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "clamp(12px, 3vw, 15px) clamp(24px, 5vw, 32px)",
    borderRadius: B.r.lg,
    background: `linear-gradient(135deg, ${B.blue[500]} 0%, ${B.blue[700]} 100%)`,
    color: "#FFFFFF",
    fontSize: "clamp(13px, 3vw, 14px)",
    fontWeight: 700,
    textDecoration: "none",
    fontFamily: "'Syne',sans-serif",
    letterSpacing: "0.02em",
    boxShadow: `0 4px 20px ${B.blue[500]}30, 0 1px 3px ${B.blue[800]}20, inset 0 1px 0 rgba(255,255,255,0.2)`,
    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
    whiteSpace: "nowrap",
    cursor: "pointer",
  },
  buttonSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "clamp(12px, 3vw, 15px) clamp(20px, 4vw, 28px)",
    borderRadius: B.r.lg,
    background: B.surface,
    border: `1px solid ${B.blue[200]}60`,
    color: B.text2,
    fontSize: "clamp(13px, 3vw, 14px)",
    fontWeight: 600,
    textDecoration: "none",
    fontFamily: "'DM Sans',sans-serif",
    boxShadow: B.shadow.sm,
    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
    whiteSpace: "nowrap",
    cursor: "pointer",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "7px 18px 7px 8px",
    borderRadius: B.r.full,
    border: `1px solid ${B.blue[200]}60`,
    background: `linear-gradient(135deg, ${B.blue[50]}, ${B.surface})`,
    marginBottom: "clamp(20px, 4vw, 32px)",
    boxShadow: B.shadow.xs,
    width: "fit-content",
  },
  dashboardCard: {
    position: "relative",
    borderRadius: B.r["2xl"],
    overflow: "hidden",
    background: B.surface,
    border: `1px solid ${B.blue[100]}50`,
    boxShadow: B.shadow.xl,
    width: "100%",
  },
  codeBlock: {
    padding: "clamp(16px, 3vw, 20px) clamp(16px, 3vw, 22px)",
    background: "#0F172A",
    position: "relative",
    overflowX: "auto",
  },
  serviceChip: (color, isActive) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "clamp(10px, 2vw, 14px) clamp(10px, 2vw, 14px)",
    borderRadius: B.r.lg,
    background: isActive ? `${color}0A` : B.surface,
    border: `1px solid ${isActive ? `${color}30` : `${B.blue[100]}30`}`,
    transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
    boxShadow: isActive ? `0 0 0 1px ${color}15, ${B.shadow.sm}` : B.shadow.xs,
    transform: isActive ? "scale(1.02)" : "scale(1)",
    cursor: "pointer",
    width: "100%",
  }),
  metricCard: (color, delay = 0) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    padding: "clamp(12px, 2vw, 16px) clamp(8px, 1.5vw, 10px)",
    borderRadius: B.r.lg,
    background: B.surface,
    border: `1px solid ${color}15`,
    boxShadow: B.shadow.xs,
    animation: `hFloat 6s ease-in-out infinite ${delay}s`,
    width: "100%",
  }),
};

const SERVICES = [
  { icon: Monitor,  label: "MERN Stack",      sub: "Full-stack web apps",  color: B.blue[500],   bg: B.blue[50] },
  { icon: FileText, label: "ATS Resumes",      sub: "Career-ready CVs",     color: B.amber[500],  bg: "#FFFBEB" },
  { icon: Globe,    label: "Portfolio Sites",  sub: "Personal branding",    color: B.indigo[500], bg: "#EEF2FF" },
  { icon: Zap,      label: "College Projects", sub: "Academic excellence",  color: B.emerald[500], bg: "#ECFDF5" },
];

const STATS = [
  { value: "200+",  label: "Projects Delivered",  color: B.blue[500] },
  { value: "150+",  label: "Happy Clients",       color: B.indigo[500] },
  { value: "99%",   label: "Client Satisfaction", color: B.amber[500] },
  { value: "24/7",  label: "Dedicated Support",   color: B.emerald[500] },
];

/* ═══════════════════════════════════════════════════════════════════════════
   HERO KEYFRAMES
   ═══════════════════════════════════════════════════════════════════════════ */
const HeroKeyframes = () => (
  <style>{`
    @keyframes hFadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes hFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes hSlideLeft {
      from { opacity: 0; transform: translateX(40px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes hFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    @keyframes hPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
      50% { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
    }
    @keyframes hSweep {
      0% { transform: translateX(-300px); }
      50% { transform: translateX(calc(100vw + 300px)); }
      100% { transform: translateX(calc(100vw + 300px)); }
    }
    @keyframes hBlink {
      0%, 100% { border-color: transparent; }
      50% { border-color: ${B.blue[500]}; }
    }
    @keyframes hGlowPulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
    
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
    
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: clamp(32px, 7vw, 80px);
      align-items: center;
    }
    
    @media (min-width: 768px) {
      .hero-grid {
        grid-template-columns: 1fr 1fr !important;
        gap: clamp(40px, 6vw, 60px);
      }
    }
    
    @media (min-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr 1.1fr !important;
        gap: clamp(48px, 7vw, 80px);
      }
    }
    
    @media (min-width: 768px) {
      .mobile-visual {
        display: none !important;
      }
    }
    
    .hero-right {
      display: none;
    }
    
    @media (min-width: 768px) {
      .hero-right {
        display: flex !important;
        flex-direction: column;
        gap: 16px;
      }
    }
    
    .code-block-scroll {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    
    .code-block-scroll::-webkit-scrollbar {
      height: 4px;
    }
    
    .code-block-scroll::-webkit-scrollbar-track {
      background: #1E293B;
      border-radius: 4px;
    }
    
    .code-block-scroll::-webkit-scrollbar-thumb {
      background: #3B82F6;
      border-radius: 4px;
    }
    
    .no-layout-shift {
      contain: layout style paint;
    }
    
    @media (max-width: 767px) {
      button, a, [role="button"] {
        min-height: 44px;
      }
    }
  `}</style>
);

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN HERO COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const Hero = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SERVICES.length);
    }, 3000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const scrollToElement = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  const handleScroll = useCallback((e, elementId) => {
    e.preventDefault();
    scrollToElement(elementId);
  }, [scrollToElement]);

  const currentService = SERVICES[activeIdx];
  const getDelay = (i) => `${i * 80 + 200}ms`;

  return (
    <>
      <HeroKeyframes />

      <section
        ref={heroRef}
        id="hero"
        aria-label="Hero section - Web development services"
        role="banner"
        className="no-layout-shift"
        style={{
          position: "relative",
          minHeight: "100svh",
          overflowX: "hidden",
          background: `linear-gradient(168deg, ${B.bg} 0%, ${B.blue[50]}40 30%, #F8FAFC 55%, ${B.blue[50]}20 80%, ${B.bg} 100%)`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* BACKGROUND LAYER */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {/* Primary blue orb */}
          <div style={{
            position: "absolute", top: "-12%", right: "-8%",
            width: "clamp(300px, 52vw, 680px)", 
            height: "clamp(300px, 52vw, 680px)",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${B.blue[400]}10 0%, ${B.blue[300]}05 40%, transparent 70%)`,
            filter: "blur(60px)",
          }} />
          
          {/* Secondary indigo orb */}
          <div style={{
            position: "absolute", bottom: "10%", left: "-10%",
            width: "clamp(250px, 38vw, 500px)", 
            height: "clamp(250px, 38vw, 500px)",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${B.indigo[400]}08 0%, transparent 65%)`,
            filter: "blur(70px)",
          }} />
          
          {/* Warm accent */}
          <div style={{
            position: "absolute", top: "40%", left: "35%",
            width: "clamp(150px, 24vw, 320px)", 
            height: "clamp(150px, 24vw, 320px)",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${B.amber[400]}04 0%, transparent 70%)`,
            filter: "blur(50px)",
          }} />

          {/* Geometric accents */}
          <div style={{
            position: "absolute", top: "18%", left: "6%",
            width: "60px", height: "60px", borderRadius: B.r.md,
            border: `1px solid ${B.blue[200]}50`,
            transform: "rotate(15deg)",
            animation: "hFloat 8s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "22%", right: "8%",
            width: "40px", height: "40px", borderRadius: "50%",
            border: `1px solid ${B.indigo[400]}30`,
            animation: "hFloat 6s ease-in-out infinite 1s",
          }} />
          <div style={{
            position: "absolute", top: "60%", left: "48%",
            width: "12px", height: "12px", borderRadius: "50%",
            background: `${B.blue[400]}25`,
            animation: "hGlowPulse 3s ease-in-out infinite",
          }} />

          {/* Top accent lines */}
          <div style={{ position: "absolute", top: 0, left: "12%", width: "1px", height: "120px", background: `linear-gradient(180deg, ${B.blue[300]}40, transparent)` }} />
          <div style={{ position: "absolute", top: 0, left: "calc(12% + 20px)", width: "1px", height: "60px", background: `linear-gradient(180deg, ${B.blue[200]}30, transparent)` }} />
        </div>

        {/* SWEEP LINE */}
        <div aria-hidden="true" style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          right: 0, 
          height: "2px", 
          overflow: "hidden", 
          zIndex: 20 
        }}>
          <div style={{
            height: "100%", 
            width: "200px",
            background: `linear-gradient(90deg, transparent, ${B.blue[400]}, ${B.sky[400]}, transparent)`,
            animation: "hSweep 7s ease-in-out infinite",
          }} />
        </div>

        {/* MAIN CONTENT */}
        <main
          id="main-content"
          role="main"
          style={{
            position: "relative", 
            zIndex: 10, 
            flex: 1, 
            width: "100%",
            padding: "clamp(100px, 12vh, 140px) clamp(16px, 5vw, 24px) clamp(40px, 6vh, 80px)",
          }}
        >
          <div style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
          }} className="hero-grid">

            {/* LEFT COLUMN */}
            <div>
              {/* Badge */}
              <div style={{
                ...styles.badge,
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${getDelay(0)} both` : "none",
              }}>
                
                
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: "clamp(32px, 7vw, 60px)",
                fontWeight: 800, 
                lineHeight: 1.1, 
                letterSpacing: "-0.04em",
                color: B.text1, 
                marginBottom: "clamp(18px, 3vw, 28px)",
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${getDelay(1)} both` : "none",
              }}>
                We Build{" "}
                <span
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  style={{
                    display: "inline-block", 
                    position: "relative", 
                    color: currentService.color,
                    transition: "color 0.5s ease", 
                    cursor: "pointer",
                  }}
                  aria-label={`Currently showing: ${currentService.label} services`}
                >
                  {currentService.label}
                  <span style={{
                    position: "absolute", 
                    bottom: "-4px", 
                    left: 0, 
                    right: 0, 
                    height: "3px",
                    background: currentService.color, 
                    borderRadius: "2px", 
                    opacity: 0.25,
                    transition: "background 0.5s ease",
                  }} />
                </span>
                {" "}Solutions
                <br />
                That{" "}
                <span style={{
                  backgroundImage: `linear-gradient(135deg, ${B.blue[500]} 0%, ${B.indigo[500]} 50%, ${B.sky[400]} 100%)`,
                  backgroundClip: "text", 
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Drive Results
                </span>
              </h1>

              {/* Subheadline */}
              <p style={{
                fontSize: "clamp(14px, 1.8vw, 16px)", 
                lineHeight: 1.6,
                color: B.text3, 
                maxWidth: "540px",
                marginBottom: "clamp(24px, 4vw, 40px)",
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${getDelay(2)} both` : "none",
              }}>
                From full-stack MERN applications to ATS-optimized resumes — we deliver
                production-grade solutions that help students, professionals, and businesses
                stand out in a competitive landscape.
              </p>

              {/* CTAs */}
              <div style={{
                display: "flex", 
                flexWrap: "wrap", 
                gap: "clamp(12px, 3vw, 16px)",
                marginBottom: "clamp(32px, 5vw, 52px)",
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${getDelay(3)} both` : "none",
              }}>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  style={styles.buttonPrimary}
                  aria-label="Start your project - opens contact section"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 12px 36px ${B.blue[500]}40, 0 2px 6px ${B.blue[800]}25, inset 0 1px 0 rgba(255,255,255,0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = styles.buttonPrimary.boxShadow;
                  }}
                >
                  Start Your Project <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => handleScroll(e, "portfolio")}
                  style={styles.buttonSecondary}
                  aria-label="View our portfolio of previous work"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = B.blue[50];
                    e.currentTarget.style.borderColor = B.blue[300];
                    e.currentTarget.style.color = B.blue[700];
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = B.shadow.md;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = B.surface;
                    e.currentTarget.style.borderColor = `${B.blue[200]}60`;
                    e.currentTarget.style.color = B.text2;
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = B.shadow.sm;
                  }}
                >
                  <span style={{
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    width: "28px", 
                    height: "28px", 
                    borderRadius: "50%",
                    background: `${B.blue[500]}10`, 
                    flexShrink: 0,
                  }} aria-hidden="true">
                    <Play size={12} color={B.blue[600]} fill={B.blue[600]} />
                  </span>
                  View Portfolio
                </a>
              </div>

              {/* Trust Indicators */}
              <div style={{
                display: "flex", 
                flexWrap: "wrap", 
                gap: "clamp(16px, 4vw, 32px)",
                paddingTop: "clamp(20px, 3vw, 32px)",
                borderTop: `1px solid ${B.blue[100]}60`,
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${getDelay(4)} both` : "none",
              }}>
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div style={{
                      fontSize: "clamp(20px, 3vw, 28px)", 
                      fontWeight: 800,
                      color: stat.color, 
                      fontFamily: "'Syne',sans-serif", 
                      lineHeight: 1,
                    }}>{stat.value}</div>
                    <div style={{
                      fontSize: "clamp(9px, 2vw, 10px)", 
                      color: B.text4,
                      textTransform: "uppercase", 
                      letterSpacing: "0.1em",
                      marginTop: "5px", 
                      fontWeight: 500,
                    }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN - Desktop Only */}
            <div
              className="hero-right"
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hSlideLeft 0.8s cubic-bezier(0.22,1,0.36,1) ${getDelay(2)} both` : "none",
              }}
            >
              {/* Main Dashboard Card */}
              <div style={styles.dashboardCard}>
                {/* Browser chrome */}
                <div style={{
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px",
                  padding: "clamp(12px, 2vw, 14px) clamp(14px, 2.5vw, 18px)",
                  background: `linear-gradient(180deg, ${B.blue[50]}80, ${B.surface})`,
                  borderBottom: `1px solid ${B.blue[100]}40`,
                }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {["#FCA5A5", "#FCD34D", "#6EE7B7"].map((c) => (
                      <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.8 }} />
                    ))}
                  </div>
                  <div style={{
                    flex: 1, 
                    padding: "6px 14px", 
                    borderRadius: B.r.full,
                    background: B.blue[50], 
                    border: `1px solid ${B.blue[100]}40`,
                    display: "flex", 
                    alignItems: "center", 
                    gap: "8px",
                  }}>
                    <Shield size={10} color={B.blue[400]} />
                    <span style={{ fontSize: "clamp(10px, 1.5vw, 11px)", color: B.text4, fontFamily: "monospace" }}>
                      nextgen-portal.app
                    </span>
                  </div>
                </div>

                {/* Code block */}
                <div className="code-block-scroll" style={styles.codeBlock}>
                  <div style={{ display: "flex", gap: "4px", marginBottom: "16px", flexWrap: "wrap" }}>
                    {[
                      { label: "App.js", active: true },
                      { label: "Server.js", active: false },
                      { label: "DB.js", active: false }
                    ].map((tab) => (
                      <div key={tab.label} style={{
                        padding: "5px 14px", 
                        borderRadius: `${B.r.sm} ${B.r.sm} 0 0`,
                        fontSize: "clamp(10px, 1.5vw, 11px)", 
                        fontFamily: "monospace", 
                        fontWeight: 500,
                        background: tab.active ? "#1E293B" : "transparent",
                        color: tab.active ? "#E2E8F0" : "#64748B",
                        border: tab.active ? `1px solid #334155` : "1px solid transparent",
                        borderBottom: tab.active ? "2px solid #3B82F6" : "none",
                        whiteSpace: "nowrap",
                      }}>{tab.label}</div>
                    ))}
                  </div>
                  <pre style={{ 
                    margin: 0, 
                    fontSize: "clamp(11px, 1.5vw, 12px)", 
                    lineHeight: 1.7, 
                    fontFamily: "'SF Mono','Fira Code',monospace", 
                    color: "#CBD5E1", 
                    overflowX: "auto",
                  }}>
                    <code>
                      <span style={{ color:"#7DD3FC" }}>{"import"}</span>{" "}
                      <span style={{ color:"#FDE68A" }}>{"React"}</span>{" "}
                      <span style={{ color:"#7DD3FC" }}>{"from"}</span>{" "}
                      <span style={{ color:"#86EFAC" }}>{'\'react\''}</span>{";\n"}
                      <span style={{ color:"#7DD3FC" }}>{"import"}</span>{" "}
                      <span style={{ color:"#FDE68A" }}>{"{ useState }"}</span>{" "}
                      <span style={{ color:"#7DD3FC" }}>{"from"}</span>{" "}
                      <span style={{ color:"#86EFAC" }}>{'\'react\''}</span>{";\n\n"}
                      <span style={{ color:"#7DD3FC" }}>{"export default function"}</span>{" "}
                      <span style={{ color:"#93C5FD" }}>{"Dashboard"}</span>{"() {"}{"\n"}
                      {"  "}{"const"}{" "}<span style={{ color:"#FDE68A" }}>{"[data"}</span>
                      <span style={{ color:"#94A3B8" }}>{", "}</span>
                      <span style={{ color:"#FDE68A" }}>{"setData]"}</span>{" "}
                      {"= "}
                      <span style={{ color:"#93C5FD" }}>{"useState"}</span>{"("}<span style={{ color:"#FCA5A5" }}>{"null"}</span>{");"}{"\n\n"}
                      {"  "}{"return"}{" ("}{"\n"}
                      {"    "}{"<"}
                      <span style={{ color:"#FCA5A5" }}>{"div"}</span>{" "}
                      <span style={{ color:"#93C5FD" }}>{"className"}</span>
                      <span style={{ color:"#94A3B8" }}>{"="}</span>
                      <span style={{ color:"#86EFAC" }}>{'"dashboard"'}</span>
                      <span style={{ color:"#94A3B8" }}>{">"}</span>
                    </code>
                  </pre>
                  {/* Cursor blink */}
                  <div style={{
                    position: "absolute", 
                    bottom: "20px", 
                    right: "22px",
                    width: "8px", 
                    height: "18px", 
                    borderRadius: "2px",
                    background: B.blue[400],
                    animation: "hBlink 1s step-end infinite",
                  }} />
                </div>

                {/* Bottom bar */}
                <div style={{
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "clamp(10px, 2vw, 12px) clamp(14px, 2.5vw, 18px)",
                  background: `linear-gradient(180deg, ${B.surface}, ${B.blue[50]}40)`,
                  borderTop: `1px solid ${B.blue[100]}40`,
                  flexWrap: "wrap",
                  gap: "8px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "32px", 
                      height: "32px", 
                      borderRadius: B.r.md,
                      background: `linear-gradient(135deg, ${B.blue[500]}, ${B.blue[700]})`,
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                    }}>
                      <Code2 size={14} color="#FFFFFF" />
                    </div>
                    <div>
                      <div style={{ fontSize: "clamp(11px, 1.5vw, 12px)", fontWeight: 700, color: B.text1, fontFamily: "'Syne',sans-serif" }}>
                        MERN Dashboard
                      </div>
                      <div style={{ fontSize: "clamp(9px, 1.2vw, 10px)", color: B.text4 }}>
                        React · Node · MongoDB
                      </div>
                    </div>
                  </div>
                  <span style={{
                    padding: "4px 10px", 
                    borderRadius: B.r.full,
                    background: `${B.emerald[500]}12`, 
                    color: B.emerald[500],
                    fontSize: "clamp(9px, 1.2vw, 10px)", 
                    fontWeight: 700, 
                    letterSpacing: "0.05em",
                    display: "flex", 
                    alignItems: "center", 
                    gap: "4px",
                  }}>
                    <span style={{ 
                      width: "5px", 
                      height: "5px", 
                      borderRadius: "50%", 
                      background: B.emerald[400], 
                      animation: "hPulse 2s infinite" 
                    }} />
                    Live
                  </span>
                </div>
              </div>

              {/* Service Chips */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {SERVICES.map((service, idx) => {
                  const Icon = service.icon;
                  const isActive = idx === activeIdx;
                  return (
                    <div 
                      key={service.label} 
                      style={styles.serviceChip(service.color, isActive)}
                      onMouseEnter={() => setPaused(true)}
                      onMouseLeave={() => setPaused(false)}
                      onClick={() => setActiveIdx(idx)}
                    >
                      <div style={{
                        width: "clamp(28px, 4vw, 32px)", 
                        height: "clamp(28px, 4vw, 32px)", 
                        borderRadius: B.r.md,
                        background: `${service.color}12`, 
                        display: "flex",
                        alignItems: "center", 
                        justifyContent: "center", 
                        flexShrink: 0,
                      }}>
                        <Icon size={15} color={service.color} />
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <div style={{
                          color: isActive ? B.text1 : B.text2,
                          fontWeight: 600, 
                          fontSize: "clamp(11px, 2vw, 12px)",
                          fontFamily: "'Syne',sans-serif",
                          transition: "color 0.3s",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}>{service.label}</div>
                        <div style={{ color: B.text4, fontSize: "clamp(9px, 1.5vw, 10px)" }}>
                          {service.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating Metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {[
                  { icon: CheckCircle2, value: "98%", label: "Success", color: B.emerald[500] },
                  { icon: Star, value: "4.9", label: "Rating", color: B.amber[500] },
                  { icon: Users, value: "150+", label: "Clients", color: B.blue[500] },
                ].map((metric, idx) => {
                  const MetricIcon = metric.icon;
                  return (
                    <div key={metric.label} style={styles.metricCard(metric.color, idx * 0.8)}>
                      <div style={{
                        width: "clamp(28px, 4vw, 32px)", 
                        height: "clamp(28px, 4vw, 32px)", 
                        borderRadius: B.r.md,
                        background: `${metric.color}12`, 
                        display: "flex",
                        alignItems: "center", 
                        justifyContent: "center",
                      }}>
                        <MetricIcon size={15} color={metric.color} />
                      </div>
                      <div style={{
                        fontSize: "clamp(14px, 2.5vw, 16px)", 
                        fontWeight: 800,
                        color: B.text1, 
                        fontFamily: "'Syne',sans-serif", 
                        lineHeight: 1,
                      }}>{metric.value}</div>
                      <div style={{ 
                        fontSize: "clamp(8px, 1.5vw, 9px)", 
                        color: B.text4, 
                        textTransform: "uppercase", 
                        letterSpacing: "0.08em" 
                      }}>
                        {metric.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>

        {/* MOBILE SERVICE CHIPS */}
        <div
          className="mobile-visual"
          style={{
            position: "relative", 
            zIndex: 10,
            padding: "0 clamp(16px, 5vw, 24px) clamp(40px, 6vw, 64px)",
            opacity: mounted ? 1 : 0,
            animation: mounted ? `hFadeUp 0.6s ease ${getDelay(5)} both` : "none",
          }}
        >
          <div style={{
            display: "grid", 
            gridTemplateColumns: "repeat(2, 1fr)", 
            gap: "8px",
            maxWidth: "500px", 
            margin: "0 auto",
          }}>
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              const isActive = idx === activeIdx;
              return (
                <div 
                  key={service.label} 
                  style={styles.serviceChip(service.color, isActive)}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div style={{
                    width: "30px", 
                    height: "30px", 
                    borderRadius: B.r.md,
                    background: `${service.color}12`, 
                    display: "flex",
                    alignItems: "center", 
                    justifyContent: "center", 
                    flexShrink: 0,
                  }}>
                    <Icon size={14} color={service.color} />
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <div style={{
                      color: isActive ? B.text1 : B.text2,
                      fontWeight: 600, 
                      fontSize: "11px",
                      fontFamily: "'Syne',sans-serif",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>{service.label}</div>
                    <div style={{ color: B.text4, fontSize: "9px" }}>{service.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;