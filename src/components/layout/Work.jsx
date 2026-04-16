import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Globe,
  Monitor,
  Smartphone,
  Cpu,
  Database,
  Layout,
  FileText,
  GraduationCap,
  Code,
  Users,
  Star,
  MessageCircle,
  ChevronRight,
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
   REAL SERVICE DATA - Student focused IT services
   ═══════════════════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: 1,
    title: "MERN Stack Web Application",
    category: "MERN Projects",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop",
    description: "Custom full-stack web applications using MongoDB, Express, React, and Node.js tailored for startups and students. Includes authentication, database integration, and deployment.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    icon: <Globe size={20} color={B.blue[600]} />,
    startingPrice: "4999",
    popular: true,
  },
  {
    id: 2,
    title: "ATS Friendly Resume",
    category: "Resumes",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    description: "Professional resumes optimized for ATS systems to increase job selection chances. Keyword-optimized formatting, clean design, and recruiter-approved templates.",
    tech: ["ATS Optimization", "Formatting", "Keyword Strategy"],
    icon: <FileText size={20} color={B.emerald[500]} />,
    startingPrice: "999",
    popular: false,
  },
  {
    id: 3,
    title: "College Major & Minor Projects",
    category: "College Projects",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
    description: "Complete college projects with documentation, source code, and presentation support. Custom projects for final year, minor, and major submissions.",
    tech: ["Python", "Java", "Web Dev", "Documentation"],
    icon: <GraduationCap size={20} color={B.indigo[500]} />,
    startingPrice: "2999",
    popular: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop",
    description: "Modern portfolio websites for students and professionals to showcase skills and projects. Fully responsive with smooth animations and contact forms.",
    tech: ["React", "Tailwind", "Framer Motion"],
    icon: <Layout size={20} color={B.sky[400]} />,
    startingPrice: "1999",
    popular: false,
  },
  {
    id: 5,
    title: "Resume for Freshers",
    category: "Resumes",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    description: "Entry-level friendly resume design focused on internships and first jobs. Highlights academic projects, internships, and soft skills effectively.",
    tech: ["ATS Friendly", "Fresher Focus", "Internship Ready"],
    icon: <FileText size={20} color={B.emerald[500]} />,
    startingPrice: "799",
    popular: false,
  },
  {
    id: 6,
    title: "Final Year Project with Documentation",
    category: "College Projects",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    description: "Complete final year projects with full documentation, presentation slides, and working source code. Get guidance and support throughout.",
    tech: ["Full Stack", "Documentation", "Presentation", "Support"],
    icon: <Code size={20} color={B.indigo[500]} />,
    startingPrice: "5999",
    popular: true,
  },
];

const CATEGORIES = ["All", "MERN Projects", "Resumes", "College Projects", "Portfolio"];

// WhatsApp number - Replace with actual business number
const WHATSAPP_NUMBER = "919263066325";

// ✅ FIXED: Proper WhatsApp link generator with professional message
const getWhatsAppLink = (serviceTitle) => {
  const message = encodeURIComponent(
    `Hello! 👋\n\nI'm interested in your "${serviceTitle}" service.\n\nCould you please share:\n• Complete pricing details\n• Delivery timeline\n• Portfolio examples\n\nThank you!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

/* ═══════════════════════════════════════════════════════════════════════════
   KEYFRAMES
   ═══════════════════════════════════════════════════════════════════════════ */
const WorkKeyframes = () => (
  <style>{`
    @keyframes wFadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
    @keyframes scaleIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
    @keyframes slideInRight{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
    @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.01ms!important;transition-duration:0.01ms!important}}
    .card-hover{transition:all 0.4s cubic-bezier(0.22,1,0.36,1)}
    .card-hover:hover{transform:translateY(-8px);box-shadow:${B.shadow.xl};border-color:${B.blue[200]}}
    .wa-button{background:#25D366;transition:all 0.3s ease}
    .wa-button:hover{background:#128C7E;transform:scale(1.02)}
    .pulse{animation:pulse 2s infinite}
    @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,0.4)}70%{box-shadow:0 0 0 12px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}
  `}</style>
);

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN SERVICES COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <>
      <WorkKeyframes />
      <section
        id="services"
        aria-label="Services & Projects"
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
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: B.r.full,
              background: B.blue[50], border: `1px solid ${B.blue[200]}`,
              marginBottom: "24px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: B.blue[500] }} />
              <span style={{ fontSize: "12px", fontWeight: 700, color: B.blue[700], textTransform: "uppercase", letterSpacing: "0.05em" }}>
                What We Build For You
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(2rem,5vw,3.2rem)",
              fontWeight: 800,
              color: B.text1,
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}>
              Our <span style={{ color: B.blue[600] }}>Services & Projects</span>
            </h2>
            <p style={{
              fontSize: "clamp(15px,1.5vw,18px)",
              color: B.text3,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
              Student-focused IT solutions that help you stand out. From MERN stack applications 
              to ATS-friendly resumes — we've got you covered.
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

          {/* ─── SERVICES GRID ─── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "40px",
          }}>
            {filteredServices.map((service, index) => (
              <article
                key={service.id}
                className="card-hover"
                style={{
                  background: B.surface,
                  borderRadius: B.r["2xl"],
                  overflow: "hidden",
                  border: `1px solid #E2E8F0`,
                  boxShadow: B.shadow.sm,
                  opacity: mounted ? 1 : 0,
                  animation: mounted ? `wFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.3 + (index * 0.08)}s both` : "none",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    zIndex: 5,
                    background: "linear-gradient(135deg, #F59E0B, #D97706)",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: B.r.full,
                    fontSize: "11px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    boxShadow: B.shadow.sm,
                  }}>
                    <Star size={12} fill="white" />
                    Popular
                  </div>
                )}

                {/* Image Container */}
                <div style={{ 
                  position: "relative", 
                  paddingTop: "56.25%", 
                  overflow: "hidden", 
                  background: "#F1F5F9",
                }}>
                  <img
                    src={service.image}
                    alt={service.title}
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
                    background: "linear-gradient(to top, rgba(15,23,42,0.2) 0%, transparent 50%)",
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
                    <span style={{ display: "flex" }}>{service.icon}</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: B.text2, letterSpacing: "0.02em" }}>
                      {service.category}
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
                    {service.title}
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
                    {service.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "24px",
                  }}>
                    {service.tech.map((t) => (
                      <span key={t} style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: B.blue[700],
                        background: `${B.blue[50]}`,
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: `1px solid ${B.blue[100]}`,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA Row */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginTop: "auto",
                    borderTop: `1px solid #E2E8F0`,
                    paddingTop: "20px",
                  }}>
                    <div>
                      <span style={{
                        fontSize: "12px",
                        color: B.text4,
                        textDecoration: "line-through",
                        marginRight: "8px",
                      }}>
                        ₹{(parseInt(service.startingPrice) * 1.5).toLocaleString()}
                      </span>
                      <span style={{
                        fontSize: "22px",
                        fontWeight: 800,
                        color: B.blue[600],
                      }}>
                        ₹{parseInt(service.startingPrice).toLocaleString()}
                      </span>
                      <span style={{
                        fontSize: "12px",
                        color: B.text4,
                      }}> onwards</span>
                    </div>
                    
                    {/* ✅ FIXED BUTTON - Now using getWhatsAppLink function correctly */}
                    <button
                      onClick={() => window.open(getWhatsAppLink(service.title), "_blank")}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        background: "linear-gradient(135deg, #25D366, #128C7E)",
                        border: "none",
                        borderRadius: B.r.lg,
                        color: "white",
                        fontWeight: 700,
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 8px rgba(37,211,102,0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(37,211,102,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(37,211,102,0.3)";
                      }}
                    >
                      <MessageCircle size={16} />
                      Order Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ─── WHATSAPP CTA BANNER ─── */}
          <div style={{
            marginTop: "clamp(60px,8vh,80px)",
            background: "linear-gradient(135deg, #1E3A5F 0%, #1E40AF 100%)",
            borderRadius: B.r["2xl"],
            padding: "clamp(32px,5vw,48px)",
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            opacity: mounted ? 1 : 0,
            animation: mounted ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.5s both" : "none",
          }}>
            <div style={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              background: "rgba(255,255,255,0.05)",
              borderRadius: "50%",
            }} />
            <div style={{
              position: "absolute",
              bottom: -30,
              left: -30,
              width: 150,
              height: 150,
              background: `
  linear-gradient(135deg, ${B.blue[700]} 0%, ${B.blue[800]} 50%, ${B.blue[900]} 100%)`,
              borderRadius: "50%",
            }} />
            
            <Users size={48} style={{ margin: "0 auto 20px", opacity: 0.9 }} />
            <h3 style={{
              fontSize: "clamp(1.5rem,4vw,2rem)",
              fontWeight: 800,
              marginBottom: "12px",
              fontFamily: "'Syne', sans-serif",
            }}>
              Need a Custom Solution?
            </h3>
            <p style={{
              fontSize: "16px",
              opacity: 0.9,
              maxWidth: "500px",
              margin: "0 auto 28px",
              lineHeight: 1.6,
            }}>
              Get instant support on WhatsApp. Discuss your project requirements and get a free quote.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20want%20to%20discuss%20my%20project%20with%20you.%20Please%20share%20details%20and%20pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "#25D366",
                color: "white",
                textDecoration: "none",
                padding: "14px 36px",
                borderRadius: B.r.full,
                fontWeight: 700,
                fontSize: "16px",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.background = "#128C7E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "#25D366";
              }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
              <ChevronRight size={18} />
            </a>
            <p style={{
              fontSize: "12px",
              opacity: 0.7,
              marginTop: "20px",
            }}>
              ⚡ Response within 30 minutes | Free consultation
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;