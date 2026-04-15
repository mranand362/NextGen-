import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Shield,
  Zap,
  Award,
} from "lucide-react";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

import logo from "../../assets/logo.png";

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN TOKENS (Matching Navbar & Hero)
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
  emerald: { 400: "#34D399", 500: "#10B981", 600: "#059669" },
  amber: { 400: "#FBBF24", 500: "#F59E0B", 600: "#D97706" },
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
   FOOTER DATA
   ═══════════════════════════════════════════════════════════════════════════ */
const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about", new: false },
    { label: "Careers", href: "/careers", new: true, badge: "We're Hiring" },
    { label: "Blog", href: "/blog", new: false },
    { label: "Press", href: "/press", new: false },
    { label: "Partners", href: "/partners", new: false },
  ],
  services: [
    { label: "Web Development", href: "/services/web-development", popular: true },
    { label: "UI/UX Design", href: "/services/ui-ux-design", popular: false },
    { label: "ATS Resume", href: "/services/ats-resume", popular: true },
    { label: "Portfolio Sites", href: "/services/portfolio", popular: false },
    { label: "SEO Optimization", href: "/services/seo", popular: false },
  ],
  support: [
    { label: "Help Center", href: "/help", new: false },
    { label: "Contact Support", href: "/contact", new: false },
    { label: "Privacy Policy", href: "/privacy", new: false },
    { label: "Terms of Service", href: "/terms", new: false },
    { label: "Cookie Policy", href: "/cookies", new: false },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api" },
    { label: "Community", href: "/community" },
    { label: "Open Source", href: "/opensource" },
    { label: "Status", href: "/status" },
  ],
};

const SOCIAL_LINKS = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook", color: "#1877F2", followers: "10K+" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "#1DA1F2", followers: "25K+" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0A66C2", followers: "15K+" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub", color: "#333333", followers: "8K+" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "#E4405F", followers: "20K+" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube", color: "#FF0000", followers: "5K+" },
  { icon: FaDribbble, href: "https://dribbble.com", label: "Dribbble", color: "#EA4C89", followers: "3K+" },
];

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
  { label: "Insights", href: "#insights" },
];

const TRUST_BADGES = [
  { icon: Shield, label: "SSL Secure", color: "#10B981" },
  { icon: Award, label: "Award Winning", color: "#F59E0B" },
  { icon: Zap, label: "24/7 Support", color: "#3B82F6" },
  { icon: Sparkles, label: "100% Satisfaction", color: "#10B981" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   FOOTER KEYFRAMES
   ═══════════════════════════════════════════════════════════════════════════ */
const FooterKeyframes = () => (
  <style>{`
    @keyframes fFadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fSlideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fGlow {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.05); }
    }
    @keyframes fRipple {
      0% { transform: scale(0); opacity: 0.5; }
      100% { transform: scale(4); opacity: 0; }
    }
    @keyframes fFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    @keyframes fPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
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
   LOGO COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const Logo = ({ compact = false }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img 
        src={logo} 
        alt="NextGen IT Logo" 
        style={{
          height: compact ? "28px" : "36px",
          width: "auto",
          objectFit: "contain",
        }}
      />
      <span
        style={{
          fontSize: compact 
            ? "clamp(14px, 4vw, 17px)" 
            : "clamp(16px, 4vw, 20px)",
          fontWeight: 900,
          fontFamily: "'Syne', sans-serif",
          letterSpacing: "-0.03em",
          color: B.text1,
          transition: "color 0.2s ease",
          whiteSpace: "nowrap",
        }}
      >
        NextGen
      </span>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   FOOTER LINK COLUMN
   ═══════════════════════════════════════════════════════════════════════════ */
const FooterColumn = ({ title, links, delay }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        opacity: 0,
        animation: `fSlideIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`,
      }}
    >
      <h4
        style={{
          fontSize: "clamp(14px, 2vw, 16px)",
          fontWeight: 700,
          color: B.text1,
          marginBottom: "20px",
          fontFamily: "'Syne', sans-serif",
          letterSpacing: "-0.02em",
          position: "relative",
          display: "inline-block",
        }}
      >
        {title}
        <span
          style={{
            position: "absolute",
            bottom: "-6px",
            left: 0,
            width: "30px",
            height: "2px",
            background: `linear-gradient(90deg, ${B.blue[500]}, ${B.blue[300]})`,
            borderRadius: "2px",
          }}
        />
      </h4>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {links.map((link, idx) => (
          <li key={link.label}>
            <a
              href={link.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "clamp(13px, 2vw, 14px)",
                color: B.text3,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                transition: B.transition.default,
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ChevronRight
                size={14}
                style={{
                  transition: "transform 0.2s ease",
                  transform: hoveredIndex === idx ? "translateX(4px)" : "translateX(0)",
                  opacity: hoveredIndex === idx ? 1 : 0.5,
                }}
              />
              <span
                style={{
                  transition: "color 0.2s ease",
                  color: hoveredIndex === idx ? B.blue[600] : B.text3,
                }}
              >
                {link.label}
              </span>
              {link.new && (
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: B.r.full,
                    background: `linear-gradient(135deg, ${B.emerald[500]}, ${B.emerald[600]})`,
                    color: B.white,
                    marginLeft: "6px",
                    fontWeight: 600,
                  }}
                >
                  New
                </span>
              )}
              {link.popular && (
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: B.r.full,
                    background: `${B.amber[500]}15`,
                    color: B.amber[600],
                    marginLeft: "6px",
                    fontWeight: 600,
                  }}
                >
                  Popular
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   SOCIAL LINKS
   ═══════════════════════════════════════════════════════════════════════════ */
const SocialLinks = () => {
  const [rippleIndex, setRippleIndex] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSocialClick = (e, href) => {
    e.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "16px",
        }}
      >
        {SOCIAL_LINKS.slice(0, 6).map((social, idx) => {
          const Icon = social.icon;
          const isHovered = hoveredSocial === idx;
          return (
            <a
              key={social.label}
              href={social.href}
              onClick={(e) => handleSocialClick(e, social.href)}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                borderRadius: B.r.lg,
                background: isHovered ? social.color : B.surface,
                border: `1px solid ${isHovered ? social.color : B.blue[200]}50`,
                color: isHovered ? B.white : social.color,
                transition: B.transition.default,
                cursor: "pointer",
                overflow: "hidden",
              }}
              onMouseEnter={() => {
                setHoveredSocial(idx);
                setRippleIndex(idx);
                setTimeout(() => setRippleIndex(null), 600);
              }}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <Icon size={18} />
              {rippleIndex === idx && (
                <span
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${social.color}40, transparent)`,
                    animation: "fRipple 0.6s ease-out",
                  }}
                />
              )}
            </a>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          fontSize: "11px",
          color: B.text4,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {SOCIAL_LINKS.slice(0, 4).map((social) => (
          <span key={social.label}>
            {social.followers} on {social.label}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   TRUST BADGES
   ═══════════════════════════════════════════════════════════════════════════ */
const TrustBadges = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        marginTop: "24px",
        paddingTop: "24px",
        borderTop: `1px solid ${B.blue[100]}40`,
      }}
    >
      {TRUST_BADGES.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              background: B.surface,
              borderRadius: B.r.lg,
              border: `1px solid ${B.blue[100]}60`,
              boxShadow: B.shadow.xs,
              animation: `fFloat 3s ease-in-out infinite ${idx * 0.2}s`,
            }}
          >
            <Icon size={16} color={badge.color} />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: B.text2,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {badge.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   CONTACT INFO
   ═══════════════════════════════════════════════════════════════════════════ */
const ContactInfo = () => {
  const CONTACT = {
    PHONE: "+91 12345 67890",
    EMAIL: "hello@nextgenitsolution.com",
    LOCATION: "India",
    HOURS: "Mon – Sat, 9AM – 7PM",
    SUPPORT_EMAIL: "support@nextgenitsolution.com",
  };

  const [hoveredContact, setHoveredContact] = useState(null);

  const contactItems = [
    { icon: Phone, label: "Sales & Inquiries", value: CONTACT.PHONE, href: `tel:${CONTACT.PHONE.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email Us", value: CONTACT.EMAIL, href: `mailto:${CONTACT.EMAIL}` },
    { icon: Mail, label: "Support", value: CONTACT.SUPPORT_EMAIL, href: `mailto:${CONTACT.SUPPORT_EMAIL}` },
    { icon: MapPin, label: "Office", value: CONTACT.LOCATION, href: "#" },
    { icon: Clock, label: "Working Hours", value: CONTACT.HOURS, href: "#" },
  ];

  return (
    <div
      style={{
        opacity: 0,
        animation: "fSlideIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) 200ms both",
      }}
    >
      <h4
        style={{
          fontSize: "clamp(14px, 2vw, 16px)",
          fontWeight: 700,
          color: B.text1,
          marginBottom: "20px",
          fontFamily: "'Syne', sans-serif",
          letterSpacing: "-0.02em",
          position: "relative",
          display: "inline-block",
        }}
      >
        Get in Touch
        <span
          style={{
            position: "absolute",
            bottom: "-6px",
            left: 0,
            width: "30px",
            height: "2px",
            background: `linear-gradient(90deg, ${B.blue[500]}, ${B.blue[300]})`,
            borderRadius: "2px",
          }}
        />
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {contactItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                transition: B.transition.default,
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredContact(idx)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: B.r.md,
                  background: hoveredContact === idx ? `${B.blue[500]}10` : B.blue[50],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: B.transition.default,
                }}
              >
                <Icon
                  size={18}
                  color={hoveredContact === idx ? B.blue[600] : B.blue[500]}
                />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    color: B.text4,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "clamp(12px, 2vw, 13px)",
                    color: hoveredContact === idx ? B.blue[600] : B.text2,
                    fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "color 0.2s ease",
                  }}
                >
                  {item.value}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   QUICK LINKS
   ═══════════════════════════════════════════════════════════════════════════ */
const QuickLinks = () => {
  const scrollToElement = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -(72 + 40 - 5);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    scrollToElement(href);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "clamp(16px, 3vw, 24px)",
        marginBottom: "24px",
      }}
    >
      {QUICK_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          style={{
            fontSize: "clamp(13px, 2vw, 14px)",
            color: B.text3,
            textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            transition: B.transition.default,
            padding: "6px 12px",
            borderRadius: B.r.full,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = B.blue[600];
            e.currentTarget.style.background = B.blue[50];
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = B.text3;
            e.currentTarget.style.background = "transparent";
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN FOOTER COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <FooterKeyframes />

      <footer
        role="contentinfo"
        style={{
          position: "relative",
          background: B.surface,
          borderTop: `1px solid ${B.blue[100]}40`,
          marginTop: "auto",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        {/* Background Pattern */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 80%, ${B.blue[50]} 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, ${B.blue[100]} 0%, transparent 50%)
            `,
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "clamp(48px, 8vh, 64px) clamp(16px, 5vw, 24px) clamp(24px, 4vh, 32px)",
          }}
        >
          {/* Main Footer Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "clamp(32px, 5vw, 48px)",
              marginBottom: "clamp(40px, 6vh, 60px)",
            }}
            className="footer-grid"
          >
            {/* Brand Column */}
            <div
              style={{
                gridColumn: "span 1",
                opacity: 0,
                animation: `fFadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0ms both`,
              }}
              className="footer-brand"
            >
              <div style={{ marginBottom: "20px" }}>
                <Logo />
                <p
                  style={{
                    fontSize: "clamp(13px, 2vw, 14px)",
                    color: B.text3,
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.6,
                    maxWidth: "100%",
                    marginTop: "16px",
                    marginBottom: "20px",
                  }}
                >
                  Building digital solutions that drive results for students, professionals, and businesses worldwide.
                </p>
              </div>
              <SocialLinks />
              <TrustBadges />
            </div>

            {/* Footer Columns */}
            <FooterColumn title="Company" links={FOOTER_LINKS.company} delay={100} />
            <FooterColumn title="Services" links={FOOTER_LINKS.services} delay={150} />
            <FooterColumn title="Support" links={FOOTER_LINKS.support} delay={200} />
            <FooterColumn title="Resources" links={FOOTER_LINKS.resources} delay={250} />
          </div>

          {/* Contact Info - Below grid on desktop, integrated on mobile via CSS */}
          <div style={{ marginBottom: "clamp(32px, 5vw, 48px)" }} className="footer-contact">
            <ContactInfo />
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              paddingTop: "clamp(24px, 4vh, 32px)",
              borderTop: `1px solid ${B.blue[100]}60`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <QuickLinks />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(12px, 2vw, 13px)",
                  color: B.text4,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                © {currentYear} NextGen IT Solution. All rights reserved.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <a
                  href="/privacy"
                  style={{
                    fontSize: "clamp(11px, 1.5vw, 12px)",
                    color: B.text4,
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = B.blue[500])}
                  onMouseLeave={(e) => (e.currentTarget.style.color = B.text4)}
                >
                  Privacy Policy
                </a>
                <span style={{ color: B.text4 }}>•</span>
                <a
                  href="/terms"
                  style={{
                    fontSize: "clamp(11px, 1.5vw, 12px)",
                    color: B.text4,
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = B.blue[500])}
                  onMouseLeave={(e) => (e.currentTarget.style.color = B.text4)}
                >
                  Terms of Service
                </a>
                <span style={{ color: B.text4 }}>•</span>
                <a
                  href="/cookies"
                  style={{
                    fontSize: "clamp(11px, 1.5vw, 12px)",
                    color: B.text4,
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = B.blue[500])}
                  onMouseLeave={(e) => (e.currentTarget.style.color = B.text4)}
                >
                  Cookie Policy
                </a>
              </div>
              <p
                style={{
                  fontSize: "clamp(10px, 1.5vw, 11px)",
                  color: B.text4,
                  fontFamily: "'DM Sans', sans-serif",
                  marginTop: "8px",
                }}
              >
                Crafted with 💙 for the modern web | <span role="img" aria-label="India">🇮🇳</span> Made in India
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Responsive Styles */}
      <style>{`
        /* Tablet and Mobile Responsive */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
          .footer-brand {
            grid-column: span 2 !important;
          }
          .footer-contact {
            display: block !important;
          }
        }

        /* Desktop - Hide contact from grid and show separately */
        @media (min-width: 1025px) {
          .footer-contact {
            display: none !important;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            gap: 28px !important;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .footer-grid {
            gap: 24px !important;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .footer-grid {
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;