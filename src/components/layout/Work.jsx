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
   BLUE DESIGN TOKENS
   ═══════════════════════════════════════════════════════════════════════════ */
const B = {
  bg: "#FAFBFF",
  surface: "#FFFFFF",
  text1: "#0B1120",
  text2: "#1E293B",
  text3: "#475569",
  text4: "#94A3B8",
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
   SERVICE DATA
   ═══════════════════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: 1,
    title: "MERN Stack Web Application",
    category: "MERN Projects",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop",
    description: "Custom full-stack web applications using MongoDB, Express, React, and Node.js tailored for startups and students. Includes authentication, database integration, and deployment.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    icon: Globe,
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
    icon: FileText,
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
    icon: GraduationCap,
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
    icon: Layout,
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
    icon: FileText,
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
    icon: Code,
    startingPrice: "5999",
    popular: true,
  },
];

const CATEGORIES = ["All", "MERN Projects", "Resumes", "College Projects", "Portfolio"];
const WHATSAPP_NUMBER = "919263066325";

const getWhatsAppLink = (serviceTitle) => {
  const message = encodeURIComponent(
    `Hello! 👋\n\nI'm interested in your "${serviceTitle}" service.\n\nCould you please share:\n• Complete pricing details\n• Delivery timeline\n• Portfolio examples\n\nThank you!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

/* ═══════════════════════════════════════════════════════════════════════════
   GLOBAL STYLES - SCALABLE & RESPONSIVE
   ═══════════════════════════════════════════════════════════════════════════ */
const GlobalStyles = () => (
  <style>{`
    /* Animations */
    @keyframes wFadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4); }
      70% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
      100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
    }
    
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
    
    /* Responsive Grid System */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: clamp(20px, 4vw, 40px);
    }
    
    /* Responsive Spacing */
    .section-padding {
      padding: clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px);
    }
    
    .card-padding {
      padding: clamp(18px, 3vw, 28px);
    }
    
    /* Responsive Typography */
    .responsive-title {
      font-size: clamp(18px, 2.5vw, 22px);
      font-weight: 700;
      color: ${B.text1};
      margin-bottom: 12px;
      font-family: 'Syne', sans-serif;
      letter-spacing: -0.01em;
      line-height: 1.3;
    }
    
    .responsive-text {
      font-size: clamp(13px, 1.5vw, 15px);
      color: ${B.text3};
      line-height: 1.7;
    }
    
    .section-heading {
      font-size: clamp(2rem, 5vw, 3.2rem);
      font-weight: 800;
      color: ${B.text1};
      font-family: 'Syne', sans-serif;
      letter-spacing: -0.02em;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    
    .section-subheading {
      font-size: clamp(15px, 1.5vw, 18px);
      color: ${B.text3};
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
    }
    
    /* Card Styles */
    .service-card {
      background: ${B.surface};
      border-radius: ${B.r["2xl"]};
      overflow: hidden;
      border: 1px solid rgba(59, 130, 246, 0.08);
      box-shadow: ${B.shadow.sm};
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
    
    @media (hover: hover) {
      .service-card:hover {
        transform: translateY(-8px);
        box-shadow: ${B.shadow.xl};
        border-color: ${B.blue[200]};
      }
    }
    
    /* Image Hover - Desktop Only */
    .img-hover {
      transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }
    
    @media (hover: hover) {
      .img-hover:hover {
        transform: scale(1.05);
      }
    }
    
    /* Mobile Full Width Button */
    .mobile-full-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 20px;
      background: linear-gradient(135deg, #25D366, #128C7E);
      border: none;
      border-radius: ${B.r.lg};
      color: white;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(37, 211, 102, 0.3);
      width: 100%;
    }
    
    @media (min-width: 640px) {
      .mobile-full-btn {
        width: auto;
      }
    }
    
    @media (hover: hover) {
      .mobile-full-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
      }
    }
    
    /* Filter Scroll */
    .filter-scroll {
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
    }
    
    .filter-scroll button {
      scroll-snap-align: start;
    }
    
    .hide-scroll {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    
    .hide-scroll::-webkit-scrollbar {
      display: none;
    }
    
    /* Tech Tags */
    .tech-tag {
      font-size: clamp(10px, 1.2vw, 11px);
      font-weight: 600;
      color: ${B.blue[700]};
      background: ${B.blue[50]};
      padding: 4px 10px;
      border-radius: 6px;
      border: 1px solid ${B.blue[100]};
    }
    
    /* Price Styling */
    .price-original {
      font-size: clamp(10px, 1.2vw, 12px);
      color: ${B.text4};
      text-decoration: line-through;
      margin-right: 8px;
    }
    
    .price-current {
      font-size: clamp(18px, 2.5vw, 22px);
      font-weight: 800;
      color: ${B.blue[600]};
    }
    
    /* Line Clamp */
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 24px;
      flex: 1;
    }
    
    /* Popular Badge */
    .popular-badge {
      position: absolute;
      top: clamp(12px, 2vw, 16px);
      right: clamp(12px, 2vw, 16px);
      z-index: 5;
      background: linear-gradient(135deg, #F59E0B, #D97706);
      color: white;
      padding: clamp(3px, 1vw, 4px) clamp(8px, 2vw, 12px);
      border-radius: ${B.r.full};
      font-size: clamp(10px, 1.2vw, 11px);
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 4px;
      box-shadow: ${B.shadow.sm};
    }
    
    /* Category Badge */
    .category-badge {
      position: absolute;
      top: clamp(12px, 2vw, 16px);
      left: clamp(12px, 2vw, 16px);
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      padding: clamp(4px, 1.5vw, 6px) clamp(10px, 2vw, 14px);
      border-radius: ${B.r.full};
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: ${B.shadow.sm};
      border: 1px solid rgba(255, 255, 255, 0.5);
      z-index: 5;
    }
    
    /* Image Container */
    .image-container {
      position: relative;
      padding-top: 56.25%;
      overflow: hidden;
      background: #F1F5F9;
    }
    
    /* Responsive CTA Row */
    .cta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: clamp(12px, 2vw, 16px);
      margin-top: auto;
      border-top: 1px solid #E2E8F0;
      padding-top: 20px;
    }
    
    @media (max-width: 480px) {
      .cta-row {
        flex-direction: column;
        align-items: flex-start;
      }
    }
    
    /* WhatsApp Button Responsive */
    .whatsapp-cta-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      background: #25D366;
      color: white;
      text-decoration: none;
      padding: clamp(12px, 2vw, 14px) clamp(24px, 4vw, 36px);
      border-radius: ${B.r.full};
      font-weight: 700;
      font-size: clamp(14px, 1.5vw, 16px);
      transition: all 0.3s ease;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      position: relative;
      z-index: 10;
    }
    
    @media (max-width: 640px) {
      .whatsapp-cta-btn {
        width: 100%;
        max-width: 280px;
      }
    }
    
    @media (hover: hover) {
      .whatsapp-cta-btn:hover {
        transform: translateY(-3px);
        background: #128C7E;
      }
    }
    
    /* ✅ FIXED: CTA Circle Styles - No overlap */
    .cta-circle {
      position: absolute;
      bottom: -80px;
      left: -60px;
      width: 200px;
      height: 200px;
      background: linear-gradient(135deg, ${B.blue[700]} 0%, ${B.blue[800]} 50%, ${B.blue[900]} 100%);
      border-radius: 50%;
      filter: blur(40px);
      opacity: 0.5;
      z-index: 0;
      pointer-events: none;
    }
    
    .cta-circle-right {
      position: absolute;
      top: -80px;
      right: -80px;
      width: 250px;
      height: 250px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    
    /* Hide decorative circles on mobile for better UX */
    @media (max-width: 768px) {
      .cta-circle,
      .cta-circle-right {
        display: none;
      }
    }
    
    /* CTA Content Wrapper */
    .cta-content {
      position: relative;
      z-index: 10;
    }
  `}</style>
);

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN SERVICES COMPONENT - SCALABLE & PRODUCTION READY
   ═══════════════════════════════════════════════════════════════════════════ */
const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <>
      <GlobalStyles />
      <section
        id="services"
        aria-label="Services & Projects"
        className="section-padding"
        style={{
          position: "relative",
          backgroundColor: B.bg,
          overflow: "hidden",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Background Pattern */}
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
          
          {/* Header Section */}
          <div style={{ 
            textAlign: "center", 
            marginBottom: "clamp(48px, 8vw, 72px)",
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

            <h2 className="section-heading">
              Our <span style={{ color: B.blue[600] }}>Services & Projects</span>
            </h2>
            <p className="section-subheading">
              Student-focused IT solutions that help you stand out. From MERN stack applications 
              to ATS-friendly resumes — we've got you covered.
            </p>
          </div>

          {/* Filter Tabs */}
          <div style={{
            marginBottom: "clamp(40px, 6vw, 64px)",
            opacity: mounted ? 1 : 0,
            animation: mounted ? "wFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both" : "none",
            display: "flex",
            justifyContent: "center",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            padding: "0 10px",
          }}
          className="filter-scroll hide-scroll">
            <div style={{ display: "flex", gap: "8px", minWidth: "max-content" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "clamp(8px, 2vw, 10px) clamp(18px, 3vw, 24px)",
                    borderRadius: B.r.full,
                    border: `1px solid ${activeCategory === cat ? B.blue[500] : "#E2E8F0"}`,
                    background: activeCategory === cat ? B.blue[500] : B.surface,
                    color: activeCategory === cat ? "#FFFFFF" : B.text2,
                    fontSize: "clamp(12px, 1.5vw, 14px)",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                    whiteSpace: "nowrap",
                    boxShadow: activeCategory === cat ? B.shadow.blue : B.shadow.sm,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              const originalPrice = parseInt(service.startingPrice) * 1.5;
              
              return (
                <article
                  key={service.id}
                  className="service-card"
                  style={{
                    opacity: mounted ? 1 : 0,
                    animation: mounted ? `wFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.3 + (index * 0.08)}s both` : "none",
                  }}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="popular-badge">
                      <Star size={12} fill="white" />
                      Popular
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="image-container">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="img-hover"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(15,23,42,0.2) 0%, transparent 50%)",
                    }} />
                    
                    <div className="category-badge">
                      <IconComponent size={16} color={B.blue[600]} />
                      <span style={{ fontSize: "clamp(10px, 1.2vw, 12px)", fontWeight: 700, color: B.text2 }}>
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-padding" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 className="responsive-title">
                      {service.title}
                    </h3>
                    <p className="responsive-text line-clamp-3">
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
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Price and CTA Row */}
                    <div className="cta-row">
                      <div>
                        <span className="price-original">
                          ₹{Math.round(originalPrice).toLocaleString()}
                        </span>
                        <span className="price-current">
                          ₹{parseInt(service.startingPrice).toLocaleString()}
                        </span>
                        <span style={{ fontSize: "clamp(10px, 1.2vw, 12px)", color: B.text4 }}> onwards</span>
                      </div>
                      
                      <button
                        className="mobile-full-btn"
                        onClick={() => window.open(getWhatsAppLink(service.title), "_blank")}
                      >
                        <MessageCircle size={16} />
                        Order Now
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ✅ FIXED: WhatsApp CTA Banner - No overlap issue */}
          <div style={{
            marginTop: "clamp(60px, 8vh, 80px)",
            background: "linear-gradient(135deg, #1E3A5F 0%, #1E40AF 100%)",
            borderRadius: B.r["2xl"],
            padding: "clamp(32px, 5vw, 48px)",
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            opacity: mounted ? 1 : 0,
            animation: mounted ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.5s both" : "none",
          }}>
            {/* Decorative Circles - Fixed with proper z-index and positioning */}
            <div className="cta-circle-right" />
            <div className="cta-circle" />
            
            {/* ✅ Content with higher z-index */}
            <div className="cta-content">
              <Users size={48} style={{ margin: "0 auto 20px", opacity: 0.9 }} />
              <h3 style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                fontWeight: 800,
                marginBottom: "12px",
                fontFamily: "'Syne', sans-serif",
              }}>
                Need a Custom Solution?
              </h3>
              <p style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
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
                className="whatsapp-cta-btn"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
                <ChevronRight size={18} />
              </a>
              
              <p style={{
                fontSize: "clamp(10px, 1.2vw, 12px)",
                opacity: 0.7,
                marginTop: "20px",
              }}>
                ⚡ Response within 30 minutes | Free consultation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;