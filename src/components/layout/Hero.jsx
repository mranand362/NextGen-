import React, { useState, useEffect } from "react";
import {
  Code2,
  ArrowRight,
  CheckCircle2,
  Star,
  Play,
  Terminal,
  BarChart3,
  Users,
  Zap,
  Shield,
  Layers,
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
  rose:   { 400: "#FB7185" },
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

const SERVICES = [
  { icon: Monitor,  label: "MERN Stack",      sub: "Full-stack web apps",  color: B.blue[500],   bg: B.blue[50] },
  { icon: FileText, label: "ATS Resumes",      sub: "Career-ready CVs",     color: B.amber[500],  bg: "#FFFBEB" },
  { icon: Globe,    label: "Portfolio Sites",  sub: "Personal branding",    color: B.indigo[500], bg: "#EEF2FF" },
  { icon: Zap,      label: "College Projects", sub: "Academic excellence",  color: B.emerald[500],bg: "#ECFDF5" },
];

const STATS = [
  { value: "200+",  label: "Projects Delivered",  color: B.blue[500] },
  { value: "150+",  label: "Happy Clients",       color: B.indigo[500] },
  { value: "99%",   label: "Client Satisfaction",  color: B.amber[500] },
  { value: "24/7",  label: "Dedicated Support",    color: B.emerald[500] },
];

/* ═══════════════════════════════════════════════════════════════════════════
   HERO KEYFRAMES
   ═══════════════════════════════════════════════════════════════════════════ */
const HeroKeyframes = () => (
  <style>{`
    @keyframes hFadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
    @keyframes hFadeIn{from{opacity:0}to{opacity:1}}
    @keyframes hSlideLeft{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes hFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    @keyframes hPulse{0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0.3)}50%{box-shadow:0 0 0 8px rgba(59,130,246,0)}}
    @keyframes hSweep{0%{transform:translateX(-300px)}50%{transform:translateX(calc(100vw + 300px))}100%{transform:translateX(calc(100vw + 300px))}}
    @keyframes hRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    @keyframes hTyping{0%{width:0}100%{width:100%}}
    @keyframes hBlink{0%,100%{border-color:transparent}50%{border-color:${B.blue[500]}}}
    @keyframes hGlowPulse{0%,100%{opacity:0.4}50%{opacity:0.8}}
    @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important}}
  `}</style>
);

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN HERO COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const Hero = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActiveIdx((p) => (p + 1) % SERVICES.length), 3000);
    return () => clearInterval(id);
  }, []);

  const cur = SERVICES[activeIdx];
  const d = (i) => `${i * 80 + 200}ms`;
  const scroll = (e, sel) => { e.preventDefault(); document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <>
      <HeroKeyframes />

      <section
        id="hero"
        aria-label="Hero"
        style={{
          position: "relative",
          minHeight: "100svh",
          overflow: "hidden",
          background: `linear-gradient(168deg, ${B.bg} 0%, ${B.blue[50]}40 30%, #F8FAFC 55%, ${B.blue[50]}20 80%, ${B.bg} 100%)`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ─── BACKGROUND LAYER ─── */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {/* Primary blue orb */}
          <div style={{
            position: "absolute", top: "-12%", right: "-8%",
            width: "clamp(380px,52vw,680px)", height: "clamp(380px,52vw,680px)",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${B.blue[400]}10 0%, ${B.blue[300]}05 40%, transparent 70%)`,
            filter: "blur(60px)",
          }} />
          {/* Secondary indigo orb */}
          <div style={{
            position: "absolute", bottom: "10%", left: "-10%",
            width: "clamp(280px,38vw,500px)", height: "clamp(280px,38vw,500px)",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${B.indigo[400]}08 0%, transparent 65%)`,
            filter: "blur(70px)",
          }} />
          {/* Warm accent */}
          <div style={{
            position: "absolute", top: "40%", left: "35%",
            width: "clamp(180px,24vw,320px)", height: "clamp(180px,24vw,320px)",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${B.amber[400]}04 0%, transparent 70%)`,
            filter: "blur(50px)",
          }} />

          {/* Dot grid */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.3,
            backgroundImage: `radial-gradient(circle, ${B.blue[300]}20 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 70% 60% at 60% 40%, black 20%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 60% 40%, black 20%, transparent 80%)",
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

        {/* ─── SWEEP LINE ─── */}
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", overflow: "hidden", zIndex: 20 }}>
          <div style={{
            height: "100%", width: "200px",
            background: `linear-gradient(90deg, transparent, ${B.blue[400]}, ${B.sky[400]}, transparent)`,
            animation: "hSweep 7s ease-in-out infinite",
          }} />
        </div>

        {/* ─── MAIN CONTENT ─── */}
        <main
          id="main-content"
          style={{
            position: "relative", zIndex: 10, flex: 1, width: "100%",
            padding: "clamp(110px,14vh,160px) 1.5rem clamp(48px,6vh,80px)",
          }}
        >
          <div style={{
            maxWidth: "1320px", margin: "0 auto",
            display: "grid", gridTemplateColumns: "1fr",
            gap: "clamp(48px,7vw,80px)", alignItems: "center",
          }} className="hero-grid">

            {/* ══════ LEFT COLUMN ══════ */}
            <div>
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "7px 18px 7px 8px", borderRadius: B.r.full,
                border: `1px solid ${B.blue[200]}60`,
                background: `linear-gradient(135deg, ${B.blue[50]}, ${B.surface})`,
                marginBottom: "clamp(24px,3.5vw,32px)",
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${d(0)} both` : "none",
                boxShadow: B.shadow.xs,
              }}>
               
              
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: "clamp(2.4rem,6vw,3.7rem)",
                fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em",
                color: B.text1, marginBottom: "clamp(18px,2.5vw,28px)",
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${d(1)} both` : "none",
              }}>
                We Build{" "}
                <span style={{
                  display: "inline-block", position: "relative", color: cur.color,
                  transition: "color 0.5s ease",
                }}>
                  {cur.label}
                  <span style={{
                    position: "absolute", bottom: "-2px", left: 0, right: 0, height: "3px",
                    background: cur.color, borderRadius: "2px", opacity: 0.25,
                    transition: "background 0.5s ease",
                  }} />
                </span>
                {" "}Solutions
                <br />
                That{" "}
                <span style={{
                  backgroundImage: `linear-gradient(135deg, ${B.blue[500]} 0%, ${B.indigo[500]} 50%, ${B.sky[400]} 100%)`,
                  backgroundClip: "text", WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Drive Results
                </span>
              </h1>

              {/* Subheadline */}
              <p style={{
                fontSize: "clamp(14px,1.35vw,16px)", lineHeight: 1.8,
                color: B.text3, maxWidth: "540px",
                marginBottom: "clamp(28px,4vw,40px)",
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${d(2)} both` : "none",
              }}>
                From full-stack MERN applications to ATS-optimized resumes — we deliver
                production-grade solutions that help students, professionals, and businesses
                stand out in a competitive landscape.
              </p>

              {/* CTAs */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "14px",
                marginBottom: "clamp(36px,5vw,52px)",
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${d(3)} both` : "none",
              }}>
                <a
                  href="#contact"
                  onClick={(e) => scroll(e, "#contact")}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    padding: "15px 32px", borderRadius: B.r.lg,
                    background: `linear-gradient(135deg, ${B.blue[500]} 0%, ${B.blue[700]} 100%)`,
                    color: "#FFFFFF", fontSize: "14px", fontWeight: 700,
                    textDecoration: "none", fontFamily: "'Syne',sans-serif",
                    letterSpacing: "0.02em",
                    boxShadow: `0 4px 20px ${B.blue[500]}30, 0 1px 3px ${B.blue[800]}20, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 12px 36px ${B.blue[500]}40, 0 2px 6px ${B.blue[800]}25, inset 0 1px 0 rgba(255,255,255,0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = `0 4px 20px ${B.blue[500]}30, 0 1px 3px ${B.blue[800]}20, inset 0 1px 0 rgba(255,255,255,0.2)`;
                  }}
                >
                  Start Your Project <ArrowRight size={16} />
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => scroll(e, "#portfolio")}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "15px 28px", borderRadius: B.r.lg,
                    background: B.surface,
                    border: `1px solid ${B.blue[200]}60`,
                    color: B.text2, fontSize: "14px", fontWeight: 600,
                    textDecoration: "none", fontFamily: "'DM Sans',sans-serif",
                    boxShadow: B.shadow.sm,
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  }}
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
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: `${B.blue[500]}10`, flexShrink: 0,
                  }}>
                    <Play size={12} color={B.blue[600]} fill={B.blue[600]} />
                  </span>
                  View Portfolio
                </a>
              </div>

              {/* Trust Indicators */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "clamp(16px,3vw,32px)",
                paddingTop: "clamp(24px,3vw,32px)",
                borderTop: `1px solid ${B.blue[100]}60`,
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${d(4)} both` : "none",
              }}>
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div style={{
                      fontSize: "clamp(20px,2.8vw,28px)", fontWeight: 800,
                      color: s.color, fontFamily: "'Syne',sans-serif", lineHeight: 1,
                    }}>{s.value}</div>
                    <div style={{
                      fontSize: "10px", color: B.text4,
                      textTransform: "uppercase", letterSpacing: "0.1em",
                      marginTop: "5px", fontWeight: 500,
                    }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ══════ RIGHT COLUMN — Desktop ══════ */}
            <div
              style={{
                display: "none", flexDirection: "column", gap: "16px",
                opacity: mounted ? 1 : 0,
                animation: mounted ? `hSlideLeft 0.8s cubic-bezier(0.22,1,0.36,1) ${d(2)} both` : "none",
              }}
              className="hero-right"
            >
              {/* — Main Dashboard Card — */}
              <div style={{
                position: "relative", borderRadius: B.r["2xl"], overflow: "hidden",
                background: B.surface, border: `1px solid ${B.blue[100]}50`,
                boxShadow: B.shadow.xl,
              }}>
                {/* Browser chrome */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "14px 18px",
                  background: `linear-gradient(180deg, ${B.blue[50]}80, ${B.surface})`,
                  borderBottom: `1px solid ${B.blue[100]}40`,
                }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {["#FCA5A5", "#FCD34D", "#6EE7B7"].map((c) => (
                      <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.8 }} />
                    ))}
                  </div>
                  <div style={{
                    flex: 1, padding: "6px 14px", borderRadius: B.r.full,
                    background: B.blue[50], border: `1px solid ${B.blue[100]}40`,
                    display: "flex", alignItems: "center", gap: "8px",
                  }}>
                    <Shield size={10} color={B.blue[400]} />
                    <span style={{ fontSize: "11px", color: B.text4, fontFamily: "monospace" }}>nextgen-portal.app</span>
                  </div>
                </div>

                {/* Code block */}
                <div style={{ padding: "20px 22px", background: "#0F172A", position: "relative" }}>
                  <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                    {[{ label:"App.js", active:true },{ label:"Server.js", active:false },{ label:"DB.js", active:false }].map((tab) => (
                      <div key={tab.label} style={{
                        padding: "5px 14px", borderRadius: `${B.r.sm} ${B.r.sm} 0 0`,
                        fontSize: "11px", fontFamily: "monospace", fontWeight: 500,
                        background: tab.active ? "#1E293B" : "transparent",
                        color: tab.active ? "#E2E8F0" : "#64748B",
                        border: tab.active ? `1px solid #334155` : "1px solid transparent",
                        borderBottom: tab.active ? "2px solid #3B82F6" : "none",
                      }}>{tab.label}</div>
                    ))}
                  </div>
                  <pre style={{ margin: 0, fontSize: "12px", lineHeight: 1.85, fontFamily: "'SF Mono','Fira Code',monospace", color: "#CBD5E1", overflow: "hidden" }}>
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
                    position: "absolute", bottom: "20px", right: "22px",
                    width: "8px", height: "18px", borderRadius: "2px",
                    background: B.blue[400],
                    animation: "hBlink 1s step-end infinite",
                  }} />
                </div>

                {/* Bottom bar */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "12px 18px",
                  background: `linear-gradient(180deg, ${B.surface}, ${B.blue[50]}40)`,
                  borderTop: `1px solid ${B.blue[100]}40`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: B.r.md,
                      background: `linear-gradient(135deg, ${B.blue[500]}, ${B.blue[700]})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Code2 size={14} color="#FFFFFF" />
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: B.text1, fontFamily: "'Syne',sans-serif" }}>MERN Dashboard</div>
                      <div style={{ fontSize: "10px", color: B.text4 }}>React · Node · MongoDB</div>
                    </div>
                  </div>
                  <span style={{
                    padding: "4px 10px", borderRadius: B.r.full,
                    background: `${B.emerald[500]}12`, color: B.emerald[500],
                    fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em",
                    display: "flex", alignItems: "center", gap: "4px",
                  }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: B.emerald[400], animation: "hPulse 2s infinite" }} />
                    Live
                  </span>
                </div>
              </div>

              {/* — Service Chips — */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {SERVICES.map((s, i) => {
                  const Ic = s.icon;
                  const isActive = i === activeIdx;
                  return (
                    <div key={s.label} style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "14px 14px", borderRadius: B.r.lg,
                      background: isActive ? `${s.color}0A` : B.surface,
                      border: `1px solid ${isActive ? `${s.color}30` : `${B.blue[100]}30`}`,
                      transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: isActive ? `0 0 0 1px ${s.color}15, ${B.shadow.sm}` : B.shadow.xs,
                      transform: isActive ? "scale(1.02)" : "scale(1)",
                    }}>
                      <div style={{
                        width: "32px", height: "32px", borderRadius: B.r.md,
                        background: `${s.color}12`, display: "flex",
                        alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <Ic size={15} color={s.color} />
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <div style={{
                          color: isActive ? B.text1 : B.text2,
                          fontWeight: 600, fontSize: "12px",
                          fontFamily: "'Syne',sans-serif",
                          transition: "color 0.3s",
                        }}>{s.label}</div>
                        <div style={{ color: B.text4, fontSize: "10px" }}>{s.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* — Floating Metrics — */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                {[
                  { icon: CheckCircle2, value: "98%", label: "Success", color: B.emerald[500] },
                  { icon: Star, value: "4.9", label: "Rating", color: B.amber[500] },
                  { icon: Users, value: "150+", label: "Clients", color: B.blue[500] },
                ].map(({ icon: Ic, value, label, color }, idx) => (
                  <div key={label} style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    gap: "6px", padding: "16px 10px", borderRadius: B.r.lg,
                    background: B.surface, border: `1px solid ${color}15`,
                    boxShadow: B.shadow.xs,
                    animation: `hFloat 6s ease-in-out infinite ${idx * 0.8}s`,
                  }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: B.r.md,
                      background: `${color}12`, display: "flex",
                      alignItems: "center", justifyContent: "center",
                    }}>
                      <Ic size={15} color={color} />
                    </div>
                    <div style={{
                      fontSize: "16px", fontWeight: 800,
                      color: B.text1, fontFamily: "'Syne',sans-serif", lineHeight: 1,
                    }}>{value}</div>
                    <div style={{ fontSize: "9px", color: B.text4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* ─── MOBILE SERVICE CHIPS ─── */}
        <div
          style={{
            position: "relative", zIndex: 10,
            padding: "0 1.5rem clamp(40px,6vw,64px)",
            opacity: mounted ? 1 : 0,
            animation: mounted ? `hFadeUp 0.6s ease ${d(5)} both` : "none",
          }}
          className="mobile-visual"
        >
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px",
            maxWidth: "500px", margin: "0 auto",
          }}>
            {SERVICES.map((s, i) => {
              const Ic = s.icon;
              const isActive = i === activeIdx;
              return (
                <div key={s.label} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "14px", borderRadius: B.r.lg,
                  background: isActive ? `${s.color}0A` : B.surface,
                  border: `1px solid ${isActive ? `${s.color}30` : `${B.blue[100]}30`}`,
                  transition: "all 0.4s ease",
                  boxShadow: B.shadow.xs,
                }}>
                  <div style={{
                    width: "30px", height: "30px", borderRadius: B.r.md,
                    background: `${s.color}12`, display: "flex",
                    alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Ic size={14} color={s.color} />
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <div style={{
                      color: isActive ? B.text1 : B.text2,
                      fontWeight: 600, fontSize: "11px",
                      fontFamily: "'Syne',sans-serif",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>{s.label}</div>
                    <div style={{ color: B.text4, fontSize: "9px" }}>{s.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── RESPONSIVE STYLES ─── */}
        <style>{`
          @media(min-width:1024px){
            .hero-grid{grid-template-columns:1fr 1.1fr!important}
            .hero-right{display:flex!important}
            .mobile-visual{display:none!important}
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;