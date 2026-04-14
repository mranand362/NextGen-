import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Globe,
  Monitor,
  Smartphone,
  Cpu,
  Database,
  Layout,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   BLUE DESIGN TOKENS (MATCHING HERO)
   ═══════════════════════════════════════════════════════════════════════════ */
const B = {
  bg: "#FAFBFF",
  surface: "#FFFFFF",
  text1: "#0B1120", // Dark Slate
  text2: "#1E293B", // Slate 800
  text3: "#475569", // Slate 600
  text4: "#94A3B8", // Slate 400
  blue: {
    50: "#EFF6FF",
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
  sky: { 300: "#7DD3FC", 400: "#38BDF8" },
  amber: { 400: "#FBBF24", 500: "#F59E0B" },
  emerald: { 400: "#34D399", 500: "#10B981" },
  rose: { 400: "#FB7185" },
  r: {
    xs: "6px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "32px",
    full: "9999px",
  },
  shadow: {
    xs: "0 1px 2px rgba(0,0,0,0.03)",
    sm: "0 2px 8px rgba(0,0,0,0.04)",
    md: "0 8px 24px rgba(0,0,0,0.06)",
    lg: "0 12px 40px -6px rgba(0,0,0,0.08)",
    xl: "0 20px 60px -10px rgba(0,0,0,0.1)",
    blue: "0 10px 40px -5px rgba(59, 130, 246, 0.2)",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   PROJECT DATA
   ═══════════════════════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    id: 1,
    title: "FinFlow Analytics",
    category: "Web App",
    image: "https://picsum.photos/seed/fintech/800/600",
    description: "Real-time financial dashboard for SME banking with predictive AI insights and automated reporting.",
    tech: ["React", "D3.js", "Node.js"],
    icon: <Globe size={18} color={B.blue[600]} />,
  },
  {
    id: 2,
    title: "HealthTrack Mobile",
    category: "Mobile App",
    image: "https://picsum.photos/seed/health/800/600",
    description: "Cross-platform telemedicine app enabling secure video consultations and digital prescriptions.",
    tech: ["React Native", "Firebase", "WebRTC"],
    icon: <Smartphone size={18} color={B.indigo[500]} />,
  },
  {
    id: 3,
    title: "CloudScale Infrastructure",
    category: "Cloud Solutions",
    image: "https://picsum.photos/seed/cloud/800/600",
    description: "Automated AWS infrastructure provisioning using Terraform scripts for enterprise scalability.",
    tech: ["AWS", "Terraform", "Docker"],
    icon: <Database size={18} color={B.sky[400]} />,
  },
  {
    id: 4,
    title: "EduSmart Platform",
    category: "Web App",
    image: "https://picsum.photos/seed/edu/800/600",
    description: "Learning management system with interactive quizzes, progress tracking, and live classrooms.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    icon: <Monitor size={18} color={B.emerald[500]} />,
  },
  {
    id: 5,
    title: "CyberGuard UI",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/cyber/800/600",
    description: "High-fidelity dashboard design for enterprise security monitoring and threat detection.",
    tech: ["Figma", "Prototyping"],
    icon: <Layout size={18} color={B.rose[400]} />,
  },
  {
    id: 6,
    title: "AI Assistant Bot",
    category: "AI & ML",
    image: "https://picsum.photos/seed/ai/800/600",
    description: "NLP-powered customer support bot integrated with OpenAI API for 24/7 automated assistance.",
    tech: ["Python", "FastAPI", "OpenAI"],
    icon: <Cpu size={18} color={B.amber[500]} />,
  },
];

const CATEGORIES = ["All", "Web App", "Mobile App", "Cloud Solutions", "UI/UX Design", "AI & ML"];

/* ═══════════════════════════════════════════════════════════════════════════
   KEYFRAMES
   ═══════════════════════════════════════════════════════════════════════════ */
const WorkKeyframes = () => (
  <style>{`
    @keyframes wFadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
    @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.01ms!important;transition-duration:0.01ms!important}}
  `}</style>
);

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN WORK COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <WorkKeyframes />
      <section
        id="work"
        aria-label="Portfolio"
        style={{
          position: "relative",
          backgroundColor: B.bg,
          padding: "clamp(80px,10vh,120px) 1.5rem",
          overflow: "hidden",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* ─── BACKGROUND PATTERN ─── */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.4,
            backgroundImage: `radial-gradient(circle, ${B.blue[200]}20 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }} />
          <div style={{
            position: "absolute", top: "-10%", right: "-5%",
            width: "500px", height: "500px",
            background: `radial-gradient(circle, ${B.blue[100]}40 0%, transparent 70%)`,
            filter: "blur(80px)",
          }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto" }}>
          
          {/* ─── HEADER ─── */}
          <div style={{ 
            textAlign: "center", 
            marginBottom: "clamp(48px,8vw,72px)",
            opacity: mounted ? 1 : 0,
            animation: mounted ? "wFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s both" : "none"
          }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: B.r.full,
              background: B.blue[50], border: `1px solid ${B.blue[200]}`,
              marginBottom: "24px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: B.blue[500] }} />
              <span style={{ fontSize: "12px", fontWeight: 700, color: B.blue[700], textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Our Portfolio
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(2.2rem,5vw,3.5rem)",
              fontWeight: 800,
              color: B.text1,
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}>
              Selected <span style={{ color: B.blue[600] }}>Works</span>
            </h2>
            <p style={{
              fontSize: "clamp(15px,1.5vw,18px)",
              color: B.text3,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
              We deliver robust, scalable, and visually stunning digital products.
              Explore our recent success stories across web, mobile, and cloud.
            </p>
          </div>

          {/* ─── FILTER TABS ─── */}
          <div style={{
            marginBottom: "clamp(40px,6vw,64px)",
            opacity: mounted ? 1 : 0,
            animation: mounted ? "wFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both" : "none",
            display: "flex",
            justifyContent: "center",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            padding: "0 10px",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          className="hide-scroll"
          >
            <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
            
            <div style={{ display: "flex", gap: "8px", minWidth: "max-content" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "10px 24px",
                    borderRadius: B.r.full,
                    border: `1px solid ${activeCategory === cat ? B.blue[500] : "#E2E8F0"}`,
                    background: activeCategory === cat ? B.blue[500] : B.surface,
                    color: activeCategory === cat ? "#FFFFFF" : B.text2,
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                    whiteSpace: "nowrap",
                    boxShadow: activeCategory === cat ? B.shadow.blue : B.shadow.sm,
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== cat) {
                      e.currentTarget.style.background = "#F8FAFC";
                      e.currentTarget.style.borderColor = B.blue[300];
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== cat) {
                      e.currentTarget.style.background = B.surface;
                      e.currentTarget.style.borderColor = "#E2E8F0";
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ─── PROJECT GRID ─── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "40px",
          }}>
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                style={{
                  background: B.surface,
                  borderRadius: B.r["2xl"],
                  overflow: "hidden",
                  border: `1px solid #E2E8F0`,
                  boxShadow: B.shadow.sm,
                  transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                  opacity: mounted ? 1 : 0,
                  animation: mounted ? `wFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.3 + (index * 0.08)}s both` : "none",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = B.shadow.xl;
                  e.currentTarget.style.borderColor = B.blue[200];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = B.shadow.sm;
                  e.currentTarget.style.borderColor = "#E2E8F0";
                }}
              >
                {/* Image Container */}
                <div style={{ 
                  position: "relative", 
                  paddingTop: "56.25%", 
                  overflow: "hidden", 
                  background: "#F1F5F9",
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(15,23,42,0.1) 0%, transparent 50%)",
                  }} />
                  
                  <div style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(8px)",
                    padding: "6px 14px",
                    borderRadius: B.r.full,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: B.shadow.sm,
                    border: "1px solid rgba(255,255,255,0.5)"
                  }}>
                    <span style={{ display: "flex" }}>{project.icon}</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: B.text2, letterSpacing: "0.02em" }}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: B.text1,
                    marginBottom: "12px",
                    fontFamily: "'Syne', sans-serif",
                    letterSpacing: "-0.01em",
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: "15px",
                    color: B.text3,
                    lineHeight: 1.7,
                    marginBottom: "24px",
                    flex: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "24px",
                  }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: B.blue[700],
                        background: `${B.blue[50]}`,
                        padding: "6px 12px",
                        borderRadius: "8px",
                        border: `1px solid ${B.blue[100]}`,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: B.blue[600],
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      alignSelf: "flex-start",
                    }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.gap = "12px"; 
                      e.currentTarget.style.color = B.blue[700]; 
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.gap = "8px"; 
                      e.currentTarget.style.color = B.blue[600]; 
                    }}
                  >
                    View Case Study <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;