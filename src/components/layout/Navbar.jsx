import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Code,
  Palette,
  Briefcase,
  Headphones,
} from "lucide-react";
import logo from "../../assets/logo.png";

/* ═══════════════════════════════════════════════════════════════════════════
   CONFIGURATION & CONSTANTS
   ═══════════════════════════════════════════════════════════════════════════ */
const CONFIG = {
  TOP_BAR_HEIGHT: 40,
  NAVBAR_HEIGHT: 72,
  SCROLL_THRESHOLD: 20,
  MOBILE_BREAKPOINT: 1024,
  TABLET_BREAKPOINT: 768,
  DROPDOWN_CLOSE_DELAY: 150,
  OBSERVER_ROOT_MARGIN: "-50% 0px -40% 0px",
  CONTACT: {
    PHONE: "+91 12345 67890",
    EMAIL: "hello@nextgenitsolution.com",
    EMAIL_SHORT: "hello@nextgen.in",
    LOCATION: "India",
    HOURS: "Mon – Sat, 9AM – 7PM",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN TOKENS
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
    bounce: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICES DATA
   ═══════════════════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    category: "Development",
    icon: Code,
    items: [
      { name: "Web Development", desc: "MERN stack apps", link: "/services/web-development" },
      { name: "E-commerce", desc: "Online store solutions", link: "/services/ecommerce" },
      { name: "Custom Software", desc: "Business systems", link: "/services/custom-software" },
      { name: "API Development", desc: "Secure backend APIs", link: "/services/api-development" },
    ],
  },
  {
    category: "Design",
    icon: Palette,
    items: [
      { name: "UI/UX Design", desc: "Modern interfaces", link: "/services/ui-ux-design" },
      { name: "Landing Pages", desc: "High conversion pages", link: "/services/landing-pages" },
      { name: "Website Redesign", desc: "Upgrade your site", link: "/services/redesign" },
    ],
  },
  {
    category: "Career",
    icon: Briefcase,
    items: [
      { name: "ATS Resume", desc: "Job-ready resume", link: "/services/ats-resume" },
      { name: "Portfolio Website", desc: "Personal branding", link: "/services/portfolio" },
      { name: "College Projects", desc: "Final year solutions", link: "/services/projects" },
    ],
  },
  {
    category: "Support",
    icon: Headphones,
    items: [
      { name: "Maintenance", desc: "Ongoing support", link: "/services/maintenance" },
      { name: "Performance", desc: "Speed optimization", link: "/services/performance" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   PROFESSIONAL SCROLL HANDLER
   ═══════════════════════════════════════════════════════════════════════════ */
const scrollToElement = (href, setMobileOpen = null) => {
  if (!href || !href.startsWith("#")) {
    console.warn(`Invalid href: ${href}`);
    return false;
  }

  const element = document.querySelector(href);
  if (!element) {
    console.warn(`Element not found: ${href}`);
    return false;
  }

  const yOffset = -(CONFIG.NAVBAR_HEIGHT + CONFIG.TOP_BAR_HEIGHT);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });

  if (setMobileOpen && typeof setMobileOpen === "function") {
    setMobileOpen(false);
  }

  return true;
};

/* ═══════════════════════════════════════════════════════════════════════════
   OPTIMIZED DEBOUNCE FUNCTION
   ═══════════════════════════════════════════════════════════════════════════ */
const debounce = (fn, delay = 100) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

/* ═══════════════════════════════════════════════════════════════════════════
   SCROLL LOCK (FIXED - NO ANDROID ISSUES)
   ═══════════════════════════════════════════════════════════════════════════ */
const preventBodyScroll = (lock) => {
  if (lock) {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }
};

/* ═══════════════════════════════════════════════════════════════════════════
   GLOBAL STYLES (OPTIMIZED)
   ═══════════════════════════════════════════════════════════════════════════ */
const GlobalStyles = () => (
  <style>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html {
      scroll-behavior: smooth;
    }
    
    /* Animations */
    @keyframes nSlideDown {
      from { opacity: 0; transform: translateY(-16px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes nFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes nSlideRight {
      from { opacity: 0; transform: translateX(-16px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes nMenuIn {
      from { opacity: 0; transform: translateY(-10px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes nOverlayIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes nPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
      50% { box-shadow: 0 0 0 5px rgba(16, 185, 129, 0); }
    }
    @keyframes nDotPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    @keyframes nDropdownIn {
      from { opacity: 0; transform: translateX(-50%) translateY(-10px) scale(0.97); }
      to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
    }

    /* Performance Optimizations */
    .navbar-main,
    .nav-desktop-links,
    .services-dropdown-trigger {
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Custom scrollbar for mobile menu */
    .nav-mobile-panel::-webkit-scrollbar {
      width: 4px;
    }
    .nav-mobile-panel::-webkit-scrollbar-track {
      background: #F1F5F9;
      border-radius: 4px;
    }
    .nav-mobile-panel::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 4px;
    }
    
    /* Section scroll margin */
    section, 
    #hero, 
    #services, 
    #work, 
    #contact, 
    #insights {
      scroll-margin-top: 112px !important;
    }
    
    /* Reduced motion preference */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      html {
        scroll-behavior: auto !important;
      }
    }

    /* Prevent layout shift */
    .no-layout-shift {
      contain: layout style paint;
    }
  `}</style>
);

/* ═══════════════════════════════════════════════════════════════════════════
   BRAND COMPONENT (IMPROVED SCALING)
   ═══════════════════════════════════════════════════════════════════════════ */
const Brand = ({ compact = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: compact ? "6px" : "clamp(8px, 2vw, 11px)",
        opacity: imageLoaded ? 1 : 0,
        transition: "opacity 0.3s ease",
        flexShrink: 0,
      }}
    >
      {!imageError ? (
        <img
          src={logo}
          alt="NextGen IT Solution Logo"
          draggable={false}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{
            height: compact 
              ? "clamp(32px, 8vw, 40px)" 
              : "clamp(45px, 8vw, 65px)",
            width: "auto",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
      ) : (
        <div
          style={{
            height: compact ? "clamp(32px, 8vw, 40px)" : "clamp(45px, 8vw, 65px)",
            width: compact ? "clamp(32px, 8vw, 40px)" : "clamp(45px, 8vw, 65px)",
            background: `linear-gradient(135deg, ${B.blue[500]}, ${B.blue[700]})`,
            borderRadius: B.r.md,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ 
            color: B.white, 
            fontWeight: 700, 
            fontSize: compact ? "clamp(14px, 4vw, 16px)" : "clamp(18px, 5vw, 24px)" 
          }}>
            N
          </span>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2, gap: "2px" }}>
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
        {!compact && (
          <span
            style={{
              fontSize: "clamp(7px, 2vw, 9px)",
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              color: B.text4,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            IT Solution
          </span>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   DESKTOP NAV LINK
   ═══════════════════════════════════════════════════════════════════════════ */
const NavLink = ({ label, href, isActive, delay, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      if (onClick) onClick();
      scrollToElement(href);
    },
    [href, onClick]
  );

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "8px clamp(12px, 1.5vw, 18px)",
        borderRadius: B.r.full,
        fontSize: "clamp(12px, 1.2vw, 13.5px)",
        fontWeight: isActive ? 700 : 500,
        color: isActive ? B.blue[600] : hovered ? B.blue[600] : B.text3,
        textDecoration: "none",
        fontFamily: "'DM Sans', sans-serif",
        letterSpacing: "0.01em",
        background: isActive || hovered ? `${B.blue[500]}08` : "transparent",
        transition: B.transition.default,
        transform: hovered && !isActive ? "translateY(-1px)" : "none",
        opacity: 1,
        animation: `nFadeIn 0.45s ease ${delay}ms both`,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {label}
      {isActive && (
        <span
          style={{
            position: "absolute",
            bottom: "1px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "18px",
            height: "2px",
            borderRadius: "1px",
            background: `linear-gradient(90deg, ${B.blue[400]}, ${B.blue[600]})`,
          }}
        />
      )}
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICES DROPDOWN (IMPROVED RESPONSIVE)
   ═══════════════════════════════════════════════════════════════════════════ */
const ServicesDropdown = ({ isActive, onClick, delay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") closeDropdown();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, closeDropdown]);

  const handleServiceClick = useCallback(
    (e, link) => {
      e.preventDefault();
      e.stopPropagation();
      closeDropdown();
      setTimeout(() => {
        navigate(link);
      }, 100);
    },
    [closeDropdown, navigate]
  );

  const handleContactClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDropdown();
      setTimeout(() => {
        scrollToElement("#contact");
      }, 100);
    },
    [closeDropdown]
  );

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        data-active={isActive || undefined}
        className="services-dropdown-trigger"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "8px clamp(12px, 1.5vw, 18px)",
          borderRadius: B.r.full,
          fontSize: "clamp(12px, 1.2vw, 13.5px)",
          fontWeight: isActive ? 700 : 500,
          color: isActive ? B.blue[600] : B.text3,
          background: isActive ? `${B.blue[500]}08` : "transparent",
          transition: B.transition.default,
          cursor: "pointer",
          border: "none",
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.01em",
          opacity: 1,
          animation: `nFadeIn 0.45s ease ${delay}ms both`,
          whiteSpace: "nowrap",
        }}
      >
        Services
        <ChevronDown
          size={14}
          style={{
            transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(720px, 85vw)",
            maxWidth: "720px",
            background: B.surface,
            borderRadius: B.r["2xl"],
            boxShadow: B.shadow["2xl"],
            border: `1px solid ${B.blue[200]}30`,
            overflow: "hidden",
            zIndex: 1000,
            animation: "nDropdownIn 0.25s cubic-bezier(0.22, 1, 0.36, 1) both",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1px",
              background: `${B.blue[200]}30`,
            }}
          >
            {SERVICES.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.category}
                  style={{
                    background: B.surface,
                    padding: "clamp(16px, 3vw, 20px) clamp(12px, 2vw, 16px)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "16px",
                      paddingBottom: "12px",
                      borderBottom: `2px solid ${B.blue[100]}`,
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: B.r.sm,
                        background: `${B.blue[500]}10`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} color={B.blue[600]} />
                    </div>
                    <h3
                      style={{
                        fontSize: "clamp(13px, 2.5vw, 14px)",
                        fontWeight: 700,
                        color: B.text1,
                        margin: 0,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {category.category}
                    </h3>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {category.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.link}
                        onClick={(e) => handleServiceClick(e, item.link)}
                        style={{
                          display: "block",
                          padding: "8px 8px",
                          borderRadius: B.r.md,
                          textDecoration: "none",
                          transition: B.transition.default,
                          cursor: "pointer",
                          minHeight: "44px", // Better touch target
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = B.blue[50];
                          e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "4px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "clamp(12px, 2vw, 13px)",
                              fontWeight: 600,
                              color: B.text2,
                              fontFamily: "'DM Sans', sans-serif",
                            }}
                          >
                            {item.name}
                          </span>
                          <ArrowRight size={12} color={B.text4} />
                        </div>
                        <p
                          style={{
                            fontSize: "clamp(10px, 1.8vw, 11px)",
                            color: B.text4,
                            margin: 0,
                            fontFamily: "'DM Sans', sans-serif",
                            lineHeight: 1.4,
                          }}
                        >
                          {item.desc}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              padding: "clamp(12px, 2vw, 14px) clamp(16px, 3vw, 20px)",
              background: B.blue[50],
              borderTop: `1px solid ${B.blue[200]}20`,
              textAlign: "center",
            }}
          >
            <a
              href="#contact"
              onClick={handleContactClick}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "clamp(11px, 2vw, 12px)",
                fontWeight: 600,
                color: B.blue[600],
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                transition: "gap 0.2s ease",
                minHeight: "44px",
                padding: "8px 12px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.gap = "12px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.gap = "8px";
              }}
            >
              Need a custom solution? Let&apos;s talk
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE SERVICES SECTION (IMPROVED TOUCH TARGETS)
   ═══════════════════════════════════════════════════════════════════════════ */
const MobileServicesSection = ({ delay, activeSection, onServiceClick }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const navigate = useNavigate();

  const toggleCategory = () => {
    setOpenCategory(openCategory === "services" ? null : "services");
  };

  const handleServiceClick = (e, link) => {
    e.preventDefault();
    navigate(link);
    onServiceClick?.();
  };

  return (
    <div
      style={{
        opacity: 0,
        animation: `nSlideRight 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`,
      }}
    >
      <div
        onClick={toggleCategory}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 18px",
          borderRadius: B.r.lg,
          fontSize: "15px",
          fontWeight: activeSection === "#services" ? 700 : 500,
          color: activeSection === "#services" ? B.blue[600] : B.text2,
          background: activeSection === "#services" ? `${B.blue[500]}08` : "transparent",
          borderLeft:
            activeSection === "#services" ? `3px solid ${B.blue[500]}` : "3px solid transparent",
          cursor: "pointer",
          transition: B.transition.default,
          minHeight: "52px", // Better touch target
        }}
      >
        <span>Services</span>
        <ChevronDown
          size={16}
          style={{
            transition: "transform 0.3s ease",
            transform: openCategory === "services" ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>

      {openCategory === "services" && (
        <div
          style={{
            marginLeft: "12px",
            marginRight: "12px",
            marginTop: "4px",
            marginBottom: "8px",
            padding: "8px",
            background: B.blue[50],
            borderRadius: B.r.md,
            animation: "nFadeIn 0.2s ease both",
          }}
        >
          {SERVICES.map((category) => (
            <div key={category.category} style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 12px",
                  borderBottom: `1px solid ${B.blue[200]}`,
                  marginBottom: "8px",
                }}
              >
                <category.icon size={16} color={B.blue[600]} />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: B.text1,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {category.category}
                </span>
              </div>
              {category.items.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={(e) => handleServiceClick(e, item.link)}
                  style={{
                    display: "block",
                    padding: "12px 12px", // Increased touch target
                    textDecoration: "none",
                    borderRadius: B.r.sm,
                    transition: B.transition.default,
                    cursor: "pointer",
                    minHeight: "48px", // Better touch target
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = B.blue[100];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: B.text2,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.name}
                    </span>
                    <ArrowRight size={10} color={B.text4} />
                  </div>
                  <p
                    style={{
                      fontSize: "10px",
                      color: B.text4,
                      margin: "4px 0 0 0",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   CTA BUTTON
   ═══════════════════════════════════════════════════════════════════════════ */
const CTAButton = ({ href, label, onClick, delay, fullWidth = false, variant = "primary" }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      if (onClick) onClick();
      scrollToElement(href);
    },
    [href, onClick]
  );

  const getButtonStyles = () => {
    if (variant === "secondary") {
      return {
        background: "transparent",
        border: `2px solid ${B.blue[500]}`,
        color: B.blue[600],
        boxShadow: "none",
      };
    }
    return {
      background: `linear-gradient(135deg, ${B.blue[500]} 0%, ${B.blue[700]} 100%)`,
      color: B.white,
      boxShadow: hovered
        ? `0 8px 28px ${B.blue[500]}35, inset 0 1px 0 rgba(255,255,255,0.2)`
        : `0 2px 14px ${B.blue[500]}25, inset 0 1px 0 rgba(255,255,255,0.2)`,
    };
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "clamp(8px, 2vw, 10px) clamp(16px, 4vw, 24px)",
        borderRadius: B.r.full,
        width: fullWidth ? "100%" : "auto",
        fontSize: "clamp(12px, 1.2vw, 13.5px)",
        fontWeight: 700,
        textDecoration: "none",
        fontFamily: "'DM Sans', sans-serif",
        letterSpacing: "0.01em",
        transform: hovered ? "translateY(-2px)" : "none",
        transition: B.transition.default,
        cursor: "pointer",
        opacity: 1,
        animation: `nFadeIn 0.45s ease ${delay}ms both`,
        whiteSpace: "nowrap",
        minHeight: "44px", // Better touch target
        ...getButtonStyles(),
      }}
    >
      {label}
      <ArrowRight size={14} style={{ transition: "transform 0.2s ease" }} />
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE MENU LINK (IMPROVED TOUCH TARGETS)
   ═══════════════════════════════════════════════════════════════════════════ */
const MobileLink = ({ label, href, isActive, delay, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 18px",
        borderRadius: B.r.lg,
        fontSize: "15px",
        fontWeight: isActive ? 700 : 500,
        color: isActive ? B.blue[700] : hovered ? B.blue[600] : B.text2,
        textDecoration: "none",
        fontFamily: "'DM Sans', sans-serif",
        background: isActive || hovered ? `${B.blue[500]}08` : "transparent",
        borderLeft: isActive
          ? `3px solid ${B.blue[500]}`
          : hovered
          ? `3px solid ${B.blue[300]}`
          : "3px solid transparent",
        transition: B.transition.default,
        cursor: "pointer",
        opacity: 0,
        animation: `nSlideRight 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`,
        minHeight: "52px", // Better touch target
      }}
    >
      <span>{label}</span>
      {isActive && (
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: B.blue[500],
            flexShrink: 0,
          }}
        />
      )}
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   TOP BAR (IMPROVED VISIBILITY & RESPONSIVE)
   ═══════════════════════════════════════════════════════════════════════════ */
const TopBar = ({ mounted }) => {
  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToElement("#contact");
  };

  return (
    <div
      className="topbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 51,
        height: `${CONFIG.TOP_BAR_HEIGHT}px`,
        background: `linear-gradient(135deg, ${B.blue[700]} 0%, ${B.blue[800]} 50%, ${B.blue[900]} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        opacity: mounted ? 1 : 0,
        animation: mounted ? "nSlideDown 0.5s cubic-bezier(0.22, 1, 0.36, 1) both" : "none",
        padding: "0 clamp(8px, 4vw, 24px)",
        gap: "16px",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          pointerEvents: "none",
        }}
      />

      {/* Left Section - Contact Info */}
      <div
        className="topbar-left"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(8px, 2vw, 20px)",
          position: "relative",
          zIndex: 1,
          flexWrap: "wrap",
        }}
      >
        <a
          href={`tel:${CONFIG.CONTACT.PHONE.replace(/\s/g, "")}`}
          className="topbar-link"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "clamp(10px, 1.2vw, 11.5px)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif",
            transition: "color 0.2s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = B.white;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.85)";
          }}
        >
          <Phone size={11} strokeWidth={2} />
          <span className="topbar-text">{CONFIG.CONTACT.PHONE}</span>
        </a>

        <span style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.2)" }} />

        <a
          href={`mailto:${CONFIG.CONTACT.EMAIL}`}
          className="topbar-link"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "clamp(10px, 1.2vw, 11.5px)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif",
            transition: "color 0.2s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = B.white;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.85)";
          }}
        >
          <Mail size={11} strokeWidth={2} />
          <span className="topbar-text">{CONFIG.CONTACT.EMAIL}</span>
        </a>

        <span style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.2)" }} />

        <span
          className="topbar-location"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "clamp(10px, 1.2vw, 11.5px)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'DM Sans', sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          <MapPin size={11} strokeWidth={2} />
          {CONFIG.CONTACT.LOCATION}
        </span>
      </div>

      {/* Center Section - Tagline */}
      <div
        className="topbar-center"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: B.emerald[400],
            animation: "nDotPulse 2s ease-in-out infinite",
            flexShrink: 0,
          }}
        />
        <span
          className="topbar-tagline"
          style={{
            fontSize: "clamp(9px, 1.2vw, 11.5px)",
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Accepting new projects — Let&apos;s build something great
        </span>
      </div>

      {/* Right Section - Hours & CTA */}
      <div
        className="topbar-right"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(8px, 2vw, 16px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          className="topbar-hours"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "clamp(10px, 1.2vw, 11.5px)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'DM Sans', sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          <Clock size={11} strokeWidth={2} />
          {CONFIG.CONTACT.HOURS}
        </span>

        <a
          href="#contact"
          onClick={handleContactClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 14px",
            borderRadius: B.r.full,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.15)",
            fontSize: "clamp(10px, 1.2vw, 11px)",
            fontWeight: 700,
            color: B.white,
            textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.03em",
            transition: B.transition.default,
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
          }}
        >
          Free Quote <ArrowRight size={10} />
        </a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN NAVBAR COMPONENT - FULLY RESPONSIVE
   ═══════════════════════════════════════════════════════════════════════════ */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [mounted, setMounted] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrolled(window.scrollY > CONFIG.SCROLL_THRESHOLD);
    }, 10);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Improved IntersectionObserver
  useEffect(() => {
    const sections = [
      { id: "hero", href: "#hero" },
      { id: "services", href: "#services" },
      { id: "work", href: "#work" },
      { id: "contact", href: "#contact" },
      { id: "insights", href: "#insights" },
    ];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection) {
          setActiveSection(`#${visibleSection}`);
        }
      },
      {
        rootMargin: CONFIG.OBSERVER_ROOT_MARGIN,
        threshold: [0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Fallback scroll-based detection
  useEffect(() => {
    const handleScrollDetection = () => {
      const sections = ["hero", "services", "work", "contact", "insights"];
      let current = "hero";
      
      const scrollPosition = window.scrollY + CONFIG.NAVBAR_HEIGHT + CONFIG.TOP_BAR_HEIGHT + 50;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const element = document.getElementById(id);
        
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            current = id;
            break;
          }
        }
      }
      
      setActiveSection(`#${current}`);
    };
    
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScrollDetection();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    handleScrollDetection();
    
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile scroll lock (improved)
  useEffect(() => {
    if (mobileOpen) {
      preventBodyScroll(true);
    } else {
      preventBodyScroll(false);
    }
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      preventBodyScroll(false);
    };
  }, []);

  // Resize handler (prevents layout shift)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= CONFIG.MOBILE_BREAKPOINT) {
        setMobileOpen(false);
        preventBodyScroll(false);
      }
    };

    window.addEventListener("resize", debounce(handleResize, 150));
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMobileNav = (href) => (e) => {
    e.preventDefault();
    scrollToElement(href, setMobileOpen);
  };

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    scrollToElement(href, setMobileOpen);
  }, []);

  return (
    <>
      <GlobalStyles />

      <TopBar mounted={mounted} />

      <nav
        aria-label="Main navigation"
        className="navbar-main no-layout-shift"
        style={{
          position: "fixed",
          top: `${CONFIG.TOP_BAR_HEIGHT}px`,
          left: 0,
          right: 0,
          zIndex: 50,
          background: B.surface,
          borderBottom: scrolled
            ? `1px solid ${B.blue[200]}40`
            : `1px solid ${B.blue[100]}30`,
          boxShadow: scrolled ? B.shadow.md : "none",
          transition: "border-bottom 0.35s ease, box-shadow 0.35s ease, top 0.3s ease",
          opacity: mounted ? 1 : 0,
          animation: mounted
            ? "nSlideDown 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 clamp(12px, 4vw, 32px)",
            height: `${CONFIG.NAVBAR_HEIGHT}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(8px, 2vw, 16px)",
          }}
        >
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            style={{ textDecoration: "none", flexShrink: 0 }}
            aria-label="NextGen IT Solution — Home"
          >
            <Brand compact={false} />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div
            className="nav-desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(2px, 0.5vw, 8px)",
              flexWrap: "nowrap",
            }}
          >
            <NavLink
              label="Home"
              href="#hero"
              isActive={activeSection === "#hero"}
              delay={55}
              onClick={() => setMobileOpen(false)}
            />

            <ServicesDropdown
              isActive={activeSection === "#services"}
              onClick={() => {
                scrollToElement("#services");
                setMobileOpen(false);
              }}
              delay={110}
            />

            <NavLink
              label="Work"
              href="#work"
              isActive={activeSection === "#work"}
              delay={165}
              onClick={() => setMobileOpen(false)}
            />

            <NavLink
              label="Contact"
              href="#contact"
              isActive={activeSection === "#contact"}
              delay={220}
              onClick={() => setMobileOpen(false)}
            />

            <NavLink
              label="Insights"
              href="#insights"
              isActive={activeSection === "#insights"}
              delay={275}
              onClick={() => setMobileOpen(false)}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 2vw, 12px)" }}>
            <div
              className="nav-desktop-pill"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                padding: "6px 14px 6px 10px",
                borderRadius: B.r.full,
                background: `${B.emerald[500]}08`,
                border: `1px solid ${B.emerald[500]}15`,
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: B.emerald[500],
                  animation: "nPulse 2.5s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "clamp(10px, 1.2vw, 11px)",
                  fontWeight: 600,
                  color: B.emerald[500],
                  fontFamily: "'DM Sans', sans-serif",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.01em",
                }}
              >
                Available Now
              </span>
            </div>

            <div className="nav-desktop-cta">
              <CTAButton
                href="#contact"
                label="Get Started"
                onClick={() => setMobileOpen(false)}
                delay={330}
              />
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="nav-mobile-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: B.r.lg,
                border: `1px solid ${B.blue[200]}50`,
                background: B.surface,
                cursor: "pointer",
                transition: B.transition.default,
                boxShadow: B.shadow.xs,
                outline: "none",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = B.blue[50];
                e.currentTarget.style.borderColor = B.blue[300];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = B.surface;
                e.currentTarget.style.borderColor = `${B.blue[200]}50`;
              }}
            >
              {mobileOpen ? (
                <X size={20} color={B.text2} strokeWidth={2.2} />
              ) : (
                <Menu size={20} color={B.text2} strokeWidth={2.2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              top: `${CONFIG.TOP_BAR_HEIGHT + CONFIG.NAVBAR_HEIGHT}px`,
              zIndex: 45,
              background: "rgba(11,17,32,0.5)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              animation: "nOverlayIn 0.2s ease both",
            }}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="nav-mobile-panel"
            style={{
              position: "fixed",
              top: `calc(${CONFIG.TOP_BAR_HEIGHT + CONFIG.NAVBAR_HEIGHT}px + 8px)`,
              left: "clamp(12px, 4vw, 24px)",
              right: "clamp(12px, 4vw, 24px)",
              zIndex: 46,
              borderRadius: B.r["2xl"],
              background: B.surface,
              border: `1px solid ${B.blue[200]}35`,
              boxShadow: B.shadow["2xl"],
              animation: "nMenuIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
              overflow: "hidden",
              maxHeight: "calc(100dvh - 140px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                padding: "16px 18px 12px",
                borderBottom: `1px solid ${B.blue[100]}40`,
              }}
            >
              <p
                className="mobile-tagline"
                style={{
                  margin: "8px 0 0 0",
                  fontSize: "clamp(11px, 3vw, 12px)",
                  color: B.text4,
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.5,
                }}
              >
                Building digital solutions that drive results.
              </p>
            </div>

            <div
              style={{
                padding: "6px 8px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                flex: 1,
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <MobileLink
                label="Home"
                href="#hero"
                isActive={activeSection === "#hero"}
                delay={40}
                onClick={handleMobileNav("#hero")}
              />

              <MobileServicesSection
                delay={85}
                activeSection={activeSection}
                onServiceClick={() => setMobileOpen(false)}
              />

              <MobileLink
                label="Work"
                href="#work"
                isActive={activeSection === "#work"}
                delay={130}
                onClick={handleMobileNav("#work")}
              />

              <MobileLink
                label="Contact"
                href="#contact"
                isActive={activeSection === "#contact"}
                delay={175}
                onClick={handleMobileNav("#contact")}
              />

              <MobileLink
                label="Insights"
                href="#insights"
                isActive={activeSection === "#insights"}
                delay={220}
                onClick={handleMobileNav("#insights")}
              />
            </div>

            <div
              style={{
                margin: "0 12px",
                padding: "10px 14px",
                borderRadius: B.r.lg,
                background: `${B.emerald[500]}06`,
                border: `1px solid ${B.emerald[500]}12`,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                opacity: 0,
                animation: `nFadeIn 0.3s ease 265ms both`,
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: B.emerald[500],
                  animation: "nPulse 2.5s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "clamp(11px, 3vw, 12px)",
                  fontWeight: 600,
                  color: B.emerald[500],
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Currently accepting new projects
              </span>
            </div>

            <div style={{ padding: "8px" }}>
              <CTAButton
                href="#contact"
                label="Get Started"
                onClick={() => setMobileOpen(false)}
                delay={300}
                fullWidth
              />
            </div>

            <div
              className="mobile-contact-footer"
              style={{
                padding: "12px 18px 16px",
                borderTop: `1px solid ${B.blue[100]}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
                opacity: 0,
                animation: `nFadeIn 0.3s ease 350ms both`,
              }}
            >
              <a
                href={`tel:${CONFIG.CONTACT.PHONE.replace(/\s/g, "")}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "clamp(11px, 3vw, 12px)",
                  color: B.text4,
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.2s ease",
                  minHeight: "40px",
                  padding: "4px 8px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = B.blue[500];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = B.text4;
                }}
              >
                <Phone size={12} />
                <span className="mobile-contact-text">{CONFIG.CONTACT.PHONE}</span>
              </a>
              <span
                className="mobile-contact-divider"
                style={{
                  width: "1px",
                  height: "12px",
                  background: B.blue[200],
                  opacity: 0.5,
                }}
              />
              <a
                href={`mailto:${CONFIG.CONTACT.EMAIL_SHORT}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "clamp(11px, 3vw, 12px)",
                  color: B.text4,
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.2s ease",
                  minHeight: "40px",
                  padding: "4px 8px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = B.blue[500];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = B.text4;
                }}
              >
                <Mail size={12} />
                <span className="mobile-contact-text">{CONFIG.CONTACT.EMAIL_SHORT}</span>
              </a>
            </div>
          </div>
        </>
      )}

      {/* CLEAN RESPONSIVE BREAKPOINTS */}
      <style>{`
        /* Desktop Large (1400px+) */
        @media (min-width: 1400px) {
          .topbar-left, .topbar-right { display: flex !important; }
          .topbar-center { display: flex !important; }
          .nav-desktop-links { display: flex !important; }
          .nav-desktop-cta { display: block !important; }
          .nav-desktop-pill { display: flex !important; }
          .nav-mobile-toggle { display: none !important; }
        }

        /* Desktop (1200px - 1399px) */
        @media (min-width: 1200px) and (max-width: 1399px) {
          .topbar-left { display: flex !important; }
          .topbar-right { display: flex !important; }
          .topbar-center { display: flex !important; }
          .nav-desktop-links { display: flex !important; }
          .nav-desktop-cta { display: block !important; }
          .nav-desktop-pill { display: flex !important; }
          .nav-mobile-toggle { display: none !important; }
        }

        /* Desktop Small (1024px - 1199px) */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .topbar-left, .topbar-right { display: flex !important; }
          .topbar-center { display: flex !important; }
          .nav-desktop-links { display: flex !important; gap: 0px !important; }
          .nav-desktop-cta { display: block !important; }
          .nav-desktop-pill { display: none !important; }
          .nav-mobile-toggle { display: none !important; }
        }

        /* Tablet Landscape (900px - 1023px) */
        @media (min-width: 900px) and (max-width: 1023px) {
          .topbar-left, .topbar-right { display: none !important; }
          .topbar-center { display: flex !important; }
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
          .nav-desktop-pill { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }

        /* Tablet Portrait (768px - 899px) */
        @media (min-width: 768px) and (max-width: 899px) {
          .topbar-left, .topbar-right { display: none !important; }
          .topbar-center { display: flex !important; }
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
          .nav-desktop-pill { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }

        /* Mobile Landscape (480px - 767px) */
        @media (min-width: 480px) and (max-width: 767px) {
          .topbar-left, .topbar-right { display: none !important; }
          .topbar-center { display: flex !important; }
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
          .nav-desktop-pill { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }

        /* Mobile Portrait (320px - 479px) */
        @media (max-width: 479px) {
          .topbar-left, .topbar-right { display: none !important; }
          .topbar-center { display: flex !important; }
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
          .nav-desktop-pill { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
          .mobile-contact-footer {
            flex-direction: column !important;
            gap: 8px !important;
          }
          .mobile-contact-divider {
            display: none !important;
          }
        }

        /* Extra Small (<320px) */
        @media (max-width: 319px) {
          .topbar-tagline {
            font-size: 8px !important;
          }
          .mobile-contact-text {
            font-size: 10px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;