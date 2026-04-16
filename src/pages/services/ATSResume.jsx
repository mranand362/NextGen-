// services/ATSResume.jsx
import React, { useState, useEffect } from "react";
import { 
  FileText, Target, CheckCircle, TrendingUp, Users, Award, 
  ArrowRight, Clock, Star, Shield, Zap, Download, Eye, Briefcase,
  MessageCircle, ChevronRight, Sparkles, Rocket, BarChart3, 
 FileCheck, Layers, Palette, Hash, Mail, Phone, MapPin,
  Building2, Globe, BookOpen, Lightbulb
} from "lucide-react";

const B = {
  bg: "#FAFBFF",
  surface: "#FFFFFF",
  text1: "#0B1120",
  text2: "#1E293B",
  text3: "#475569",
  text4: "#94A3B8",
  text5: "#64748B",
  white: "#FFFFFF",
  emerald: { 
    50: "#ECFDF5", 100: "#D1FAE5", 200: "#A7F3D0", 300: "#6EE7B7", 
    400: "#34D399", 500: "#10B981", 600: "#059669", 700: "#047857", 
    800: "#065F46", 900: "#064E3B" 
  },
  blue: { 500: "#3B82F6", 600: "#2563EB" },
  r: { 
    xs: "6px", sm: "8px", md: "12px", lg: "16px", 
    xl: "20px", "2xl": "24px", "3xl": "32px", full: "9999px" 
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.03)",
    md: "0 4px 12px rgba(0,0,0,0.05)",
    lg: "0 8px 24px rgba(0,0,0,0.08)",
    xl: "0 12px 40px rgba(0,0,0,0.12)",
    emerald: "0 8px 20px rgba(16, 185, 129, 0.15)",
  },
  transition: { default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" },
};

const ATSResume = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const yOffset = -(72 + 40 - 5);
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Users, value: "10,000+", label: "Executives Served", color: B.emerald[500] },
    { icon: TrendingUp, value: "98%", label: "Interview Success Rate", color: B.emerald[600] },
    { icon: Clock, value: "48hr", label: "Avg. Turnaround", color: B.emerald[500] },
    { icon: Award, value: "4.9", label: "Client Satisfaction", color: "#FBBF24" },
  ];

  const benefits = [
    { icon: Target, title: "ATS-First Architecture", description: "Enterprise-grade formatting engineered to bypass automated screening systems with 98% success rate.", stat: "85% More Interviews" },
    { icon: FileCheck, title: "Strategic Keyword Mapping", description: "Data-driven keyword placement aligned with your target roles and industry benchmarks.", stat: "3x Callbacks" },
    { icon: TrendingUp, title: "Career Trajectory Design", description: "Structured to highlight leadership impact, revenue metrics, and strategic achievements.", stat: "50% Higher Offers" },
    { icon: Users, title: "Recruiter Council Approved", description: "Validated by our panel of former FAANG recruiters and HR executives.", stat: "98% Satisfaction" },
  ];

  const packages = [
    { 
      name: "Starter Profile Optimization", 
      features: [
        "ATS-Compliant Resume Structure",
        "Industry Keyword Mapping",
        "Professional Formatting",
        "1-Page Resume Delivery"
      ], 
      popular: false,
      delivery: "Standard Turnaround (3-4 days)",
      icon: FileText
    },
    { 
      name: "Advanced Career Package", 
      features: [
        "Everything in Starter",
        "LinkedIn Profile Optimization",
        "Cover Letter Strategy",
        "Multi-Version Resume",
        "Priority Delivery (48hr)",
        "ATS Analysis Report"
      ], 
      popular: true,
      delivery: "Priority Turnaround (48 hours)",
      icon: Award
    },
    { 
      name: "Executive Career Suite", 
      features: [
        "Everything in Advanced",
        "Executive Bio & Branding",
        "Portfolio / GitHub Review",
        "Personal Branding Strategy",
        "1-on-1 Career Consultation",
        "Long-Term Revision Support"
      ], 
      popular: false,
      delivery: "Fast-Track Delivery (24-48 hours)",
      icon: Star
    },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Strategic consultation to map career trajectory", icon: Users },
    { step: "02", title: "Strategy", desc: "Data-driven keyword and positioning analysis", icon: Target },
    { step: "03", title: "Execution", desc: "Expert writing with ATS optimization", icon: FileText },
    { step: "04", title: "Delivery", desc: "Final assets + ongoing support", icon: Download },
  ];

  const testimonials = [
    { name: "Rahul Sharma", role: "Senior Engineering Manager, Google", text: "The strategic approach to my resume helped me secure interviews at 5 FAANG companies. Game-changer.", rating: 5 },
    { name: "Priya Patel", role: "Product Director, Microsoft", text: "Worth every investment. The team understood my career goals and delivered exceptional results.", rating: 5 },
    { name: "Amit Kumar", role: "Lead Data Scientist, Amazon", text: "Professional, consultative, and results-driven. My profile now reflects my true potential.", rating: 5 },
  ];

  const WHATSAPP_NUMBER = "919263066325";

  return (
    <main style={{ background: B.bg, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      
      {/* Hero Section */}
      <div style={{ 
        padding: "clamp(80px, 12vh, 120px) clamp(20px, 5vw, 32px) 60px",
        background: `linear-gradient(135deg, ${B.emerald[50]} 0%, ${B.bg} 50%, ${B.emerald[50]} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "400px", height: "400px", background: `radial-gradient(circle, ${B.emerald[200]}20 0%, transparent 70%)`, filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "350px", height: "350px", background: `radial-gradient(circle, ${B.emerald[100]}30 0%, transparent 70%)`, filter: "blur(60px)" }} />
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "12px", 
            padding: "8px 20px", 
            background: B.surface, 
            borderRadius: B.r.full, 
            marginBottom: "24px",
            boxShadow: B.shadow.sm,
            border: `1px solid ${B.emerald[100]}`,
          }}>
            <Building2 size={16} color={B.emerald[500]} />
            <span style={{ fontSize: "13px", fontWeight: 700, color: B.emerald[600], textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Executive Career Strategy
            </span>
          </div>
          
          <h1 style={{ 
            fontSize: "clamp(2rem, 6vw, 3.8rem)", 
            fontWeight: 800, 
            color: B.text1, 
            marginBottom: "20px",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}>
            Transform Your Career{" "}
            <span style={{ 
              background: `linear-gradient(135deg, ${B.emerald[500]}, ${B.emerald[700]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              With Executive-Grade Branding
            </span>
          </h1>
          
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 18px)", 
            color: B.text3, 
            maxWidth: "700px", 
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}>
            Strategic resume architecture trusted by professionals at Fortune 500 companies. 
            98% of our clients receive interview calls within 14 days.
          </p>
          
          <button 
            onClick={scrollToContact} 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "10px", 
              padding: "14px 36px", 
              borderRadius: B.r.lg, 
              background: `linear-gradient(135deg, ${B.emerald[500]}, ${B.emerald[700]})`,
              color: B.white, 
              border: "none", 
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "15px",
              transition: B.transition.default,
              boxShadow: B.shadow.emerald,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(16, 185, 129, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = B.shadow.emerald;
            }}
          >
            Schedule Consultation <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ padding: "clamp(40px, 6vw, 60px) clamp(20px, 5vw, 32px)", background: B.surface }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                style={{ 
                  textAlign: "center", 
                  padding: "24px",
                  background: B.bg,
                  borderRadius: B.r.xl,
                  transition: B.transition.default,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <Icon size={32} color={stat.color} style={{ marginBottom: "12px" }} />
                <div style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: B.text1 }}>{stat.value}</div>
                <div style={{ fontSize: "14px", color: B.text4 }}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div style={{ padding: "clamp(60px, 8vw, 80px) clamp(20px, 5vw, 32px)", background: B.bg }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, marginBottom: "12px", color: B.text1 }}>
              The{" "}
              <span style={{ color: B.emerald[600] }}>Strategic Advantage</span>
            </h2>
            <p style={{ fontSize: "16px", color: B.text4, maxWidth: "600px", margin: "0 auto" }}>
              Beyond resume writing — career architecture for the modern professional
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.title}
                  style={{ 
                    padding: "clamp(24px, 4vw, 32px)", 
                    background: B.surface, 
                    borderRadius: B.r.xl, 
                    textAlign: "center",
                    border: `1px solid ${B.emerald[100]}`,
                    transition: B.transition.default,
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(30px)",
                    transitionDelay: `${idx * 100}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = B.shadow.lg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ 
                    width: "70px", 
                    height: "70px", 
                    borderRadius: B.r.full, 
                    background: `linear-gradient(135deg, ${B.emerald[500]}10, ${B.emerald[600]}10)`,
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    margin: "0 auto 20px",
                  }}>
                    <Icon size={30} color={B.emerald[500]} />
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: B.text1 }}>{benefit.title}</h3>
                  <p style={{ fontSize: "14px", color: B.text3, marginBottom: "16px", lineHeight: 1.6 }}>{benefit.description}</p>
                  <span style={{ 
                    fontSize: "12px", 
                    padding: "6px 14px", 
                    background: `${B.emerald[500]}10`, 
                    borderRadius: B.r.full, 
                    color: B.emerald[600],
                    fontWeight: 600,
                    display: "inline-block",
                  }}>
                    {benefit.stat}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div style={{ padding: "clamp(60px, 8vw, 80px) clamp(20px, 5vw, 32px)", background: B.surface }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, marginBottom: "12px", color: B.text1 }}>
              Our{" "}
              <span style={{ color: B.emerald[600] }}>Engagement Framework</span>
            </h2>
            <p style={{ fontSize: "16px", color: B.text4 }}>A proven methodology refined across 10,000+ successful placements</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {process.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.step} style={{ textAlign: "center", position: "relative" }}>
                  <div style={{ 
                    width: "80px", 
                    height: "80px", 
                    borderRadius: B.r.full, 
                    background: `linear-gradient(135deg, ${B.emerald[500]}, ${B.emerald[700]})`,
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    margin: "0 auto 20px",
                    color: B.white,
                    fontSize: "24px",
                    fontWeight: 800,
                  }}>
                    {step.step}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: B.text1 }}>{step.title}</h3>
                  <p style={{ fontSize: "13px", color: B.text4 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enterprise Service Plans - NO PRICING */}
      <div style={{ padding: "clamp(60px, 8vw, 80px) clamp(20px, 5vw, 32px)", background: B.bg }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, marginBottom: "12px", color: B.text1 }}>
              Enterprise{" "}
              <span style={{ color: B.emerald[600] }}>Service Plans</span>
            </h2>
            <p style={{ fontSize: "16px", color: B.text4 }}>Flexible engagement models designed for every career stage</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {packages.map((pkg, idx) => {
              const Icon = pkg.icon;
              return (
                <div 
                  key={pkg.name}
                  style={{ 
                    padding: "clamp(28px, 4vw, 36px)", 
                    background: B.surface, 
                    borderRadius: B.r["2xl"], 
                    border: pkg.popular ? `2px solid ${B.emerald[500]}` : `1px solid ${B.emerald[100]}`,
                    position: "relative",
                    transition: B.transition.default,
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(30px)",
                    transitionDelay: `${idx * 100}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = B.shadow.xl;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {pkg.popular && (
                    <span style={{ 
                      position: "absolute", 
                      top: "-12px", 
                      right: "24px", 
                      padding: "6px 16px", 
                      background: `linear-gradient(135deg, ${B.emerald[500]}, ${B.emerald[700]})`,
                      color: B.white, 
                      borderRadius: B.r.full, 
                      fontSize: "11px", 
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}>
                      Most Requested
                    </span>
                  )}
                  
                  <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <Icon size={40} color={B.emerald[500]} style={{ marginBottom: "12px" }} />
                    <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "8px", color: B.text1 }}>{pkg.name}</h3>
                    <p style={{ fontSize: "12px", color: B.text5, marginTop: "6px" }}>
                      {pkg.delivery}
                    </p>
                  </div>
                  
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
                    {pkg.features.map((feature) => (
                      <li key={feature} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", fontSize: "14px", color: B.text3 }}>
                        <CheckCircle size={16} color={B.emerald[500]} style={{ flexShrink: 0 }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={scrollToContact} 
                    style={{ 
                      width: "100%", 
                      padding: "14px", 
                      borderRadius: B.r.lg, 
                      background: pkg.popular ? `linear-gradient(135deg, ${B.emerald[500]}, ${B.emerald[700]})` : B.surface, 
                      color: pkg.popular ? B.white : B.emerald[600], 
                      border: pkg.popular ? "none" : `1.5px solid ${B.emerald[200]}`,
                      cursor: "pointer", 
                      fontWeight: 700,
                      fontSize: "15px",
                      transition: B.transition.default,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Request Consultation →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ padding: "clamp(60px, 8vw, 80px) clamp(20px, 5vw, 32px)", background: B.surface }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, marginBottom: "12px", color: B.text1 }}>
              Trusted by{" "}
              <span style={{ color: B.emerald[600] }}>Industry Leaders</span>
            </h2>
            <p style={{ fontSize: "16px", color: B.text4 }}>Real outcomes from real professionals</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                style={{ 
                  padding: "28px", 
                  background: B.bg, 
                  borderRadius: B.r.xl,
                  border: `1px solid ${B.emerald[100]}`,
                  transition: B.transition.default,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = B.shadow.md;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div style={{ 
                    width: "50px", 
                    height: "50px", 
                    borderRadius: "50%", 
                    background: `linear-gradient(135deg, ${B.emerald[500]}, ${B.emerald[700]})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: B.white,
                    fontWeight: 700,
                    fontSize: "18px",
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: B.text1 }}>{testimonial.name}</div>
                    <div style={{ fontSize: "12px", color: B.text4 }}>{testimonial.role}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
                <p style={{ fontSize: "14px", color: B.text3, lineHeight: 1.6, fontStyle: "italic" }}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp CTA Section */}
      <div style={{ 
        padding: "clamp(60px, 8vw, 80px) clamp(20px, 5vw, 32px)", 
        background: `linear-gradient(135deg, ${B.emerald[600]}, ${B.emerald[800]})`,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "250px", height: "250px", background: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-60px", width: "200px", height: "200px", background: "rgba(255,255,255,0.08)", borderRadius: "50%", filter: "blur(40px)" }} />
        
        <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Lightbulb size={48} style={{ marginBottom: "24px", opacity: 0.9 }} />
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 800, color: B.white, marginBottom: "16px" }}>
            Ready to Elevate Your Career?
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.9)", marginBottom: "32px", lineHeight: 1.6 }}>
            Join thousands of professionals who've transformed their career trajectory with our strategic approach.
          </p>
          
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button 
              onClick={scrollToContact}
              style={{ 
                padding: "16px 36px", 
                borderRadius: B.r.lg, 
                background: B.white, 
                color: B.emerald[600], 
                fontSize: "16px", 
                fontWeight: 700, 
                border: "none", 
                cursor: "pointer",
                transition: B.transition.default,
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Schedule Strategy Call <ArrowRight size={18} />
            </button>
            
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20your%20executive%20career%20services.%20Please%20share%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                padding: "16px 36px", 
                borderRadius: B.r.lg, 
                background: "rgba(255,255,255,0.15)", 
                backdropFilter: "blur(10px)",
                color: B.white, 
                fontSize: "16px", 
                fontWeight: 700, 
                border: `1px solid rgba(255,255,255,0.3)`,
                cursor: "pointer",
                transition: B.transition.default,
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <MessageCircle size={18} />
              WhatsApp Inquiry
            </a>
          </div>
          
          <p style={{ fontSize: "13px", opacity: 0.8, marginTop: "28px" }}>
            ⚡ Complimentary consultation • Executive-level strategy • Flexible engagement
          </p>
        </div>
      </div>
    </main>
  );
};

export default ATSResume;