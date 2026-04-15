import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Server,
  Database,
  Shield,
  Zap,
  Smartphone,
  Globe,
  Cloud,
  Users,
  Star,
  Clock,
  ChevronRight,
  Award,
  TrendingUp,
  Layout,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Play,
  BookOpen,
  MessageCircle,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN TOKENS - ENHANCED
   ═══════════════════════════════════════════════════════════════════════════ */
const B = {
  bg: "#FAFBFF",
  surface: "#FFFFFF",
  text1: "#0B1120",
  text2: "#1E293B",
  text3: "#475569",
  text4: "#94A3B8",
  white: "#FFFFFF",
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
  emerald: { 400: "#34D399", 500: "#10B981" },
  amber: { 400: "#FBBF24", 500: "#F59E0B" },
  purple: { 400: "#A78BFA", 500: "#8B5CF6" },
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
    md: "0 4px 16px rgba(0,0,0,0.06)",
    lg: "0 8px 32px rgba(0,0,0,0.07)",
    xl: "0 16px 48px rgba(0,0,0,0.08)",
    "2xl": "0 24px 64px rgba(0,0,0,0.12)",
  },
  transition: {
    default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    smooth: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   STATISTICS DATA
   ═══════════════════════════════════════════════════════════════════════════ */
const STATS = [
  { value: "200+", label: "Projects Delivered", icon: Code, color: B.blue[500] },
  { value: "150+", label: "Happy Clients", icon: Users, color: B.emerald[500] },
  { value: "99%", label: "Client Satisfaction", icon: Star, color: B.amber[500] },
  { value: "24/7", label: "Support Available", icon: Clock, color: B.purple[500] },
];

/* ═══════════════════════════════════════════════════════════════════════════
   ENHANCED PAGE DATA
   ═══════════════════════════════════════════════════════════════════════════ */
const SERVICE_DATA = {
  title: "Web Development",
  subtitle: "MERN Stack Excellence",
  tagline: "Since 2020",
  description: "Build powerful, scalable, and modern web applications using the MERN stack. We deliver production-grade solutions that drive business growth with cutting-edge technology and best practices.",
  icon: Code,
  gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8, #1E3A5F)",
  color: B.blue[500],
  
  features: [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized loading times and smooth user experiences with modern web technologies and caching strategies.",
      stat: "99.9% Uptime",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, secure authentication, and protected data storage for peace of mind.",
      stat: "256-bit SSL",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive Design",
      description: "Perfect user experience on all devices - mobile, tablet, and desktop with fluid layouts.",
      stat: "100% Responsive",
    },
    {
      icon: Cloud,
      title: "Cloud-Ready Architecture",
      description: "Seamless deployment to AWS, Azure, or Google Cloud with auto-scaling capabilities.",
      stat: "Auto-scaling",
    },
    {
      icon: Globe,
      title: "Global CDN Integration",
      description: "Lightning-fast content delivery to users worldwide with built-in CDN support.",
      stat: "Global Network",
    },
    {
      icon: Users,
      title: "User-Centric Approach",
      description: "Intuitive interfaces designed around real user needs and behavior patterns.",
      stat: "User First",
    },
  ],

  technologies: [
    { name: "React.js", icon: Code, color: "#61DAFB", proficiency: 95 },
    { name: "Node.js", icon: Server, color: "#339933", proficiency: 92 },
    { name: "MongoDB", icon: Database, color: "#47A248", proficiency: 90 },
    { name: "Express.js", icon: Server, color: "#000000", proficiency: 93 },
    { name: "Tailwind CSS", icon: Layout, color: "#06B6D4", proficiency: 88 },
    { name: "GraphQL", icon: Database, color: "#E10098", proficiency: 85 },
    { name: "TypeScript", icon: Code, color: "#3178C6", proficiency: 87 },
    { name: "Next.js", icon: Globe, color: "#000000", proficiency: 84 },
    { name: "PostgreSQL", icon: Database, color: "#336791", proficiency: 86 },
    { name: "Docker", icon: Cloud, color: "#2496ED", proficiency: 82 },
    { name: "AWS", icon: Cloud, color: "#FF9900", proficiency: 85 },
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We dive deep into your requirements, analyze competitors, and define clear project goals.",
      duration: "1-2 weeks",
      deliverables: ["Project Scope", "Technical Specs", "Timeline"],
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with user-centered design principles.",
      duration: "2-3 weeks",
      deliverables: ["Wireframes", "Prototypes", "Design System"],
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates and continuous integration.",
      duration: "4-8 weeks",
      deliverables: ["Frontend", "Backend API", "Database"],
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Rigorous testing across all devices and browsers.",
      duration: "1-2 weeks",
      deliverables: ["Test Reports", "Bug Fixes", "Performance Report"],
    },
    {
      step: "05",
      title: "Deployment",
      description: "Smooth launch with zero downtime and rollback plans.",
      duration: "1 week",
      deliverables: ["Live Site", "SSL Certificate", "Backup System"],
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing monitoring, updates, and technical support.",
      duration: "Ongoing",
      deliverables: ["24/7 Monitoring", "Security Updates", "Analytics"],
    },
  ],

  benefits: [
    { icon: TrendingUp, title: "50% Faster Load Times", description: "Optimized code and assets", impact: "+40% Conversion" },
    { icon: Users, title: "Increased Engagement", description: "User-friendly interfaces", impact: "+60% Retention" },
    { icon: Award, title: "Higher Conversion Rates", description: "Strategic UX design", impact: "+35% Sales" },
    { icon: Shield, title: "Reduced Security Risks", description: "Best security practices", impact: "99.9% Secure" },
  ],

  testimonials: [
    {
      name: "Rahul Sharma",
      role: "Founder, TechStart",
      content: "NextGen IT delivered an exceptional web application that exceeded our expectations. Their technical expertise and attention to detail are remarkable.",
      rating: 5,
      company: "TechStart",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Priya Patel",
      role: "CTO, InnovateCorp",
      content: "The team's MERN stack expertise transformed our business. The application is fast, secure, and scalable.",
      rating: 5,
      company: "InnovateCorp",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Amit Kumar",
      role: "Product Manager, GrowthLabs",
      content: "Professional, timely, and high-quality delivery. Highly recommended for any web development project.",
      rating: 5,
      company: "GrowthLabs",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ],

  faqs: [
    {
      question: "What is the typical timeline for web development?",
      answer: "A typical MERN stack application takes 4-8 weeks depending on complexity. Simple websites can be completed in 2-3 weeks. We'll provide a detailed timeline during the discovery phase.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer 3 months of free support and maintenance after launch, including bug fixes, security updates, and technical assistance. Extended support packages are also available.",
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! We specialize in modernizing legacy applications with the latest MERN stack technologies while preserving your existing data and SEO rankings.",
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing based on project scope - fixed price for defined projects, hourly for ongoing work, or monthly retainer for long-term partnerships. Contact us for a custom quote.",
    },
    {
      question: "Do you offer SEO optimization?",
      answer: "Yes, all our websites are built with SEO best practices including meta tags, semantic HTML, sitemaps, and schema markup to ensure great search engine visibility.",
    },
    {
      question: "What about mobile responsiveness?",
      answer: "All our applications are fully responsive and tested on all major devices and screen sizes - from mobile phones to large desktop monitors.",
    },
  ],

  projects: [
    { name: "E-Commerce Platform", category: "MERN Stack", year: "2024", image: "/api/placeholder/400/300" },
    { name: "Analytics Dashboard", category: "React + Node", year: "2023", image: "/api/placeholder/400/300" },
    { name: "Social Media App", category: "Full Stack", year: "2024", image: "/api/placeholder/400/300" },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
   ENHANCED KEYFRAMES
   ═══════════════════════════════════════════════════════════════════════════ */
const PageKeyframes = () => (
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `}</style>
);

/* ═══════════════════════════════════════════════════════════════════════════
   ENHANCED HERO SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
const HeroSection = ({ data, stats }) => {
  const Icon = data.icon;
  const [typedText, setTypedText] = useState("");
  const fullText = "MERN Stack Excellence";
  
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);
  
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const yOffset = -(72 + 40 - 5);
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "clamp(80px, 12vh, 120px) 1.5rem 60px",
        background: `linear-gradient(135deg, ${B.blue[50]} 0%, ${B.bg} 50%, ${B.blue[50]} 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-20%", right: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: `radial-gradient(circle, ${B.blue[400]}10, transparent)`, filter: "blur(60px)", animation: "float 20s ease-in-out infinite" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${B.purple[400]}10, transparent)`, filter: "blur(60px)", animation: "float 15s ease-in-out infinite reverse" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", width: "300px", height: "300px", borderRadius: "50%", background: `radial-gradient(circle, ${B.emerald[400]}05, transparent)`, filter: "blur(50px)", animation: "pulse 10s ease-in-out infinite" }} />
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "8px 20px 8px 16px", background: B.surface, borderRadius: B.r.full, border: `1px solid ${B.blue[200]}50`, marginBottom: "24px", boxShadow: B.shadow.sm, animation: "fadeUp 0.6s ease both" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: B.r.md, background: data.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon size={16} color={B.white} /></div>
              <span style={{ fontSize: "13px", fontWeight: 600, color: B.blue[600], fontFamily: "'DM Sans', sans-serif" }}>{data.subtitle}</span>
              <span style={{ fontSize: "11px", padding: "2px 8px", background: `${B.emerald[500]}10`, borderRadius: B.r.full, color: B.emerald[500] }}>{data.tagline}</span>
            </div>
            
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: B.text1, marginBottom: "20px", fontFamily: "'Syne', sans-serif", animation: "fadeUp 0.6s ease 0.1s both" }}>
              {data.title}<br />
              <span style={{ background: data.gradient, backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Solutions</span>
              <span style={{ display: "block", fontSize: "1.5rem", marginTop: "10px", color: B.blue[500] }}>{typedText}<span style={{ animation: "pulse 1s infinite" }}>|</span></span>
            </h1>
            
            <p style={{ fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.6, color: B.text3, maxWidth: "600px", marginBottom: "32px", fontFamily: "'DM Sans', sans-serif", animation: "fadeUp 0.6s ease 0.2s both" }}>{data.description}</p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "40px", animation: "fadeUp 0.6s ease 0.3s both" }}>
              <button onClick={scrollToContact} style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: B.r.lg, background: data.gradient, color: B.white, fontSize: "14px", fontWeight: 600, border: "none", cursor: "pointer", transition: B.transition.default, position: "relative", overflow: "hidden" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = B.shadow.lg; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                Start Your Project <ArrowRight size={16} />
                <div style={{ position: "absolute", top: 0, left: "-100%", width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)", animation: "shimmer 2s infinite" }} />
              </button>
              <a href="#process" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: B.r.lg, background: B.surface, border: `1px solid ${B.blue[200]}60`, color: B.text2, fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: B.transition.default }} onMouseEnter={(e) => { e.currentTarget.style.background = B.blue[50]; e.currentTarget.style.borderColor = B.blue[300]; }} onMouseLeave={(e) => { e.currentTarget.style.background = B.surface; e.currentTarget.style.borderColor = `${B.blue[200]}60`; }}>View Process <ChevronRight size={14} /></a>
            </div>
            
            {/* Statistics */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", paddingTop: "20px", borderTop: `1px solid ${B.blue[100]}60`, animation: "fadeUp 0.6s ease 0.4s both" }}>
              {stats.map((stat, idx) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: "11px", color: B.text4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-right">
            <div style={{ background: data.gradient, borderRadius: B.r["2xl"], padding: "40px", textAlign: "center", color: B.white, position: "relative", overflow: "hidden", boxShadow: B.shadow.xl }}>
              <div style={{ position: "absolute", top: "-50%", right: "-50%", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", animation: "rotate 20s linear infinite" }} />
              <Code size={48} style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "24px", marginBottom: "10px", fontFamily: "'Syne', sans-serif" }}>MERN Stack Excellence</h3>
              <p style={{ fontSize: "14px", opacity: 0.9 }}>Full-stack JavaScript development</p>
              <div style={{ marginTop: "30px", display: "flex", gap: "10px", justifyContent: "center" }}>
                <div style={{ padding: "8px 16px", background: "rgba(255,255,255,0.2)", borderRadius: B.r.full, fontSize: "12px" }}>React</div>
                <div style={{ padding: "8px 16px", background: "rgba(255,255,255,0.2)", borderRadius: B.r.full, fontSize: "12px" }}>Node.js</div>
                <div style={{ padding: "8px 16px", background: "rgba(255,255,255,0.2)", borderRadius: B.r.full, fontSize: "12px" }}>MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (min-width: 1024px) { .hero-grid { grid-template-columns: 1fr 1fr !important; } .hero-right { display: block !important; } } @media (max-width: 1024px) { .hero-right { display: none !important; } }`}</style>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   FEATURES SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
const FeaturesSection = ({ features }) => {
  return (
    <div style={{ padding: "clamp(48px, 8vh, 80px) 1.5rem", background: B.surface }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-block", padding: "4px 12px", background: `${B.blue[500]}10`, borderRadius: B.r.full, fontSize: "12px", fontWeight: 600, color: B.blue[600], marginBottom: "16px" }}>WHY CHOOSE US</span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: B.text1, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em", marginBottom: "16px" }}>Key Features</h2>
          <p style={{ fontSize: "16px", color: B.text3, maxWidth: "600px", margin: "0 auto" }}>What makes our web development services stand out</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} style={{ padding: "28px 24px", background: B.bg, borderRadius: B.r.xl, border: `1px solid ${B.blue[100]}50`, transition: B.transition.default, animation: `fadeUp 0.5s ease ${idx * 0.1}s both`, position: "relative", overflow: "hidden" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = B.shadow.lg; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: B.r.md, background: `${B.blue[500]}10`, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon size={24} color={B.blue[500]} /></div>
                  <span style={{ fontSize: "11px", padding: "4px 10px", background: `${B.emerald[500]}10`, borderRadius: B.r.full, color: B.emerald[500] }}>{feature.stat}</span>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: B.text1, marginBottom: "12px", fontFamily: "'Syne', sans-serif" }}>{feature.title}</h3>
                <p style={{ fontSize: "14px", color: B.text3, lineHeight: 1.6 }}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   TECHNOLOGIES SECTION WITH PROFICIENCY
   ═══════════════════════════════════════════════════════════════════════════ */
const TechnologiesSection = ({ technologies }) => {
  return (
    <div style={{ padding: "clamp(48px, 8vh, 80px) 1.5rem", background: B.bg }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-block", padding: "4px 12px", background: `${B.blue[500]}10`, borderRadius: B.r.full, fontSize: "12px", fontWeight: 600, color: B.blue[600], marginBottom: "16px" }}>TECH STACK</span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: B.text1, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em", marginBottom: "16px" }}>Technologies We Use</h2>
          <p style={{ fontSize: "16px", color: B.text3, maxWidth: "600px", margin: "0 auto" }}>Cutting-edge tools and frameworks for modern web development</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} style={{ padding: "20px", background: B.surface, borderRadius: B.r.lg, border: `1px solid ${B.blue[100]}50`, transition: B.transition.default, animation: `slideInLeft 0.5s ease ${idx * 0.03}s both`, cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = B.shadow.md; e.currentTarget.style.borderColor = tech.color; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = `${B.blue[100]}50`; }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <Icon size={28} color={tech.color} />
                  <span style={{ fontSize: "16px", fontWeight: 600, color: B.text2 }}>{tech.name}</span>
                </div>
                <div style={{ height: "6px", background: B.blue[100], borderRadius: B.r.full, overflow: "hidden" }}>
                  <div style={{ width: `${tech.proficiency}%`, height: "100%", background: tech.color, borderRadius: B.r.full, transition: "width 1s ease" }} />
                </div>
                <div style={{ fontSize: "12px", color: B.text4, marginTop: "8px", textAlign: "right" }}>{tech.proficiency}% Expertise</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   BENEFITS SECTION WITH IMPACT
   ═══════════════════════════════════════════════════════════════════════════ */
const BenefitsSection = ({ benefits }) => {
  return (
    <div style={{ padding: "clamp(48px, 8vh, 80px) 1.5rem", background: B.surface }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-block", padding: "4px 12px", background: `${B.blue[500]}10`, borderRadius: B.r.full, fontSize: "12px", fontWeight: 600, color: B.blue[600], marginBottom: "16px" }}>BUSINESS IMPACT</span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: B.text1, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>Tangible Benefits</h2>
          <p style={{ fontSize: "16px", color: B.text3, maxWidth: "600px", margin: "0 auto" }}>Real results that drive your business forward</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} style={{ textAlign: "center", padding: "32px 24px", background: B.bg, borderRadius: B.r.xl, border: `1px solid ${B.blue[100]}50`, animation: `fadeUp 0.5s ease ${idx * 0.1}s both`, position: "relative" }}>
                <div style={{ position: "absolute", top: "20px", right: "20px", fontSize: "11px", padding: "2px 8px", background: `${B.emerald[500]}10`, borderRadius: B.r.full, color: B.emerald[500] }}>{benefit.impact}</div>
                <div style={{ width: "64px", height: "64px", borderRadius: B.r.full, background: `${B.blue[500]}10`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}><Icon size={28} color={B.blue[500]} /></div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: B.text1, marginBottom: "12px", fontFamily: "'Syne', sans-serif" }}>{benefit.title}</h3>
                <p style={{ fontSize: "14px", color: B.text3 }}>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   PROCESS SECTION WITH DELIVERABLES
   ═══════════════════════════════════════════════════════════════════════════ */
const ProcessSection = ({ process }) => {
  return (
    <div style={{ padding: "clamp(48px, 8vh, 80px) 1.5rem", background: B.bg }} id="process">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-block", padding: "4px 12px", background: `${B.blue[500]}10`, borderRadius: B.r.full, fontSize: "12px", fontWeight: 600, color: B.blue[600], marginBottom: "16px" }}>OUR PROCESS</span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: B.text1, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em", marginBottom: "16px" }}>How We Work</h2>
          <p style={{ fontSize: "16px", color: B.text3, maxWidth: "600px", margin: "0 auto" }}>A transparent, agile development process that delivers results</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "24px" }}>
          {process.map((step, idx) => (
            <div key={step.step} style={{ position: "relative", padding: "28px", background: B.surface, borderRadius: B.r.xl, border: `1px solid ${B.blue[100]}50`, transition: B.transition.default, animation: `fadeUp 0.5s ease ${idx * 0.1}s both` }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = B.shadow.lg; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ fontSize: "56px", fontWeight: 800, color: `${B.blue[500]}10`, fontFamily: "'Syne', sans-serif", position: "absolute", top: "20px", right: "24px" }}>{step.step}</div>
              <div style={{ width: "48px", height: "48px", borderRadius: B.r.md, background: `${B.blue[500]}10`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}><span style={{ fontSize: "20px", fontWeight: 700, color: B.blue[500] }}>{step.step}</span></div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: B.text1, marginBottom: "12px", fontFamily: "'Syne', sans-serif" }}>{step.title}</h3>
              <p style={{ fontSize: "14px", color: B.text3, marginBottom: "16px", lineHeight: 1.6 }}>{step.description}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingBottom: "12px", marginBottom: "12px", borderBottom: `1px solid ${B.blue[100]}50` }}><Clock size={14} color={B.text4} /><span style={{ fontSize: "12px", color: B.text4 }}>{step.duration}</span></div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {step.deliverables.map((item, i) => (
                  <span key={i} style={{ fontSize: "11px", padding: "4px 10px", background: `${B.blue[500]}10`, borderRadius: B.r.full, color: B.blue[600] }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   TESTIMONIALS SECTION WITH AVATARS
   ═══════════════════════════════════════════════════════════════════════════ */
const TestimonialsSection = ({ testimonials }) => {
  const StarRating = ({ rating }) => {
    return (
      <div style={{ display: "flex", gap: "4px" }}>
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={14} fill={B.amber[500]} color={B.amber[500]} />
        ))}
      </div>
    );
  };

  return (
    <div style={{ padding: "clamp(48px, 8vh, 80px) 1.5rem", background: B.surface }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-block", padding: "4px 12px", background: `${B.blue[500]}10`, borderRadius: B.r.full, fontSize: "12px", fontWeight: 600, color: B.blue[600], marginBottom: "16px" }}>CLIENT LOVE</span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: B.text1, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>What Our Clients Say</h2>
          <p style={{ fontSize: "16px", color: B.text3, maxWidth: "600px", margin: "0 auto" }}>Trusted by businesses worldwide</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
          {testimonials.map((testimonial, idx) => (
            <div key={testimonial.name} style={{ padding: "28px", background: B.bg, borderRadius: B.r.xl, border: `1px solid ${B.blue[100]}50`, animation: `slideInRight 0.5s ease ${idx * 0.1}s both`, position: "relative" }}>
              <div style={{ position: "absolute", top: "20px", right: "20px", fontSize: "11px", padding: "2px 8px", background: `${testimonial.company === "TechStart" ? B.blue[500] : B.emerald[500]}10`, borderRadius: B.r.full, color: testimonial.company === "TechStart" ? B.blue[500] : B.emerald[500] }}>{testimonial.company}</div>
              <StarRating rating={testimonial.rating} />
              <p style={{ fontSize: "14px", color: B.text2, lineHeight: 1.7, margin: "20px 0", fontStyle: "italic" }}>"{testimonial.content}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: B.r.full, background: B.blue[500], display: "flex", alignItems: "center", justifyContent: "center", color: B.white, fontWeight: 700, fontSize: "18px" }}>{testimonial.name.charAt(0)}</div>
                <div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: B.text1 }}>{testimonial.name}</div>
                  <div style={{ fontSize: "13px", color: B.text4 }}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   FAQ SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ padding: "clamp(48px, 8vh, 80px) 1.5rem", background: B.bg }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-block", padding: "4px 12px", background: `${B.blue[500]}10`, borderRadius: B.r.full, fontSize: "12px", fontWeight: 600, color: B.blue[600], marginBottom: "16px" }}>FAQ</span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: B.text1, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: "16px", color: B.text3, maxWidth: "600px", margin: "16px auto 0" }}>Everything you need to know about our web development services</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ background: B.surface, borderRadius: B.r.lg, border: `1px solid ${B.blue[100]}50`, overflow: "hidden", transition: B.transition.default, animation: `fadeUp 0.5s ease ${idx * 0.05}s both` }}>
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} style={{ width: "100%", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left", transition: B.transition.default }} onMouseEnter={(e) => { e.currentTarget.style.background = B.blue[50]; }} onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}>
                <span style={{ fontSize: "16px", fontWeight: 600, color: B.text1 }}>{faq.question}</span>
                <ChevronRight size={20} style={{ transition: "transform 0.3s ease", transform: openIndex === idx ? "rotate(90deg)" : "rotate(0deg)", color: B.blue[500] }} />
              </button>
              {openIndex === idx && (
                <div style={{ padding: "0 24px 20px 24px", borderTop: `1px solid ${B.blue[100]}50`, animation: "fadeIn 0.3s ease" }}>
                  <p style={{ fontSize: "14px", color: B.text3, lineHeight: 1.6, marginTop: "16px" }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   ENHANCED CTA SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
const CTASection = ({ gradient }) => {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const yOffset = -(72 + 40 - 5);
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div style={{ padding: "clamp(60px, 10vh, 80px) 1.5rem", background: gradient, position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "40px 40px", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "-50%", right: "-20%", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, rgba(255,255,255,0.1), transparent)`, animation: "rotate 30s linear infinite" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-50%", left: "-20%", width: "300px", height: "300px", borderRadius: "50%", background: `radial-gradient(circle, rgba(255,255,255,0.08), transparent)`, animation: "rotate 20s linear infinite reverse" }} />
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: B.white, marginBottom: "16px", fontFamily: "'Syne', sans-serif" }}>Ready to Build Your Web Application?</h2>
        <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "rgba(255,255,255,0.95)", marginBottom: "32px" }}>Let's discuss your project and create something amazing together</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          <button onClick={scrollToContact} style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 36px", borderRadius: B.r.lg, background: B.white, color: B.blue[600], fontSize: "15px", fontWeight: 700, border: "none", cursor: "pointer", transition: B.transition.default, position: "relative", overflow: "hidden" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = B.shadow.xl; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            Get Free Consultation <ArrowRight size={18} />
            <div style={{ position: "absolute", top: 0, left: "-100%", width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)", animation: "shimmer 2s infinite" }} />
          </button>
          <a href="tel:+911234567890" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 36px", borderRadius: B.r.lg, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", color: B.white, fontSize: "15px", fontWeight: 600, textDecoration: "none", border: `1px solid rgba(255,255,255,0.3)`, transition: B.transition.default }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; e.currentTarget.style.transform = "none"; }}><Phone size={18} /> Call Us Now</a>
        </div>
        <div style={{ marginTop: "32px", display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.8)", fontSize: "13px" }}><Mail size={14} /> hello@nextgenitsolution.com</div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.8)", fontSize: "13px" }}><MapPin size={14} /> India</div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.8)", fontSize: "13px" }}><Clock size={14} /> Mon - Sat, 9AM - 7PM</div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const WebDevelopment = () => {
  return (
    <>
      <PageKeyframes />
      <main style={{ background: B.bg }}>
        <HeroSection data={SERVICE_DATA} stats={STATS} />
        <FeaturesSection features={SERVICE_DATA.features} />
        <TechnologiesSection technologies={SERVICE_DATA.technologies} />
        <BenefitsSection benefits={SERVICE_DATA.benefits} />
        <ProcessSection process={SERVICE_DATA.process} />
        <TestimonialsSection testimonials={SERVICE_DATA.testimonials} />
        <FAQSection faqs={SERVICE_DATA.faqs} />
        <CTASection gradient={SERVICE_DATA.gradient} />
      </main>
    </>
  );
};

export default WebDevelopment;